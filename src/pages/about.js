import React, { Fragment } from 'react';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import AboutMe from '../components/MoreAboutMe';

const About = () => {
	return (
		<Fragment>
			<AboutMe />
			<Skills />
			<Timeline />
		</Fragment>
	);
};

export default About;
