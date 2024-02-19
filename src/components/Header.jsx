import React from 'react'
import movie from '../img/1.png'

const Header = ({black}) => {
  return (
	<header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src={movie}></img>
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
            </a>
        </div>
        </header>
  )
}

export default Header