import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from 'react-lazy-image';
import Masonry from 'react-masonry-component';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';

import { getImages } from '../actions/image';
import { baseUrl } from '../App';

export const WallpaperList = (props) => {
	const [images, setImages] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/images?limit=5&page=0`);
			const images = data.data;
			dispatch(getImages(images));
			setImages(images);
			setPageCount(data.last_page);
			return;
		};
		fetchData();
		return;
	}, [dispatch]);

	const pageChange = async ({ selected }) => {
		const { data } = await axios.get(
			`${baseUrl}/images?limit=5&page=${selected}`
		);
		const images = data.data;

		dispatch(getImages(images));
		setImages(images);
		setPageCount(data.last_page);
		return;
	};

	return (
		<section>
			<p>wallpapers!</p>
			<Masonry>
				{images.map((image) => {
					const urlArr = image.secureUrl.split('/');
					urlArr[6] = 'f_auto,c_fit,h_400,w_500';
					image.secureUrl = urlArr.join('/');
					return (
						<Link to={`/wallpapers/${image.id}`} key={image.title}>
							<Image source={image.secureUrl} alt={image.title} />
						</Link>
					);
				})}
			</Masonry>

			{pageCount > 1 ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRangeDisplayed={5}
					marginPagesDisplayed={3}
					onPageChange={pageChange}
				/>
			) : (
				<React.Fragment />
			)}
		</section>
	);
};
