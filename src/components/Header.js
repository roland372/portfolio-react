import React from 'react';

import { Link } from 'react-router-dom';
// import Avatar from '../static/hero-img.jpeg';
import Avatar from '../static/hero-img.png';
import SocialLinks from '../components/SocialLinks';

const Header = () => {
	return (
		<header className='hero'>
			<div className='section-center hero-center'>
				<article className='hero-info'>
					<div className='underline'></div>
					<h1>i'm roland</h1>
					<h4>computer science student & frontend web developer</h4>
					<Link to='/contact' className='btn hero-btn'>
						contact me
					</Link>
					<SocialLinks styleClass='social-icons hero-icons' />
				</article>
				<article className='hero-img'>
					<img src={Avatar} className='hero-photo' alt='john doe' />
				</article>
			</div>
		</header>
	);
};

export default Header;
