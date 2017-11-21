import React from 'react';
import _ from 'lodash';
import {
    Checkbox,
    Card,
    CardTitle,
    CardContent,
    Radio,
    RadioGroup,
    SelectBox,
    Switch,
    TextField,
    DateField,
    DateTimefield,
} from '../../index.js';

const TestInputs = React.createClass({
    getInitialState() {
        return {
            selectBox1: {label: 'labelz', value: 'valuez'},
            selectBox2: 8,
            selectBox3: '',
            selectBox4: '',
            switches: [false, true, undefined, undefined, true, false],
            textInput: ['5'],
            selectedRadio: '',
            dateInput:[
                // date only
                '2017-02-08',
                '2017-02-08 09:30:26',
                '08-02-2017',
                '02-08-2017',
                '',
                // time only
                '14:23',
                '02:23 pm',
                '2:23 pm',
                // combined
                '2017-02-08 09:30:26',
                '',
            ],
        };
    },

    selectBox1OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox1: value});
    },
    selectBox2OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox2: value});
    },
    selectBox3OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox3: value});
    },
    selectBox4OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox4: value});
    },

    updateSwitch(index, {value}) {
        const switches = _.clone(this.state.switches);
        switches[index] = value;
        this.setState({
            switches,
        });
    },

    updateRadio({value}) {

        this.setState({
            selectedRadio: value,
        })

    },

    updateTextInput(index, {value}) {
        const textInput = _.clone(this.state.textInput);
        textInput[index] = value;
        this.setState({
            textInput,
        });
    },

    updateDateInput(index, {rawValue, value, isValid}) {
        console.log('New Date is:', value, '(' + (isValid ? 'valid' : 'invalid') + ')', 'Raw:', rawValue);
        const dateInput = this.state.dateInput;
        dateInput[index] = value;
        this.setState({
            dateInput,
        });
    },

    render() {
        return (
            <Card>
                <CardTitle documentLevel={'h4'}>
                    Test Inputfields
                </CardTitle>
                <CardContent>
                    <Switch
                        id="test_id_666"
                        ripple={true}
                        checked={this.state.switches[0]}
                        onChange={this.updateSwitch.bind(null, 0)}
                    />
                    <Switch
                        checked={this.state.switches[1]}
                        onChange={this.updateSwitch.bind(null, 1)}
                    >
                        Switch with Ripple
                    </Switch>

                    <hr />

                    <Checkbox
                        id="test_id_667"
                        ripple={true}
                        checked={this.state.switches[2]}
                        onChange={this.updateSwitch.bind(null, 2)}
                    />
                    <Checkbox
                        label="Checkbox 1 Text"
                        checked={this.state.switches[3]}
                        onChange={this.updateSwitch.bind(null, 3)}
                    />
                    <Checkbox
                        disabled
                        checked={this.state.switches[4]}
                        onChange={this.updateSwitch.bind(null, 4)}
                    >
                        Checkbox 2 Text
                    </Checkbox>
                    <Checkbox
                        checked={this.state.switches[5]}
                        onChange={this.updateSwitch.bind(null, 5)}
                    >
                        <div className="test">Checkbox 3 Text</div>
                    </Checkbox>

                    <hr />

                    <RadioGroup
                        name="testradio1"
                        onChange={this.updateRadio}
                        value={this.state.selectedRadio}
                    >
                        <Radio
                            value="one"
                        />
                        <Radio
                            value="two"
                            label="Radio 2 Text"
                        />
                    </RadioGroup>
                    <RadioGroup
                        childContainer="div"
                        name="testradio2"
                        onChange={this.updateRadio}
                        value={this.state.selectedRadio}
                    >
                        <Radio
                            disabled
                            value="three"
                        >
                            Radio 3 Text
                        </Radio>
                        <Radio
                            value="four"
                        >
                            <div className="test">Radio 4 Text <br/>Line 2</div>
                        </Radio>
                    </RadioGroup>
                    <div>
                        <p>
                            Current value:
                            {this.state.selectedRadio}
                        </p>
                    </div>
                    <RadioGroup
                        container="div"
                        value={this.state.selectedRadio}
                    >
                        <Radio
                            value="one"
                        />
                        <Radio
                            value="two"
                            label="Radio 2 Text"
                        />
                        <Radio
                            disabled
                            value="three"
                        >
                            Radio 3 Text
                        </Radio>
                        <Radio
                            value="four"
                        >
                            <div className="test">Radio 4 Text <br/>Line 2</div>
                        </Radio>
                        <Radio
                            value="one"
                        />
                        <Radio
                            value="two"
                            label="Radio 2 Text"
                        />
                        <Radio
                            disabled
                            value="three"
                        >
                            Radio 3 Text
                        </Radio>
                        <Radio
                            value="four"
                        >
                            <div className="test">Radio 4 Text <br/>Line 2</div>
                        </Radio>
                    </RadioGroup>

                    <hr />

                    <h5>SelectBox with objects</h5>
                    <SelectBox
                        placeholder={'Value deleted'}
                        options={[
                            {
                                label: 'labelz',
                                value: 'valuez'
                            },
                            {
                                label: 'label1',
                                value: 'value1'
                            },
                            {
                                label: 'label2',
                                value: 'value2'
                            }
                        ]}
                        value={this.state.selectBox1}
                        onChange={this.selectBox1OnChange}
                        autofocus
                    />
                    <h5>SelectBox with mixed strings and numbers</h5>
                    <SelectBox
                        placeholder={'No Value'}
                        options={['label1', 3, 8]}
                        value={this.state.selectBox2}
                        onChange={this.selectBox2OnChange}
                    />
                    <SelectBox
                        placeholder={'Open option to top'}
                        options={['label1', 3, 8]}
                        value={this.state.selectBox2}
                        onChange={this.selectBox2OnChange}
                        optionsOnTop={true}
                    />
                    <h5>Multiple selections with option to create new entries</h5>
                    <SelectBox
                        placeholder={'Multiselect with create'}
                        options={[
                            'label1',
                            3,
                            'Andelsselskab med begrænset ansvar, Denmark',
                            'Akcionersko Društvo / Акционерско друштво, Republic of Macedonia',
                            8
                        ]}
                        value={this.state.selectBox3}
                        onChange={this.selectBox3OnChange}
                        multi={true}
                        clearable={false}
                        creatable={true}
                        promptTextCreator={
                            (newLabel) => `New freaking Stuff called: ${newLabel}`
                        }
                    />
                    <h5>Async Selectbox</h5>
                    <SelectBox
                        placeholder={'Multiselect with async'}
                        value={this.state.selectBox4}
                        onChange={this.selectBox4OnChange}
                        loadOptions={function(input, callback) {
                            setTimeout(function() {
                                callback(null, {
                                    options: [
                                        { value: 'one', label: 'One' },
                                        { value: 'two', label: 'Two' }
                                    ],
                                    // CAREFUL! Only set this to true when there are no more options,
                                    // or more specific queries will not be sent to the server.
                                    complete: true
                                });
                            }, 500);
                        }}
                        multi={true}
                        async={true}
                    />
                    <hr />

                    <h5>Textfields</h5>
                    <TextField
                        value={this.state.textInput[0]}
                        label="Test Input"
                        onChange={this.updateTextInput.bind(null, 0)}
                    />
                    <TextField
                        value={this.state.textInput[0]}
                        label="Test Input (not full width)"
                        onChange={this.updateTextInput.bind(null, 0)}
                        stretch={false}
                    />
                    <TextField
                        multiline={true}
                        label="Multiline input"
                        className="mdl-textfield--full-width"
                        value={this.state.textInput[1]}
                        onChange={this.updateTextInput.bind(null, 1)}
                    />
                    <TextField
                        value={this.state.textInput[0]}
                        label="Test Input"
                        error="Something went wrong, so this error is shown."
                        onChange={this.updateTextInput.bind(null, 0)}
                    />

                    <h5>Datefields</h5>
                    date only fields (8th, February 2017)<br/>
                    <DateField
                        label="Date label"
                        stretch={false}
                        error="This error is shown."
                        value={this.state.dateInput[0]}
                        onChange={this.updateDateInput.bind(null, 0)}
                    />
                    <DateField
                        placeholder="Date placeholder"
                        stretch={false}
                        value={this.state.dateInput[1]}
                        onChange={this.updateDateInput.bind(null, 1)}
                    />
                    <DateField
                        value={this.state.dateInput[2]}
                        onChange={this.updateDateInput.bind(null, 2)}
                        initialFormat="DD-MM-YYYY"
                    />
                    <DateField
                        value={this.state.dateInput[3]}
                        onChange={this.updateDateInput.bind(null, 3)}
                        initialFormat="MM-DD-YYYY"
                    />
                    <DateField
                        value={this.state.dateInput[4]}
                        onChange={this.updateDateInput.bind(null, 4)}
                        closeOnSelect
                        placeholder="picker disappear on select"
                    />
                    time only fields (14:23)<br/>
                    <DateTimefield
                        value={this.state.dateInput[5]}
                        onChange={this.updateDateInput.bind(null, 5)}
                        dateFormat={false}
                        initialFormat="HH:mm"
                    />
                    <DateTimefield
                        value={this.state.dateInput[6]}
                        onChange={this.updateDateInput.bind(null, 6)}
                        dateFormat={false}
                        initialFormat="hh:mm a"
                    />
                    <DateTimefield
                        value={this.state.dateInput[7]}
                        onChange={this.updateDateInput.bind(null, 7)}
                        dateFormat={false}
                        initialFormat="hh:mm a"
                    />
                    date and time
                    <DateTimefield
                        value={this.state.dateInput[8]}
                        onChange={this.updateDateInput.bind(null, 8)}
                    />
                    no manual input
                    <br/>
                    Selected date: {this.state.dateInput[9]}
                    <DateTimefield
                        value={this.state.dateInput[9]}
                        onChange={this.updateDateInput.bind(null, 9)}
                        input={false}
                    />
                </CardContent>
            </Card>
        );
    }
});

export default TestInputs;
