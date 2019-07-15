import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetImage } from '../actions/image';
import { Wallpaper } from '../components/Wallpaper';

export const WallpaperPage = (props) => {
	const dispatch = useDispatch();
	const images = useSelector((state) => state.images);

	// dispatch(startGetImage(props.id));

	return (
		<div on>
			<h1>Wallpaper</h1>
			<Wallpaper id={props.id} />
		</div>
	);
};

export default WallpaperPage;
