import './nearby-section.scss';
import PropTypes from 'prop-types';
import DirectoryTable from 'features/DirectoryTable/DirectoryTable';

const NearbySection = ({ heading, data }) => {
	return (
		<section className="nearby">
			<h3 className="nearby-heading">{heading}</h3>

			<DirectoryTable data={data} />
		</section>
	);
};

NearbySection.propTypes = {
	heading: PropTypes.string.isRequired,
	data: PropTypes.array,
};

export default NearbySection;
