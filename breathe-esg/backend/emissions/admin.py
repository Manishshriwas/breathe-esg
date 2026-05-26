from django.contrib import admin
from .models import Company, DataSource, EmissionRecord


admin.site.register(Company)
admin.site.register(DataSource)


@admin.register(EmissionRecord)
class EmissionRecordAdmin(admin.ModelAdmin):

    list_display = (
        'category',
        'amount',
        'unit',
        'status',
        'emission_value',
        'created_at'
    )

    list_filter = (
        'status',
        'category'
    )

    search_fields = (
        'category',
        'description'
    )