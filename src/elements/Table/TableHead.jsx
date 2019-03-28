import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

/**

 Provides table head element that can be enriched sub elements.

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
            >
                <!-- head row -->
            </TableHead>
        )
    },
    // ....
};
 ```
 */

const TableHead = props => {
    const {
        children, className, multiline, ...otherProps
    } = props;
    // set classname
    const headClassNames = classNames(
        {
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <thead className={headClassNames} {...otherProps}>
            {children}
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
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableHead.defaultProps = {
    multiline: false,
};

TableHead.displayName = 'Table head';

export default TableHead;
