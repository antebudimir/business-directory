import './table.scss';
import { Link } from 'react-router-dom';

const Table = ({ tableId, data }) => {
	// const openDetails = () => {
	// 	console.log('open details');
	// };

	return (
		<table id={tableId}>
			<thead>
				<tr className="business-row">
					<th className="table-heading">Name</th>
					<th className="table-heading">Description</th>
				</tr>
			</thead>

			<tbody className="business-list">
				{data.data.map((business) => {
					return (
						<Link
							to={`business/${business.id}`}
							className="business-link"
							title={business.name}
							// onClick={openDetails}
						>
							<tr className="business-row" key={business.phone}>
								<td className="business-name" key={business.id}>
									{business.name}
								</td>
								<td className="business-description" key={business.description}>
									{business.description}
								</td>
							</tr>
						</Link>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
