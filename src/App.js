import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/pages/Home.js'
import Portfolio from './components/pages/Portfolio.js'
import Contact from './components/pages/Contact.js'
import './App.css'


function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />



      </Router>
    </>
  )
}
export default App;
