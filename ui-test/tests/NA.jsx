import React from 'react';
import {Card, CardTitle, CardContent, NotAvailable} from '../../index';

function TestNA() {
    return (
        <Card>
            <CardTitle>Test N/A</CardTitle>
            <CardContent>
                <div key="N/A">
                    <p>
                        This is a test with a block{' '}
                        <NotAvailable
                            label="N/A"
                            description="Not available element"
                        />{' '}
                        information.
                    </p>
                    <p>
                        This is a test with a inline
                        <NotAvailable inline />information.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
export default TestNA;
