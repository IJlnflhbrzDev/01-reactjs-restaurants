import React, { Fragment } from 'react'
import DetailBanana from './Banana.png'
export default function Banana() {
  return (
    <Fragment>
      <div className="row mt-5 shadow">
        <div className="col-lg-6">
          <img className="img-thumbnail border-0 w-75" src={DetailBanana} alt="Detail-Banana" />
        </div>
        <div className="col-lg-6 text-left">
          <h1 className="defaultFont font-italic">Banana Licous</h1>
          <hr /><br />
          <p className="font-weight-bold defaultColor">$14.120</p>
          <br />
          <p className=" card-text ">
            The 4 Rivers Banana Licous  Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!
              </p>
          <br />
          <a href="/" className="btn btn-outline-danger">Buy Now!</a>
        </div>
      </div>
      <hr />
    </Fragment>


  )
}
