import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { format, parse } from 'date-fns';

import { baseUrl } from '../../App';

const Navbar = React.lazy(() => import('../../components/Navbar'));
const ProfileNav = React.lazy(() => import('./ProfileNav'));

const Profile = (props) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`${baseUrl}/users/${props.id}`);
			let parsed = parse(data[0].createdAt);
			let formatted = format(parsed, 'MMM Do, YYYY');
			data[0].createdAt = formatted;
			setUser(data[0]);
			return;
		};
		fetchData();
		return;
	}, [props.id]);

	return (
		<div className="profile">
			<Navbar />
			<ProfileNav uri={props.uri} id={props.id} />
			<div className="profile--box">
				<p>{user.name}</p>
				<p>Joined: {user.createdAt}</p>
				<p>uploads: {user.uploads}</p>
			</div>
		</div>
	);
};

export default Profile;
