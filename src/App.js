import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import AboutMe from './components/AboutMe';
import MySchool from './components/MySchool';
import MyVillage from './components/MyVillage';
import MyAchievements from './components/MyAchievements';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

function App() {
  return (
   <Router>
      <div className="App">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{flexGrow : 1}}>
          My Simple Web App
          </Typography>
          <nav>
            <ul style={{listStyle : 'none', display: 'flex', gap: '20px'}}>
              <li>
                <Link to="/user-profile" style={{color:'white', textDecoration : 'none'}}>User Profile</Link>
              </li>
              <li>
                <Link to="/about-me" style={{color:'white', textDecoration : 'none'}}>About Me</Link>
              </li>
              <li>
                <Link to="/my-school" style={{color:'white', textDecoration : 'none'}}>My School</Link>
              </li>
              <li>
                <Link to="/my-village" style={{color:'white', textDecoration : 'none'}}>My Village</Link>
              </li>
              <li>
                <Link to="/my-achievements" style={{color:'white', textDecoration : 'none'}}>My Achievements</Link>
              </li>
            </ul>
          </nav>
          </Toolbar>
          </AppBar>
        <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/user-profile" element={<UserProfile />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/my-school" element={<MySchool />}/>
        <Route path="/my-village" element={<MyVillage />}/>
        <Route path="/my-achievements" element={<MyAchievements />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
