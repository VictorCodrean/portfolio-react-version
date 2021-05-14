import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home.js'
import Portfolio from './pages/Portfolio.js'
import Contact from './pages/Contact.js'
import './App.css'


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />


        </div>
      </Router>
    </>
  )
}
export default App;
