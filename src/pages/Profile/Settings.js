import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NameModal from '../../components/Profile/NameModal';
import { startSetName } from '../../actions/auth';

const Navbar = React.lazy(() => import('../../components/Navbar'));
const ProfileNav = React.lazy(() => import('./ProfileNav'));

export const Settings = (props) => {
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
		<React.Fragment>
			<Navbar />
			<NameModal visible={visible} setName={setName} submit={changeName} />
			<ProfileNav uri={props.uri} id={props.id} />
			<div className="settings">
				<div className="settings--name">
					<p>
						<span>{user.name}</span>
					</p>
					<button onClick={show} className="btn settings--btn">
						Change Username
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Settings;
