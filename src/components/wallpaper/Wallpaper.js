import React from 'react';
import { Link } from '@reach/router';

const Favorite = React.lazy(() => import('./favorites/FavoriteLogic'));
const TagsLogic = React.lazy(() => import('./tags/TagsLogic'));

export const Wallpaper = (props) => {
	const { wallpaperData, removeImage } = props;
	const { author, id, image, isAuthed, user } = wallpaperData;

	const urlArr = image.secureUrl.split('/');
	// urlArr[6] = 'f_auto,h_2560,w_1440,c_limit,q_auto:best';
	urlArr[6] = 'f_auto,h_1920,c_limit,q_auto:best';
	const optUrl = urlArr.join('/');

	return (
		<div className='wallpaper'>
			<div className='wallpaper-sidebar'>
				<div className='wallpaper-container'>
					<div className='wallpaper-info'>
						<p>height: {image.height}px</p>
						<p>width: {image.width}px</p>
						<p>format: {image.format}</p>
						<p>Views: {image.views}</p>
					</div>
					<p className='wallpaper-uploader'>
						uploader:
						<Link className='nav--link' to={`/profile/${image.userId}`}>
							{image.authorName}
						</Link>
					</p>
					<div className='wallpaper-actions'>
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
							<button className='btn btn-danger' onClick={removeImage}>
								Delete
							</button>
						) : (
							<React.Fragment />
						)}
					</div>
				</div>
				<TagsLogic id={id} user={user} />
			</div>
			<div className='wallpaper-fit'>
				<figure className='wallpaper-figure'>
					<a href={image.secureUrl}>
						<img className='wallpaper-img' src={optUrl} alt={image.title} />
					</a>
				</figure>
			</div>
		</div>
	);
};

export default Wallpaper;
