import './App.css'
import HomwPage from './Homepage/index'
import Registration from './Homepage/register'
import About from './About/index'
import SmartSol from './SmartSol/index'
import FAQ from './FAQ/index'
import Privacy from './Privacy/index'
import Term from './Terms/index'
import Navbar from "./component/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react'
import { NAV_BAR, setDefaultPath} from './constants'
import { setBaseUrl } from './helpingFunctions'
import { UserContext, UserProvider } from './context/UserContext'
import { AppointmentUpdate, ScheduleAdd, ScheduleList } from './pages/schedule'
import { ResourcesAdd, ResourcesList } from './pages/resources'
import { EventList } from './pages/events'
import { Signin, Signup } from './pages/auth'
import { TerritoriesAdd, TerritoriesList, TerritoriesUpdate } from './pages/territories'


function App(props)
{
  const {user , loggedIn} =useContext(UserContext)
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

  setBaseUrl()
  return (
    <div style={{ marginLeft: width > 1000 && - 90 }}>
      <Router>
        <Navbar handleClick={handleClick} />
        <Routes>

          <Route path="/" element={<HomwPage handleClick={handleClick} formRef={formRef} />} />
          <Route path="/register/:id" element={<Registration handleClick={handleClick} formRef={formRef} />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<SmartSol />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/login" element={loggedIn ? <Navigate to={setDefaultPath(user)} />  :<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/schedule/:eventId/:date"  element={<ScheduleList/>} />
          <Route path="/schedule/add"  element={<ScheduleAdd/>} />
          <Route path="/appointment/update/:customerId"  element={<AppointmentUpdate/>} />

          <Route path={`/${NAV_BAR[0].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[1].name}`} element={< ResourcesList/>} />
          <Route path={`/${NAV_BAR[2].name}`} element={<EventList />} />
          <Route path={`/${NAV_BAR[3].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[4].name}`} element={<ResourcesList />} />
          <Route path={`/${NAV_BAR[5].name}`} element={<TerritoriesList />} />

          <Route path={`/${NAV_BAR[0].name}/add`} element={<TerritoriesAdd />} />
          <Route path={`/${NAV_BAR[1].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[2].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[3].name}`} element={<TerritoriesList />} />
          <Route  path={`/${NAV_BAR[4].name}/add`} element={<ResourcesAdd />} />
          <Route path={`/${NAV_BAR[5].name}`} element={<TerritoriesList />} />

          <Route path={`/${NAV_BAR[0].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[1].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[2].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[3].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[4].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[5].name}/:value`} element={<TerritoriesUpdate />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App
