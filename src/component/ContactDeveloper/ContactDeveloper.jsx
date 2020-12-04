import React, { Fragment } from 'react'
import swal from 'sweetalert'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiClockwork } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'

import IntegrateMaps from './IntegrateMaps';

class FormsMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      YourName: '',
      name: ''
    }

  }


  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitedHandler = (e) => {
    e.preventDefault()

    this.setState({
      name: swal("Good Job!", 'Terimakasih Atas Komentarnya ' + this.state.YourName, "success")
    });

    this.state.YourName = ''
  }


  render() {

    return (
      <Fragment>
        <form id="Komentar_Input" className='p-3 shadow-lg' onSubmit={this.submitedHandler} >
          <div className="row">
            <div className="col-lg-6">
              <input type="text" value={this.state.YourName} name="YourName" id="YourName" className="form-control" placeholder="YourName" aria-label="YourName" onChange={this.changeHandler} />
            </div>
            <div className="col-lg-6">
              <input type="email" name="YourEmail" id="YourEmail" className="form-control" placeholder="YourEmail" aria-label="YourEmail" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <textarea className="form-control" name="Komentar" id="Komenar" rows="5" placeholder="Message" />
            </div>
          </div>
          <button type="submit" style={{ backgroundColor: 'rgb(255, 172, 48)', color: 'white' }} className="btn  w-100 mt-2">Send Message! </button>
        </form>
      </Fragment>

    )
  }
}







export default function ContactDeveloper() {



  return (
    <section id="contac_us" >
      <div className="contac_us_title">
        <h2><b style={{ color: 'gold' }}>Contact</b> Us</h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <div className="contac_us_maps">
        <IntegrateMaps />
      </div>

      <div className="container">
        <div className="contac_us_info  shadow-sm mt-4">
          <div className="row d-flex justify-content-center">


            <div className="col-lg-3 col-md-12 mb-3 shadow  ">
              <div className="icons mb-2 p-2">
                <FaMapMarkerAlt color=" green" size="25px" />
              </div>

              <div className="info_title">
                <h4 style={{ color: 'gold' }}>Location </h4>
                <p>
                  Nona Merah 71520
               <br />
               Jakarta  ,  Indonesia
               </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-3 shadow  ">
              <div className="icons mb-2 p-2">
                <GiClockwork color=" green" size="25px" />
              </div>

              <div className="info_title">
                <h4 style={{ color: 'gold' }}>Open Hours: </h4>
                <p>
                  Monday-Saturday:
               <br />
               11:00 AM - 2300 PM
               </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-3 shadow  ">
              <div className="icons mb-2 p-2">
                <MdEmail color=" green" size="25px" />
              </div>

              <div className="info_title">
                <h4 style={{ color: 'gold' }}>Email: </h4>
                <p>
                  IJlnflhbrzDev@gmail.com
               <br />
               ijlnflhbrz@gmail.con
               </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-3 shadow  ">
              <div className="icons mb-2 p-2">
                <BiPhoneCall color=" green" size="25px" />
              </div>

              <div className="info_title">
                <h4 style={{ color: 'gold' }}>Call:  </h4>
                <p>
                  +62 896 735 84023
               <br />
               +62 896 735 84023
               </p>
              </div>
            </div>
          </div>
        </div>
        <div id="formsMessage">
          <FormsMessage />
        </div>
      </div>
    </section>
  )
}
