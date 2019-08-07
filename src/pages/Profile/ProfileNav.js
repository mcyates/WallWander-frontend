import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

export const ProfileNav = (props) => {
	const user = useSelector((state) => state.auth);
	return (
		<div>
			<Link to={`/profile/${user.id}`}>Profile</Link>
			<Link to={`/profile/${user.id}/uploads`}>Uploads</Link>
			{props.id === user.id ? (
				<Link to={`/profile/${user.id}/settings`}>Settings</Link>
			) : (
				<React.Fragment />
			)}
		</div>
	);
};

export default ProfileNav;
