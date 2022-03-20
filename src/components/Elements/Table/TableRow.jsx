import PropTypes from 'prop-types';

const TableRow = ({ rowClass, rowValue }) => {
	return <tr className={rowClass}>{rowValue}</tr>;
};

TableRow.propTypes = {
	rowClass: PropTypes.string,
	rowValue: PropTypes.string,
};

export default TableRow;
