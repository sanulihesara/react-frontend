import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import AboutMe from './components/AboutMe';
import MySchool from './components/MySchool';
import MyVillage from './components/MyVillage';
import MyAchievements from './components/MyAchievements';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AccountCircleOutlined, AccountCircleRounded, CelebrationRounded, HolidayVillageRounded, Home, HomeRounded, MenuBookRounded, SchoolRounded } from '@mui/icons-material';

const DrawerItems = [
  { text : 'Home', icon : <HomeRounded /> , path : '/' },
  { text : 'User Profile', icon : <AccountCircleRounded /> , path : '/user-profile' },
  { text : 'My School', icon : <SchoolRounded /> , path : '/my-school' },
  { text : 'My Village', icon : <HolidayVillageRounded /> , path : '/my-village' },
  { text : 'My Achievements', icon : <CelebrationRounded /> , path : '/my-achievements' },
];

function App() {

  const [isDrawerOpen, setIsDrawerOpen ] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
   <Router>
      <div className="App">
        <AppBar>
          <IconButton aria-label='menu' onClick={toggleDrawer}>
            <MenuBookRounded />
          </IconButton>
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

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            {DrawerItems.map( (item) => (
              <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

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
