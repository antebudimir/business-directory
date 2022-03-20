import PropTypes from 'prop-types';

const Showcase = ({
	headingClass,
	heading,
	imageClass,
	imageSource,
	imageAlt,
}) => {
	return (
		<section>
			<h2 className={headingClass}>{heading}</h2>

			<img className={imageClass} src={imageSource} alt={imageAlt} />
		</section>
	);
};

Showcase.propTypes = {
	headingClass: PropTypes.string,
	heading: PropTypes.string.isRequired,
	imageClass: PropTypes.string,
	imageSource: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

export default Showcase;
