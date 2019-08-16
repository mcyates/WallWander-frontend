import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../App';
import { getImage, deleteImage } from '../actions/image';

const Navbar = React.lazy(() => import('../components/Navbar'));

const Wallpaper = React.lazy(() => import('../components/wallpaper/Wallpaper'));

export const WallpaperPage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth);

	const [image, setImage] =
		useState({
			url: '',
			secureUrl: '',
			title: ''
		}) || '';

	const [isFaved, setIsFaved] = useState(false);
	const [tags, setTags] = useState([]);

	const [tagText, setTagText] = useState('');
	const [tagNsfw, setTagNsfw] = useState('false');

	if (!image) {
		props.navigate('/');
	}

	const addFavorite = async () => {
		axios({
			method: 'post',
			url: `${baseUrl}/favorite/${props.id}`,
			headers: { authorization: user.token },
			data: {
				userId: user.id
			}
		})
			.then(() => {
				setIsFaved(true);
			})
			.catch((e) => console.log(e));
	};

	const unFavorite = () => {
		axios({
			method: 'delete',
			headers: { authorization: user.token },
			url: `${baseUrl}/favorite/${props.id}?userId=${user.id}`
		}).then(() => {
			setIsFaved(false);
		});
	};

	const removeImage = async () => {
		axios.delete(`${baseUrl}/images/${props.id}`);
		dispatch(deleteImage(image));
		props.navigate(`/profile/${user.id}/uploads`);
	};

	const addTag = async () => {
		const tag = await axios({
			method: 'post',
			url: `${baseUrl}/images/${props.id}/tags`,
			headers: { authorization: user.token },
			data: {
				tag: tagText,
				nsfw: tagNsfw
			}
		}).catch((e) => console.log(e));
		setTags(...tags, tag);
	};

	useEffect(() => {
		const fetchImage = async () => {
			const image = await axios.get(`${baseUrl}/images/${props.id}`);
			dispatch(getImage(image.data));
			setImage(image.data);
		};
		fetchImage();
	}, [dispatch, props.id, setImage]);

	useEffect(() => {
		const fetchFav = async () => {
			const { data } = await axios({
				method: 'get',
				url: `${baseUrl}/favorite/${props.id}?userId=${user.id}`,
				headers: { authorization: user.token }
			});
			setIsFaved(data);
		};
		fetchFav();
	}, [isFaved, props.id, user.id, user.token]);

	useEffect(() => {
		const fetchTags = async () => {
			const { data } = await axios({
				method: 'get',
				url: `${baseUrl}/images/${props.id}/tags`
			});

			setTags(data);
		};

		fetchTags();
	}, [props.id]);

	const isAuthor = user.id === image.authorId;
	const wallpaperData = {
		author: isAuthor,
		id: props.id,
		image,
		tags,
		user: !!user
	};
	const favoriteData = {
		isFaved,
		unFavorite,
		addFavorite
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navbar />
			<Wallpaper
				wallpaperData={wallpaperData}
				addTag={addTag}
				favoriteData={favoriteData}
				removeImage={removeImage}
			/>
		</Suspense>
	);
};

export default WallpaperPage;
