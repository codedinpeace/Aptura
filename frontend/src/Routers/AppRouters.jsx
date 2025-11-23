import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {LandingPage} from '../LandingPage/LandingPage'
import {CreateResume} from '../LandingPage/RoutingPage/CreateResume'
import {PrivacyPolicy} from '../LandingPage/RoutingPage/PrivacyPolicy'
import {Signup} from '../LandingPage/RoutingPage/Signup'
import {Login} from '../LandingPage/RoutingPage/Login'
import {OTP} from '../Components/OTP'
import {Terms} from '../LandingPage/RoutingPage/Terms'
import {Resume} from '../LandingPage/RoutingPage/Resume'

const AppRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Signup />}/>
            <Route path='/verify' element={<OTP />}/>
            <Route path='/create-resume' element={<CreateResume />}/>
            <Route path='/resumes' element={<Resume />}/>
            <Route path='/terms-of-service' element={<Terms />}/>
            <Route path='/terms-of-service' element={<PrivacyPolicy />} />
        </Routes>
    </div>
  )
}

export default AppRouters