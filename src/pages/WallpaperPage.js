import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../App';
import { getImage, deleteImage } from '../actions/image';

const Navbar = React.lazy(() => import('../components/Navbar'));

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
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			const image = await axios.get(`${baseUrl}/images/${props.id}`);
			dispatch(getImage(image.data));
			setImage(image.data);
		};
		fetchData();
	}, [dispatch, props.id, setImage]);

	const favoriteImage = async () => {
		axios.post(`${baseUrl}/image/${props.id}/favorite`, {
			userId: user.id
		});
	};

	const removeImage = async () => {
		axios.delete(`${baseUrl}/images/${props.id}`);
		dispatch(deleteImage(image));
		props.navigate(`/profile/${user.id}/uploads`);
	};

	const isAuthor = user.id === image.authorId;

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Wallpaper
				image={image}
				id={props.id}
				user={!!user}
				author={isAuthor}
				favoriteImage={favoriteImage}
				removeImage={removeImage}
			/>
		</Suspense>
	);
};

export default WallpaperPage;
