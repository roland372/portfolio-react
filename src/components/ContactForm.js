import React from 'react';
import Title from '../components/Title';

const Contact = () => {
	return (
		<section className='contact-page'>
			<Title title='contact form' />
			<article className='contact-form'>
				<h3>contact me</h3>
				<form action={`https://formspree.io/`} method='POST'>
					<div className='form-group'>
						<input
							type='text'
							name='name'
							placeholder='name'
							className='form-control'
						/>
						<input
							type='email'
							name='email'
							placeholder='email'
							className='form-control'
						/>
						<textarea
							name='message'
							rows='5'
							placeholder='message'
							className='form-control'
						></textarea>
					</div>
					<button type='submit' className='submit-btn btn'>
						submit here
					</button>
				</form>
			</article>
		</section>
	);
};

export default Contact;
