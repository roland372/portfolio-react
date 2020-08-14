import React, { Fragment } from 'react';
import Title from './Title';
import FeaturedProject from './FeaturedProject';
import { Link } from 'react-router-dom';

const FeaturedProjects = ({ projects, title, showLink }) => {
	return (
		<Fragment>
			<section className='section'>
				<Title title={title} />
				<div className='section-center projects-page-center'>
					{projects.map((project, index) => {
						return (
							<FeaturedProject key={project.id} index={index} {...project} />
						);
					})}
				</div>
				{showLink ? (
					<Link to='/projects' className='btn center-btn'>
						all projects
					</Link>
				) : null}
			</section>
		</Fragment>
	);
};

export default FeaturedProjects;
