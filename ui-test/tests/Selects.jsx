import React from 'react';

import {Card, CardTitle, CardContent, SelectBox} from '../../index';

const TestInputs = React.createClass({
    getInitialState() {
        return {
            selectBox1: {label: 'labelz', value: 'valuez'},
            selectBox2: 8,
            selectBox3: '',
            selectBox4: '',
        };
    },
    handleChange(value, key) {
        console.log('SelectBox onChange: ', value);
        this.setState({[key]: value});
    },
    render() {
        return (
            <Card>
                <CardTitle documentLevel={'h4'}>Test Selects</CardTitle>
                <CardContent>
                    <h5>SelectBox with objects</h5>
                    <SelectBox
                        placeholder={'Value deleted'}
                        options={[
                            {
                                label: 'labelz',
                                value: 'valuez',
                            },
                            {
                                label: 'label1',
                                value: 'value1',
                            },
                            {
                                label: 'label2',
                                value: 'value2',
                            },
                        ]}
                        name="selectBox1"
                        value={this.state.selectBox1}
                        onChange={this.handleChange}
                        autofocus
                    />
                    <h5>SelectBox with mixed strings and numbers</h5>
                    <SelectBox
                        placeholder={'No Value'}
                        options={['label1', 3, 8]}
                        name="selectBox2"
                        value={this.state.selectBox2}
                        onChange={this.handleChange}
                    />
                    <SelectBox
                        placeholder={'Open option to top'}
                        options={['label1', 3, 8]}
                        name="selectBox2"
                        value={this.state.selectBox2}
                        onChange={this.handleChange}
                        optionsOnTop
                    />
                    <h5>
                        Multiple selections with option to create new entries
                    </h5>
                    <SelectBox
                        placeholder={'Multiselect with create'}
                        options={[
                            'label1',
                            3,
                            'Andelsselskab med begrænset ansvar, Denmark',
                            'Akcionersko Društvo / Акционерско друштво, Republic of Macedonia',
                            8,
                        ]}
                        name="selectBox3"
                        value={this.state.selectBox3}
                        onChange={this.handleChange}
                        multi
                        clearable={false}
                        creatable
                        promptTextCreator={newLabel =>
                            `New freaking Stuff called: ${newLabel}`
                        }
                    />
                    <h5>Async Selectbox</h5>
                    <SelectBox
                        placeholder={'Multiselect with async'}
                        name="selectBox4"
                        value={this.state.selectBox4}
                        onChange={this.handleChange}
                        loadOptions={function(input, callback) {
                            setTimeout(() => {
                                callback(null, {
                                    options: [
                                        {value: 'one', label: 'One'},
                                        {value: 'two', label: 'Two'},
                                    ],
                                    // CAREFUL! Only set this to true when there are no more options,
                                    // or more specific queries will not be sent to the server.
                                    complete: true,
                                });
                            }, 500);
                        }}
                        multi
                        async
                    />
                    <hr />
                </CardContent>
            </Card>
        );
    },
});

export default TestInputs;
