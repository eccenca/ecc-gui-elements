import React from 'react';
import Proptypes from 'prop-types';

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
            <Table>
                tableHead={['firstColumn', 'secondColumn']} // contains an array of strings or an array of array of react elements
                headPrepend={['checkboxColumn']} // allow to add additional columns before `tableHead` (optional, default: [])
                headAppend={['checkboxColumn']} // allow to add additional columns after `tableHead` (optional, default: [])
                tableColumns={['firstColumn', 'secondColumn']} // contains an array of strings (mandatory if `tableHead` contains react elements)
                tableContent={[{firstColumn: 'hello', secondColumn: 'world'}, {firstColumn: 'hello', secondColumn: 'eccenca'}]} // contains an array of objects containing strings or react elements
                contentPrepend={['checkbox']} // allow to add additional cells before `tableContent` (optional, default: [])
                contentAppend={['checkbox']} // allow to add additional cells before `tableContent` (optional, default: [])
            </Table>
        )
    },
    // ....
};
 ```
 */

const Table = props => {
    const {
        tableHead,
        headPrepend,
        headAppend,
        tableColumns,
        tableContent,
        contentPrepend,
        contentAppend,
    } = props;
    return (
        <div className="ecc-component-gui-elements__table">
            <table className="mdl-data-table ecc-component-gui-elements__table__dataoverview">
                <thead>
                    <TableHead
                        prepend={headPrepend}
                        tableHead={tableHead}
                        append={headAppend}
                    />
                </thead>
                <TableBody
                    tableHead={tableColumns || tableHead}
                    prepend={contentPrepend}
                    tableContent={tableContent}
                    append={contentAppend}
                />
            </table>
        </div>
    );
};

Table.propTypes = {
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
     * plain table column names. only needed if tableHead contains react html
     */
    tableColumns: Proptypes.arrayOf(Proptypes.string),
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
};

Table.displayName = 'Table';

export default Table;
