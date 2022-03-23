import PropTypes from 'prop-types';

const TableHead = ({ headClass, rowClass, columns, headingClass }) => {
	return (
		// There ain't no table headings in the business details page, so we're avoiding undefined.
		columns !== undefined && (
			<thead className={headClass}>
				<tr className={rowClass}>
					{columns.map((heading) => {
						return (
							<th key={heading.id} className={headingClass}>
								{heading.title}
							</th>
						);
					})}
				</tr>
			</thead>
		)
	);
};

TableHead.propTypes = {
	headClass: PropTypes.string,
	rowClass: PropTypes.string,
	columns: PropTypes.array,
	headingClass: PropTypes.string,
};

export default TableHead;
