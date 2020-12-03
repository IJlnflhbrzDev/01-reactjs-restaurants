import React, { Component, Fragment, useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,


} from 'reactstrap';


import Header from '../../component/Header/Header'
import Content from '../../component/Content/Content'
import WhyCoose from '../../component/WhyCooseRestaurant/WhyCoose'
import MenuCheckOut from '../../component/MenuCheckOut/MenuCheckOut'
import CheckOutSpecial from '../../component/CheckOutSpecial/CheckOutSpecial'
import EventRestaurant from '../../component/EventRestaurants/EventRestaurant';
import Gallery from '../../component/GalleryRestaurants/Gallery';
import OurProffesionalChefs from '../../component/OurCheffRestaurant/OurProffesionalChefs';
// import ContactDeveloper from '../../component/ContactDeveloper/ContactDeveloper'
import Footers from '../../component/Footer/Footers';



const NavbarScrolling = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar expand="md">
        <div className="container">

          <NavbarBrand><span className="defaultColor font-weight-bold">Delicious</span></NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Why Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Menu Specials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Event</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Cheff</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>

      </Navbar>
    </div>
  );
}
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavbarScrolling />
        <Header />
        <Content />
        <WhyCoose />
        <MenuCheckOut />
        <CheckOutSpecial />
        <EventRestaurant />
        <Gallery />
        <OurProffesionalChefs />
        {/* <ContactDeveloper /> */}
        <Footers />
      </Fragment>
    )
  }
}


