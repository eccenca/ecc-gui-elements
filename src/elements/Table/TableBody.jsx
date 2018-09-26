import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import TableRow from './TableRow';
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
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for CSS class descriptions
                prepend={[]} // TODO description
                tableHead={[]} // TODO description
                tableContent={[]} // TODO description
                append={[]} // TODO description
            >
                <!-- optional table rows -->
            </TableBody>
        )
    },
    // ....
};
 ```
 */

const TableBody = props => {
    const {prepend, tableContent, append, tableHead, children, className, multiline, ...otherProps} = props;
    if (_.isEmpty(tableContent) && _.isEmpty(children)) return false;
    const rows = _.map(tableContent, (row, idxRow) => (
        <TableRow key={idxRow}>
            {_.concat(
                _.map(prepend, (pre, idxPre) => <TableCell key={`${idxRow}.pre-${idxPre}`}>{pre}</TableCell>),
                _.map(tableHead, (column, idxColumn) => (
                    <TableCell key={`${idxRow}.${idxColumn}`}>
                        {row[column] || false}
                    </TableCell>
                )),
                _.map(append, (app, idxApp) => <TableCell key={`${idxRow}.app-${idxApp}`}>{app}</TableCell>),
            )}
        </TableRow>
    ));
    // set classname
    const bodyClassNames = classNames(
        {
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <tbody className={bodyClassNames} {...otherProps}>
            {rows}
            {children}
        </tbody>
    );
};

TableBody.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
    /**
        string (optional): additional CSS class name
    */
    className: Proptypes.string,
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
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableBody.defaultProps = {
    prepend: [],
    append: [],
    multiline: false,
};

TableBody.displayName = 'Table body';

export default TableBody;
