import React from 'react';
import Image from 'react-lazy-image';

export const Wallpaper = ({ image, id }) => {
	return (
		<React.Fragment>
			<figure>
				<Image source={image.secureUrl} alt={image.title} />
			</figure>
			<p>height: {image.height}px</p>
			<p>width: {image.width}px</p>
			<p>format: {image.format}</p>
			<p>Views: {image.views}</p>
		</React.Fragment>
	);
};
