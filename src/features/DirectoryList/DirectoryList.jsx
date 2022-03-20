import './directory-list.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
import Spinner from 'components/Elements/Spinner/Spinner';
import spinner from 'components/Elements/Spinner/spinner.webp';
import Message from 'components/Elements/Message/Message';
import Table from 'components/Elements/Table/Table';

const fetchDirectories = async () => {
	const endpoint = 'https://api.jsonbin.io/b/6231abada703bb67492d2b8f',
		data = await axios.get(endpoint);

	return data;
};

const DirectoryList = () => {
	const { data, isLoading, isError } = useQuery(
		'directories',
		fetchDirectories,
	);

	console.log(data);

	return (
		<section id="directory-list">
			<h2 className="hidden-visually">Directory list</h2>

			{isLoading && (
				<Spinner source={spinner} spinnerDescription="Loading spinner" />
			)}

			{isError && (
				<Message messageText="Something went wrong. Check your internet connection and try again." />
			)}

			{data && <Table data={data} />}
		</section>
	);
};

export default DirectoryList;
