import { motion } from "framer-motion"

const StatsCard = ({
  title,
  value,
  icon: Icon
}) => {

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        relative
        overflow-hidden
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-6
        rounded-3xl
        shadow-2xl
      "
    >

      {/* ICON */}
      <div
        className="
          absolute
          top-4
          right-4
          opacity-10
        "
      >
        {Icon && <Icon size={80} />}
      </div>

      {/* TITLE */}
      <h2
        className="
          text-slate-400
          text-sm
          mb-3
        "
      >
        {title}
      </h2>

      {/* VALUE */}
      <p
        className="
          text-4xl
          font-black
        "
      >
        {value}
      </p>

    </motion.div>
  )
}

export default StatsCard