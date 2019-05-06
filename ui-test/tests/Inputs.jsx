import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

import {
    Checkbox,
    Card,
    CardTitle,
    CardContent,
    Radio,
    RadioGroup,
    Switch,
    TextField,
    DateField,
    DateTimefield,
} from '../../index';

class TestInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switches: [false, true, true, false, true, false],
            textInput: ['5', '', ''],
            selectedRadio: '',
            dateInput: [
                // date only
                moment('2017-02-08'),
                moment('2017-02-08 09:30:26'),
                moment('08-02-2017', 'DD-MM-YYYY'),
                moment('02-08-2017', 'MM-DD-YYYY'),
                moment(''),
                // time only
                moment('14:23', 'HH:mm'),
                moment('02:23 pm', 'hh:mm a'),
                moment('2:23 pm', 'hh:mm:a'),
                // combined
                moment('2017-02-08 09:30:26'),
                moment(''),
            ],
        };
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue({
        name, rawValue, value, isValid,
    }) {
        console.log(
            `Changing value of ${name} to: ${value}`,
            `(${isValid ? 'valid' : 'invalid'})`,
            ` | Raw: ${rawValue}`
        );
        const currentState = this.state;
        _.set(currentState, name, value);
        this.setState(currentState);
    }

    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Inputfields</CardTitle>
                <CardContent>
                    <Switch
                        id="test_id_666"
                        name="switches[0]"
                        ripple
                        checked={this.state.switches[0]}
                        onChange={this.updateValue}
                    />
                    <Switch
                        name="switches[1]"
                        checked={this.state.switches[1]}
                        onChange={this.updateValue}
                    >
                        Switch with Ripple
                    </Switch>
                    <hr />
                    <Checkbox
                        name="switches[2]"
                        id="test_id_667"
                        ripple
                        checked={this.state.switches[2]}
                        onChange={this.updateValue}
                        className="my-checkbox"
                    />
                    <Checkbox
                        name="switches[3]"
                        label="Checkbox 1 Text"
                        checked={this.state.switches[3]}
                        onChange={this.updateValue}
                    />
                    <Checkbox
                        name="switches[3b]"
                        hideLabel
                        label="Hidden string label"
                        checked={this.state.switches[3]}
                        onChange={this.updateValue}
                    />
                    <Checkbox
                        name="switches[4]"
                        disabled
                        checked={this.state.switches[4]}
                        onChange={this.updateValue}
                    >
                        Checkbox 2 Text
                    </Checkbox>
                    <Checkbox
                        name="switches[5]"
                        checked={this.state.switches[5]}
                        onChange={this.updateValue}
                    >
                        <div className="test">Checkbox 3 Text</div>
                    </Checkbox>
                    <Checkbox
                        name="switches[5b]"
                        hideLabel
                        checked={this.state.switches[5]}
                        onChange={this.updateValue}
                    >
                        <div className="test">Hidden children label</div>
                    </Checkbox>
                    <hr />
                    <RadioGroup
                        name="selectedRadio"
                        onChange={this.updateValue}
                        value={this.state.selectedRadio}
                    >
                        <Radio value="one" name="one" checked={false} />
                        <Radio name="two" value="two" label="Radio 2 Text" checked={false} />
                    </RadioGroup>
                    <RadioGroup
                        childContainer="div"
                        name="selectedRadio"
                        onChange={this.updateValue}
                        value={this.state.selectedRadio}
                    >
                        <Radio disabled value="three" name="three" checked={false}>
                            Radio 3 Text
                        </Radio>
                        <Radio name="four" value="four" checked={false}>
                            <div className="test">
                                Radio 4 Text
                                {' '}
                                <br />
Line 2
                            </div>
                        </Radio>
                    </RadioGroup>
                    <div>
                        <p>
                            Current value:
                            {this.state.selectedRadio}
                        </p>
                    </div>
                    <RadioGroup
                        name="name2"
                        container="div"
                        value={this.state.selectedRadio}
                    >
                        <Radio name="one" value="one" checked={false} />
                        <Radio name="two" value="two" label="Radio 2 Text" checked={false} />
                        <Radio name="three" disabled value="three" checked={false}>
                            Radio 3 Text
                        </Radio>
                        <Radio name="four" value="four" checked={false}>
                            <div className="test">
                                Radio 4 Text
                                {' '}
                                <br />
