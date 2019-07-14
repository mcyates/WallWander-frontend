import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

export const baseUrl = 'http://localhost:4000';

export const UploadPage = (props) => {
	const token = useSelector((state) => state.auth.id);

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
		if (result.successful) {
			console.log(result);
			console.log(result.successful[0]);
			const id = result.successful[0].response.body.title;
			console.log(id);
			props.navigate(`/wallpapers/${id}`);
		} else {
			props.navigate('/not');
		}
	});
	useEffect(() => {
		return () => {
			uppy.close();
		};
	});
	return (
		<React.Fragment>
			<h1>Upload!</h1>
			<Dashboard thumbnailWidth={750} uppy={uppy} />
		</React.Fragment>
	);
};
