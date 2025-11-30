import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Navbar from "../Navbar"

const Layout = () => {
  <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-50">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
}

export default Layout;