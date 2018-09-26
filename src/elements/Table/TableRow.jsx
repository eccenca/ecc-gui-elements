import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

/**

 Provides table row element that can be enriched by sub elements.

 ```js
 import {TableRow} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ...
    // template rendering
    // use it inside the correct Table elements
    render() {
        return (
            <TableRow
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for additional CSS class descriptions
            >
                <!-- content -->
            </TableRow>
        )
    },
    // ...
};
 ```
 */

const TableRow = props => {
    const {className, children, multiline, ...otherProps} = props;
    const rowClassNames = classNames(
        {
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <tr className={rowClassNames} {...otherProps}>
            {children}
        </tr>
    );
};

TableRow.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
    /**
     * optional CSS class
     */
    className: Proptypes.string,
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableRow.defaultProps = {
    className: '',
    multiline: false,
};

TableRow.displayName = 'Table row';

export default TableRow;
