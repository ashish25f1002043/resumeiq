from fastapi import APIRouter
from pydantic import BaseModel
import re

router = APIRouter()


class MatchRequest(BaseModel):
    resume_text: str
    job_description: str


def simple_match(resume, jd):

    resume = resume.lower()
    jd = jd.lower()

    resume_words = set(re.findall(r'\w+', resume))
    jd_words = set(re.findall(r'\w+', jd))

    if not jd_words:
        return 0, [], []

    matched = list(jd_words & resume_words)
    missing = list(jd_words - resume_words)

    score = int((len(matched) / len(jd_words)) * 100)

    return score, matched[:15], missing[:15]


@router.post("/match-jd")
def match_jd(data: MatchRequest):

    score, matched, missing = simple_match(
        data.resume_text,
        data.job_description
    )

    return {
        "match_score": score,
        "matched_skills": matched,
        "missing_skills": missing
    }