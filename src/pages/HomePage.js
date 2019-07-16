import React from 'react';
import { Link } from '@reach/router';
import { WallpaperList } from '../components/WallpaperList';

export const HomePage = () => {
	return (
		<React.Fragment>
			<header>
				<div>aa</div>
			</header>
			<main>
				<Link to="/upload">Upload</Link>

				<WallpaperList />
			</main>
		</React.Fragment>
	);
};
export default HomePage;
