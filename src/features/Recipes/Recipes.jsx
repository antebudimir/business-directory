import { StyledRecipes } from './recipes styled';
import { useContext } from 'react';
import { EdamamContext } from 'context/EdamamContext';
import useRecipes from 'hooks/useRecipes';
import RecipeSummary from '../RecipeSummary/RecipeSummary';
import { StyledMessage } from 'components/Elements/Message/message.styled';
import ScrollToTop from 'react-scroll-to-top';
import Spinner from 'components/Elements/Spinner/Spinner';
import spinner from 'components/Elements/Spinner/spinner.svg';

const Recipes = () => {
	const { searchTerm } = useContext(EdamamContext),
		{ isLoading, isError, results, recipes } = useRecipes(searchTerm);

	const renderRecipes = recipes.map((recipe) => {
		const details = recipe.recipe,
			uniqueKey = details.uri.slice(-32);

		return (
			<RecipeSummary
				key={uniqueKey}
				label={details.label}
				image={details.images.REGULAR.url}
				uniqueKey={uniqueKey}
				recipeDetails={details}
			/>
		);
	});

	return (
		<StyledRecipes>
			{isLoading && (
				<Spinner source={spinner} spinnerDescription="Loading spinner" />
			)}

			{isError && (
				<StyledMessage
					warning
					messageText="Something went wrong. Check your internet connection and try again."
				/>
			)}

			{results === 0 && (
				<StyledMessage info messageText="Refine your search and try again." />
			)}

			{renderRecipes}

			<ScrollToTop className="scroll" smooth="true" color="white" />
		</StyledRecipes>
	);
};

export default Recipes;
