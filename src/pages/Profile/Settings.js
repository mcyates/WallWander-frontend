import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NameModal from '../../components/Profile/NameModal';
import { startSetName } from '../../actions/auth';
import { setNsfw } from '../../actions/search';

const Navbar = React.lazy(() => import('../../components/Navbar'));
const ProfileNav = React.lazy(() => import('./ProfileNav'));

export const Settings = (props) => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth);

	const search = useSelector((state) => state.search);

	const [visible, setVisible] = useState(false);
	const [name, setName] = useState('');

	const show = () => {
		setVisible(true);
	};

	const hide = () => {
		setVisible(false);
	};

	useEffect(() => {
		if (user.name === '') {
			show();
		}
	}, [user.name]);

	const changeName = (e) => {
		e.preventDefault();
		const userInfo = {
			id: user.id,
			email: user.email,
			token: user.token,
			name
		};
		hide();
		dispatch(startSetName(userInfo));
	};

	const handeNsfwChange = (e) => {
		e.preventDefault();
		dispatch(setNsfw(!search.nsfw));
	};
	return (
		<div className="settings">
			<NameModal
				visible={visible}
				setName={setName}
				submit={changeName}
				hide={hide}
			/>
			<Navbar />
			<ProfileNav uri={props.uri} id={props.id} />
			<div className="settings-box">
				<div className="settings-name">
					<p>
						<span>{user.name}</span>
					</p>
					<button type="button" onClick={show} className="btn btn--settings">
						Change Username
					</button>
				</div>
				<div className="settings-adult">
					<p>allow nsfw</p>
					<button
						onClick={handeNsfwChange}
						type="button"
						className={`settings-adult-btn settings-${
							search.nsfw ? 'nsfw' : 'sfw'
						}`}
					>
						{search.nsfw ? 'nsfw' : 'sfw'}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Settings;
