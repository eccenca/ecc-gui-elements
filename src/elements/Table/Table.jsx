import React from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';
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
        tableContent,
        contentPrepend,
        contentAppend,
    } = props;

    const identifiers =
        _.isEmpty(tableHead) || _.isString(tableHead[0])
            ? tableHead
            : tableHead.map(item => item.identifier);

    const headerContent =
        _.isEmpty(tableHead) || _.isString(tableHead[0])
            ? tableHead
            : tableHead.map(item => item.content);

    return (
        <div className="ecc-table__wrapper">
            <table className="mdl-data-table">
                <thead>
                    <TableHead
                        prepend={headPrepend}
                        tableHead={headerContent}
                        append={headAppend}
                    />
                </thead>
                <TableBody
                    tableHead={identifiers}
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
};

Table.displayName = 'Table';

export default Table;
