import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

/**

 Provides table head which can be enriched by properties.

 ```js
 import {Table} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <Table
                className="my-own-class" // string, used for CSS class descriptions
                prepend={[]} // TODO description
                tableHead={[]} // TODO description
                append={[]} // TODO description
            />
        )
    },
    // ....
};
 ```
 */

const TableHead = props => {
    const {children, prepend, tableHead, append, ...otherProps} = props;
    if (_.isEmpty(tableHead) && _.isEmpty(children)) return false;
    return (
        <thead {...otherProps}>
            <tr>
                {_.map(_.concat(prepend, tableHead), (column, idx) => (
                    <th key={idx}>{column}</th>
                ))}
                {children}
                {_.map(append, (column, idx) => (
                    <th key={idx}>{column}</th>
                ))}
            </tr>
        </thead>
    );
};

TableHead.propTypes = {
    children: Proptypes.oneOfType([Proptypes.node]),
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
};

TableHead.defaultProps = {
    prepend: [],
    tableHead: [],
    append: [],
};

TableHead.displayName = 'Table head';

export default TableHead;
