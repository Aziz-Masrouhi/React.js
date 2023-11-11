import React from 'react'
import logo from '../images/logo.png'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="flore" />
      <ul>
        <li id='x'>Titre du site</li>
        <li id='y'>Notre slogan</li>
      </ul>
    </div>
  )
}
