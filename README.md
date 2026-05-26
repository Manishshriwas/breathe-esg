# Breathe ESG Dashboard

A full-stack ESG emissions dashboard built using React and Django.

The application allows users to:

- Upload ESG CSV files
- View emissions records
- Approve suspicious records
- Monitor ESG data through a dashboard
- Manage records using REST APIs

---

# Login Credentials

```text
Username: admin
Password: admin123
```

# Live Deployment

## Frontend

[https://your-vercel-url.vercel.app](https://breathe-esg-steel.vercel.app/login)

## Backend

[https://breathe-esg-yfrx.onrender.com](https://breathe-esg-yfrx.onrender.com)

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Django
- Django REST Framework
- Pandas

## Database

- SQLite

## Deployment

- Vercel
- Render

---

# Features

- CSV Upload System
- ESG Records Dashboard
- Approve Workflow
- Suspicious Record Highlighting
- REST APIs
- Route Protection
- Responsive UI
- Live Deployment

---

# Project Structure

```bash
breathe-esg/
│
├── backend/
│   ├── backend/
│   ├── emissions/
│   ├── manage.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── MODEL.md
├── DECISIONS.md
├── TRADEOFFS.md
├── SOURCES.md
├── README.md
```

---

# Backend Setup

## Clone Repository

```bash
[git clone https://github.com/Manishshriwas/breathe-esg.git](https://github.com/Manishshriwas/breathe-esg.git)
```

---

## Go to Project Folder

```bash
cd breathe-esg
```

---

## Create Virtual Environment

```bash
python3 -m venv venv
```

---

## Activate Virtual Environment

### Mac/Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Migrations

```bash
python manage.py migrate
```

---

## Create Superuser

```bash
python manage.py createsuperuser
```

---

## Start Backend Server

```bash
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

## Go to Frontend Folder

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Get Records

```http
GET /api/records/
```

---

## Upload CSV

```http
POST /api/upload/
```

---

## Approve Record

```http
PATCH /api/approve/<id>/
```

---

# Sample CSV Format

```csv
category,description,amount,unit
Fuel,Diesel Generator,500,Liters
Electricity,Office Usage,1200,kWh
Travel,Business Flight,300,km
```

---


---

# Deployment

## Frontend Deployment

Deployed using Vercel.

## Backend Deployment

Deployed using Render.

---

# Future Improvements

- PostgreSQL Integration
- JWT Authentication
- Multi-Tenancy Support
- Role-Based Access
- Audit Logging
- Advanced ESG Analytics
- File Version Tracking

---

# Author

Manish Shriwas
