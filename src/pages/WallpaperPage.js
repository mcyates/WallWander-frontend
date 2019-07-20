import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { baseUrl } from '../App';
import { getImage, deleteImage } from '../actions/image';

// import { Wallpaper } from '../components/Wallpaper';
const Wallpaper = React.lazy(() => import('../components/Wallpaper'));

export const WallpaperPage = (props) => {
	const [image, setImage] =
		useState({
			url: '',
			secureUrl: '',
			title: ''
		}) || '';

	if (!image) {
		props.navigate('/');
	}
	const user = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			const image = await axios.get(`${baseUrl}/images/${props.id}`);
			dispatch(getImage(image.data[0]));
			setImage(image.data[0]);
		};
		fetchData();
	}, [dispatch, props.id, setImage]);

	const removeImage = async () => {
		axios.delete(`${baseUrl}/images/${props.id}`).then((image) => {
			dispatch(deleteImage(image.data));
			console.log(image);
			props.navigate('/');
		});
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<h1>Wallpaper</h1>
			<Wallpaper image={image} id={props.id} />
			{user === image.authorToken ? (
				<button onClick={removeImage}>Delete</button>
			) : (
				<React.Fragment />
			)}
		</Suspense>
	);
};

export default WallpaperPage;
