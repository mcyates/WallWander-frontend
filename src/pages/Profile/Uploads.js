import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProfileNav from './ProfileNav';
import { useDispatch } from 'react-redux';

import { WallpaperList } from '../../components/WallpaperList';
import { getImages } from '../../actions/image';
import { baseUrl } from '../../App';

const Navbar = React.lazy(() => import('../../components/Navbar'));

export const Uploads = (props) => {
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
		<React.Fragment>
			<Navbar />
			<ProfileNav id={props.id} />
			<p>uploads</p>
			<WallpaperList images={images} />
		</React.Fragment>
	);
};

export default Uploads;
