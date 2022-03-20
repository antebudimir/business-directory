import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async (endpoint) => {
	const { data } = await axios.get(endpoint);

	return data;
};

export default function useFetch(key, endpoint, isEmpty) {
	return useQuery([key, endpoint], () => fetchData(endpoint), {
		enabled: isEmpty,
		staleTime: Infinity,
	});
}
