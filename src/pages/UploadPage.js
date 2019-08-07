import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import { baseUrl } from '../App';
import { Dashboard } from '@uppy/react';
import { addImage } from '../actions/image';
const Navbar = React.lazy(() => import('../components/Navbar'));

export const UploadPage = (props) => {
	const user = useSelector((state) => state.auth);
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
			authorization: `${user.token}`
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
		<div className="upload">
			<Navbar />
			<h5>Max File-size 10Mb</h5>

			<Dashboard uppy={uppy} />
		</div>
	);
};

export default UploadPage;
