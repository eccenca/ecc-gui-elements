import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

/**

 Provides table body element that can be enriched by sub elements.

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
            >
                <!-- table rows -->
            </TableBody>
        )
    },
    // ....
};
 ```
 */

const TableBody = props => {
    const {children, className, multiline, ...otherProps} = props;
    // set classname
    const bodyClassNames = classNames(
        {
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );
    return (
        <tbody className={bodyClassNames} {...otherProps}>
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
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

TableBody.defaultProps = {
    multiline: false,
};

TableBody.displayName = 'Table body';

export default TableBody;
