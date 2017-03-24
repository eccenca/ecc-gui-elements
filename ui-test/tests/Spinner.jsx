import React from 'react';
import {
    Spinner,
} from '../../index.js';

class TestSpinner extends React.PureComponent {
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Spinner</h4>
                </div>
                <div className="mdl-card__content">
                    <Spinner appearInline={true}/>
                    <Spinner appearLocal={true}/>
                </div>
                <Spinner />
            </div>
        );
    }
}
;

export default TestSpinner;
