import React from 'react';
import { FaGithub, FaHome } from 'react-icons/fa';

const FeaturedProject = ({
	shortDescription,
	title,
	github,
	stack,
	url,
	image,
	featured,
}) => {
	// only display featured projects
	if (featured) {
		return (
			<article className='single-project'>
				<div className='project-container'>
					<img
						src={image}
						alt='single project'
						className='featured-project-img'
					/>
					<a href={url} className='featured-project-icon'>
						<FaHome />
					</a>
				</div>
				<div className='project-details'>
					<h4>{title}</h4>
					<p>{shortDescription}</p>
					<div className='project-footer'>
						<span>
							<FaGithub className='project-icon' />
						</span>
						<a href={github}>source code</a>
					</div>
					<div className='project-stack'>
						{stack.map(item => {
							return <span key={item.id}>{item.title}</span>;
						})}
					</div>
				</div>
			</article>
		);
	} else {
		return null;
	}
};
export default FeaturedProject;
