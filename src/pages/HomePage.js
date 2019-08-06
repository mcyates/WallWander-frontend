import React from 'react';
import WallpaperList from '../components/WallpaperList';
const Navbar = React.lazy(() => import('../components/Navbar'));

export const HomePage = () => {
	return (
		<div className="home">
			<Navbar />
			<WallpaperList />
			<footer className="footer">
				Created by Matthew Yates, &copy; {new Date().getFullYear()}
			</footer>
		</div>
	);
};
export default HomePage;
