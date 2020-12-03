import React from 'react'
import eventImg1 from '../EventRestaurants/imgEvent-1.jpg'
import eventImg2 from '../EventRestaurants/imgEvent-2.jpg'
import eventImg3 from '../EventRestaurants/imgEvent-3.jpg'
import { BiCheckDouble } from 'react-icons/bi'
import CounterCheckout from './counterPesanan'

export default function EventRestaurant() {

  return (
    <div id="event-carousel-restaurant">
      <div className="container shadow-lg p-3 ">
        <h2 className="text-center mt-3 mb-4">Organize Your <b style={{ color: 'rgb(255, 176, 59)' }}>Events</b> in our Restaurants</h2>
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row custom_Rows ">
                <div className="col-lg-6 ">
                  <img src={eventImg1} className="d-block w-100" alt="GambarEvent-1" />

                </div>
                <div className="col-lg-6" id="img_before_events">
                  <div className="contents-carousel_Event">
                    <h3>Custom Parties</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus itaque ullam doloremque, atque reprehenderit officiis porro nobis voluptatibus soluta vel assumenda </small>
                    <ul className="mt-4">
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                         Duis aute irure dolor in reprehenderit in voluptate velit..</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                              Ullamcoxx laboris nisi ut aliquip ex ea commodo consequat. Duis </li>
                    </ul>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In qui nobis expedita error asperiores nemo sit porro reprehenderit, at saepe voluptatibus corporis nihil eos eum alias recusandae libero gold$minima?</small>

                    <CounterCheckout />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row custom_Rows">
                <div className="col-lg-6 ">
                  <img src={eventImg2} className="d-block w-100" alt="GambarEvent-2" />

                </div>
                <div className="col-lg-6" id="img_before_events">
                  <div className="contents-carousel_Event">
                    <h3>Birtday Parties</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus itaque ullam doloremque, atque reprehenderit officiis porro nobis voluptatibus soluta vel assumenda </small>
                    <ul className="mt-4">
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                Ullamcozzz laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Duis aute irure dolor in reprehenderit in voluptate velit..</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </li>
                    </ul>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In qui nobis expedita error asperiores nemo sit porro reprehenderit, at saepe voluptatibus corporis nihil eos eum alias recusandae libero voluptate minima?</small>

                    <CounterCheckout />
                  </div>
                </div>

              </div>
            </div>
            <div className="carousel-item">
              <div className="row custom_Rows">
                <div className="col-lg-6 ">
                  <img src={eventImg3} className="d-block w-100" alt="GambarEvent-3" />

                </div>
                <div className="col-lg-6" id="img_before_events">
                  <div className="contents-carousel_Event">
                    <h3>Private Parties</h3>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus itaque ullam doloremque, atque reprehenderit officiis porro nobis voluptatibus soluta vel assumenda </small>
                    <ul className="mt-4">
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Duis aute irure dolor in reprehenderit in voluptate velit..</li>
                      <li>
                        <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </li>
                    </ul>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In qui nobis expedita error asperiores nemo sit porro reprehenderit, at saepe voluptatibus corporis nihil eos eum alias recusandae libero voluptate minima?</small>
                    <CounterCheckout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
        data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>

    </div>
  )
}

