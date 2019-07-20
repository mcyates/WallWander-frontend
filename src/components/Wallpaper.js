import React from 'react';

export const Wallpaper = ({ image }) => {
	return (
		<div className="wallpaper">
			<figure className="wallpaper--figure">
				<img
					className="wallpaper--img"
					src={image.secureUrl}
					alt={image.title}
				/>
			</figure>
			<div className="wallpaper--info">
				<p>height: {image.height}px</p>
				<p>width: {image.width}px</p>
				<p>format: {image.format}</p>
				<p>Views: {image.views}</p>
			</div>
		</div>
	);
};

export default Wallpaper;
