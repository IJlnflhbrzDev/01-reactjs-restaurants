import React, { Fragment } from 'react'
import swal from 'sweetalert'

export default function HandleButtonSuccess(props) {
  function HandleClick(e) {
    e.preventDefault();

    swal("Pesanan Behasil!", props.CheckOut, "success");
  }
  return (
    <Fragment>
      <a href="/" onClick={HandleClick} className="btn btn-outline-danger mb-2">Buy Now!</a>
    </Fragment>
  )
}
