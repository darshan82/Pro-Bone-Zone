import './App.css'
import HomwPage from './Homepage/index'
import Registration from './Homepage/register'
import About from './About/index'
import Blog from "./Blog"
import SmartSol from './SmartSol/index'
import FAQ from './FAQ/index'
import Privacy from './Privacy/index'
import Term from './Terms/index'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react'
import { NAV_BAR, setDefaultPath } from './constants'
import {  setAuthToken, setBaseUrl } from './helpingFunctions'
import { UserContext, UserProvider } from './context/UserContext'
import { AppointmentUpdate, ScheduleList } from './pages/schedule'
import { ResourceUpdate, ResourcesAdd, ResourcesList } from './pages/resources'
import { EventAdd, EventList, EventUpdate } from './pages/events'
import { Signin, Signup } from './pages/auth'
import { TerritoriesAdd, TerritoriesList, TerritoriesUpdate } from './pages/territories'
import { createBrowserHistory } from 'history';
import { LicenseesAdd, LicenseesList, LicenseesUpdate } from './pages/Licensee'
import { PromotionsAdd, PromotionsList, PromotionsUpdate } from './pages/promotions'
import { SponsorAdd, SponsorUpdate, SponsorsList } from './pages/sponsors'
import { StaffAdd, StaffUpdate, StaffsList } from './pages/staff'
import { BlogAdd, BlogUpdate, BlogsList } from './pages/blogs'
import { Profile } from './pages/profile'
import { CustomerList } from './pages/customer'
function App(props)
{
  const { user, loggedIn } = useContext(UserContext)

  const [width, setWidth] = useState(window.innerWidth)
 
  useEffect(() =>
  {
    window.addEventListener('resize', () =>
    {
      setWidth(window.innerWidth)
    })
  }, [])

  setBaseUrl()
  const history = createBrowserHistory();
  setAuthToken(localStorage.getItem("token"))

  return (
    <div style={{ marginLeft: width > 1000 && - 90 }}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<HomwPage />} />
          <Route path="/register/:id" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/sponsor" element={<SmartSol />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/login" element={loggedIn ? <Navigate to={setDefaultPath(user)} /> : <Signin />} />
          <Route path="/schedule/:eventId/:date" element={<ScheduleList />} />
{
  user ? (
    <>
  
  <Route path="/register" element={<Signup />} />
  <Route path="/appointment/update/:customerId" element={<AppointmentUpdate />} />
  <Route path="/licensee" element={<LicenseesList />} />
          <Route path="/licensee/add" element={<LicenseesAdd />} />
          <Route path="/licensee/:id" element={<LicenseesUpdate />} /><Route path="/licensee" element={<LicenseesList />} />
          <Route path="/staff/add" element={<StaffAdd />} />
          <Route path="/staff/:id" element={<StaffUpdate />} />
          <Route path="/staff" element={<StaffsList />} />
          <Route path="/sponsors" element={<SponsorsList />} />
          <Route path="/sponsors/add" element={<SponsorAdd />} />
          <Route path="/sponsors/:id" element={<SponsorUpdate />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/add" element={<BlogAdd />} />
          <Route path="/blogs/:id" element={<BlogUpdate />} />
          <Route path="/Profile" element={< Profile/>} />
          
          <Route path={`/${NAV_BAR[0].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[1].name}`} element={< PromotionsList />} />
          <Route path={`/${NAV_BAR[2].name}`} element={<EventList />} />
          <Route path={`/${NAV_BAR[3].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[4].name}`} element={<ResourcesList />} />
          <Route path={`/${NAV_BAR[5].name}`} element={<TerritoriesList />} />

          <Route path={`/${NAV_BAR[0].name}/add`} element={<TerritoriesAdd />} />
          <Route path={`/${NAV_BAR[1].name}/add`} element={<PromotionsAdd />} />
          <Route path={`/${NAV_BAR[2].name}/add`} element={<EventAdd />} />
          <Route path={`/${NAV_BAR[3].name}`} element={<TerritoriesList />} />
          <Route path={`/${NAV_BAR[4].name}/add`} element={<ResourcesAdd />} />
          <Route path={`/${NAV_BAR[5].name}`} element={<TerritoriesList />} />

          <Route path={`/${NAV_BAR[0].name}/:id`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[1].name}/:id`} element={<PromotionsUpdate />} />
          <Route path={`/${NAV_BAR[2].name}/:id`} element={<EventUpdate />} />
          <Route path={`/${NAV_BAR[3].name}/:value`} element={<TerritoriesUpdate />} />
          <Route path={`/${NAV_BAR[4].name}/:id`} element={<ResourceUpdate />} />
          <Route path={`/${NAV_BAR[5].name}/:value`} element={<TerritoriesUpdate />} />
          
          
          <Route path={`/customers`} element={<CustomerList/>} />
          <Route path={`/training`} element={<center><h1>UNDER DEVELOPMENT</h1></center>} />
          <Route path={`/marketing`} element={<center><h1>UNDER DEVELOPMENT</h1></center>} />
          <Route path={`/profile`} element={<center><h1>UNDER DEVELOPMENT</h1></center>} />
          
          
    </>
  )          
          
        :""}
          


          </Routes>
      </Router>
      </div>
  )
}
export default App
