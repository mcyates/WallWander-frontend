import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NameModal from '../components/Profile/NameModal';
import { startSetName } from '../actions/auth';

import '../styles/Profile/Profile.scss';

const Navbar = React.lazy(() => import('../components/Navbar'));

export const Profile = (props) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [visible, setVisible] = useState(false);

	const user = useSelector((state) => state.auth);

	const show = () => {
		setVisible(true);
	};

	const hide = () => {
		setVisible(false);
	};

	const changeName = (e) => {
		e.preventDefault();
		const userInfo = {
			id: user.id,
			email: user.email,
			name
		};
		hide();
		dispatch(startSetName(userInfo));
	};
	return (
		<div className="profile">
			<Navbar />
			<NameModal visible={visible} setName={setName} submit={changeName} />
			<div className="profile--box">
				<h1 className="profile--title">Profile</h1>
				<div className="profile--name">
					<p>
						Username: <span>{user.name}</span>
					</p>
					<button onClick={show} className="btn profile--btn">
						Change Username
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
