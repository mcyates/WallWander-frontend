import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export const baseUrl = 'http://localhost:4000';

const uppy = Uppy({
	meta: { type: 'wallpaper' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: false
});
// window.localStorage.getItem('token')
export const UploadPage = (props) => {
	const token = useSelector((state) => state.auth.id);
	console.log(token);
	useEffect(() => {
		uppy.use(XHRUpload, {
			endpoint: `${baseUrl}/images/upload`,
			method: 'post',
			formData: true,
			fieldName: 'wallpaper',
			headers: {
				authorization: `${token}`
			}
		});
		uppy.on('complete', (result) => {
			console.log(result);
			// const url = result.successful[0].uploadURL;
		});

		return uppy.close;
	});
	return (
		<React.Fragment>
			<h1>Upload!</h1>
			<Dashboard uppy={uppy} />
		</React.Fragment>
	);
};
