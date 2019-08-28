import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNsfw } from '../../actions/search';

import searchSVG from '../../icons/search.svg';

export const Search = (props) => {
	const [searchText, setSearchText] = useState('');
	const dispatch = useDispatch();

	const searchFilters = useSelector((state) => state.search);

	const search = (e) => {
		e.preventDefault();
		if (searchText === '') {
			return;
		}
		let tags = searchText.split(' ');
		tags = tags.join('+');
		setSearchText('');
		props.navigate(`/wallpapers/search/?tags=${tags}`);
	};

	const handleNsfwFilter = (e) => {
		e.preventDefault();

		dispatch(setNsfw(!searchFilters.nsfw));
	};

	return (
		<form className="search" onSubmit={search}>
			<button
				className={`search-adult search-${searchFilters.nsfw ? 'nsfw' : 'sfw'}`}
				onClick={handleNsfwFilter}
				type="button"
			>
				{searchFilters.nsfw ? 'nsfw' : 'sfw'}
			</button>
			<input
				className="search-input"
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="Search"
				type="text"
			/>
			<button type="submit" className="btn-search">
				<img src={searchSVG} alt="search button" />
			</button>
		</form>
	);
};

export default Search;
