import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const SideNavbar = () => {
  return (
    <React.Fragment>
      <div className="sidenavbar bg-secondary h-100">
        <div className="sidenavbar-header p-2 text-center">
          <img src="/images/reach-big-logo-white.png" className="img-fluid" />
          <i className="fa fa-bars cursor-pointer float-right"></i>
        </div>
        <div className="sidenavbar-content p-2">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown title="Dropdown2" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideNavbar
