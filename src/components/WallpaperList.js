import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions } from 'react-stack-grid';
import { useDispatch } from 'react-redux';
import Img from '../components/Img';
import { getImages } from '../actions/image';
import { baseUrl } from '../App';

export const WallpaperList = (props) => {
	const [images, setImages] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/images?limit=20&page=0`);
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
			`${baseUrl}/images?limit=20&page=${selected}`
		);
		const images = data.data;

		dispatch(getImages(images));
		setImages(images);
		setPageCount(data.last_page);
		return;
	};

	const { fadeDown } = transitions;
	return (
		<React.Fragment>
			<StackGrid
				appear={fadeDown.appear}
				monitorImagesLoaded={true}
				columnWidth={props.size.width <= 700 ? 250 : 500}
				gutterHeight={5}
			>
				{images.map((image) => {
					const urlArr = image.secureUrl.split('/');
					urlArr[6] = 'f_auto,w_500,c_limit';
					image.secureUrl = urlArr.join('/');
					return <Img image={image} key={image.title} />;
				})}
			</StackGrid>

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
		</React.Fragment>
	);
};

export default sizeMe()(WallpaperList);
