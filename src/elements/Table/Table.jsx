import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import TableHead from './TableHead';
import TableBody from './TableBody';

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
                className="my-table-class" // string, additional CSS classes (optional, default: "")
                tableHead={['firstColumn', 'secondColumn']} // contains an array of strings or an array of array of react elements
                headPrepend={['checkboxColumn']} // allow to add additional columns before `tableHead` (optional, default: [])
                headAppend={['checkboxColumn']} // allow to add additional columns after `tableHead` (optional, default: [])
                tableContent={[{firstColumn: 'hello', secondColumn: 'world'}, {firstColumn: 'hello', secondColumn: 'eccenca'}]} // contains an array of objects containing strings or react elements
                contentPrepend={['checkbox']} // allow to add additional cells before `tableContent` (optional, default: [])
                contentAppend={['checkbox']} // allow to add additional cells before `tableContent` (optional, default: [])
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
        tableHead,
        headPrepend,
        headAppend,
        tableContent,
        contentPrepend,
        contentAppend,
        children,
    } = props;

    const identifiers =
        _.isEmpty(tableHead) || _.isString(tableHead[0])
            ? tableHead
            : tableHead.map(item => item.identifier);

    const headerContent =
        _.isEmpty(tableHead) || _.isString(tableHead[0])
            ? tableHead
            : tableHead.map(item => item.content);

    // set classname
    const tableClassNames = classNames(
        'mdl-data-table',
        {
            'mdl-data-table--full-width': fullWidth === true,
            'mdl-data-table--multiline': multiline === true,
        },
        className
    );

    return (
        <div className="ecc-table__wrapper">
            <table className={tableClassNames}>
                <TableHead
                    prepend={headPrepend}
                    tableHead={headerContent}
                    append={headAppend}
                />
                <TableBody
                    tableHead={identifiers}
                    prepend={contentPrepend}
                    tableContent={tableContent}
                    append={contentAppend}
                />
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
     * table head information which is a pure string or a react html element
     */
    tableHead: Proptypes.oneOfType(
        Proptypes.arrayOf(
            Proptypes.shape({
                identifier: Proptypes.string,
                content: Proptypes.element,
            })
        ),
        Proptypes.arrayOf(Proptypes.string)
    ),
    /**
     * prepended column head
     */
    headPrepend: Proptypes.arrayOf(
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
    headAppend: Proptypes.arrayOf(
        Proptypes.oneOfType([
            Proptypes.string,
            Proptypes.arrayOf(
                Proptypes.oneOfType([Proptypes.string, Proptypes.element])
            ),
        ])
    ),
    /**
     * table content for each row
     */
    tableContent: Proptypes.arrayOf(Proptypes.object),
    /**
     * prepended row column
     */
    contentPrepend: Proptypes.arrayOf(Proptypes.object),
    /**
     * appended row column
     */
    contentAppend: Proptypes.arrayOf(Proptypes.object),
    /**
     * use full width even for smaller tables
     */
    fullWidth: Proptypes.bool,
    /**
     * allow linebreaks and multilined content in table cells
     */
    multiline: Proptypes.bool,
};

Table.defaultProps = {
    fullWidth: false,
    multiline: false,
};

Table.displayName = 'Table';

export default Table;
