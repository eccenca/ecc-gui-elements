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
                        value={this.state.selectBox3}
                        onChange={this.selectBox3OnChange}
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
                        value={this.state.selectBox4}
                        onChange={this.selectBox4OnChange}
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
