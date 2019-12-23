import React from "react";
import { Link } from "@reach/router";
import Favorite from "./favorites/FavoriteLogic";
import TagsLogic from "./tags/TagsLogic";
import DeleteModal from "./DeleteModal";

export const Wallpaper = props => {
  const { hide, show, removeImage, visible, wallpaperData } = props;
  const { author, id, image, isAuthed, user } = wallpaperData;

  const urlArr = image.secureUrl.split("/");
  urlArr[6] = "f_auto,h_2560,w_1440,c_limit,q_auto:best";
  const optUrl = urlArr.join("/");

  return (
    <div className="container flex flex-col items-center md:items-start md:flex-row max-w-full h-auto justify-center">
      <DeleteModal hide={hide} removeImage={removeImage} visible={visible} />
      <figure className="mx-8 my-8 md:my-0">
        <a className="focus:border-none outline-none" href={image.secureUrl}>
          <img className="wallpaper-img" src={optUrl} alt={image.title} />
        </a>
      </figure>

      <div className="flex flex-col justify-between max-w-xl items-center ml-2 bg-gray-800 shadow p-6 rounded">
        <div className="wallpaper-container ">
          <div className="wallpaper-info">
            <p>height: {image.height}px</p>
            <p>width: {image.width}px</p>
            <p>format: {image.format}</p>
            <p>Views: {image.views}</p>
          </div>
          <p className="wallpaper-uploader">
            uploader:
            <Link className="nav-link" to={`/profile/${image.authorId}`}>
              {image.authorName}
            </Link>
          </p>
          <div className="wallpaper-actions">
            {author ? (
              <React.Fragment />
            ) : (
              <Favorite
                id={id}
                userId={user.id}
                user={user}
                isAuthed={isAuthed}
              />
            )}

            {author ? (
              <button type="button" onClick={show} className="btn btn-danger">
                Delete
              </button>
            ) : (
              <React.Fragment />
            )}
            <TagsLogic id={id} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
