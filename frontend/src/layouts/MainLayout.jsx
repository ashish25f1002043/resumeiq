import Navbar from "../components/Navbar"

const MainLayout = ({ children }) => {
  return (
    <div className="
      min-h-screen
      w-full
      flex
      flex-col
      px-2 md:px-4 lg:px-6
      py-4
    ">

      <div className="
        w-full
      ">

        <Navbar />

        <div className="w-full">
          {children}
        </div>

      </div>

    </div>
  )
}

export default MainLayout