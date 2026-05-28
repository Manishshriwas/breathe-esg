# MODEL

## Overview

The application stores ESG emission records uploaded through CSV files.

The current implementation focuses on:
- ESG data ingestion
- Record validation
- Approval workflow
- Source tracking basics

---

# Main Entity

## EmissionRecord

Fields:

| Field | Purpose |
|---|---|
| category | ESG category |
| description | Emission description |
| amount | Numeric emission value |
| unit | Unit of measurement |
| status | NORMAL / SUSPICIOUS / APPROVED |

---

# Why This Model?

A single model keeps the ingestion pipeline simple and fast for the assignment scope.

The goal was to:
- Quickly process uploaded CSV files
- Store normalized records
- Enable approval workflow
- Build a clean dashboard UI

---

# Multi-Tenancy

Current version supports a single organization.

Future multi-tenant support can be added using:

```python
Company
User
EmissionRecord
```

Each record would contain:

```python
company_id
```

This would isolate data between organizations.

---

# Scope 1 / 2 / 3 Categorization

Current implementation keeps categorization flexible using the category field.

Future implementation:

| Scope | Example |
|---|---|
| Scope 1 | Fuel combustion |
| Scope 2 | Electricity usage |
| Scope 3 | Business travel |

Can be implemented using:

```python
scope = models.CharField()
```

---

# Source-of-Truth Tracking

Current upload flow tracks records through uploaded CSV ingestion.

Future production-ready fields:

```python
source_name
uploaded_at
uploaded_by
edited_at
edited_by
```

This helps identify:
- where data came from
- when it was uploaded
- whether it was modified later

---

# Unit Normalization

The system stores:
- amount
- unit

Future improvements:
- automatic conversion
- standardized units
- validation rules

Example:

| Input | Standardized |
|---|---|
| kWh | energy |
| Liters | fuel |
| km | travel |

---

# Audit Trail

Current implementation does not store full history tracking.

Future audit trail support:

```python
created_at
updated_at
approved_by
approval_timestamp
```

Would allow:
- edit tracking
- rollback support
- compliance history

---

# Validation Logic

Records are marked suspicious based on predefined conditions.

Example:
- unusually high amount
- missing values
- invalid formats

Suspicious records require manual approval from dashboard users.

---

# Database Choice

SQLite was chosen because:
- fast local setup
- lightweight
- sufficient for assignment scope

Future production deployment should use PostgreSQL.
