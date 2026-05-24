const Navbar = () => {
  return (
    <div className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      px-6
      py-6
      rounded-3xl
      mb-8
    ">

      <h1 className="
        text-3xl
        md:text-4xl
        font-black
        tracking-tight
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
        bg-clip-text
        text-transparent
      ">
        ResumeIQ
      </h1>

      <p className="
        text-slate-400
        text-sm
        md:text-base
        mt-3
      ">
        AI Resume Screening & ATS Analysis
      </p>

      <div className="
        mt-4
        text-xs
        md:text-sm
        text-cyan-400
        bg-cyan-500/10
        border
        border-cyan-400/20
        px-4
        py-2
        rounded-full
      ">
        Smart Resume Evaluation System
      </div>

    </div>
  )
}

export default Navbar