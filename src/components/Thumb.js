import React from 'react';
import { Link } from '@reach/router';
import Image from 'react-lazy-image';

export const Thumb = ({ image }) => {
	return (
		<Link className="thumb" to={`/wallpapers/${image.id}`} key={image.title}>
			<figure>
				<Image
					className="thumb--img"
					source={image.secureUrl}
					defaultSource="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
					offset={50}
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
