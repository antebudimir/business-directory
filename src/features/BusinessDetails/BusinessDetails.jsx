import { Fragment } from 'react';
import showcaseImage from 'assets/images/showcase.png';
import Showcase from 'components/Layout/Showcase/Showcase';
import InfoSection from 'components/Layout/InfoSection';

const BusinessDetails = (businessDetails) => {
	const { image, description, name } = businessDetails;

	return (
		<Fragment>
			<Showcase
				headingClass="hidden-visually"
				heading="Showcase image"
				// imageClass="showcase-img"
				imageSource={showcaseImage}
				imageAlt="Company image"
			/>

			<section id="info">
				<InfoSection
					sectionClass="info-details"
					headingClass="info-details-heading"
					heading="Address"
					// paragraphOne={}
					// paragraphTwo={}
					paragraphOne="123 Willow street"
					paragraphTwo="Austin, TX 78456"
				/>

				<InfoSection
					sectionClass="info-details"
					headingClass="info-details-heading"
					heading="Contact"
					// paragraphOne={}
					// paragraphTwo={}
					paragraphOne="385996951148"
					paragraphTwo="inbox@mail.com"
				/>

				{/* <section className="nearby">
					<h3 className="nearby-heading">Nearby Places</h3>

					<div className="nearby-place">Cafe nesto</div>
					<div className="nearby-place">restoran</div>
					<div className="nearby-place">pumpa</div>
					<div className="nearby-place">konder</div>
				</section> */}

				<section className="nearby">
					<h3 className="nearby-heading">Nearby Places</h3>
				</section>
			</section>
		</Fragment>
	);
};

export default BusinessDetails;
