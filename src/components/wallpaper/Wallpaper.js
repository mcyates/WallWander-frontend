import React from "react";
import { Link } from "@reach/router";
import Favorite from "./favorites/FavoriteLogic";
import TagsLogic from "./tags/TagsLogic";
import BaseModal from "../BaseModal";

export const Wallpaper = (props) => {
  const { removeImage, wallpaperData } = props;
  const { author, id, image, isAuthed, user } = wallpaperData;

  const urlArr = image.secureUrl.split("/");
  urlArr[6] = "f_auto,h_2560,w_1440,c_limit,q_auto:best";
  const optUrl = urlArr.join("/");

  return (
    <div className="wallpaper">
      <figure className="wallpaper-fig">
        <a className="" href={image.secureUrl}>
          <img className="wallpaper-img" src={optUrl} alt={image.title} />
        </a>
      </figure>

      <div className="wallpaper-box">
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

            <TagsLogic id={id} user={user} />

            {author ? (
              <BaseModal
                buttonStyle="button-danger wallpaper-modal"
                buttonText="Delete"
                canCancel={true}
                contentLabel="Delete confirmation"
              >
                <button className="button-danger" onClick={removeImage}>
                  Delete
                </button>
              </BaseModal>
            ) : (
              <React.Fragment />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
