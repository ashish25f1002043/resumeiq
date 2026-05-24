import {
  LayoutDashboard,
  Upload,
  FileSearch
} from "lucide-react"

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard"
  },
  {
    icon: Upload,
    label: "Upload Resume"
  },
  {
    icon: FileSearch,
    label: "Resume Match"
  }
]

const Sidebar = () => {
  return (
    <div className="
      hidden lg:flex
      flex-col
      justify-between
      w-[260px]
      min-h-screen
      border-r
      border-white/10
      bg-black/20
      backdrop-blur-2xl
      px-6
      py-8
    ">

      <div>

        <div className="mb-14">

          <h1 className="
            text-3xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          ">
            ATSPro
          </h1>

          <p className="text-slate-500 text-sm mt-2">
            AI Resume Intelligence
          </p>

        </div>

        <div className="space-y-3">

          {
            menuItems.map((item, index) => {

              const Icon = item.icon

              return (
                <button
                  key={index}
                  className="
                    w-full
                    flex
                    items-center
                    gap-4
                    px-4
                    py-4
                    rounded-2xl
                    text-slate-300
                    transition-all
                    duration-300
                    hover:bg-cyan-500/10
                    hover:text-white
                  "
                >

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.label}
                  </span>

                </button>
              )
            })
          }

        </div>

      </div>

      <div className="
        p-5
        rounded-3xl
        bg-gradient-to-br
        from-cyan-500/20
        to-blue-500/20
        border
        border-cyan-400/10
      ">

        <p className="text-sm text-slate-300 leading-6">
          Optimize resumes with AI-driven ATS analysis and smart job matching.
        </p>

      </div>

    </div>
  )
}

export default Sidebar