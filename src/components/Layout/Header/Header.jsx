import './header.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from 'components/Elements/Image/Image';
import logo from 'assets/images/logo.png';

const Header = ({ heading }) => {
	return (
		<header id="header">
			<h1 className="hidden-visually">{heading}</h1>
			<Link to={'/'} title="Go to the main directory">
				<Image imageSource={logo} imageAlt="Logo" />
			</Link>
		</header>
	);
};

Header.defaultProps = {
	heading: 'Business Directory',
};

Header.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default Header;
