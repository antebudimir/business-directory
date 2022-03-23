import './info-section.scss';
import PropTypes from 'prop-types';

const InfoSection = ({ heading, paragraphOne, paragraphTwo }) => {
	return (
		<section className="info-details">
			<h3 className="info-details-heading">{heading}</h3>

			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
		</section>
	);
};

InfoSection.propTypes = {
	heading: PropTypes.string.isRequired,
	paragraphOne: PropTypes.string,
	paragraphTwo: PropTypes.string,
};

export default InfoSection;
