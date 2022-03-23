import './directory-table.scss';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

const DirectoryTable = ({ columns, data }) => {
	return (
		<table id="directory-table">
			<TableHead
				columns={columns}
				rowClass="business-row"
				headingClass="table-heading"
			/>

			<TableBody
				data={data}
				bodyClass="business-list"
				rowClass="business-row"
				cellClassName="business-name"
				cellClassDescription="business-description"
			/>
		</table>
	);
};

DirectoryTable.propTypes = {
	columns: PropTypes.array,
	data: PropTypes.array.isRequired,
};

export default DirectoryTable;
