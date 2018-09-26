import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import TableRow from './TableRow';
import TableCell from './TableCell';

/**

 Provides table head element that can be enriched by properties and sub elements.
 Child elements are inserted after the `tableHead` structures but before the `append` element.

 ```js
 import {TableHead} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <TableHead
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for CSS class descriptions
                prepend={[]} // TODO description
                tableHead={[]} // TODO description
                append={[]} // TODO description
            >
                <!-- optional head cells -->
            </TableHead>
        )
    },
    // ....
};
 ```
 */

const TableHead = props => {
    const {children, prepend, tableHead, append, className, multiline, ...otherProps} = props;
    if (_.isEmpty(tableHead) && _.isEmpty(children)) return false;
    // set classname
    const headClassNames = classNames(
        {
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <thead className={headClassNames} {...otherProps}>
            <TableRow>
                {_.map(_.concat(prepend, tableHead), (column, idx) => (
                    <TableCell isHead key={idx}>{column}</TableCell>
                ))}
                {children}
                {_.map(append, (column, idx) => (
                    <TableCell isHead key={idx}>{column}</TableCell>
                ))}
            </TableRow>
        </thead>
    );
};

TableHead.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
    /**
        string (optional): additional CSS class name
    */
    className: Proptypes.string,
    /**
     * prepended column head
     */
    prepend: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    /**
     * table head information which is a pure string or a react html element
     */
    tableHead: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    /**
     * appended column head
     */
    append: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableHead.defaultProps = {
    prepend: [],
    tableHead: [],
    append: [],
    multiline: false,
};

TableHead.displayName = 'Table head';

export default TableHead;
