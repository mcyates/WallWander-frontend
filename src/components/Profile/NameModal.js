import React from 'react';

export const NameModal = (props) => {
	const { setName, visible } = props;

	// visible ? show() : hide();
	if (visible) {
		return (
			<div className="modal">
				<div className="modal--overlay" />

				<form
					className="form modal--form"
					onSubmit={props.submit}
					method="post"
				>
					<div className="form-box">
						<label className="form-label" htmlFor="name">
							Username
						</label>
						<input
							type="text"
							placeholder="atleast 6 characters"
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
