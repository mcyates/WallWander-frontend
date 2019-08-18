import React from 'react';

import notFavHeart from '../../../icons/001-like.svg';
import favHeart from '../../../icons/002-like-1.svg';

export const FavoriteView = (props) => {
	const { isFaved, isAuthed, addFavorite, unFavorite } = props;
	return (
		<React.Fragment>
			{isAuthed ? (
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

export default FavoriteView;
