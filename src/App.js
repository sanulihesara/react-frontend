import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import AboutMe from './AboutMe';
import MySchool from './MySchool';
import MyVillage from './MyVillage';
import MyAchievements from './MyAchievements';
import React from 'react';

function App() {
  return (
   <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Simple Web App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/user-profile">User Profile</Link>
              </li>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
              <li>
                <Link to="/my-school">My School</Link>
              </li>
              <li>
                <Link to="/my-village">My Village</Link>
              </li>
              <li>
                <Link to="/my-achievements">My Achievements</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/user-profile" component={UserProfile} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/my-school" component={MySchool} />
        <Route path="/my-village" component={MyVillage} />
        <Route path="/my-achievements" component={MyAchievements} />
      </div>
    </Router>
  );
}

export default App;
