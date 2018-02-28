import React from 'react';
import {
    Alert,
    Card,
    CardTitle,
    CardContent,
    FloatingActionList,
    Info,
    Success,
    Warning,
    Error,
} from '../../index';

class TestAlerts extends React.PureComponent {
    render() {
        return (
            <Card>
                <CardTitle>
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </CardTitle>
                <CardContent>
                    <Info border vertSpacing>
                        info
                    </Info>
                    <Success border vertSpacing>
                        success
                    </Success>
                    <Warning border vertSpacing>
                        warning
                    </Warning>
                    <Error
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="remove error"
                        vertSpacing>
                        error
                    </Error>
                    <Alert
                        border
                        vertSpacing
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="label for handler"
                        iconDismiss="help">
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                </CardContent>
                <FloatingActionList
                    actions={[
                        {
                            icon: 'edit',
                            label: 'Something',
                            handler() {
                                alert('You clicked the FAB.');
                            },
                        },
                    ]}
                    fabSize="mini"
                />
            </Card>
        );
    }
}
export default TestAlerts;
