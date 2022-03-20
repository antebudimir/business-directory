// import './Spinner.scss';
import PropTypes from 'prop-types';
import spinner from './spinner.webp';

const Spinner = ({ wrapperClass, spinnerClass, description }) => {
	return (
		<div className={wrapperClass}>
			<img className={spinnerClass} src={spinner} alt={description} />;
		</div>
	);
};

Spinner.propTypes = {
	wrapperClass: PropTypes.string,
	spinnerClass: PropTypes.string,
	description: PropTypes.string.isRequired,
};

Spinner.defaultProps = {
	wrapperClass: 'spinner-wrapper',
	spinnerClass: 'spinner',
	description: 'Loading spinner',
};

export default Spinner;
