import React from 'react';
import { Link } from '@reach/router';

export const Wallpaper = (props) => {
	const { image, author, removeImage } = props;
	const urlArr = image.secureUrl.split('/');
	urlArr[6] = 'f_auto,h_2560,w_1440,c_limit,q_auto:best';
	const optUrl = urlArr.join('/');
	// urlArr[6] = 'f_auto,c_limit';

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
			<p>
				uploader:{' '}
				<Link className="nav--link" to={`/profile/${image.authorId}`}>
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
	);
};

export default Wallpaper;
