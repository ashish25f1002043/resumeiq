# 🤖 AI Resume Analyzer (Full Stack SaaS Project)

AI-powered Resume Analyzer that extracts resume data, calculates ATS score, and matches resumes with Job Descriptions using FastAPI + React.

---

## 🚀 Features

- 📄 Upload Resume (PDF Drag & Drop)
- 🤖 AI Resume Analysis (Gemini / Mock AI)
- 📊 ATS Score Calculation
- 🧠 Strong & Missing Skills Extraction
- 🎯 Job Description Matching System
- 📈 Modern Dashboard UI
- ⚡ FastAPI Backend with PDF Parsing
- 🎨 Clean SaaS-style UI (React + Tailwind)

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Recharts
- React Dropzone

### Backend
- FastAPI
- Python
- PyMuPDF
- Uvicorn
- CORS Middleware

### AI Layer
- Google Gemini API (or Mock AI fallback)

---

## 📂 Project Structure
ai-resume-analyzer/
│
├── backend/
│ ├── app/
│ │ ├── routes/
│ │ ├── services/
│ │ └── main.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── utils/
│
└── README.md

---

## ⚙️ Installation

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn pymupdf python-dotenv google-generativeai
uvicorn app.main:app --reload

## 🔌 API Endpoints

### POST /upload-resume

- Uploads PDF resume
- Extracts text using PyMuPDF
- Sends text to AI for analysis

### Response
```json
{
  "filename": "resume.pdf",
  "text": "extracted text",
  "analysis": "AI output"
}


## 📸 Screenshots

> Add project screenshots here after running the app

- Dashboard View
- Resume Upload Screen
- ATS Score Section
- JD Matching Output


## ⚡ How It Works

1. User uploads resume (PDF)
2. Backend extracts text using PyMuPDF
3. Text is sent to Gemini AI
4. AI analyzes:
   - Skills
   - ATS Score
   - Missing Skills
5. Frontend displays results in dashboard

## 🌐 Live Demo

Frontend: http://localhost:5174  
Backend: http://127.0.0.1:8000

## 🚀 Future Improvements

- Login/Signup System
- Save Resume History
- Download PDF Report
- Cloud Deployment (Vercel + Render)