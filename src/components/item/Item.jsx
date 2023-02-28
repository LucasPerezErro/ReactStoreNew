import React, { useState } from 'react';
import "./item.css";
import Button, { ButtonChild } from '../button/Button';
import ToggleButton from '../toggleButton/ToggleButton';

import { Link } from "react-router-dom";


function Item(props) {
  //destructuracion
  const { id, title, price, detail, imgurl, discount } = props;
  const urlDetail = `/item/${id}`
  return (
    <>
      <div className="card">
        <Link to={urlDetail}>
          <div className="card-header">
            <ToggleButton icon="🧪" />
            <img width="260" src={imgurl} alt="" />
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{detail}</p>
          <h4>$ {price}</h4>
          {
          discount && <span>Descuento: {discount}%</span>
          }
          <br />
          <Link to={urlDetail}>
            <ButtonChild>Ver más</ButtonChild>
          </Link>
        </div>
      </div>


    </>

  )
}

export default Item;