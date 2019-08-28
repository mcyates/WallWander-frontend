import React from 'react';
import { Link } from '@reach/router';
import Image from 'react-lazy-image';

export const Thumb = ({ image }) => {
	return (
		<Link className="thumb" to={`/wallpapers/${image.id}`}>
			<figure className="thumb--fig">
				<Image
					className="thumb--img"
					source={image.secureUrl}
					defaultSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUYIz6DwACQAF8ntZl+wAAAABJRU5ErkJggg=="
					offset={1000}
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

export default Thumb;
