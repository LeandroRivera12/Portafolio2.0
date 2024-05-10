import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { NavLink } from 'react-router-dom';


function Menu({ setLoading }) {

   
  const handleClick = () =>{
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }

  return (
    <Navbar expand="lg" className="menu-container bg-primary d-flex">
      <Container className='d-flex'>
        <Navbar.Brand href='/'>
         <img className='img-logo' src="public/logo.png" alt="" />  <p className='name-header'>Leandro Rivera</p> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavLink onClick={handleClick} className='nav-link text-light link-primary link-underline-opacity-0' to='/'>
                Inicio</NavLink>
                <NavLink onClick={handleClick} className='nav-link text-light link-primary link-underline-opacity-0' to='/SobreMi'>
                Sobre mi</NavLink>
              <NavLink onClick={handleClick} className='nav-link text-light link-primary link-underline-opacity-0' to='/Habilidades'>
                Habilidades</NavLink>
              <NavLink onClick={handleClick} className='nav-link text-light link-primary link-underline-opacity-0' to='/Proyectos'>
                Proyectos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Menu;