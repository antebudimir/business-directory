import { createContext, useState } from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';

export const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
	const { isDesktop } = useMediaQueries(),
		[open, setOpen] = useState(isDesktop ? true : false),
		[showcaseImage, setShowcaseImage] = useState({ url: '', description: '' });

	const toggleGallery = () => {
		setOpen(!open);
	};

	const value = {
		open,
		toggleGallery,
		showcaseImage,
		setShowcaseImage,
	};

	return (
		<GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
	);
};

export default GalleryProvider;
