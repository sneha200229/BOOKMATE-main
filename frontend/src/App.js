// import './App.css';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Leftbar from './pages/feed/components/Leftbar';
import Rightbar from './pages/feed/components/Rightbar';
import{ BrowserRouter as Router, Routes, Route, Link}from "react-router-dom"
import Signin from './pages/signin/Signin'
import Signup from "./pages/signup/Signup"
import Reset from "./pages/reset/Reset"
import Feed from "./pages/feed/Feed"
import Profile from "./pages/profile/Profile"
import Otp from "./pages/reset/Otp"


function App() {

  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  const theme = createTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
    },
  });










  return (
    <Router>

    <ThemeProvider theme={theme}>
    <div className="App">
      <Leftbar nightMode={nightMode} toggleNightMode={toggleNightMode} />
      <Rightbar nightMode={nightMode} />
    </div>
    <div>
          <Routes>
              <Route path ="/Signin" element={<Signin/>}/>
              <Route path="/Signup" element = {<Signup/>}/>
              <Route path="/Reset" element = {<Reset/>}/>
              <Route path="/Feed" element={<Feed/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Otp" element={<Otp/>}/>
          </Routes>
    </div>
    </ThemeProvider>
    </Router>


  );
}

export default App;
