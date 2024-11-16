import React,{useState} from 'react';
import { BrowserRouter as Router, Routes , Route ,Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import devLogo from "./Css/devLogo.jpg";
import "./Css/App.css";







const App = () =>{

    const[activeLink,setActiveLink] = useState("AboutMe")

 const devLogoStyle = {
  height : "40px",
  width : "40px",
  borderRadius : "50%"
 };
const handleNavClick = (link) => {
    setActiveLink(link); 
  };
    return (
      

      <Router>     
 <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} to="/"  className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <img style={devLogoStyle} src={devLogo} alt='Logo'/></Navbar.Brand >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" d-flex justify-content-around w-100">
                        {[
                { to: '/AboutMe', label: 'About Me' },
                { to: '/Experience', label: 'Experience' },
                { to: '/Skills', label: 'Skills' },
                { to: '/Education', label: 'Education' },
                { to: '/Achievements', label: 'Achievements' },
                { to: '/Contact', label: 'Contact' },
              ].map((item) => (
                <Nav.Link
                  key={item.to}
                  as={Link}
                  to={item.to}
                  className={activeLink === item.to ? 'active-link' : ''}
                  onClick={() => handleNavClick(item.to)}
                >
                  {item.label}
                </Nav.Link>
              ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Responsive Layout with Bootstrap Container */}
            <Container>
                <Routes>
                    <Route index element={<AboutMe />} />
                    <Route path="AboutMe" element={<AboutMe />} />
                    <Route path="Experience" element={<Experience />} />
                    <Route path="Skills" element={<Skills />} />
                    <Route path="Education" element={<Education />} />
                    <Route path="Achievements" element={<Achievements />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="*" element={<div>Page Not Found</div>} /> {/* 404 Route */}
                </Routes>
            </Container>
                 
      </Router>
      
    
    
    
  )
  
}

export default App;

