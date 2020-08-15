import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

import './App.css';
import Layout from './components/Layout';

function App() {
	return (
		<Fragment>
			<Router>
				<Layout>
					<ScrollToTop />
					<Switch>
						<Route exact path='/' render={Home} />
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/projects' render={Projects} />
						<Route exact path='/contact' render={Contact} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Router>
		</Fragment>
	);
}

export default App;

// todo
// not found page
// change displayed page name - home, about, etc.
// make navlinks and sidebar links into component
// add SEO
