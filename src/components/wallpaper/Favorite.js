import React from 'react';

import notFavHeart from '../../icons/001-like.svg';
import favHeart from '../../icons/002-like-1.svg';

export const Favorite = (props) => {
	const { author, user, favoriteData } = props;
	const { isFaved, addFavorite, unFavorite } = favoriteData;

	return (
		<React.Fragment>
			{!author && user ? (
				isFaved ? (
					<button className="btn btn--svg" onClick={unFavorite}>
						<img src={favHeart} alt="favorite button" />
					</button>
				) : (
					<button className="btn btn--svg" onClick={addFavorite}>
						<img src={notFavHeart} alt="favorite button" />
					</button>
				)
			) : (
				<React.Fragment />
			)}
		</React.Fragment>
	);
};

export default Favorite;
