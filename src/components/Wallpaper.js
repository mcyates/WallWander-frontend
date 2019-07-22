import React from 'react';

export const Wallpaper = (props) => {
	const { image, author, removeImage } = props;
	const urlArr = image.secureUrl.split('/');
	// urlArr[6] = 'f_auto,h_1440,w_2560,c_limit,q_auto:best';
	urlArr[6] = 'f_auto,c_limit';

	image.secureUrl = urlArr.join('/');
	return (
		<div className="wallpaper">
			<figure className="wallpaper--figure">
				<img
					className="wallpaper--img"
					src={image.secureUrl}
					alt={image.title}
				/>
				<figcaption className="wallpaper--info">
					<p>height: {image.height}px</p>
					<p>width: {image.width}px</p>
					<p>format: {image.format}</p>
					<p>Views: {image.views}</p>
					{author ? (
						<button className="btn btn-danger" onClick={removeImage}>
							Delete
						</button>
					) : (
						<React.Fragment />
					)}
				</figcaption>
			</figure>
		</div>
	);
};

export default Wallpaper;
