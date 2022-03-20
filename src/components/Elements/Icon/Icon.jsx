import PropTypes from 'prop-types';

const Icon = ({ iconClass, title, text }) => {
	return (
		<i className={iconClass} title={title}>
			{text}
		</i>
	);
};

Icon.propTypes = {
	iconClass: PropTypes.string.isRequired,
	title: PropTypes.string,
	text: PropTypes.string,
};

Icon.defaultProps = {
	iconClass: '',
	title: null,
	text: null,
};

export default Icon;
