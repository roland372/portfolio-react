import React from 'react';

// accept title prop
const Title = ({ title }) => {
	// and render
	return (
		<div className='section-title'>
			<h2>
				{title ||
					// if title doesn't exist use default title
					'default title'}
			</h2>
			<div className='underline'></div>
		</div>
	);
};

export default Title;
