import { useEffect, useState } from "react"

import ATSScore from "./ATSScore"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts"

const AnalysisCard = ({ analysis }) => {

  const jobFitData = analysis?.job_fit || []

  const skillData = analysis?.skill_graph || []

  const roleData = analysis?.roles || []

  const [radarKey, setRadarKey] = useState(0)

  const [barKey, setBarKey] = useState(0)

  useEffect(() => {

    setRadarKey(prev => prev + 1)

    setBarKey(prev => prev + 1)

  }, [analysis])

  return (

    <div className="
      mt-6
      grid
      grid-cols-1
      lg:grid-cols-2
      2xl:grid-cols-3
      gap-6
      w-full
    ">

      {/* ATS SCORE */}
      <ATSScore score={analysis?.score || 0} />

      {/* EXPERIENCE */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-lg
          font-bold
          mb-4
          text-cyan-400
        ">
          Experience Level
        </h2>

        <div className="text-2xl font-bold">
          {analysis?.experience_level || "Beginner"}
        </div>

        <p className="
          text-slate-400
          mt-2
          text-sm
        ">
          Based on skills & project density
        </p>

      </div>

      {/* JOB FIT GRAPH */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-xl
          font-bold
          mb-4
          text-cyan-400
        ">
          Job Fit %
        </h2>

        <div className="h-[320px] w-full">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              key={barKey}
              data={jobFitData}
            >

              <XAxis
                dataKey="role"
                stroke="#94a3b8"
              />

              <YAxis stroke="#94a3b8" />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#06b6d4"
                radius={[8, 8, 0, 0]}
                isAnimationActive={true}
                animationDuration={1500}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* SKILL RADAR */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-xl
          font-bold
          mb-4
          text-cyan-400
        ">
          Skill Radar
        </h2>

        <div className="h-[350px] w-full">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <RadarChart
              key={radarKey}
              outerRadius="80%"
              data={skillData}
            >

              <PolarGrid />

              <PolarAngleAxis
                dataKey="skill"
              />

              <Radar
                name="Skills"
                dataKey="value"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.5}
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1800}
                animationEasing="ease-in-out"
              />

            </RadarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* STRONG SKILLS */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-green-400
          font-bold
          mb-3
        ">
          Strong Skills
        </h2>

        <div className="
          flex
          flex-wrap
          gap-2
        ">

          {
            analysis?.strong_skills?.length > 0 ? (

              analysis.strong_skills.map((skill, i) => (

                <span
                  key={i}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-green-500/10
                    text-green-400
                    border
                    border-green-400/20
                  "
                >
                  {skill}
                </span>

              ))

            ) : (

              <p className="text-slate-400">
                No strong technical skills detected
              </p>

            )
          }

        </div>

      </div>

      {/* MISSING SKILLS */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-red-400
          font-bold
          mb-3
        ">
          Missing Skills
        </h2>

        <div className="
          flex
          flex-wrap
          gap-2
        ">

          {
            analysis?.missing_skills?.length > 0 ? (

              analysis.missing_skills.map((skill, i) => (

                <span
                  key={i}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-red-500/10
                    text-red-400
                    border
                    border-red-400/20
                  "
                >
                  {skill}
                </span>

              ))

            ) : (

              <p className="text-slate-400">
                No major missing technical skills
              </p>

            )
          }

        </div>

      </div>

      {/* ROLE RECOMMENDATIONS */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-xl
          font-bold
          mb-4
          text-cyan-400
        ">
          Role Recommendations
        </h2>

        <div className="space-y-3">

          {
            roleData.length > 0 ? (

              roleData.map((role, i) => (

                <div
                  key={i}
                  className="
                    flex
                    justify-between
                    items-center
                    p-3
                    bg-black/20
                    rounded-xl
                    border
                    border-white/10
                  "
                >

                  <span>{role.name}</span>

                  <span className="
                    text-cyan-400
                    font-semibold
                  ">
                    {role.match}%
                  </span>

                </div>

              ))

            ) : (

              <p className="text-slate-400">
                No matching technical roles found
              </p>

            )
          }

        </div>

      </div>

      {/* AI INSIGHTS */}
      <div className="
        bg-white/5
        border
        border-white/10
        p-6
        rounded-3xl
        backdrop-blur-xl
      ">

        <h2 className="
          text-xl
          font-bold
          mb-4
          text-cyan-400
        ">
          AI Insights
        </h2>

        <p className="
          text-slate-300
          leading-7
        ">

          {
            analysis?.insight ||
            "Resume analysis completed successfully."
          }

        </p>

      </div>

    </div>
  )
}

export default AnalysisCard