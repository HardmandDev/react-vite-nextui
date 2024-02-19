import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import { useNavigate, Routes, Route } from 'react-router-dom'

// Static components for every pages: Header, Footer, etc...
import Header from './components/Header'
// Import pages for Routing:
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  const navigate = useNavigate()

  return (
    <NextUIProvider navigate={navigate}>
      <Header />
      
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Other routes */}
        <Route path='/services' element={<Services/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </NextUIProvider>
  )
}

export default App
