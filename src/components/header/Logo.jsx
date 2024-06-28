import React from 'react'
import { Link } from 'react-router-dom' 

const Logo = ({toggleMenu}) => {
  return (
        <h1 className='header_logo'>
          <Link>
            <em aria-hidden='true' onClick={toggleMenu}></em>
            <span>DS<br/>youtube </span>
          </Link>
        </h1>
  )
}

export default Logo
