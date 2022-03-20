import { createContext, useEffect, useReducer } from 'react';
import { storageReducer } from '../storage/storageReducer';
import {
	SET_DESCRIPTION,
	SET_PROGRESS,
	SET_ERROR,
	SET_FILE,
	SET_FILE_URL,
	SET_UPLOADED,
	SET_MESSAGE,
} from '../types';

export const StorageContext = createContext();

const initialState = {
	description: '',
	progress: 0,
	storageError: null,
	file: null,
	fileUrl: null,
	uploaded: false,
	message: '',
};

const StorageProvider = (props) => {
	const [storageState, storageDispatch] = useReducer(
			storageReducer,
			initialState,
		),
		{ progress, storageError, file, fileUrl, description, message, uploaded } =
			storageState;

	// upload success message and reset everything to initial state
	useEffect(() => {
		if (!fileUrl) {
			return null;
		} else {
			setUploaded(true);
			setMessage('Uploaded successfully');
			setFile(null);
			setFileUrl(null); // if url ain't necessary for anything else except this effect
			setDescription('');

			// disappear after 3000ms
			setTimeout(() => {
				setUploaded(false);
			}, 3000);
		}
	}, [fileUrl]);

	// Dispatchers
	const setProgress = (percentage) => {
		storageDispatch({ type: SET_PROGRESS, progress: percentage });
	};

	const setStorageError = (message) => {
		storageDispatch({ type: SET_ERROR, storageError: message });
	};

	const setDescription = (description) => {
		storageDispatch({ type: SET_DESCRIPTION, description: description });
	};

	const setFile = (selectedFile) => {
		storageDispatch({ type: SET_FILE, file: selectedFile });
	};

	const setFileUrl = (fileUrl) => {
		storageDispatch({ type: SET_FILE_URL, fileUrl: fileUrl });
	};

	const setUploaded = (boolean) => {
		storageDispatch({ type: SET_UPLOADED, uploaded: boolean });
	};

	const setMessage = (message) => {
		storageDispatch({ type: SET_MESSAGE, message: message });
	};

	const value = {
		description,
		progress,
		setProgress,
		storageError,
		setStorageError,
		file,
		fileUrl,
		setFileUrl,
		uploaded,
		message,
		setDescription,
		setFile,
		setMessage,
		setUploaded,
	};

	return (
		<StorageContext.Provider value={value}>
			{props.children}
		</StorageContext.Provider>
	);
};

export default StorageProvider;
