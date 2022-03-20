import {
	SET_DESCRIPTION,
	SET_PROGRESS,
	SET_ERROR,
	SET_FILE,
	SET_FILE_URL,
	SET_UPLOADED,
	SET_MESSAGE,
} from '../types';

export const storageReducer = (state, action) => {
	const {
		type,
		progress,
		fileUrl,
		storageError,
		file,
		description,
		message,
		uploaded,
	} = action;

	switch (type) {
		case SET_DESCRIPTION:
			return {
				...state,
				description: description,
			};

		case SET_PROGRESS:
			return {
				...state,
				progress: progress,
			};

		case SET_ERROR:
			return {
				...state,
				storageError: storageError,
			};

		case SET_FILE:
			return {
				...state,
				file: file,
			};

		case SET_FILE_URL:
			return {
				...state,
				fileUrl: fileUrl,
			};

		case SET_UPLOADED:
			return {
				...state,
				uploaded: uploaded,
			};

		case SET_MESSAGE:
			return {
				...state,
				message: message,
			};

		default:
			return state;
	}
};
