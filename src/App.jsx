import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DetailPage from './components/detailpage'
import Navbar from './components/navbar'
import MainComponent from './components/mainComponent'
import Footer from './components/footer';
function App() {
  const [data, setData] = useState({})

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}/>
            <Route path="details" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
