import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const navActiveLink = { color: '#0066ff', fontWeight: 'bold' };

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
			<div>
				<button className='close-btn' id='close-btn' onClick={toggleSidebar}>
					<i className='fas fa-times'></i>
				</button>
				<ul
					className={`${isOpen ? 'sidebar-links' : ''} `}
					onClick={toggleSidebar}
				>
					<li>
						<NavLink activeStyle={navActiveLink} exact to='/'>
							home
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={navActiveLink} to='/about'>
							about
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={navActiveLink} to='/projects'>
							projects
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={navActiveLink} to='/contact'>
							contact
						</NavLink>
					</li>
				</ul>
				<div>
					<SocialLinks
						styleClass={`${
							isOpen ? 'sidebar-icons social-icons' : 'social-icons'
						} `}
					/>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
