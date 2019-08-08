import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

export const ProfileNav = (props) => {
	const user = useSelector((state) => state.auth);

	return (
		<nav role="navigation" className="p-nav">
			<div className="p-nav-box">
				<Link className="p-nav-link" to={`/profile/${user.id}`}>
					Profile
				</Link>
				<Link className="p-nav-link" to={`/profile/${user.id}/uploads`}>
					Uploads
				</Link>
				{props.id === user.id ? (
					<Link className="p-nav-link" to={`/profile/${user.id}/settings`}>
						Settings
					</Link>
				) : (
					<React.Fragment />
				)}
			</div>
		</nav>
	);
};

export default ProfileNav;
