import React from 'react';
import {Table, Card, CardTitle, CardContent, Button, Chip} from '../../index';

// FIXME: add documentation

class TestTable extends React.Component {
    constructor() {
        super();

        this.state = {
            tableHead: [
                {
                    identifier: "vocabularies",
                    content: [
                        <Chip key='chip' type="button" tooltip={false} onClick={() => {}}>vocabularies</Chip>,
                        <Button key='btn' onClick={() => {}} iconName={'swap_vert'} />
                    ],
                },
                {
                    identifier: 'modified',
                    content: [
                        'modified',
                        <Button key='btn' onClick={() => {}} iconName={'swap_vert'} />
                    ],
                },
                {
                    identifier: "description",
                    content: [
                        <Chip key='chip' type="button" tooltip={false} onClick={() => {}}>description</Chip>,
                        <Button key='btn' onClick={() => {}} iconName={'swap_vert'}/>
                    ],
                },
                {
                    identifier: "keywords",
                    content: [
                        <Chip key='chip' type="button" tooltip={false} onClick={() => {
                        }}>keywords</Chip>,
                    ],
                },
                {
                    identifier: "installed",
                    content: [
                        <Chip key='chip' type="button" tooltip={false} onClick={() => {}}>installed</Chip>,
                        <Button key='btn' onClick={() => {}} iconName={'swap_vert'} />
                    ],
                },
            ],
            tableContent: [
                {
                    vocabularies: 'FIBO (sec)',
                    modified: '2017-08-07',
                    description:
                        'The FIBO Securities specification provides a model of concepts that are common to financial instrumants that are also securities, including but not limited to exchange-traded securities, as a part of the overall FIBO family of specifications. High-level concepts relevant to securities classification, identification, issuance, and registration of securities generally are covered, as well as additional detail for equities and debt instruments.',
                    keywords: 'Finance',
                    installed: 'no',
                },
                {
                    vocabularies: 'FIBO (loan)',
                    modified: '2017-08-07',
                    keywords: 'Finance',
                    installed: 'no',
                },
                {
                    vocabularies: 'FIBO (ind)',
                    modified: '2017-08-07',
                    description:
                        'FIBO Indices and Indicators consists of a set of business concepts representing the various forms of market indices, economic indicators and market-based interest rates. The ontologies cover quoted interest rates, economic measures such as employment rates, and quoted indices required to support baskets of securities, including specific kinds of securities in share indices or bond indices, as well as credit indices.',
                    keywords: 'Finance',
                    installed: 'no',
                },
            ],
            tableContentReact: [
                {
                    vocabularies: <Chip onClick={() => {}}>FIBO (sec)</Chip>,
                    modified: <span>2017-08-07</span>,
                    description:
                        'The FIBO Securities specification provides a model of concepts that are common to financial instrumants that are also securities, including but not limited to exchange-traded securities, as a part of the overall FIBO family of specifications. High-level concepts relevant to securities classification, identification, issuance, and registration of securities generally are covered, as well as additional detail for equities and debt instruments.',
                    keywords: 'Finance',
                    installed: 'no',
                },
                {
                    vocabularies: <Chip onClick={() => {}}>FIBO (loan)</Chip>,
                    modified: '2017-08-07',
                    keywords: 'Finance',
                    installed: 'no',
                },
                {
                    vocabularies: <Chip onClick={() => {}}>FIBO (ind)</Chip>,
                    modified: '2017-08-07',
                    description:
                        'FIBO Indices and Indicators consists of a set of business concepts representing the various forms of market indices, economic indicators and market-based interest rates. The ontologies cover quoted interest rates, economic measures such as employment rates, and quoted indices required to support baskets of securities, including specific kinds of securities in share indices or bond indices, as well as credit indices.',
                    keywords: 'Finance',
                    installed: 'no',
                },
            ],
        };
    }

    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Table</CardTitle>
                <CardContent>
                    <h5> Empty cell</h5>
                    <Table
                        tableHead={this.state.tableHead}
                        tableContent={this.state.tableContent}
                    />
                    <h5> Append/Prepend</h5>
                    <Table
                        headPrepend={['prefixColumn']}
                        tableHead={this.state.tableHead}
                        headAppend={['suffixColumn']}
                        tableContent={this.state.tableContent}
                        contentPrepend={[<Button disabled>Pre</Button>]}
                        contentAppend={[<Button>Append</Button>]}
                    />
                    <h5> React header and content</h5>
                    <Table
                        headPrepend={['prefixColumn']}
                        tableHead={this.state.tableHead}
                        tableContent={this.state.tableContentReact}
                        contentPrepend={[<Button disabled>Pre</Button>]}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default TestTable;
