import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import { addImage } from '../actions/image';

export const baseUrl = 'http://localhost:4000';

export const UploadPage = (props) => {
	const token = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();

	const uppy = Uppy({
		meta: { type: 'wallpaper' },
		restrictions: { maxNumberOfFiles: 1 },
		autoProceed: false
	});

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
		if (result.successful[0]) {
			let image = result.successful[0].response.body;
			const { id } = image;
			dispatch(addImage(image));
			props.navigate(`/wallpapers/${id}`);
		}
	});

	uppy.on('upload-error', (fileId, error) => {
		console.log(fileId, error);
	});

	useEffect(() => {
		return () => {
			uppy.close();
		};
	});

	return (
		<React.Fragment>
			<h1>Max File-size 10Mb</h1>
			<Dashboard uppy={uppy} />
		</React.Fragment>
	);
};

export default UploadPage;
