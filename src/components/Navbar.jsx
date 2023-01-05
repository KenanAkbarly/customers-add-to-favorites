import React from 'react'
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import '../components/style.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <img src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/387c850f1455fab.png'/>
      </div>
      <div className='navbar_right'>
        <ul>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/customers'><li>CUSTOMERS</li></Link>
            <Link to='/favorites'><li>FAVORITES</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
