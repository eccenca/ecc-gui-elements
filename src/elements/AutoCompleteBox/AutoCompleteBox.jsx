import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Highlighter from 'react-highlight-words';
import cx from 'classnames';
import SelectBox from '../SelectBox/SelectBox';

const Highlight = props => {
    const {textToHighlight, searchWord} = props;

    if (!_.isString(textToHighlight) || _.isEmpty(textToHighlight)) {
        return false;
    }

    if (!_.isString(searchWord) || _.isEmpty(searchWord)) {
        return <span>{textToHighlight}</span>;
    }

    return (
        <Highlighter
            textToHighlight={textToHighlight}
            searchWords={[searchWord]}
        />
    );
};

class AutoCompleteBox extends React.Component {
    static propTypes = {
        /**
         * pass Textfield user input to parent component (e.g. to update options)
         */
        handleValueChange: PropTypes.func, // query which returns options
        /**
         * Insert a custom className to element
         */
        className: PropTypes.string,
        // rest will be validated by `SelectBox`
    };

    constructor(props) {
        super(props);
        this.displayName = 'AutoCompleteBox';
        this.handleInputChange = this.handleInputChange.bind(this);

        this.currentInputValue = '';
    }

    optionRender = option => {
        const {label, value, description} = option;

        // only show value entry if it is not same as label
        const optionValue =
            value === label ? (
                false
            ) : (
                <code key="autoCompleteValue" className="Select-option__value">
                    <Highlight
                        textToHighlight={value}
                        searchWord={this.currentInputValue}
                    />
                </code>
            );

        const optionDescription = description ? (
            <span
                key="autoCompleteDescription"
                className="Select-option__description">
                <Highlight
                    textToHighlight={description}
                    searchWord={this.currentInputValue}
                />
            </span>
        ) : (
            false
        );

        return [
            <strong key="autoCompleteLabel" className="Select-option__label">
                <Highlight
                    textToHighlight={label}
                    searchWord={this.currentInputValue}
                />
            </strong>,
            optionValue,
            optionDescription,
        ];
    };
    // will only be triggered when the user type something in textfield
    handleInputChange(inputValue) {
        // check if value really changed
        if (!_.isEqual(inputValue, this.currentInputValue)) {
            this.currentInputValue = _.clone(inputValue);
            // directly pass the current value to parent component (e.g. to update external options)
            if (_.isFunction(this.props.handleValueChange)) {
                this.props.handleValueChange(inputValue);
            }
        }

        return inputValue;
    }

    render = () => (
        <SelectBox
            {...this.props}
            className={cx(this.props.className, 'Select--AutoComplete')}
            onInputChange={this.handleInputChange}
            searchable
            optionRenderer={this.optionRender}
        />
    );
}

export default AutoCompleteBox;
