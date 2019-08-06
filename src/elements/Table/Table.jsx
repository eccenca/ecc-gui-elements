import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

/**

 Provides a simple table which can be enriched with react elements as content.

 ```js
 import {Table} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <Table
                multiline={true} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                fullWidth={true} // boolean true or false, table uses full width even if it could be smaller (optional, default: false)
                scrollTableOverflow={true} // boolean true or false, add scrollbars to table when it overflows available space (optional, default: false)
                preventCellOverflow={true} // boolean true or false, prevent overflowing content in table cells (optional, default: false)
                className="my-table-class" // string, additional CSS classes (optional, default: "")
            >
                <!-- your table content (optional) -->
            </table>
        )
    },
    // ....
};
 ```
 */

const Table = props => {
    const {
        fullWidth,
        className,
        multiline,
        children,
        scrollTableOverflow,
        preventCellOverflow,
        ...otherProps
    } = props;

    // set classname
    const tableClassNames = classNames(
        'mdl-data-table',
        {
            'mdl-data-table--full-width': fullWidth === true,
            'mdl-data-table--multiline': multiline === true,
            'mdl-data-table--preventoverflow': preventCellOverflow === true,
        },
        className
    );
    const wrapperClassNames = classNames('ecc-table__wrapper', {
        'ecc-table__wrapper--autoscroll': scrollTableOverflow === true,
    });

    return (
        <div className={wrapperClassNames}>
            <table className={tableClassNames} {...otherProps}>
                {children}
            </table>
        </div>
    );
};

Table.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
    /**
        string (optional): additional CSS class name
    */
    className: Proptypes.string,
    /**
     * use full width even for smaller tables
     */
    fullWidth: Proptypes.bool,
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
    /**
     * add scrollbars to table when it overflows available space
     */
    scrollTableOverflow: Proptypes.bool,
    /**
     * prevent overflowing content in table cells
     */
    preventCellOverflow: Proptypes.bool,
};

Table.defaultProps = {
    fullWidth: false,
    multiline: false,
    scrollTableOverflow: false,
    preventCellOverflow: false,
};

Table.displayName = 'Table';

export default Table;
