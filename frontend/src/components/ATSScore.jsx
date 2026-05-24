import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts"

const ATSScore = ({ score = 75 }) => {

  const data = [
    {
      name: "ATS",
      value: score
    }
  ]

  return (
    <div className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-6
      rounded-3xl
    ">

      <h2 className="text-xl font-bold mb-4 text-cyan-400">
        ATS Score
      </h2>

      {/* FIXED CHART AREA */}
      <div className="h-[260px] w-full relative">

        <ResponsiveContainer width="100%" height="100%">

          <RadialBarChart
            innerRadius="75%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >

            <RadialBar
              dataKey="value"
              cornerRadius={20}
              fill="#06b6d4"
            />

          </RadialBarChart>

        </ResponsiveContainer>

        {/* ✅ CENTER TEXT FIX (OUTSIDE CHART) */}
        <div className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          flex-col
        ">
          <div className="text-4xl font-bold text-white">
            {score}%
          </div>

          <div className="text-xs text-slate-400 mt-1">
            ATS Score
          </div>
        </div>

      </div>

    </div>
  )
}

export default ATSScore