import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <React.Fragment>
            <a href={homepage} className='link'>
              <p>{title} <GitHubIcon /></p>
            </a>
          </React.Fragment>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
