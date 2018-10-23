import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

/**

 Provides table cell element that can be enriched by sub elements.

 ```js
 import {TableCell} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ...
    // template rendering
    // use it inside the correct Table elements
    render() {
        return (
            <TableCell
                isHead={true} // boolean, if the table cell contains a table head for the column or row (optional, default: false)
                likeHead={true} // boolean, if a normal table cell should be look like a head element (optional, default: false)
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for additional CSS class descriptions
            >
                <!-- content -->
            </TableCell>
        )
    },
    // ...
};
 ```
 */

const TableCell = props => {
    const {isHead, likeHead, className, children, multiline, ...otherProps} = props;
    const TableCellType = isHead === true ? 'th' : 'td';
    const cellClassNames = classNames(
        {
            'mdl-data-table__header': isHead === false && likeHead === true,
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <TableCellType className={cellClassNames} {...otherProps}>
            {children}
        </TableCellType>
    );
};

TableCell.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
    /**
     * optional CSS class
     */
    className: Proptypes.string,
    /**
     * table cell is head for column or row
     */
    isHead: Proptypes.bool,
    /**
     * table cell looks like header cell
     */
    likeHead: Proptypes.bool,
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableCell.defaultProps = {
    isHead: false,
    likeHead: false,
    className: '',
    multiline: false,
};

TableCell.displayName = 'Table cell';

export default TableCell;
