ROLE_MAP = {

    "Backend Developer": [
        "python",
        "fastapi",
        "flask",
        "django",
        "node",
        "express"
    ],

    "Frontend Developer": [
        "react",
        "redux",
        "html",
        "css",
        "javascript",
        "nextjs"
    ],

    "Full Stack Developer": [
        "react",
        "node",
        "python",
        "mongodb",
        "mysql"
    ],

    "Data Analyst": [
        "sql",
        "excel",
        "python",
        "powerbi",
        "pandas"
    ],

    "DevOps Engineer": [
        "docker",
        "aws",
        "git",
        "linux",
        "kubernetes",
        "ci/cd"
    ]
}


def job_fit_percentage(skills):

    result = {}

    for role, req_skills in ROLE_MAP.items():

        matched = len(set(skills) & set(req_skills))

        total = len(req_skills)

        percentage = int((matched / total) * 100)

        result[role] = percentage

    return result


def recommend_roles(job_fit):

    recommendations = []

    for role, score in job_fit.items():

        if score >= 75:
            level = "Excellent Match"

        elif score >= 50:
            level = "Good Match"

        elif score >= 25:
            level = "Average Match"

        else:
            level = "Low Match"

        recommendations.append({

            "role": role,

            "score": score,

            "level": level
        })

    return sorted(
        recommendations,
        key=lambda x: x["score"],
        reverse=True
    )


def experience_level(score, skills_count):

    if score >= 75 and skills_count >= 8:
        return "Advanced"

    elif score >= 45 and skills_count >= 4:
        return "Intermediate"

    elif skills_count >= 2:
        return "Beginner"

    else:
        return "Non-Technical"