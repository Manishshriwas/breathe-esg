# DECISIONS

## CSV Chosen as Input Format

CSV files were selected because:
- easy to upload
- easy to parse
- commonly used in ESG reporting

---

# SQLite Chosen for Database

SQLite was used because:
- simple setup
- fast development
- lightweight for assignment scope

Production systems should use PostgreSQL.

---

# Simple Frontend Authentication

Frontend-only authentication was implemented using localStorage.

Reason:
- faster implementation
- enough for assignment demo
- avoided backend auth complexity

---

# React + Django Architecture

Frontend and backend were separated to simulate real-world architecture.

Benefits:
- scalable structure
- API-first design
- frontend/backend independence

---

# REST APIs Chosen

REST APIs were used for:
- upload
- record fetching
- approval actions

Reason:
- simple integration
- standard web architecture
- easy frontend communication

---

# Suspicious Record Workflow

Suspicious records are highlighted and require approval.

Reason:
- simulates analyst review workflow
- improves data validation visibility

---

# Tailwind CSS Chosen

Tailwind was used because:
- fast UI development
- clean responsive design
- easy component styling

---

# What Was Ignored?

The following were intentionally simplified:
- real authentication
- role-based access
- background processing
- advanced ESG analytics

Reason:
focus was placed on core ingestion workflow.

---

# Questions for Product Team

If this were a real product, I would ask:

- What defines a suspicious ESG record?
- Should uploads support Excel files?
- Should approvals require multiple reviewers?
- Should records support version history?
- What reporting/export formats are required?
- Should Scope 1/2/3 be automatic or manual?
