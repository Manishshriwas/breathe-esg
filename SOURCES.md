# SOURCES

## Source 1 — CSV Upload Files

### Research

Researched common ESG CSV export formats used in:
- sustainability reporting
- utility consumption tracking
- emissions monitoring

---

### What Was Learned

Real-world ESG files often contain:
- inconsistent units
- missing values
- formatting issues
- duplicate rows

---

### Sample Data Used

The sample CSV includes:

| Category | Example |
|---|---|
| Fuel | Diesel Generator |
| Electricity | Office Usage |
| Travel | Business Flight |

---

### Why This Structure?

The structure was kept simple to:
- demonstrate ingestion flow
- validate uploads
- display records in dashboard

---

### Real-World Risks

Production ESG files may contain:
- corrupted rows
- invalid formats
- inconsistent naming
- very large datasets

---

# Source 2 — Dashboard Review Workflow

### Research

Researched ESG analyst workflows where:
- uploaded records are reviewed
- suspicious entries require approval

---

### What Was Learned

Manual review is important because:
- ESG data may be inaccurate
- uploaded files may contain anomalies
- compliance requires validation

---

### Current Implementation

Suspicious rows are:
- highlighted visually
- manually approved through dashboard

---

### Real-World Challenges

Production systems may require:
- multiple approvers
- audit history
- approval comments
- escalation workflows

---

# Source 3 — REST API Architecture

### Research

Researched modern frontend/backend architecture using:
- React frontend
- Django REST backend

---

### What Was Learned

API-driven architecture improves:
- scalability
- frontend flexibility
- deployment separation

---

### Current APIs

| Endpoint | Purpose |
|---|---|
| GET /api/records/ | Fetch records |
| POST /api/upload/ | Upload CSV |
| PATCH /api/approve/:id/ | Approve record |

---

### Real-World Risks

Production APIs would require:
- authentication
- rate limiting
- validation
- monitoring
- error tracking
