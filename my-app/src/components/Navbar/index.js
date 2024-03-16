import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
          <NavLink to="/">
            Hanbit Kang
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/events'>
            Events
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/blogs'>
            Blogs
          </NavLink>
          <NavLink to='/resume'>
            Resume/Experience
          </NavLink>
          <NavLink to='/feedbacks'>
            Feedbacks
          </NavLink>
        </NavMenu>
        {/*
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        */}
      </Nav>
    </>
  );
};
  
export default Navbar;