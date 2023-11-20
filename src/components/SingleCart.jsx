import React, { useEffect } from 'react'
import "./cart.css"
export const SingleCart = (data) => {
    useEffect(()=>{
        console.log(data);
    },[])
  return (
    <div className='container'>
        <div className="cart">
           
            <img src={`https://robohash.org/${data.data.id}?set=set2&size=180x180`} alt="" />
            <h2>{data.data.name}</h2>
            
            <p>{data.data.email}</p>
        </div>
    </div>
  )
}
