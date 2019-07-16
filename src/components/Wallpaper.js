import React from 'react';

export const Wallpaper = ({ image, id }) => {
	return (
		<React.Fragment>
			<figure>
				<img src={image.secureUrl} alt={id} />
			</figure>
			<p>height: {image.height}px</p>
			<p>width: {image.width}px</p>
			<p>format: {image.format}</p>
			<p>Views: {image.views}</p>
		</React.Fragment>
	);
};
