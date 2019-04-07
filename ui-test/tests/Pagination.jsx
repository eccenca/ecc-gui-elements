import React from 'react';
import {
    Card, CardTitle, CardContent, Pagination,
} from '../../index';

class TestPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paginationOffset: 15,
            paginationLimit: 3,
        };
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
    }

    handlePaginationChange({ offset, limit }) {
        console.log(`Pagination: Offset ${offset} Limit: ${limit}`);
        this.setState({
            paginationLimit: limit,
            paginationOffset: offset,
        });
    }

    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Pagination</CardTitle>
                <CardContent>
                    <h5>Pagination only with required options and default values</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        onChange={this.handlePaginationChange}
                        totalResults={10001}
                    />
                    <h5>Pagination with selection of page size and page jumper</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        totalResults={10001}
                        newLimitText="Elements per Page"
                        onChange={this.handlePaginationChange}
                        showPageInput={true}
                    />
                    <h5>Pagination of 0 elements</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={0}
                        onChange={this.handlePaginationChange}
                    />
                    <h5>Pagination of 0 elements displaying element offsets</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={0}
                        onChange={this.handlePaginationChange}
                        showElementOffsetPagination
                        hideTotalResults
                    />
                    <h5>Pagination using field for offset</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={10001}
                        newLimitText="Elements per Page"
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        onChange={this.handlePaginationChange}
                        showElementOffsetPagination
                        hideTotalResults
                    />
                    <h5>Pagination with disabled controls</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={10001}
                        newLimitText="Elements per Page"
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        onChange={this.handlePaginationChange}
                        disabled={true}
                        hideTotalResults
                        showPageInput={true}
                    />
                    <h5>Pagination with unknown elements</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                        totalResults={undefined}
                        newLimitText="Elements per Page"
                        onChange={this.handlePaginationChange}
                        showPageInput={true}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default TestPagination;
