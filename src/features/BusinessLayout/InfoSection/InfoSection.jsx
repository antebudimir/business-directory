import './info-section.scss';
import PropTypes from 'prop-types';

const InfoSection = ({ sectionClass, heading, paragraphOne, paragraphTwo }) => {
	return (
		<section className={`info-details${sectionClass}`}>
			<h3 className="info-details-heading">{heading}</h3>

			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
		</section>
	);
};

InfoSection.propTypes = {
	sectionClass: PropTypes.string,
	heading: PropTypes.string.isRequired,
	paragraphOne: PropTypes.string,
	paragraphTwo: PropTypes.string,
};

InfoSection.defaultProps = {
	sectionClass: '',
};

export default InfoSection;
