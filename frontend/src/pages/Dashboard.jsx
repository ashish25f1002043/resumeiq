import UploadBox from "../components/UploadBox"

const Dashboard = () => {

  return (
    <div className="w-full min-h-screen px-2 md:px-4 lg:px-6">

      {/* HERO SECTION */}
      <div className="w-full py-10">

        <h1 className="
          text-4xl
          md:text-6xl
          font-black
          leading-tight
          tracking-tight
        ">

          Professional Resume Analyzer

          <span className="
            block
            mt-2
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          ">
            ATS + Skill Intelligence
          </span>

        </h1>

        <p className="
          mt-6
          text-lg
          text-slate-400
          leading-8
          max-w-3xl
        ">
          Analyze resumes with intelligent ATS scoring, skill detection,
          job-role matching, missing skill insights, and recruiter-focused evaluation.
        </p>

      </div>

      {/* UPLOAD SECTION */}
      <div className="w-full mt-8">

        <UploadBox />

      </div>

    </div>
  )
}

export default Dashboard