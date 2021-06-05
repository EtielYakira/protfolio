
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/index'
import Quote from './Components/Quote/index'
import Voting from './Components/Voting/index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Bmi from './Components/BMI/index'
import Students from './Components/Students/Students'

function RouterCall() {
    return( 
    <>
        <Router>

        
            
        <Navbar id="navbar"> 
        <Navbar.Brand className='text-white'><Link to="/home" className='text-white text-decoration-none'>My Projects</Link></Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/Voting">Voting</Link></Nav.Link>
      <Nav.Link><Link to="/Quotes">Quotes</Link></Nav.Link>
      <Nav.Link><Link to="/Students">Students</Link></Nav.Link>
      <Nav.Link><Link to="/Bmi">Bmi</Link></Nav.Link>
    </Nav>
          </Navbar>
        
        

        <Switch>
          <Route path="/Voting">
            <Voting />
          </Route>
          <Route path="/Quotes">
        <Quote />
          </Route>
          <Route path="/Students">
            <Students />
          </Route>
          <Route path="/Bmi">
            <Bmi />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       

    </Router>

    </>
  )
    }

export default RouterCall