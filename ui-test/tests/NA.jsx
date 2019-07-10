import React from 'react';
import {
    Card, CardTitle, CardContent, NotAvailable,
} from '../../index';

function TestNA() {
    return (

        <Card>
            <CardTitle>Test N/A</CardTitle>
            <CardContent>
                <div key="N/A">
                    <div>
                        This is a test with a block
                        {' '}
                        <NotAvailable
                            label="N/A"
                            description="Tooltip description for N/A element"
                        />
                        {' '}
                        information.
                    </div>
                    <div>
                        This is a test with a inline
                        {' '}<NotAvailable inline />{' '}
                        information.
                    </div>
                    <NotAvailable label="N/A with label without description for tooltip" />
                </div>
            </CardContent>
        </Card>
    );
}
export default TestNA;
