import React from 'react';

export const NameModal = (props) => {
	const { setName, visible } = props;

	// visible ? show() : hide();
	if (visible) {
		return (
			<form onSubmit={props.submit} method="post">
				<label htmlFor="name">Username</label>
				<input
					type="text"
					placeholder="username"
					onChange={(e) => setName(e.target.value)}
					minLength="4"
				/>
				<button className="btn btn-form">Submit</button>
			</form>
		);
	} else {
		return <React.Fragment />;
	}
};

export default NameModal;
