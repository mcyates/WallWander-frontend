import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getImages } from '../actions/image';
import { baseUrl } from '../App';

import WallpaperList from '../components/wallpaper/WallpaperList';
const Navbar = React.lazy(() => import('../components/Navbar'));

export const HomePage = () => {
	const [images, setImages] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/images?limit=15&page=0`);
			const images = data.data;
			dispatch(getImages(images));
			setImages(images);
			return;
		};
		fetchData();
		return;
	}, [dispatch]);

	return (
		<div className="home">
			<Navbar />
			<WallpaperList images={images} />
			<footer className="footer">
				Created by Matthew Yates, &copy; {new Date().getFullYear()}
			</footer>
		</div>
	);
};
export default HomePage;
