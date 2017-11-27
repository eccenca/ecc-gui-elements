import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    Pagination
} from '../../index.js';

const TestPagination = React.createClass({
    getInitialState() {
        return {
            paginationOffset: 15,
            paginationLimit: 3,
        };
    },

    handlePaginationChange({offset, limit}) {
        console.log(`Pagination: Offset ${offset} Limit: ${limit}`);
        this.setState({
            paginationLimit: limit,
            paginationOffset: offset,
        });
    },

    render() {
        return (
            <Card>
                <CardTitle documentLevel={'h4'}>
                    Test Pagination
                </CardTitle>
                <CardContent>
                    <h5>Pagination with Elements</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        totalResults={88}
                        newLimitText="Elements per Page"
                        onChange={this.handlePaginationChange}
                        offsetAsPage={false}
                        isTopPagination={true}
                    />
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        totalResults={88}
                        newLimitText="Elements per Page"
                        onChange={this.handlePaginationChange}
                        offsetAsPage={false}
                    />
                    <h5>Pagination with Page</h5>
                    Note: if offset is not a multiple of limit the page can be shown wrong
                    because page have to change offset by itself to fit "one page" instead
                    of e.g. show last elements from page 2 and first elements form page 3
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={88}
                        onChange={this.handlePaginationChange}
                        offsetAsPage={true}
                    />
                    <h5>Pagination with no elements</h5>
                    Note: if offset is not a multiple of limit the page can be shown wrong
                    because page have to change offset by itself to fit "one page" instead
                    of e.g. show last elements from page 2 and first elements form page 3
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={0}
                        onChange={this.handlePaginationChange}
                        offsetAsPage={true}
                    />
                </CardContent>
            </Card>
        );
    }
});

export default TestPagination;
