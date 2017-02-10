import React from 'react';
import _ from 'lodash';
import {
    Checkbox,
    RadioButton,
    RadioGroup,
    SelectBox,
    Switch,
    TextField,
} from '../../index.js';

const TestInputs = React.createClass({
    getInitialState() {
        return {
            selectBox1: {label: 'labelz', value: 'valuez'},
            selectBox2: 8,
            selectBox3: '',
            switches: [false, true, undefined, undefined, true, false],
            textInput: ['5'],
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

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Inputfields</h4>
                </div>
                <div className="mdl-card__content">
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
                        container="ul"
                        childContainer="li"
                        name="testradio"
                        onChange={this.selectedRadio}
                        value={this.state.selectedRadio}
                    >
                        <RadioButton
                            value="one"
                        />
                        <RadioButton
                            value="two"
                            label="Radio 1 Text"
                        />
                        <RadioButton
                            disabled
                            value="three"
                        >
                            Radio 2 Text
                        </RadioButton>
                        <RadioButton
                            value="four"
                        >
                            <div className="test">Radio 3 Text</div>
                        </RadioButton>
                        <div>
                            <p>
                                Current value:
                                {this.state.selectedRadio}
                            </p>
                        </div>
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
                </div>
            </div>
        );
    }
});

export default TestInputs;
