import React, { Fragment } from 'react'
import HandleButtonSuccess from '../HandleButtonSuccess/HandleButtonSuccess'
import DetailBubur from './Bubur.jpg'
export default function Bubur() {
  return (
    <Fragment>
      <div className="row mt-5 shadow">
        <div className="col-lg-6">
          <img className="img-thumbnail border-0 w-75" src={DetailBubur} alt="Detail-Soto" />
        </div>
        <div className="col-lg-6 text-left">
          <h1 className="defaultFont font-italic">Bubur Ayam</h1>
          <hr /><br />
          <p className="font-weight-bold defaultColor">$4.00</p>
          <br />
          <p className=" card-text ">
            The 4 Rivers Bubur Ayam Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!
              </p>
          <br />
          <HandleButtonSuccess CheckOut="Bubur Ayam" />
        </div>
      </div>
      <hr />
    </Fragment>


  )
}
