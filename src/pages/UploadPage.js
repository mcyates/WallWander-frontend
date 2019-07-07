import React, { useEffect } from 'react';

import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const uppy = Uppy({
	meta: { type: 'wallpaper' },
	restrictions: { maxNumberOfFiles: 1 },
	autoProceed: true
});

uppy.use(Tus, {
	endpoint: `${process.env.API_BASE}/images/upload`,
	autoRetry: true,
	resume: true
});

uppy.on('complete', (result) => {
	const url = result.successful[0].uploadURL;
	// save url to reducer
});

export const UploadPAge = () => {
	useEffect(() => {
		return uppy.close;
	});
	return (
		<React.Fragment>
			<h1>Upload!</h1>
			<Dashboard uppy={uppy} />
		</React.Fragment>
	);
};
