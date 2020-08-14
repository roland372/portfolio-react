import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import About_img from '../static/about-img.jpeg';

const AboutMe = () => {
	return (
		<Fragment>
			<section className='section about'>
				<div className='section-center about-center'>
					<article className='about-img'>
						<img src={About_img} className='hero-photo' alt='about img' />
					</article>
					<article className='about-info'>
						<div className='section-title about-title'>
							<h2>about me</h2>
							<div className='underline'></div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste
							amet reiciendis possimus rerum omnis recusandae molestias error
							consequuntur, doloribus inventore reprehenderit officiis. Dolore
							aut, repellendus eius fugiat numquam cumque.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste
							amet reiciendis possimus rerum omnis recusandae molestias error
							consequuntur, doloribus inventore reprehenderit officiis. Dolore
							aut, repellendus eius fugiat numquam cumque.
						</p>
						<Link to='/about' className='btn'>
							more
						</Link>
					</article>
				</div>
			</section>
		</Fragment>
	);
};

export default AboutMe;
