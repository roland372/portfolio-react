import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
			<div>
				<button className='close-btn' id='close-btn' onClick={toggleSidebar}>
					<i className='fas fa-times'></i>
				</button>
				<ul className='sidebar-links' onClick={toggleSidebar}>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/about'>about</Link>
					</li>
					<li>
						<Link to='/projects'>projects</Link>
					</li>
					<li>
						<Link to='/contact'>contact</Link>
					</li>
				</ul>
				<div>
					<SocialLinks styleClass='social-icons' />
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
