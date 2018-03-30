import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <h1> This is awesome"</h1>
      <img alt="robots" src='https://robohash.org/awesome?200X200'/>
      <h1>Jane doe</h1>
      <p>Jane.doe@email.com</p>
    </div>
  )
}

export default Card;
