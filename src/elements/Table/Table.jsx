import React from 'react';
import Proptypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

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
            Proptypes.arrayOf(Proptypes.element),
        ])
    ),
    /**
     * plain table column names. only needed if tableHead contains react html
     */
    tableColumns: Proptypes.arrayOf(Proptypes.string),
    /**
     * prepended column head
     */
    headPrepend: Proptypes.arrayOf(Proptypes.string),
    /**
     * appended column head
     */
    headAppend: Proptypes.arrayOf(Proptypes.string),
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
