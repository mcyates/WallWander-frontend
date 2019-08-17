import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../App';

import TagsView from './TagsView';

export const TagsLogic = (props) => {
	const { id, user } = props;
	const [tags, setTags] = useState([]);

	const [tagText, setTagText] = useState('');
	const [tagNsfw, setTagNsfw] = useState(false);

	const addTag = async (e) => {
		e.preventDefault();

		if (tagNsfw === 'sfw') {
			setTagNsfw(false);
		} else if (tagNsfw === 'nsfw') {
			setTagNsfw(true);
		}
		const tag = await axios
			.post(
				`${baseUrl}/images/${id}/tags`,
				{
					tag: tagText,
					nsfw: tagNsfw
				},
				{
					headers: { authorization: user.token }
				}
			)
			.catch((e) => console.log(e));
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
	}, [id, setTags]);
	return (
		<TagsView
			tags={tags}
			setTagNsfw={setTagNsfw}
			setTagText={setTagText}
			submit={addTag}
		/>
	);
};

export default TagsLogic;
