import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    
      <Navbar  style={{zIndex:1}}  expand="lg" className="bg-warning  w-100  ">
          <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
           < Navbar.Brand>
            <img src={logo}  style={{height:'80px',width:'80px'}} alt="" />
          </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar" />
            
           
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
           
             <Link to={'/home'} style={{textDecoration:'none' }} className='mx-2'>Home</Link>
             <Link to={'/'} style={{textDecoration:'none'}} className='mx-2'>About</Link>
             <Link to={'/history'} style={{textDecoration:'none'}} className='mx-2'><i class="fa-solid fa-cart-shopping"></i></Link>

          </Nav>
        </Navbar.Collapse>
          </Container>
        </Navbar>
   
  )
}

export default Header