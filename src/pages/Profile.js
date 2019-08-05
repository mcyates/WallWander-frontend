import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NameModal from '../components/Profile/NameModal';
import { startSetName } from '../actions/auth';

export const Profile = (props) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const user = useSelector((state) => state.auth);
	console.log(user);

	const changeName = (e) => {
		e.preventDefault();
		const userInfo = {
			id: user.id,
			email: user.email,
			name
		};

		dispatch(startSetName(userInfo));
	};
	if (!user.name) {
		return (
			<React.Fragment>
				<NameModal visible={true} setName={setName} submit={changeName} />
				<h1>Profile</h1>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<h1>Profile</h1>
				<p>profile here</p>
			</React.Fragment>
		);
	}
};

export default Profile;
