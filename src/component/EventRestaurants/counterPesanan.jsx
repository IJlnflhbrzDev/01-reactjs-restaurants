import React, { Component, Fragment } from 'react'
import swal from 'sweetalert'
import { Alert } from 'reactstrap'

export default class counterPesanan extends Component {
  constructor(props) {
    super(props);


    this.state = {
      valueCheckout: 0
    }
  }
  handleButtonPesan = () => {
    if (this.state.valueCheckout < 5) {
      this.setState({
        valueCheckout: this.state.valueCheckout + 1
      })
    } else {
      swal("Mohon Maaf!", "Stok Kami Terbatas", "error");

    }

  }
  handleButtonBatal = () => {
    if (this.state.valueCheckout > 0) {
      this.setState({
        valueCheckout: this.state.valueCheckout - 1
      })
    }
  }
  render() {
    return (
      <Fragment>
        <div className=" font-italic text-center">

          <Alert color="success">
            Pesanan Anda : {this.state.valueCheckout}
          </Alert>
        </div>
        <hr />
        <div className="row text-center ">
          <div className="col-md-6 col-sm-6 ">
            <button className=" btn btn-outline-primary" onClick={this.handleButtonPesan}>Pesan Sekarang!</button>
          </div>

          <div className="col-md-6 col-sm-6 ">
            {this.state.valueCheckout > 0 ? <button className=" btn btn-outline-danger" onClick={this.handleButtonBatal}>Batal Pesanan!</button> : <button className=" btn btn-outline-danger" disabled onClick={this.handleButtonBatal}>Tidak Ada Pesanan!</button>}
          </div>
        </div>
      </Fragment>
    )
  }
}
