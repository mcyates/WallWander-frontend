import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import sizeMe from 'react-sizeme';
import StackGrid, { transitions } from 'react-stack-grid';
import Thumb from './Thumb';

import { useDispatch } from 'react-redux';
import { getImages } from '../actions/image';
import { baseUrl } from '../App';

export const WallpaperList = (props) => {
	const [images, setImages] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/images?limit=15&page=0`);
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
			`${baseUrl}/images?limit=15&page=${selected}`
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
				className="grid"
				itemComponent="div"
				gutterHeight={-1}
				appear={fadeDown.appear}
				monitorImagesLoaded={true}
				columnWidth={props.size.width <= 700 ? 250 : 500}
			>
				{images.map((image) => {
					const urlArr = image.secureUrl.split('/');
					urlArr[6] = 'f_auto,w_500,c_limit';
					image.secureUrl = urlArr.join('/');
					return <Thumb image={image} key={image.title} />;
				})}
			</StackGrid>

			{pageCount > 1 ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRangeDisplayed={props.size.width <= 700 ? 2 : 3}
					marginPagesDisplayed={1}
					onPageChange={pageChange}
					activeClassName="pagination--active"
					activeLinkClassName="pagination--active-link"
					breakClassName="pagination--break"
					breakLinkClassName="pagination--break-link"
					containerClassName="pagination"
					disabledClassName="pagination--disabled"
					nextClassName="pagination--next"
					nextLinkClassName="pagination--next-link"
					pageClassName="pagination--page"
					pageLinkClassName="pagination--page-link"
					previousClassName="pagination--previous"
					previousLinkClassName="pagination--previous-link"
				/>
			) : (
				<React.Fragment />
			)}
		</React.Fragment>
	);
};

export default sizeMe()(WallpaperList);
