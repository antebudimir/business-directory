import { Link } from 'react-router-dom';
import Image from 'components/Elements/Image/Image';
import { StyledRecipeSummary } from './recipeSummary.styled';
import { EdamamContext } from 'context/EdamamContext';
import { useContext } from 'react';

const RecipeSummary = ({ recipeDetails, label, image, uniqueKey }) => {
	const { setKey, setRecipe } = useContext(EdamamContext);

	const openDetails = () => {
		setKey(uniqueKey);
		setRecipe(recipeDetails);
	};

	return (
		<StyledRecipeSummary>
			<h2>{label ? label : 'Title not available'}</h2>

			<Image
				className="meal-image"
				source={image ? image : 'Photo not available'}
				altText={label ? label : 'Title not available'}
			/>

			<Link to={`recipe/${uniqueKey}`} onClick={openDetails}>
				View Recipe Details
			</Link>
		</StyledRecipeSummary>
	);
};

export default RecipeSummary;
