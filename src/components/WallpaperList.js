import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';

import { getImages } from '../actions/image';
import { baseUrl } from '../App';

export const WallpaperList = (props) => {
	const [images, setImages] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			const images = await axios.get(`${baseUrl}/images`);
			dispatch(getImages(images.data));
			setImages(images.data);
		};
		fetchData();
		return;
	}, [dispatch]);
	return (
		<section>
			<p>wallpapers!</p>
			{images.map((image) => {
				const urlArr = image.secureUrl.split('/');
				urlArr[6] = 'c_fit,h_200,w_250';
				image.secureUrl = urlArr.join('/');
				console.log(image.secureUrl);

				return (
					<Link to={`/wallpapers/${image.id}`} key={image.title}>
						<figure>
							<img src={image.secureUrl} alt={image.title} />
						</figure>
					</Link>
				);
			})}
		</section>
	);
};
