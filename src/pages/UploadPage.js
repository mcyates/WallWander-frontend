import React, { useEffect, useReducer } from 'react';

import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import { imageReducer } from '../store/imageReducer';

export const baseUrl = 'http://localhost:4000';

const uppy = Uppy({
	meta: { type: 'wallpaper' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: true
});

uppy.use(XHRUpload, {
	endpoint: `${baseUrl}/images/upload`,
	method: 'post',
	formData: true
});

export const UploadPage = () => {
	const [images, dispatch] = useReducer(imageReducer, []);
	useEffect(() => {
		uppy.on('complete', (result) => {
			console.log(result);
			// const url = result.successful[0].uploadURL;
			// dispatch({
			// 	type: 'ADD_IMAGE',
			// 	url
			// });
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
