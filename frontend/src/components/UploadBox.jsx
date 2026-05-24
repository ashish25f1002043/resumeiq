import { useDropzone } from "react-dropzone"
import { FaCloudUploadAlt } from "react-icons/fa"
import axios from "axios"
import { useState } from "react"
import AnalysisCard from "./AnalysisCard"
import API_BASE_URL from "../api/api"
import { motion } from "framer-motion"

const UploadBox = () => {

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [resumeText, setResumeText] = useState("")

  const onDrop = async (acceptedFiles) => {

    const file = acceptedFiles[0]

    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {

      setLoading(true)

      const response = await axios.post(
        `${API_BASE_URL}/upload-resume`,
        formData
      )

      setResult(response.data)
      setResumeText(response.data.text || "")

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"]
    },
    onDrop
  })

  return (
    <div>

      {/* UPLOAD BOX */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        {...getRootProps()}
        className="
          mt-10
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          rounded-3xl
          p-10
          text-center
          cursor-pointer
          transition-all
          duration-300
          hover:border-cyan-400/40
        "
      >

        <input {...getInputProps()} />

        <FaCloudUploadAlt className="
          text-2xl
          text-cyan-400
          mx-auto
          mb-5
        " />

        <h2 className="
          text-3xl
          font-black
          mb-3
        ">
          Upload Your Resume
        </h2>

        <p className="text-slate-400 text-sm">
          Upload PDF resume for ATS analysis and skill evaluation
        </p>

      </motion.div>

      {/* LOADING */}
      {
        loading && (
          <div className="
            mt-5
            bg-cyan-500/10
            border
            border-cyan-400/20
            p-4
            rounded-2xl
          ">

            <p className="text-cyan-400 font-semibold">
              Uploading Resume...
            </p>

          </div>
        )
      }

      {/* RESULT SECTION */}
      {
        result && (
          <div>

            {/* FILE INFO CARD */}
            <div className="
              mt-6
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-6
              rounded-3xl
            ">

              <h2 className="
                text-2xl
                font-bold
                text-cyan-400
                mb-4
              ">
                Resume Uploaded Successfully
              </h2>

              <p className="text-slate-300">
                <strong>File:</strong> {result.filename}
              </p>

            </div>

            {/* AI ANALYSIS CARD */}
            <AnalysisCard analysis={result.analysis} />

          </div>
        )
      }

    </div>
  )
}

export default UploadBox