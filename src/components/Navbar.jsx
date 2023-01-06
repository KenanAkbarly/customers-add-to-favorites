import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import '../components/style.scss'
import { useSelector } from 'react-redux';
const Navbar = () => {
  // const items = useSelector(state=> state.favorite.favTotalQuantity);
  // console.log(items);
  const selectorData =  useSelector(state=>state.cart.favItems.length)
  const[favorite,setFavorite]=useState(0);

  useEffect(() => {
    setFavorite(selectorData);
  }, [setFavorite,selectorData,favorite])

  return (
    <div className='navbar'>
      <div className='navbar_left'>
        
        <Link to='/'><img src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/387c850f1455fab.png'/></Link>
      </div>
      <div className='navbar_right'>
        <ul>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/customers'><li>CUSTOMERS</li></Link>
            <Link to='/favorites'><li className='favorite'>FAVORITES <div className='favorite_number'>{favorite}</div></li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
