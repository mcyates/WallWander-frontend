import React from 'react';
import { Link } from '@reach/router';
import Image from 'react-lazy-image';

export const Img = ({ image }) => {
	return (
		<Link className="thumb" to={`/wallpapers/${image.id}`} key={image.title}>
			<figure>
				<Image
					className="thumb--img"
					source={image.secureUrl}
					alt={image.title}
				/>
				<figcaption className="thumb--info">
					<p>
						{image.width}x{image.height}
					</p>
					<p>{image.views} views</p>
				</figcaption>
			</figure>
		</Link>
	);
};

export default Img;
