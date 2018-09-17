import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

const TableHead = props => {
    const {prepend, tableHead, append} = props;
    if (_.isEmpty(tableHead)) return false;
    return (
        <tr>
            {_.map(_.concat(prepend, tableHead, append), (column, idx) => (
                <th className="mdl-data-table__header" key={idx}>
                    {column}
                </th>
            ))}
        </tr>
    );
};

TableHead.propTypes = {
    prepend: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    tableHead: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    append: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
};

TableHead.defaultProps = {
    prepend: [],
    append: [],
};

TableHead.displayName = 'Table head';

export default TableHead;
