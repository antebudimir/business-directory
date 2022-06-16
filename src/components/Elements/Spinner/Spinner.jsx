import './Spinner.scss';
import spinner from './spinner.svg';

const Spinner = () => {
	return <img className="spinner" src={spinner} alt="Loading spinner" />;
};

export default Spinner;
