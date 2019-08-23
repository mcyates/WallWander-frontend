import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WallpaperList from '../components/wallpaper/WallpaperList';

import { baseUrl } from '../App';

const Navbar = React.lazy(() => import('../components/Navbar'));

export const SearchPage = (props) => {
	const { search } = props.location;
	const [images, setImages] = useState([]);
	const [paginationData, setPaginationData] = useState({});
	const [tags, setTags] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let { data } = await axios.get(
				`${baseUrl}/search/${search}&limit=15&page=0`
			);
			const images = data.imgs.data;
			setImages(images);
			setPaginationData({
				lastPage: data.imgs.last_page,
				currentPage: data.imgs.current_page
			});
			setTags(...data.tags);
		};
		fetchData();
	}, [props.location.search, search]);

	return (
		<React.Fragment>
			<Navbar />
			<h3>{tags}</h3>
			<WallpaperList
				images={images}
				setImages={setImages}
				pageChangeUrl={`${baseUrl}/search/${search}`}
				paginationData={paginationData}
			/>
		</React.Fragment>
	);
};

export default SearchPage;