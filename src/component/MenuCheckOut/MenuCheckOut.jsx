import React, { Fragment } from 'react'
export default function MenuCheckOut() {
  return (
    <Fragment>
      <section className=" text-center" id="MenuCheckOut">
        <div className="check-menu">
          <h2>Check our tasty <span>Menu</span></h2>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Lobster Bisque</button>
                <small>$5.95</small>

              </div>
            </div>
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Soto Jaman Now</button>
                <small>$3.51</small>

              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Bubur Ayam</button>
                <small>$4.00</small>

              </div>
            </div>
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Bakso Mercon</button>
                <small>$100</small>

              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Banana Licous</button>
                <small>$14.120</small>

              </div>
            </div>
            <div className="col-lg-6 mb-md-3 ">
              <div className="menu-checkouts">
                <button>Nasi Goreng</button>
                <small>$100.90</small>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="heroCheckOut">
        <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/specials-2.jpg" alt="" />
      </div>

    </Fragment>
  )
}
