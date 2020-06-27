import React from "react";

import notFavHeart from "../../../icons/unfav.svg";
import favHeart from "../../../icons/fav.svg";

export const FavoriteView = (props) => {
  const { isFaved, isAuthed, addFavorite, unFavorite } = props;
  return (
    <React.Fragment>
      {isAuthed ? (
        isFaved ? (
          <button
            type="button"
            className="fave-btn btn--svg"
            onClick={unFavorite}
          >
            <img src={favHeart} alt="favorite button" />
          </button>
        ) : (
          <button
            type="button"
            className="fave-btn btn--svg"
            onClick={addFavorite}
          >
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
