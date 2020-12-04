import React, { Fragment } from 'react'
import Lobster from './DetailMenu/01-LobsterBisque/Lobster'
import Bubur from './DetailMenu/03-BuburAyam/Bubur'
import Banana from './DetailMenu/04-BananaLicous/Banana'
import Bakso from './DetailMenu/05-BaksoMercon/Bakso'
import NasiGoreng from './DetailMenu/06-NasiGoreng/NasiGoreng'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Soto from './DetailMenu/02-SotoJamanNow/Soto';
export default function MenuCheckOut() {
  return (
    <Fragment>
      <Router>
        <section className=" text-center" id="MenuCheckOut">
          <div className="check-menu">
            <h2>Check our tasty <span>Menu</span></h2>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/">
                    <button>  Lobster Bisque </button>
                  </Link>
                  <small>$5.95</small>
                </div>
              </div>
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/Soto"> <button>Soto Jaman Now</button> </Link>
                  <small>$3.51</small>

                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/BurYam"> <button>Bubur Ayam</button> </Link>
                  <small>$4.00</small>

                </div>
              </div>
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/Bakso-Mercon"> <button>Bakso Mercon</button> </Link>
                  <small>$100</small>

                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/Banana-Licous"> <button>Banana Licous</button> </Link>
                  <small>$14.120</small>

                </div>
              </div>
              <div className="col-lg-6 mb-md-3 ">
                <div className="menu-checkouts">
                  <Link to="/Nasgor"> <button>Nasi Goreng</button> </Link>
                  <small>$100.90</small>

                </div>
              </div>
            </div>
          </div>
          <br /><hr />
          <Switch>
            <Route exact path="/" children={<Lobster />} />
            <Route path="/Soto" children={<Soto />} />
            <Route path="/BurYam" children={<Bubur />} />
            <Route path="/Bakso-Mercon" children={<Bakso />} />
            <Route path="/Banana-Licous" children={<Banana />} />
            <Route path="/Nasgor" children={<NasiGoreng />} />
          </Switch>

        </section>
      </Router>


    </Fragment>
  )
}
