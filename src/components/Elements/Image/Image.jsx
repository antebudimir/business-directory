import PropTypes from 'prop-types';

const Image = ({ imageSource, imageAlt, imageClass }) => {
	return <img src={imageSource} alt={imageAlt} className={imageClass} />;
};

Image.propTypes = {
	imageSource: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	imageClass: PropTypes.string,
};

export default Image;
