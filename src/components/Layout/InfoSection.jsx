import PropTypes from 'prop-types';

const InfoSection = ({
	sectionClass,
	headingClass,
	heading,
	paragraphOne,
	paragraphTwo,
}) => {
	return (
		<section className={sectionClass}>
			<h3 className={headingClass}>{heading}</h3>

			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
		</section>
	);
};

InfoSection.propTypes = {
	sectionClass: PropTypes.string,
	headingClass: PropTypes.string,
	heading: PropTypes.string.isRequired,
	paragraphOne: PropTypes.string,
	paragraphTwo: PropTypes.string,
};

export default InfoSection;
