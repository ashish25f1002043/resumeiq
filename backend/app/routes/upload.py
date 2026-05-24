from fastapi import APIRouter, UploadFile, File
import fitz

from app.utils.ats import (
    calculate_ats_score,
    extract_skills
)

from app.utils.analytics import (
    job_fit_percentage,
    recommend_roles,
    experience_level
)

router = APIRouter()


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    # READ PDF
    pdf_bytes = await file.read()

    doc = fitz.open(
        stream=pdf_bytes,
        filetype="pdf"
    )

    # EXTRACT TEXT
    text = ""

    for page in doc:
        text += page.get_text()

    # EXTRACT SKILLS
    skills = extract_skills(text)

    # CLEAN SKILLS
    clean_skills = [

        skill.strip().lower()

        for skill in skills
    ]

    # ATS SCORE
    score, matched, missing = calculate_ats_score(text)

    # JOB FIT %
    job_fit = job_fit_percentage(clean_skills)

    # JOB FIT CHART
    job_fit_chart = [

        {

            "role": role
                .replace(" Developer", "")
                .replace(" Engineer", "")
                .replace(" Analyst", ""),

            "value": value
        }

        for role, value in job_fit.items()
    ]

    # SKILL CATEGORIES
    skill_categories = {

        "Backend": [
            "python",
            "fastapi",
            "flask",
            "django",
            "node",
            "express"
        ],

        "Frontend": [
            "react",
            "redux",
            "html",
            "css",
            "javascript",
            "nextjs"
        ],

        "Database": [
            "mysql",
            "mongodb",
            "postgresql",
            "sql"
        ],

        "DevOps": [
            "docker",
            "aws",
            "git",
            "linux",
            "kubernetes"
        ]
    }

    # SKILL RADAR GRAPH
    skill_graph = []

    for category, skill_list in skill_categories.items():

        matched_count = 0

        for skill in skill_list:

            if skill in clean_skills:
                matched_count += 1

        percentage = int(
            (matched_count / len(skill_list)) * 100
        )

        skill_graph.append({

            "skill": category,

            "value": percentage
        })

    # ROLE RECOMMENDATIONS
    role_data = recommend_roles(job_fit)

    roles = [

        {
            "name": item["role"],
            "match": item["score"]
        }

        for item in role_data
    ]

    # EXPERIENCE LEVEL
    level = experience_level(
        score,
        len(clean_skills)
    )

    # AI INSIGHT
    if score >= 75:

        insight = (
            "Excellent resume with strong ATS optimization."
        )

    elif score >= 50:

        insight = (
            "Good resume but adding more projects and keywords can improve ATS score."
        )

    else:

        if len(clean_skills) == 0:

            insight = (
                "No major technical skills detected in the resume."
            )

        else:

            insight = (
                "Add more technical projects and relevant ATS keywords."
            )

    # FINAL RESPONSE
    return {

        "filename": file.filename,

        "text": text,

        "analysis": {

            "score": score,

            "strong_skills": matched,

            "missing_skills": missing,

            "job_fit": job_fit_chart,

            "skill_graph": skill_graph,

            "roles": roles,

            "experience_level": level,

            "insight": insight
        }
    }