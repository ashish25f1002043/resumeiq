import { useState } from "react"
import axios from "axios"

const JDMatcher = ({ resumeText }) => {

  const [jd, setJd] = useState("")
  const [result, setResult] = useState(null)

  const handleMatch = async () => {

    const res = await axios.post("http://127.0.0.1:8000/match-jd", {
      resume_text: resumeText,
      job_description: jd
    })

    setResult(res.data)
  }

  return (
    <div className="mt-10 bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-cyan-400 text-xl font-bold mb-3">
        Job Description Matching
      </h2>

      <textarea
        className="w-full p-3 bg-slate-800 text-white rounded-lg"
        rows="5"
        placeholder="Paste Job Description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button
        onClick={handleMatch}
        className="mt-3 bg-cyan-500 px-4 py-2 rounded-lg text-black font-bold"
      >
        Match Resume
      </button>

      {result && (
        <div className="mt-5">

          <h3 className="text-green-400 text-lg">
            Match Score: {result.match_score}%
          </h3>

          <p className="text-white mt-2">
            <strong>Matched:</strong> {result.matched_skills.join(", ")}
          </p>

          <p className="text-red-400 mt-2">
            <strong>Missing:</strong> {result.missing_skills.join(", ")}
          </p>

        </div>
      )}

    </div>
  )
}

export default JDMatcher