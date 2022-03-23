import { Fragment } from 'react';
import { useParams } from 'react-router';
import useFetch from 'hooks/useFetch';
import Showcase from 'components/Layout/Showcase/Showcase';
import Spinner from 'components/Elements/Spinner/Spinner';
import Message from 'components/Elements/Message/Message';
import BusinessInfo from 'features/BusinessLayout/BusinessInfo/BusinessInfo';

const BusinessDetails = () => {
	const { isLoading, isError, data } = useFetch(
			'directories',
			'https://api.jsonbin.io/b/6231abada703bb67492d2b8f',
		),
		businesses = data ? data : [],
		{ id } = useParams();

	// data is undefined before fetching.
	// Also, if a user refreshes the page, data becomes undefined again for a moment before being refetched.
	// ternary operator checks counter those cases.
	const business = businesses.find((business) => business.id === id),
		{ image, phone, email } = business ? business : [],
		{ number, street, city, country, zip } = business ? business.address : '';

	const nearbyPlaces = businesses.filter(
		(business) => business.address.city === city,
	);

	const backgroundImage = {
		background: `url(${image}) no-repeat center center/cover`,
		width: '100%',
		height: '40vh', // magic matching the design layout that I was provided
	};

	return (
		<Fragment>
			{isLoading && <Spinner />}

			{isError && (
				<Message
					messageClass="info-message"
					messageText="Something went wrong. Check your internet connection and try again."
				/>
			)}

			{data && (
				<Fragment>
					<Showcase
						showcaseId="business-image"
						headingClass="hidden-visually"
						heading="Showcase image"
						styleBackground={backgroundImage}
					/>

					<BusinessInfo
						number={number}
						street={street}
						city={city}
						country={country}
						zip={zip}
						phone={phone}
						email={email}
						nearbyPlaces={nearbyPlaces}
					/>
				</Fragment>
			)}
		</Fragment>
	);
};

export default BusinessDetails;
