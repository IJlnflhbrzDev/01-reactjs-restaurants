import React, { Fragment } from 'react'
import HandleButtonSuccess from '../HandleButtonSuccess/HandleButtonSuccess'
import DetailSoto from './Soto.jpg'
export default function Soto() {
  return (
    <Fragment>
      <div className="row mt-5 shadow">
        <div className="col-lg-6">
          <img className="img-thumbnail border-0 w-75" src={DetailSoto} alt="Detail-Soto" />
        </div>
        <div className="col-lg-6 text-left">
          <h1 className="defaultFont font-italic">Soto Jaman Now</h1>
          <hr /><br />
          <p className="font-weight-bold defaultColor">$3.51</p>
          <br />
          <p className=" card-text ">
            The 4 Rivers Soto Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!
              </p>
          <br />
          <HandleButtonSuccess CheckOut="Soto Jaman Now" />
        </div>
      </div>
      <hr />
    </Fragment>


  )
}
