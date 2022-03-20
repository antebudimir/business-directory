// import './Not-found.scss';
import Message from 'components/Elements/Message/Message';

const NotFound = () => {
	return (
		<section id="not-found">
			<h2>Error 404 - Page not found</h2>

			<Message
				messageClass="info-message"
				messageText="The page you are looking for cannot be found."
			/>
		</section>
	);
};

export default NotFound;
