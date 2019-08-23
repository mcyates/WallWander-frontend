import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../App';

import FavoriteView from './FavoriteView';

export const Favorite = (props) => {
	const { author, id, user, isAuthed } = props;

	const [isFaved, setIsFaved] = useState(false);

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
			url: `${baseUrl}/favorite/${id}?userId=${user.id}`
		}).then(() => {
			setIsFaved(false);
		});
	};
	useEffect(() => {
		if (author === false && isAuthed === true) {
			const fetchFav = async () => {
				const { data } = await axios({
					method: 'get',
					url: `${baseUrl}/favorite/${id}?userId=${user.id}`,
					headers: { authorization: user.token }
				});
				setIsFaved(data);
			};
			fetchFav();
		}
	}, [author, id, isAuthed, setIsFaved, user.id, user.token]);

	return (
		<FavoriteView
			author={author}
			isAuthed={isAuthed}
			isFaved={isFaved}
			addFavorite={addFavorite}
			unFavorite={unFavorite}
		/>
	);
};

export default Favorite;
