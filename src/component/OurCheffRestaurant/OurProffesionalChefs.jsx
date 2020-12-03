import React from 'react'
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
import { BiPhoneCall } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'

export default function OurProffesionalChefs() {
  const MapDatChef = [
    {
      id: 1,
      img: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-1.jpg',
      cardTitle: 'Walter White',
      Jobs: 'Master Chef'
    },
    {
      id: 2,
      img: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-2.jpg',
      cardTitle: 'Sarah Jhonson',
      Jobs: 'Patissier'
    },
    {
      id: 3,
      img: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-3.jpg',
      cardTitle: 'William Anderson',
      Jobs: 'Cook'
    },

  ];
  const listMapDataChefs = MapDatChef.map((DataItemsChef) => {
    return (
      <div className="col-lg-4 col-md-12" key={DataItemsChef.id}>

        <div className="my_cheft shadow">
          <div className="Image_Cheff ">
            <img src={DataItemsChef.img} alt="Cheff Kami" />
          </div>

          <div className=" card-body card_titles">
            <h4 className="card-title mt-4">{DataItemsChef.cardTitle}</h4>
            <small><i>{DataItemsChef.Jobs}</i></small>
            <div className="icon-cheft mt-3">
              <GrFacebookOption />
              <GrInstagram />
              <BiPhoneCall />
              <FaLinkedin />
            </div>
          </div>
        </div>

      </div>
    )
  })
  return (
    <section id="OurProffesional_Chef" className="mb-5">
      <div className="OurProffesionalChef_conten mb-5 ">
        <h2>Our Proffesional <b style={{ color: ' rgb(255, 176, 59)' }}>Chefs</b></h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est Lorem, ipsum dolor. adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <div className="container">
        <div className="row">
          {
            listMapDataChefs
          }
        </div>
      </div>
    </section >
  )
}
