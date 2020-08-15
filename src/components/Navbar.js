import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../static/logo.svg';

const navActiveLink = { color: '#0066ff', fontWeight: 'bold' };

const Navbar = ({ toggleSidebar }) => {
	const [navClass, setNavClass] = React.useState('nav');
	const handleScroll = () => {
		let scrollTop = window.scrollY;
		scrollTop > 0 ? setNavClass('nav navbar-fixed') : setNavClass('nav');
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={navClass} id='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					{/* <img src={logo} className='nav-logo' alt='nav logo' /> */}
					<div></div>
					<button className={'nav-btn'} onClick={toggleSidebar} id='nav-btn'>
						<i className='fas fa-bars'></i>
					</button>
				</div>
				<ul className='nav-links'>
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
			</div>
		</nav>
	);
};

export default Navbar;
