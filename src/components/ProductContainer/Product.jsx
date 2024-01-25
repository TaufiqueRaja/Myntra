import React from 'react'
import './Product.css'
import { useEffect, useState } from 'react'

export default function Product({path , text}) {

  const [image,setImage] = useState([]);
useEffect(()=>{
  fetch(`https://myntra-6568-api.onrender.com/${path}`)
  .then(res=>res.json())
  .then(data=>{setImage(data)})

},[])

  return (
<>
    <div>
      <h1 className='DealHeading'>{text}</h1>
      <div className='image-conatiner' style={{gridTemplateColumns:`repeat(${Math.min(image.length,8)},1fr)`}}>
          {image.map((url,key)=><img key={key} src={url}/>) 
          }
      </div>
    </div>
    </>
  )
}
