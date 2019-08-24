import React from 'react';
import { Link } from '@reach/router';

const Favorite = React.lazy(() => import('./favorites/FavoriteLogic'));
const TagsLogic = React.lazy(() => import('./tags/TagsLogic'));

export const Wallpaper = (props) => {
	const { wallpaperData, removeImage } = props;
	const { author, id, image, isAuthed, user } = wallpaperData;

	const urlArr = image.secureUrl.split('/');
	urlArr[6] = 'f_auto,h_2560,w_1440,c_limit,q_auto:best';
	const optUrl = urlArr.join('/');

	return (
		<div className="wallpaper">
			<figure className="wallpaper--figure">
				<a href={image.secureUrl}>
					<img className="wallpaper--img" src={optUrl} alt={image.title} />
					<figcaption className="wallpaper--info">
						<p>height: {image.height}px</p>
						<p>width: {image.width}px</p>
						<p>format: {image.format}</p>
						<p>Views: {image.views}</p>
					</figcaption>
				</a>
			</figure>

			<div className="wallpaper--misc">
				<TagsLogic id={id} user={user} />

				<div>
				{author ? (
					<React.Fragment />
				) : (
					<Favorite id={id} userId={user.id} user={user} isAuthed={isAuthed} />
				)}
				
				<p className="wallpaper--uploader">
				uploader:
				<Link className="nav--link" to={`/profile/${image.userId}`}>
				{image.authorName}
				</Link>
				</p>
				
				{author ? (
					<button className="btn btn-danger" onClick={removeImage}>
						Delete
						</button>
						) : (
							<React.Fragment />
							)}
							</div>
							</div>
		</div>
	);
};

export default Wallpaper;
