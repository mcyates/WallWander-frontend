import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../App';

import TagsView from './TagsView';

export const TagsLogic = (props) => {
	const { id, user } = props;
	const [tags, setTags] = useState([]);

	const [tagText, setTagText] = useState('');
	const [tagNsfw, setTagNsfw] = useState('false');

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
		const fetchTags = async () => {
			const { data } = await axios({
				method: 'get',
				url: `${baseUrl}/images/${id}/tags`
			});

			setTags(data);
		};

		fetchTags();
	}, [id]);
	return <TagsView tags={tags} />;
};

export default TagsLogic;
