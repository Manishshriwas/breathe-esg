# TRADEOFFS

## No JWT Authentication

The application uses simple frontend authentication.

Reason:
- reduced complexity
- faster assignment delivery

Tradeoff:
- not production secure

---

# No PostgreSQL Production Database

SQLite was used instead of PostgreSQL.

Reason:
- easier setup
- faster development

Tradeoff:
- limited scalability

---

# No Background Processing

CSV processing happens synchronously.

Reason:
- assignment-scale datasets are small

Tradeoff:
- large files may slow requests

---

# No Advanced Audit Logging

The application does not store full edit history.

Reason:
- focused on core ingestion pipeline first

Tradeoff:
- limited compliance tracking

---

# No Role-Based Access Control

All authenticated users currently have the same permissions.

Reason:
- simplified workflow

Tradeoff:
- no admin/analyst separation

---

# No Advanced ESG Analytics

The dashboard focuses only on ingestion and approval.

Reason:
- prioritized upload and workflow functionality

Tradeoff:
- limited reporting insights
