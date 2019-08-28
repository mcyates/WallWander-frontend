import React from 'react';
import Image from 'react-lazy-image';
import { Link } from '@reach/router';

const Favorite = React.lazy(() => import('./favorites/FavoriteLogic'));
const TagsLogic = React.lazy(() => import('./tags/TagsLogic'));
const DeleteModal = React.lazy(() => import('./DeleteModal'));

export const Wallpaper = (props) => {
	const { hide, show, removeImage, visible, wallpaperData } = props;
	const { author, id, image, isAuthed, user } = wallpaperData;

	const urlArr = image.secureUrl.split('/');
	urlArr[6] = 'f_auto,h_2560,w_1440,c_limit,q_auto:best';
	const optUrl = urlArr.join('/');

	return (
		<div className="wallpaper">
			<DeleteModal hide={hide} removeImage={removeImage} visible={visible} />
			<div className="wallpaper-fit">
				<figure className="wallpaper-figure">
					<a href={image.secureUrl}>
						<img className="wallpaper-img" src={optUrl} alt={image.title} />
						<Image
							className="wallpaper-img"
							source={optUrl}
							alt={image.title}
							defaultSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUYIz6DwACQAF8ntZl+wAAAABJRU5ErkJggg=="
						/>
					</a>
				</figure>
			</div>

			<div className="wallpaper-sidebar">
				<div className="wallpaper-container">
					<div className="wallpaper-info">
						<p>height: {image.height}px</p>
						<p>width: {image.width}px</p>
						<p>format: {image.format}</p>
						<p>Views: {image.views}</p>
					</div>
					<p className="wallpaper-uploader">
						uploader:
						<Link className="nav--link" to={`/profile/${image.userId}`}>
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
							<button onClick={show} className="btn btn-danger">
								Delete
							</button>
						) : (
							<React.Fragment />
						)}
					</div>
				</div>

				<TagsLogic id={id} user={user} />
			</div>
		</div>
	);
};

export default Wallpaper;
