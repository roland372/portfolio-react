import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<main className='error-page'>
			<div className='error-container'>
				<h1>404 error</h1>
				{/* <h2>This page doesn't exist</h2> */}
				<Link to='/' className='btn'>
					return to main page
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
