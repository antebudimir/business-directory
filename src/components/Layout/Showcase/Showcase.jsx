import PropTypes from 'prop-types';

const Showcase = ({ showcaseId, styleBackground, headingClass, heading }) => {
	return (
		<section id={showcaseId} style={styleBackground}>
			<h2 className={headingClass}>{heading}</h2>
		</section>
	);
};

Showcase.propTypes = {
	showcaseId: PropTypes.string,
	styleBackground: PropTypes.object,
	headingClass: PropTypes.string,
	heading: PropTypes.string.isRequired,
};

export default Showcase;
