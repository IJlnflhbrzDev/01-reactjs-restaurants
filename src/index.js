import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './container/01-Home/Home';
import './index.css';
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

