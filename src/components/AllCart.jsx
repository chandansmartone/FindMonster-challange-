import React, { useEffect } from 'react';
import { SingleCart } from './SingleCart';
import "./cart.css"
export const AllCart = (props) => {
    useEffect(()=>{
        console.log(props);
    })
  return (
    <div className='eno'>
      {props.data?props.data.map(data=>{
        return <SingleCart data={data} key={data.id}/>
      }):""}
    </div>
  )
}

