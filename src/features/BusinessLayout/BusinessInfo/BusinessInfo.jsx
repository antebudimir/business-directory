import './business-info.scss';
import PropTypes from 'prop-types';
import InfoSection from 'features/BusinessLayout/InfoSection/InfoSection';
import NearbySection from 'features/BusinessLayout/NearbySection/NearbySection';

const BusinessInfo = ({
	number,
	street,
	city,
	country,
	zip,
	phone,
	email,
	nearbyPlaces,
}) => {
	return (
		<section id="business-info">
			<InfoSection
				heading="Address"
				paragraphOne={`${number} ${street}`}
				paragraphTwo={`${city}, ${country} ${zip}`}
			/>

			<InfoSection
				sectionClass=" contact"
				heading="Contact"
				paragraphOne={phone}
				paragraphTwo={email}
			/>

			<NearbySection heading="Nearby Places" data={nearbyPlaces} />
		</section>
	);
};

BusinessInfo.propTypes = {
	number: PropTypes.string,
	street: PropTypes.string,
	city: PropTypes.string,
	country: PropTypes.string,
	zip: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	nearbyPlaces: PropTypes.array,
};

export default BusinessInfo;
