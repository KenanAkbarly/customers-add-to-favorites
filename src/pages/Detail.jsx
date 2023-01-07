import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { addToFavDetail } from '../redux/Favorite';

// import { Value } from 'sass'
import './detail.scss'
const Detail = () => {
   const dispatch = useDispatch()
    const {id} = useParams();
    const [data,setData] = useState();
    const [loading ,setLoading] = useState(true)
    console.log(data);
    useEffect(()=>{
        axios
        .get(`https://northwind.vercel.app/api/customers/${id}`)
        .then(res=>{
            setData(res.data)
            console.log(res.data);
            setLoading(false)
        })
    },[])
  return (
    <>
     {
        loading? (<div className='loader_body'><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>):(<div className='detail'>
        <div className='detail_body'>
            <p><span>Customer Company Name:</span><span>{data&&data.companyName}</span></p>
            <p><span>Customer Contact Name:</span><span>{data && data.contactName}</span></p>
            <p><span>Customer Contact Title:</span><span>{data && data.contactTitle}</span></p>
            <p><span>Customer Address:</span><span>{data && data.address.street}</span></p>
            <p><span>Customer Phone:</span><span>{data && data.address.phone}</span></p>
            <p><span>Customer Postal Code:</span><span>{data && data.address.postalCode}</span></p>
            <button onClick={()=>{
      dispatch(addToFavDetail(data))
      console.log('salasm');
      toast.success(`${data&&data.companyName} added to favorites`,{
        position:"bottom-left"
      })
    }}  >Add to favorites</button>
        </div>
        <Link to='/customers'><button className='goBack' >Go Back</button></Link>
       
       </div>)
     }
    </>
    
   
  )
}

export default Detail