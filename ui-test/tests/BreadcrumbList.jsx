import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    BreadcrumbList,
    BreadcrumbItem,
} from '../../index';

function TestBreadcrumbList() {
    return (
        <Card>
            <CardTitle>Test Breadcrumb List</CardTitle>
            <CardContent>
                <BreadcrumbList className="my-own-class">
                    <BreadcrumbItem
                        onClick={function () {
                            alert('Click on breadcrumb item.');
                        }}
                    >
                        Button
                    </BreadcrumbItem>
                    <BreadcrumbItem href="/">Link</BreadcrumbItem>
                    <BreadcrumbItem>Span</BreadcrumbItem>
                </BreadcrumbList>
            </CardContent>
        </Card>
    );
}
export default TestBreadcrumbList;
