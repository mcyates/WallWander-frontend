import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Link } from '@reach/router';
import { useDispatch } from 'react-redux';

import { getImages } from '../actions/image';
import { baseUrl } from '../App';

export const WallpaperList = (props) => {
	const [images, setImages] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/images?limit=2&page=0`);
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
			`${baseUrl}/images?limit=2&page=${selected}`
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
			{images.map((image) => {
				const urlArr = image.secureUrl.split('/');
				urlArr[6] = 'c_fit,h_200,w_250';
				image.secureUrl = urlArr.join('/');

				return (
					<Link to={`/wallpapers/${image.id}`} key={image.title}>
						<figure>
							<img src={image.secureUrl} alt={image.title} />
						</figure>
					</Link>
				);
			})}
			{pageCount > 1 ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRangeDisplayed={5}
					marginPagesDisplayed={2}
					onPageChange={pageChange}
				/>
			) : (
				<React.Fragment />
			)}
		</section>
	);
};
