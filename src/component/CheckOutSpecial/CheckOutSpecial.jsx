import React, { Fragment } from 'react'
import specials1 from '../CheckOutSpecial/specials-1.jpg'
import specials2 from '../CheckOutSpecial/specials-2.jpg'
import specials3 from '../CheckOutSpecial/specials-3.jpg'


export default function CheckOutSpecial() {
  return (
    <Fragment>
      <section id="CheckOutMenuSpecials">
        <div className="container">
          <div id="CheckOutMenuSpecials">
            <h2>Check our <span> Specials </span></h2>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>

          <nav className="mt-5">
            <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
              <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Menu Mie</a>
              <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Menu Buah</a>
              <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Menu Licous</a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active mt-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="row">
                <div className="col-lg-7 text-left ">
                  <h3>Architecto ut aperiam autem id</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente a repudiandae doloremque sequi maxime eveniet molestiae expedita hic mollitia?</p>
                </div>

                <div className="col-lg-5 d-md-flex justify-content-md-center">
                  <img src={specials1} alt="MenuSpecialPertamaKami" />
                </div>
              </div>
              <hr />



            </div>
            <div className="tab-pane fade  mt-5" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="row">
                <div className="col-lg-7 text-left ">
                  <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente a repudiandae doloremque sequi maxime eveniet molestiae expedita hic mollitia?</p>

                </div>

                <div className="col-lg-5 d-md-flex justify-content-md-center">
                  <img src={specials2} alt="MenuSpecialPertamaKami" />
                </div>
              </div>
            </div>
            <div className="tab-pane fade  mt-5" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="row">
                <div className="col-lg-7 text-left ">
                  <h3>Mie Ayam Setress</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptate.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente a repudiandae doloremque sequi maxime eveniet molestiae expedita hic mollitia?</p>

                </div>

                <div className="col-lg-5 d-md-flex justify-content-md-center">
                  <img src={specials3} alt="MenuSpecialPertamaKami" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Fragment>

  )
}


