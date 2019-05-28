import React, { Component } from 'react';
import _ from 'lodash';
import {
    Card,
    CardTitle,
    CardContent,
    SelectBox,
    AutoCompleteBox,
    Checkbox,
} from '../../index';

const selectOptions = [
    {
        label: 'Label 1',
        value: 'http://example.com/this/is/a/very/log/example/for/an/resourceuri/one',
        description: 'This is one of the options with a description',
    },
    {
        label: 'label two',
        value: 'http://example.com/this/is/a/very/log/example/for/an/resourceuri/two',
    },
    {
        label: 'label three',
        value: 'http://example.com/this/is/a/very/log/example/for/an/resourceuri/three',
        description: 'This is one of the options with another description',
    },
    {
        label: 'http://example.com/this/is/a/very/log/example/for/an/resourceuri/four',
        value: 'http://example.com/this/is/a/very/log/example/for/an/resourceuri/four',
        description: 'The fourth option has the same data for label and value',
    },
];

class TestSelects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectSettings: {
                searchable: true,
                optionsOnTop: false,
                clearable: false,
                multi: true,
                creatable: false,
                disabled: false,
            },
            selectBox1: _.head(selectOptions),
            selectBox2: [],
            autoCompleteBox1: null,
            autoCompleteBox2: null,
            autoCompleteBox3: null,
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelectChange(value, key) {
        console.log('SelectBox onChange: ', value);
        this.setState({ [key]: value });
    }

    handleChange({ value, name }) {
        const newState = this.state;
        console.warn(newState, name);
        _.set(newState, name, value);
        this.setState(newState);
    }

    render() {
        const { selectSettings } = this.state;

        return (
            <Card>
                <CardTitle documentLevel="h4">Test Selects</CardTitle>
                <CardContent>
                    <h5>Select Boxes</h5>
                    <SelectBox
                        placeholder="Sync select box"
                        options={selectOptions}
                        name="selectBox1"
                        value={this.state.selectBox1}
                        onChange={this.handleSelectChange}
                        {...selectSettings}
                    />
                    <SelectBox
                        placeholder="Async select box"
                        name="selectBox2"
                        value={this.state.selectBox2}
                        onChange={this.handleSelectChange}
                        async
                        loadOptions={function (input, callback) {
                            console.warn('loadOptions');
                            setTimeout(() => {
                                callback(null, {
                                    options: selectOptions,
                                    // CAREFUL! Only set this to true when there are no more options,
                                    // or more specific queries will not be sent to the server.
                                    complete: true,
                                });
                            }, 250);
                        }}
                        {...selectSettings}
                    />
                    <h6>Reduced size / without placeholder label</h6>
                    <SelectBox
                        reducedSize
                        placeholder="Sync select box"
                        options={selectOptions}
                        name="selectBox1"
                        value={this.state.selectBox1}
                        onChange={this.handleSelectChange}
                        {...selectSettings}
                    />
                    <SelectBox
                        placeholder=""
                        options={selectOptions}
                        name="selectBox1"
                        value={this.state.selectBox1}
                        onChange={this.handleSelectChange}
                        {...selectSettings}
                    />
                    <SelectBox
                        reducedSize
                        placeholder=""
                        options={selectOptions}
                        name="selectBox1"
                        value={this.state.selectBox1}
                        onChange={this.handleSelectChange}
                        {...selectSettings}
                    />
                    <hr />
                    Settings:
                    {_.map(selectSettings, (value, key) => (
                        <Checkbox
                            key={key}
                            name={`selectSettings.${key}`}
                            checked={value}
                            onChange={this.handleChange}
                        >
                            {key}
                        </Checkbox>
                    ))}
                    <hr />
                    <h5>Auto Complete Box</h5>
                    <AutoCompleteBox
                        placeholder="Sync select box"
                        options={selectOptions}
                        name="autoCompleteBox1"
                        value={this.state.autoCompleteBox1}
                        onChange={this.handleSelectChange}
                    />
                    <AutoCompleteBox
                        placeholder="createable select box"
                        options={selectOptions}
                        creatable
                        name="autoCompleteBox2"
                        value={this.state.autoCompleteBox2}
                        onChange={this.handleSelectChange}
                    />
                    <AutoCompleteBox
                        placeholder="restricted input (no starting ? or *)"
                        options={selectOptions}
                        creatable
                        inputRestriction={string => string.replace(/^(\?|\*)/, '')}
                        name="autoCompleteBox3"
                        value={this.state.autoCompleteBox3}
                        onChange={this.handleSelectChange}
                    />
                <h6>Reduced size / without placeholder label</h6>
                    <AutoCompleteBox
                        reducedSize
                        placeholder="Sync select box"
                        options={selectOptions}
                        name="autoCompleteBox1"
                        value={this.state.autoCompleteBox1}
                        onChange={this.handleSelectChange}
                    />
                    <AutoCompleteBox
                        placeholder=""
                        options={selectOptions}
                        name="autoCompleteBox1"
                        value={this.state.autoCompleteBox1}
                        onChange={this.handleSelectChange}
                    />
                    <AutoCompleteBox
                        reducedSize
                        placeholder=""
                        options={selectOptions}
                        name="autoCompleteBox1"
                        value={this.state.autoCompleteBox1}
                        onChange={this.handleSelectChange}
                    />
                </CardContent>
            </Card>
        );
    }
}
export default TestSelects;
