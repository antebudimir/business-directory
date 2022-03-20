import './header.scss';
import PropTypes from 'prop-types';
import Image from 'components/Elements/Image/Image';
import logo from 'assets/images/logo.png';

const Header = ({ heading }) => {
	return (
		<header id="header">
			<h1 className="hidden-visually">{heading}</h1>
			<Image imageSource={logo} imageAlt="logo" />
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
