import React from 'react';

export const NameModal = (props) => {
	const { hide, setName, visible } = props;

	// visible ? show() : hide();
	if (visible) {
		return (
			<div className="modal">
				<div className="modal-overlay" />

				<form className="form modal-form" onSubmit={props.submit} method="post">
					<button className="modal-close" onClick={() => hide()}>
						X
					</button>
					<div className="modal-form-box">
						<label className="form-label" htmlFor="name">
							Username
						</label>
						<input
							type="text"
							placeholder="min 6 characters"
							className="form-input"
							onChange={(e) => setName(e.target.value)}
							minLength="4"
						/>
					</div>
					<button className="btn btn-form">Submit</button>
				</form>
			</div>
		);
	} else {
		return <React.Fragment />;
	}
};

export default NameModal;
