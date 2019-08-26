import React, { useState } from 'react';
import { navigate } from '@reach/router';

import searchSVG from '../../icons/search.svg';

export const Search = (props) => {
	const [searchText, setSearchText] = useState('');

	const search = (e) => {
		e.preventDefault();
		if (searchText === '') {
			return;
		}
		let tags = searchText.split(' ');
		tags = tags.join('+');
		setSearchText('');
		navigate(`/wallpapers/search/?tags=${tags}`);
	};

	return (
		<form className='search' onSubmit={search}>
			<input
				className='search-input'
				onChange={(e) => setSearchText(e.target.value)}
				placeholder='Search'
				required
				type='text'
			/>
			<button className='btn-search'>
				<img src={searchSVG} alt='search button' />
			</button>
		</form>
	);
};

export default Search;
