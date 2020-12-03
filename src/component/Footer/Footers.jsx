import React from 'react'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


export default function Footers() {
  return (
    <footer className="mt-5 ">
      <div className="card border-0" style={{ backgroundColor: '#35322d', color: 'white' }}>
        <div className="card-body text-center mb-4">
          <h5 className="card-title" style={{ color: '#ffb03b' }}>Delicious</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <div className="icons_footer d-flex justify-content-evenly w-50 " style={{ margin: '50px auto 0 auto' }}>
            <Tooltip title="Add Facebook Me">
              <IconButton aria-label="@Facebook Me ">
                <a href=" https://www.facebook.com/Profesor.opal.new">
                  <FaFacebook style={{ cursor: 'pointer' }} color=" white" size="25px" />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="ijlnflhbrz@gmail.com">
              <IconButton aria-label="ijlnflhbrz@gmail.com">
                <a href="https://www.instagram.com/ijlnflhbrz/">
                  <MdEmail style={{ cursor: 'pointer' }} color=" white" size="25px" />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Follow Me!">
              <IconButton aria-label="@Follow Me!">
                <a href="https://www.instagram.com/ijlnflhbrz/">
                  <FaInstagram style={{ cursor: 'pointer' }} color=" white" size="25px" />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Follow Me!">
              <IconButton aria-label="@Follow Me!">
                <a href="https://github.com/IJlnflhbrzDev">
                  <FaGithub style={{ cursor: 'pointer' }} color=" white" size="25px" />
                </a>
              </IconButton>
            </Tooltip>

          </div>
        </div>
      </div>
    </footer>
  )
}
