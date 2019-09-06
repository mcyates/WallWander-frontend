export const emailValidation = (email) => {
	if (email === '') {
		return 'Please enter a valid email address.';
	}

	return '';
};

export const passwordValidation = (password) => {
	if (password.length < 1) {
		return 'Please enter a password.';
	}
	if (password.length < 8) {
		return 'Password must be 8 characters.';
	}

	return '';
};

export default emailValidation;
