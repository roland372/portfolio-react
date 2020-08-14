import React from 'react';
import Projects from '../components/Projects';
import projects from '../constants/projects';

const ProjectsPage = () => {
	return (
		<section className='projects-page'>
			<Projects projects={projects} title='all projects' />
		</section>
	);
};

export default ProjectsPage;
