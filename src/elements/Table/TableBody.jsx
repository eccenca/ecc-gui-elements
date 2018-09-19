import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

const TableBody = props => {
    const {prepend, tableContent, append, tableHead} = props;
    if (_.isEmpty(tableContent)) return false;
    const rows = _.map(tableContent, (row, idxRow) => (
        <tr key={idxRow}>
            {_.concat(
                _.map(prepend, (pre, idxPre) => <td key={`${idxRow}.pre-${idxPre}`}>{pre}</td>),
                _.map(tableHead, (column, idxColumn) => (
                    <td key={`${idxRow}.${idxColumn}`}>
                        {row[column] || false}
                    </td>
                )),
                _.map(append, (app, idxApp) => <td key={`${idxRow}.app-${idxApp}`}>{app}</td>),
            )}
        </tr>
    ));
    return <tbody>{rows}</tbody>;
};

TableBody.propTypes = {
    /**
     * table head information to show and order row data
     */
    tableHead: Proptypes.arrayOf(Proptypes.string),
    /**
     * table content for each row
     */
    tableContent: Proptypes.arrayOf(Proptypes.object),
    /**
     * prepended row column
     */
    prepend: Proptypes.arrayOf(Proptypes.object),
    /**
     * appended row column
     */
    append: Proptypes.arrayOf(Proptypes.object),
};

TableBody.defaultProps = {
    prepend: [],
    append: [],
};

TableBody.displayName = 'Table body';

export default TableBody;
