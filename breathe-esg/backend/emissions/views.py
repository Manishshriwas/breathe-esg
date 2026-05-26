import pandas as pd

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Company, DataSource, EmissionRecord


@api_view(['POST'])
def upload_csv(request):

    file = request.FILES.get('file')

    if not file:
        return Response({
            'error': 'No file uploaded'
        }, status=400)

    df = pd.read_csv(file)

    company, _ = Company.objects.get_or_create(
        name='Demo Company'
    )

    source = DataSource.objects.create(
        company=company,
        source_type='SAP'
    )

    for _, row in df.iterrows():

        amount = float(row['amount'])

        status = 'PENDING'

        if amount < 0:
            status = 'SUSPICIOUS'

        EmissionRecord.objects.create(
            company=company,
            source=source,
            category=row['category'],
            description=row['description'],
            amount=amount,
            unit=row['unit'],
            emission_value=amount * 0.5,
            status=status
        )

    return Response({
        'message': 'CSV uploaded successfully'
    })

@api_view(['GET'])
def get_records(request):

    records = EmissionRecord.objects.all().values()

    return Response(records)


@api_view(['PATCH'])
def approve_record(request, id):

    try:

        record = EmissionRecord.objects.get(id=id)

        record.status = 'APPROVED'

        record.save()

        return Response({
            'message': 'Record approved'
        })

    except EmissionRecord.DoesNotExist:

        return Response({
            'error': 'Record not found'
        }, status=404)