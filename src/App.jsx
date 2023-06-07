import './App.css'
import HomwPage from './Homepage/index'
import About from './About/index'
import SmartSol from './SmartSol/index'
import FAQ from './FAQ/index'
import Privacy from './Privacy/index'
import Term from './Terms/index'
import ListView from "./pages/TerritoriesList"
import TerritoriesAdd from "./pages/TerritoriesAdd"

import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import { USER_NAV_BAR } from './constants'
function App(props)
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
          <Route path={`/${USER_NAV_BAR[0].name}`} element={<ListView />} />
          <Route path={`/${USER_NAV_BAR[1].name}`} element={<ListView />} />
          <Route path={`/${USER_NAV_BAR[2].name}`} element={<ListView />} />
          <Route path={`/${USER_NAV_BAR[3].name}`} element={<ListView />} />
          <Route path={`/${USER_NAV_BAR[4].name}`} element={<ListView />} />
          <Route path={`/${USER_NAV_BAR[5].name}`} element={<ListView />} />


          <Route path={`/${USER_NAV_BAR[0].name}/:value`} element={<TerritoriesAdd />} />
          <Route path={`/${USER_NAV_BAR[1].name}/:value`} element={<TerritoriesAdd />} />
          <Route path={`/${USER_NAV_BAR[2].name}/:value`} element={<TerritoriesAdd />} />
          <Route path={`/${USER_NAV_BAR[3].name}/:value`} element={<TerritoriesAdd />} />
          <Route path={`/${USER_NAV_BAR[4].name}/:value`} element={<TerritoriesAdd />} />
          <Route path={`/${USER_NAV_BAR[5].name}/:value`} element={<TerritoriesAdd />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
