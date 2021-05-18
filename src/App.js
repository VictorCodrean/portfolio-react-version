import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/pages/Home.js'
import Portfolio from './components/pages/Portfolio.js'
import Contact from './components/pages/Contact.js'
import Footer from './components/Footer/Footer.js'
import Resume from './components/pages/Resume'
import API from './utils/Api/API'
import './App.css'


function App() {
  const [githubUser, setGithubUser] = useState([]);

  useEffect(() => {
    getUserData();
  }, [])

  function getUserData() {
    API.searchUserData()
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.bio);
        setGithubUser(res.data)
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <Router>

        <Navbar
          githubUserUrl={githubUser.html_url}
          fullName={githubUser.name}
          githubBio={githubUser.bio}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Footer
          githubUrl={githubUser.html_url}
          fullName={githubUser.name} />
      </Router>
    </>
  )
}
export default App;
