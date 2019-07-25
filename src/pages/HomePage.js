import React from 'react';
import WallpaperList from '../components/WallpaperList';

export const HomePage = () => {
	return (
		<React.Fragment>
		<WallpaperList />
		<footer>
		Created by Matthew Yates, &copy; {new Date().getFullYear()}
		</footer>
		</React.Fragment>
		 );
};
export default HomePage;
