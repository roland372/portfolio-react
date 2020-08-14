import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Footer = () => {
	return (
		<footer className='footer'>
			<div>
				<SocialLinks styleClass='social-icons'></SocialLinks>
			</div>
			<p>&copy; {new Date().getFullYear()} Roland. all rights reserved</p>
		</footer>
	);
};

export default Footer;
