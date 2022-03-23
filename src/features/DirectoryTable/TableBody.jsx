import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const TableBody = ({
	bodyClass,
	data,
	rowClass,
	cellClassName,
	cellClassDescription,
}) => {
	const navigate = useNavigate();

	return (
		<tbody className={bodyClass}>
			{data.map((object) => {
				return (
					<tr
						className={rowClass}
						key={object.id}
						title={`Click to see details about ${object.name}`}
						onClick={() => navigate(`/business/${object.id}`)}
						// Didn't use <Link> here because it wouldn't be semantically correct nor valid HTML.
					>
						<td className={cellClassName}>{object.name}</td>
						<td className={cellClassDescription}>{object.description}</td>
					</tr>
				);
			})}
		</tbody>
	);
};

TableBody.propTypes = {
	bodyClass: PropTypes.string,
	data: PropTypes.array,
	rowClass: PropTypes.string,
	cellClassName: PropTypes.string,
	cellClassDescription: PropTypes.string,
};
export default TableBody;
