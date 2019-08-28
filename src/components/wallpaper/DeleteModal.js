import React from 'react';

export const DeleteModal = (props) => {
	const { hide, removeImage, visible } = props;

	// visible ? show() : hide();
	if (visible) {
		return (
			<div className="modal">
				<div className="modal-overlay" onClick={() => hide()} />

				<div className="form modal-form" onSubmit={props.submit} method="post">
					<button className="modal-close" onClick={() => hide()}>
						X
					</button>

					<button onClick={removeImage} className="btn btn-danger">
						Delete
					</button>
				</div>
			</div>
		);
	} else {
		return <React.Fragment />;
	}
};

export default DeleteModal;
