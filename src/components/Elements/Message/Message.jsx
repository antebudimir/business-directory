import './message.scss';
import PropTypes from 'prop-types';

const Message = ({ messageClass, messageText }) => {
	return <p className={messageClass}>{messageText}</p>;
};

Message.propTypes = {
	messageClass: PropTypes.string.isRequired,
	messageText: PropTypes.string.isRequired,
};

export default Message;
