import React from 'react'

export default function Card({title, dis, img, price=0}) {
 
    // const {title, dis, img, price}= props;
 
 return (
<div className="card">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{dis}</p>
    <a href="#" className="btn btn-primary">{price}</a>
  </div>
</div>

  )
}
