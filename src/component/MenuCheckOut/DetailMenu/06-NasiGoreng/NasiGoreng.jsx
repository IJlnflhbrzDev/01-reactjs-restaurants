import React, { Fragment } from 'react'
import HandleButtonSuccess from '../HandleButtonSuccess/HandleButtonSuccess'
import DetailNnasigoreng from './NasiGoreng.jpg'
export default function NasiGoreng() {
  return (
    <Fragment>
      <div className="row mt-5 shadow">
        <div className="col-lg-6">
          <img className="img-thumbnail border-0 w-75" src={DetailNnasigoreng} alt="Detail-Nasigoreng" />
        </div>
        <div className="col-lg-6 text-left">
          <h1 className="defaultFont font-italic">Nasi Goreng</h1>
          <hr /><br />
          <p className="font-weight-bold defaultColor"> $100.90</p>
          <br />
          <p className=" card-text ">
            The 4 Rivers Nasi Goreng Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!
              </p>
          <br />
          <HandleButtonSuccess CheckOut="Nasi Goreng" />
        </div>
      </div>
      <hr />
    </Fragment>


  )
}
