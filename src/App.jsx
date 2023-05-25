import './App.css'
import HomwPage from './Homepage/index'
import About from './About/index'
import SmartSol from './SmartSol/index'
import FAQ from './FAQ/index'
import Privacy from './Privacy/index'
import Term from './Terms/index'
import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
function App()
{
  const formRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() =>
  {
    window.addEventListener('resize', () =>
    {
      setWidth(window.innerWidth)
    })
  }, [])
  const handleClick = () =>
  {
    setTimeout(() =>
    {

      formRef.current.focus();
      formRef.current.scrollIntoView();
    }, 500)
  };
  return (
    <div style={{ marginLeft: width > 1000 && - 90 }}>
      <Router>
        <Navbar handleClick={handleClick} />
        <Routes>

          <Route path="/" element={<HomwPage handleClick={handleClick} formRef={formRef} />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<SmartSol />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Term />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
