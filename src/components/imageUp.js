import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DragDrop } from '@uppy/react';

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

export const imageUp = () => {};
