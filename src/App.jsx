import './App.css'
import HomwPage from './Homepage/index'
import About from './About/index'
import SmartSol from './SmartSol/index'
import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
function App() {

  return (
    <>
   <Router>
   <Navbar />
    <Routes>
    
        <Route path="/" element={<HomwPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<SmartSol />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} /> */}
      </Routes>
      </Router>
    </>
  )
}
export default App
