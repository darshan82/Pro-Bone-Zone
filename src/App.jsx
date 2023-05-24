import './App.css'
import HomwPage from './Homepage/index'
import About from './About/index'
import SmartSol from './SmartSol/index'
import FAQ from './FAQ/index'
import Privacy from './Privacy/index'
import Term from './Terms/index'
import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useRef } from 'react'
function App()
{
  const formRef = useRef(null);
  const handleClick = () =>
  {
    formRef.current.focus();
    formRef.current.scrollIntoView();
  };
  return (
    <>
      <Router>
        <Navbar handleClick={handleClick} />
        <Routes>

          <Route path="/" element={<HomwPage handleClick={handleClick} formRef={formRef} />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<SmartSol />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Term />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} /> */}
        </Routes>
      </Router>
    </>
  )
}
export default App
