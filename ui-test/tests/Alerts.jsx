import React from 'react';
import {
    Alert,
    Card,
    CardTitle,
    CardContent,
    Info,
    Success,
    Warning,
    Error
} from '../../index.js';

class TestAlerts extends React.PureComponent {
    render() {
        return (
            <Card>
                <CardTitle>
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </CardTitle>
                <CardContent>
                    <Info border={true} vertSpacing={true}>
                        info
                    </Info>
                    <Success border={true} vertSpacing={true}>
                        success
                    </Success>
                    <Warning border={true} vertSpacing={true}>
                        warning
                    </Warning>
                    <Error handlerDismiss={() => alert('dismiss handler')}
                           labelDismiss="remove error"
                           vertSpacing={true}>
                        error
                    </Error>
                    <Alert
                        border={true}
                        vertSpacing={true}
                        handlerDismiss={() => alert('dismiss handler')}
                        labelDismiss="label for handler"
                        iconDismiss="help"
                    >
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                </CardContent>
            </Card>
        );
    }
}
;

export default TestAlerts;
