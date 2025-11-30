import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './presentation/components/layout/Footer'
import Navbar from './presentation/components/layout/Navbar'
import Home from './presentation/pages/Home'
import NotFound from './presentation/pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
