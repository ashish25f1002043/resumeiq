import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def analyze_resume(resume_text):

    prompt = f"""
You are an ATS resume analyzer.

Return STRICT JSON only like this:

{{
  "score": 0-100,
  "strong_skills": [],
  "missing_skills": [],
  "suggestions": []
}}

Resume:
{resume_text}
"""

    try:
        response = client.chat.completions.create(
            model="llama-3.1-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a resume ATS expert."},
                {"role": "user", "content": prompt}
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return str(e)