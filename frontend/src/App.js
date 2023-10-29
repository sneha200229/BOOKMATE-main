
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"
import Signin from './pages/signin/Signin'
import Signup from "./pages/signup/Signup"
import Reset from "./pages/reset/Reset"
import Feed from "./pages/feed/Feed"
import Profile from "./pages/profile/Profile"

import Otp from "./pages/reset/Otp"



function App() {
  return (
    <div>
        <Router>
          <Routes>
              <Route path ="/Signin" element={<Signin/>}/>
              <Route path="/Signup" element = {<Signup/>}/>
              <Route path="/Reset" element = {<Reset/>}/>
              <Route path="/Feed" element={<Feed/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Otp" element={<Otp/>}/>
             
             
          </Routes>
        </Router>
    </div>
  );
}

export default App;