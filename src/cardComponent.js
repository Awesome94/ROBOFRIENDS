import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = ({ id, name, email }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 b--dashed grow bw2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?200X200`} />
			<h1>{name}</h1>
			<p>{email}</p>
		</div>
	);
};
export default Card;
