import React, { Component, Fragment } from 'react'

export default class IntegrateMaps extends Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.9944976599204!2d107.0854571!3d-6.2644527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f9325bf1061%3A0x27cdbdd58bcac8d4!2sJl.%20Nona%20Merah%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1607063409072!5m2!1sid!2sid'
    }
  }

  render() {
    return (
      <Fragment>
        <iframe key={this.state.id}
          title="this is a unique title "
          src={this.state.src}
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </Fragment>
    )
  }
}
