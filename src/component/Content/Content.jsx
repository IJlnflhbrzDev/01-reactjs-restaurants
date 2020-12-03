import React from 'react';
import imgContent from '../Content/content.jpg'
import { BiCheckDouble } from 'react-icons/bi'
import { Row, Col } from 'reactstrap';

const Content = () => {
  return (
    <section className=" container-fluid" style={{ backgroundColor: '#fffaf3' }}>
      <Row>
        <Col xl="5" md="12" sm="12">
          <div>
            <img src={imgContent} alt="Restaurant" className="img-thumbnail border-0" />
          </div>
        </Col>
        <Col xl="7" md="12" sm="12" className="  pr-5 pl-5">
          <div id="content-description">
            <h3>Eum ipsam laborum deleniti velit pariatur architecto <br /> aut nihil</h3>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit </p>
            <p className="font-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <ul className="mt-4">
              <li>
                <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Duis aute irure dolor in reprehenderit in voluptate velit..</li>
              <li>
                <BiCheckDouble size="20px" style={{ color: ' rgb(255, 176, 59) ', marginRight: '12px' }} />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor riatur...</li>
            </ul>
            <p className="mt-3"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
          </div>

        </Col>
      </Row>
    </section>
  )
}

export default Content;


