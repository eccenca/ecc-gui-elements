import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';
import TableCell from './TableCell';

/**

 Provides table body element that can be enriched by properties and sub elements.

 ```js
 import {TableBody} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <TableBody
                className="my-own-class" // string, used for CSS class descriptions
                prepend={[]} // TODO description
                tableHead={[]} // TODO description
                tableContent={[]} // TODO description
                append={[]} // TODO description
            >
                <tr><!-- optional table rows --></tr>
            </TableBody>
        )
    },
    // ....
};
 ```
 */

const TableBody = props => {
    const {prepend, tableContent, append, tableHead, children, ...otherProps} = props;
    if (_.isEmpty(tableContent) && _.isEmpty(children)) return false;
    const rows = _.map(tableContent, (row, idxRow) => (
        <tr key={idxRow}>
            {_.concat(
                _.map(prepend, (pre, idxPre) => <TableCell key={`${idxRow}.pre-${idxPre}`}>{pre}</TableCell>),
                _.map(tableHead, (column, idxColumn) => (
                    <TableCell key={`${idxRow}.${idxColumn}`}>
                        {row[column] || false}
                    </TableCell>
                )),
                _.map(append, (app, idxApp) => <TableCell key={`${idxRow}.app-${idxApp}`}>{app}</TableCell>),
            )}
        </tr>
    ));
    return (
        <tbody {...otherProps}>
            {rows}
            {children}
        </tbody>
    );
};

TableBody.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
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
