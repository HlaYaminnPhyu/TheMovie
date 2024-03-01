import React from 'react'
import movie from '../img/0.png'
import {RiMovie2Line} from 'react-icons/ri'

const Header = ({black}) => {
  return (
	<header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src={movie} className=''></img>
            </a>
        </div>
        <div className="header--user">
            <a href="/">
            <RiMovie2Line className=' text-3xl text-[#e13100]'/>
            </a>
        </div>
        </header>
  )
}

export default Header