import useFetch from 'hooks/useFetch';
import Spinner from 'components/Elements/Spinner/Spinner';
import Message from 'components/Elements/Message/Message';
import DirectoryTable from 'features/DirectoryTable/DirectoryTable';

const columns = [
	{ title: 'Name', id: 1 },
	{ title: 'Description', id: 2 },
];

const Directory = () => {
	const { data, isLoading, isError } = useFetch(
		'directories',
		'https://api.jsonbin.io/b/6231abada703bb67492d2b8f',
	);

	return (
		<section id="directory-list">
			<h2 className="hidden-visually">Directory list</h2>

			{isLoading && <Spinner />}

			{isError && (
				<Message
					messageClass="info-message"
					messageText="Something went wrong. Check your internet connection and try again."
				/>
			)}

			{data && <DirectoryTable columns={columns} data={data} />}
		</section>
	);
};

export default Directory;
