import re

from app.utils.skills_db import SKILL_DB


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for category, skills in SKILL_DB.items():

        for skill in skills:

            # EXACT WORD MATCH
            pattern = r'\b' + re.escape(skill.lower()) + r'\b'

            if re.search(pattern, text):

                found_skills.append(
                    skill.lower()
                )

    # REMOVE DUPLICATES
    found_skills = list(set(found_skills))

    return found_skills


def calculate_ats_score(text):

    skills = extract_skills(text)

    all_skills = []

    for category_skills in SKILL_DB.values():

        all_skills.extend(category_skills)

    total_skills = len(all_skills)

    matched_skills = []

    missing_skills = []

    for skill in all_skills:

        if skill.lower() in skills:

            matched_skills.append(skill)

        else:

            missing_skills.append(skill)

    score = int(
        (len(matched_skills) / total_skills) * 100
    )

    return (
        score,
        matched_skills,
        missing_skills
    )