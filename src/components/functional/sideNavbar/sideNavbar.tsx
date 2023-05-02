import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { SideNavbarMain } from './sideNavbar.styled'

const SideNavbar = () => {
  return (
    <React.Fragment>
      <SideNavbarMain>
        <div className="sidenavbar-header p-2 text-center">
          <img src="/images/reach-big-logo-white.png" className="img-fluid" />
          <i className="fa fa-bars cursor-pointer float-right"></i>
        </div>
        
        <div className="sidenavbar-content">
          <Navbar collapseOnSelect expand="lg">
            <Nav className="me-auto">
              <NavDropdown title="Data Management">
                <NavDropdown title="Import">
                  <Link to="/">Data Import</Link>
                  <Link to="/">Report</Link>
                </NavDropdown>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>
      </SideNavbarMain>
    </React.Fragment>
  )
}

export default SideNavbar
