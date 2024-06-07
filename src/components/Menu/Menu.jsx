import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { NavLink } from 'react-router-dom';
import { faBars, faHouse, faAddressCard, faScrewdriverWrench, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';



function Menu({ setLoading }) {

   
  const handleClick = () =>{
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className='header__nav'>
      
      <div className='container-fluid'>
        <div className='navb-logo'>
          <img src="/logo.png" alt="" />
        </div>

        <div className="nav-items">
          <div className="item">
            <NavLink onClick={handleClick} to='/' className='nav-link'>Home</NavLink>
          </div>
          <div className="item">
            <NavLink onClick={handleClick} to='/About' className='nav-link'>About</NavLink>
          </div>
          <div className="item">
            <NavLink onClick={handleClick} to='/Skills' className='nav-link'>Skills</NavLink>
          </div>
          <div className="item">
            <NavLink onClick={handleClick} to='/Projects' className='nav-link'>Projects</NavLink>
          </div>
          <div className="item">
            <NavLink onClick={handleClick} to='/Contac' className='nav-link'>Contac</NavLink>
          </div>
        </div>
        
        <div className="mobile-toggler d-lg-none">
           <FontAwesomeIcon icon={faBars} onClick={handleShow}/>
        </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <img src="/logo.png" alt="logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="modal-line">
            <NavLink onClick={handleClick} to='/' className='nav-link'>
            <FontAwesomeIcon icon={faHouse} />
              Home
             </NavLink>
          </div>
          <div className="modal-line">
            <NavLink onClick={handleClick} to='/About' className='nav-link'>
            <FontAwesomeIcon icon={faAddressCard} />
              About
              </NavLink>
          </div>
          
          <div className="modal-line">
            <NavLink onClick={handleClick} to='/Skills' className='nav-link'>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
              Skills
              </NavLink>
          </div>
          <div className="modal-line">
          <NavLink onClick={handleClick} to='/Projects' className='nav-link'>
          <FontAwesomeIcon icon={faBriefcase} />
            Projects
            </NavLink>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            <NavLink onClick={handleClick} to='/Contac' className='nav-link'>
            <FontAwesomeIcon icon={faEnvelope} />
              Let's Talk
              </NavLink>
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </header>
  

  );
}


export default Menu;