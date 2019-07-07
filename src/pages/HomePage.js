import React from 'react';
import { Link } from '@reach/router';

export const HomePage = () => {
	return (
		<React.Fragment>
			<header>
				<div>aa</div>
			</header>
			<main>
				<Link to="/upload">Upload</Link>
			</main>
		</React.Fragment>
	);
};
export default HomePage;