Line 2
                            </div>
                        </Radio>
                        <Radio name="one" value="one" checked={false} />
                        <Radio name="two" value="two" label="Radio 2 Text" checked={false} />
                        <Radio name="three" disabled value="three" checked={false}>
                            Radio 3 Text
                        </Radio>
                        <Radio name="four" value="four" hideLabel checked={false}>
                            <div className="test">
                                Radio 4 Text
                                {' '}
                                <br />
Line 2
                            </div>
                        </Radio>
                    </RadioGroup>
                    <hr />
                    <h5>Textfields</h5>
                    <TextField
                        name="textInput[0]"
                        value={this.state.textInput[0]}
                        label="Test Input"
                        onChange={this.updateValue}
                    />
                    <TextField
                        name="textInput[0]"
                        value={this.state.textInput[0]}
                        label="Test Input (not full width)"
                        onChange={this.updateValue}
                        stretch={false}
                    />
                    <TextField
                        multiline
                        name="textInput[1]"
                        label="Multiline input"
                        className="mdl-textfield--full-width"
                        value={this.state.textInput[1]}
                        onChange={this.updateValue}
                        onClearValue={() => {
                            const currentState = this.state;
                            currentState.textInput[1] = '';
                            this.setState(currentState);
                        }}
                    />
                    <TextField
                        stretch
                        reducedSize
                        name="textInput[2]"
                        label="Clearable input and reduced size"
                        value={this.state.textInput[2]}
                        onChange={this.updateValue}
                        onClearValue={() => {
                            const currentState = this.state;
                            currentState.textInput[2] = '';
                            this.setState(currentState);
                        }}
                    />
                    <TextField
                        disabled
                        stretch
                        reducedSize
                        name="textInput[2]"
                        label="Clearable input and disabled"
                        value={this.state.textInput[2]}
                        onChange={this.updateValue}
                        onClearValue={() => {
                            const currentState = this.state;
                            currentState.textInput[2] = '';
                            this.setState(currentState);
                        }}
                    />
                    <TextField
                        stretch
                        reducedSize
                        name="textInput[2]"
                        placeholder="No label and reduced size"
                        value={this.state.textInput[2]}
                        onChange={this.updateValue}
                    />
                    <TextField
                        name="textInput[0]"
                        value={this.state.textInput[0]}
                        label="Test Input"
                        error="Something went wrong, so this error is shown."
                        onChange={this.updateValue}
                    />
                    <h5>Expandables</h5>
                    <TextField
                        name="textInput[2]"
                        value={this.state.textInput[2]}
                        label="Expandable test field"
                        onChange={this.updateValue}
                        expandable
                        expandableIcon="search"
                    />
                    <h5>Datefields</h5>
                    date only fields (8th, February 2017)
                    <br />
                    <DateField
                        label="Date label"
                        stretch={false}
                        error="This error is shown."
                        value={this.state.dateInput[0]}
                        name="dateInput[0]"
                        onChange={this.updateValue}
                        className="my-uitest-class"
                    />
                    <DateField
                        placeholder="Date placeholder"
                        stretch={false}
                        value={this.state.dateInput[1]}
                        name="dateInput[1]"
                        onChange={this.updateValue}
                    />
                    <DateField
                        value={this.state.dateInput[2]}
                        name="dateInput[2]"
                        onChange={this.updateValue}
                    />
                    <DateField
                        value={this.state.dateInput[3]}
                        name="dateInput[3]"
                        onChange={this.updateValue}
                    />
                    <DateField
                        value={this.state.dateInput[4]}
                        name="dateInput[4]"
                        onChange={this.updateValue}
                        closeOnSelect
                        placeholder="picker disappear on select"
                    />
                    time only fields (14:23)
                    <br />
                    <DateTimefield
                        value={this.state.dateInput[5]}
                        name="dateInput[5]"
                        onChange={this.updateValue}
                        dateFormat={false}
                    />
                    <DateTimefield
                        value={this.state.dateInput[6]}
                        name="dateInput[6]"
                        onChange={this.updateValue}
                        dateFormat={false}
                    />
                    <DateTimefield
                        value={this.state.dateInput[7]}
                        name="dateInput[7]"
                        onChange={this.updateValue}
                        dateFormat={false}
                    />
                    date and time
                    <DateTimefield
                        value={this.state.dateInput[8]}
                        name="dateInput[8]"
                        onChange={this.updateValue}
                    />
                    no manual input
                    <br />
                    Selected date:
                    {' '}
                    {this.state.dateInput[9].format()}
                    <DateTimefield
                        value={this.state.dateInput[9]}
                        name="dateInput[9]"
                        onChange={this.updateValue}
                        input={false}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default TestInputs;
