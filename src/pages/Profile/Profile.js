import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const Navbar = React.lazy(() => import('../../components/Navbar'));
const ProfileNav = React.lazy(() => import('./ProfileNav'));

const Profile = (props) => {
	return (
		<div className="profile">
			<Navbar />
			<ProfileNav id={props.id} />
			<div className="profile--box" />
		</div>
	);
};

export default Profile;
