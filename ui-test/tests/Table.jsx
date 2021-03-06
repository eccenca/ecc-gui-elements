import React from 'react';
import _ from 'lodash';

import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardTitle,
    CardContent,
    Button,
    Chip,
    Checkbox,
    Radio,
    ContextMenu,
    MenuItem,
    Icon,
    TextField,
} from '../../index';

// test styles
import '../../style/test.scss';

class TestTable extends React.Component {
    constructor() {
        super();
        this.data = {
            tableHead: [
                {
                    identifier: 'expanding',
                },
                {
                    identifier: 'selectrow',
                    content: <Checkbox label="Select" checked onChange={() => {}} />,
                },
                {
                    identifier: 'vocabularies',
                    content: [
                        <Chip
                            key="chip"
                            type="button"
                            tooltip={false}
                            onClick={() => {}}
                        >
                            vocabularies
                        </Chip>,
                        <Button key="btnsort" onClick={() => {}} iconName="sort" />,
                        <Button key="btnfilter" onClick={() => {}} iconName="filter" badge={99} />,
                    ],
                },
                {
                    identifier: 'modified',
                    content: [
                        'modified',
                        <Button key="btn" onClick={() => {}} iconName="sort" />,
                    ],
                },
                {
                    identifier: 'description',
                    content: [
                        <Chip
                            key="chip"
                            type="button"
                            tooltip={false}
                            onClick={() => {}}
                        >
                            description
                        </Chip>,
                        <Button key="btn" onClick={() => {}} iconName="sort" />,
                    ],
                },
                {
                    identifier: 'keywords',
                    content: [
                        <Chip
                            key="chip"
                            type="button"
                            tooltip={false}
                            onClick={() => {}}
                        >
                            keywords
                        </Chip>,
                    ],
                },
                {
                    identifier: 'installed',
                    content: [
                        <Chip
                            key="chip"
                            type="button"
                            tooltip={false}
                            onClick={() => {}}
                        >
                            installed
                        </Chip>,
                        <Button
                            key="btn"
                            onClick={() => {}}
                            iconName="sort"
                            tooltip="sort"
                        />,
                    ],
                },
                {
                    identifier: 'testbutton',
                },
                {
                    identifier: 'toolsetactions',
                },
            ],
            tableContent: [
                {
                    expanding: <Button iconName="expand_more" />,
                    selectrow: <Checkbox label="Select" checked onChange={() => {}} />,
                    vocabularies: <Chip onClick={() => {}}>FIBO (sec)</Chip>,
                    modified: <span>2017-08-07</span>,
                    description:
                        'The FIBO Securities specification provides a model of concepts that are common to financial instrumants that are also securities, including but not limited to exchange-traded securities, as a part of the overall FIBO family of specifications. High-level concepts relevant to securities classification, identification, issuance, and registration of securities generally are covered, as well as additional detail for equities and debt instruments.',
                    keywords: 'Finance',
                    installed: 'no',
                    testbutton: <Button>Do it!</Button>,
                },
                {
                    expanding: <Button iconName="expand_more" />,
                    selectrow: <Checkbox label="Select" checked onChange={() => {}} />,
                    vocabularies: [
                        <Chip key="1" onClick={() => {}}>
                            FIBO (loan)
                        </Chip>,
                        <Chip key="2" onClick={() => {}}>
                            FIBO (sec)
                        </Chip>,
                        <Chip key="3" onClick={() => {}}>
                            FIBO (ind)
                        </Chip>,
                    ],
                    modified: '2017-08-07',
                    keywords: 'Finance',
                    installed: 'no',
                    testbutton: <Button>Do it!</Button>,
                    toolsetactions: [
                        <Button
                            key="edit"
                            onClick={() => {}}
                            iconName="edit"
                        />,
                        <Button
                            key="remove"
                            onClick={() => {}}
                            iconName="remove"
                        />,
                        <Button
                            key="more"
                            onClick={() => {}}
                            iconName="menu_more"
                        />,
                    ],
                },
                {
                    expanding: <Button iconName="expand_more" />,
                    selectrow: <Checkbox checked label="Select" onChange={() => {}} />,
                    vocabularies: <Chip onClick={() => {}}>FIBO (ind)</Chip>,
                    modified: '2017-08-07',
                    description: 'FIBO Indices and Indicators consists of a set of business concepts representing the various forms of market indices, economic indicators and market-based interest rates. The ontologies cover quoted interest rates, economic measures such as employment rates, and quoted indices required to support baskets of securities, including specific kinds of securities in share indices or bond indices, as well as credit indices.'
                        .split(' ')
                        .join(''),
                    keywords: 'Finance',
                    installed: 'no',
                    toolsetactions: [
                        <ContextMenu
                            key="contextmenu"
                            className="uitest-table__contextmenu"
                        >
                            <MenuItem key="1">Menu item One</MenuItem>
                            <MenuItem key="2">Second Menu item</MenuItem>
                            <MenuItem key="3">Third</MenuItem>
                            <MenuItem key="4">
                                The 4th and very last menu item
                            </MenuItem>
                        </ContextMenu>,
                    ],
                },
            ],
        };
    }


    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Table</CardTitle>
                <CardContent>
                    <h5>Standard</h5>
                    <Table
                        className="my-own-table-class"
                        scrollTableOverflow
                        preventCellOverflow
                    >
                        <TableHead>
                            <TableRow>
                                {_.map(
                                    this.data.tableHead,
                                    (column, idxColumn) => (
                                        <TableCell key={idxColumn} isHead>
                                            {column.content || false}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {_.map(this.data.tableContent, (row, idxRow) => (
                                <TableRow key={idxRow}>
                                    {_.map(
                                        this.data.tableHead,
                                        (column, idxColumn) => (
                                            <TableCell
                                                key={`${idxRow}.${idxColumn}`}
                                            >
                                                {row[column.identifier]
                                                    || false}
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <h5>Multilined, full width, extra buttons</h5>
                    <Table multiline fullWidth>
                        <TableHead>
                            <TableRow>
                                {_.map(
                                    this.data.tableHead,
                                    (column, idxColumn) => (
                                        <TableCell key={idxColumn} isHead>
                                            {column.content || false}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {_.map(this.data.tableContent, (row, idxRow) => (
                                <TableRow key={idxRow} preventCellOverflow>
                                    {_.map(
                                        this.data.tableHead,
                                        (column, idxColumn) => (
                                            <TableCell
                                                key={`${idxRow}.${idxColumn}`}
                                            >
                                                {row[column.identifier]
                                                    || false}
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <h5>Manual Table</h5>
                    <Table className="my-table-class">
                        <TableHead multiline className="my-table-head-class">
                            <TableRow>
                                <TableCell />
                                <TableCell isHead>
                                    <Icon
                                        name="help"
                                        tooltip="This is a very long description, so any user can understand what it does."
                                    />
                                    testhead 1
                                </TableCell>
                                <TableCell isHead>
                                    <Icon
                                        name="help"
                                        title="normal title, no tooltip"
                                    />
                                    testhead 2
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody multiline className="my-table-body-class">
                            <TableRow>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell isHead className="my-cell-class">
                                    <div className="ecc-component-objectview ecc-component-objectview--iri">
                                        <a
                                            className="mdl-chip"
                                            href="https://example.eccenca.com/035fb68b-4360-4f21-9812-dfd7e04dc94d"
                                        >
                                            <span className="mdl-chip__text">
                                                <span className="ecc-component-objectview__content-inline">
                                                    testcontent 1.1
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </TableCell>
                                <TableCell>testcontent 1.2</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell>
                                    testcontent 2.1a
                                    <br />
testcontent 2.1b
                                </TableCell>
                                <TableCell className="my-cell-class">
                                    testcontent 2.2
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell likeHead className="my-cell-class">
                                    testcontent 3.1
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <p>Paragraph 1.</p>
                                        <p>Paragraph 2.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableBody className="my-table-body-class">
                            <TableRow>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell isHead className="my-cell-class">
                                    testcontent 4.1
                                </TableCell>
                                <TableCell>testcontent 4.2</TableCell>
                            </TableRow>
                            <TableRow multiline>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell>
                                    testcontent 5.1a
                                    <br />
testcontent 5.1b
                                </TableCell>
                                <TableCell className="my-cell-class">
                                    testcontent 5.2
                                </TableCell>
                            </TableRow>
                            <TableRow preventCellOverflow>
                                <TableCell>
                                    <Radio label="Select" name="testtable" value="no valaue" checked={false} />
                                </TableCell>
                                <TableCell
                                    multiline
                                    likeHead
                                    className="my-cell-class"
                                >
                                    testcontent 6.1
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <p>Paragraph 1.</p>
                                        <p>Paragraph 2.</p>
                                    </div>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    This
                                                    <br />
is
                                                    <br />
a
                                                    <br />
nested
                                                    <br />
table.
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <h5>Tooltip and Clearance button test</h5>
                    <Table fullWidth scrollTableOverflow>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Table fullWidth>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell isHead>
                                                    This is a medium long label
                                                    {' '}
                                                    <Icon
                                                        name="help"
                                                        tooltip="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        value="clearance test"
                                                        onClearValue={() => (alert('clearance'))}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell isHead>
                                                    Another medium long label
                                                    {' '}
                                                    <Icon
                                                        name="help"
                                                        tooltip="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        reducedSize
                                                        value="clearance test 2"
                                                        onClearValue={() => (alert('clearance'))}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        );
    }
}

export default TestTable;
