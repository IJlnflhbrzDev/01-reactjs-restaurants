import React, { Component, Fragment } from 'react'
import Header from '../../component/Header/Header'
import Content from '../../component/Content/Content'
import WhyCoose from '../../component/WhyCooseRestaurant/WhyCoose'
import MenuCheckOut from '../../component/MenuCheckOut/MenuCheckOut'
import CheckOutSpecial from '../../component/CheckOutSpecial/CheckOutSpecial'
import EventRestaurant from '../../component/EventRestaurants/EventRestaurant';
import Gallery from '../../component/GalleryRestaurants/Gallery';
import OurProffesionalChefs from '../../component/OurCheffRestaurant/OurProffesionalChefs';
import ContactDeveloper from '../../component/ContactDeveloper/ContactDeveloper'
import Footers from '../../component/Footer/Footers';



export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <WhyCoose />
        <MenuCheckOut />
        <CheckOutSpecial />
        <EventRestaurant />
        <Gallery />
        <OurProffesionalChefs />
        <ContactDeveloper />
        <Footers />
      </Fragment>
    )
  }
}


