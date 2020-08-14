import React, { Fragment } from 'react';
import Header from '../components/Header';
import Contact from './contact';
import AboutMe from '../components/AboutMe';
import projects from '../constants/projects';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<AboutMe />
			<FeaturedProjects
				projects={projects}
				title='featured projects'
				showLink
			/>
			<Contact />
		</Fragment>
	);
};

export default Home;
