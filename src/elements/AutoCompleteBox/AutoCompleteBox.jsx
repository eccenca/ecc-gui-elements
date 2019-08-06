import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Highlighter from 'react-highlight-words';
import cx from 'classnames';
import SelectBox from '../SelectBox/SelectBox';

const Highlight = props => {
    const { textToHighlight, searchWord } = props;

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
            autoEscape={true}
        />
    );
};

class AutoCompleteBox extends Component {
    static propTypes = {
        /**
         * pass Textfield user input to parent component (e.g. to update options)
         */
        handleValueChange: PropTypes.func, // query which returns options
        /**
         * Insert a custom className to element
         */
        className: PropTypes.string,
        /**
         * Allow to manipulate inserted user input string before using it
         */
        inputRestriction: PropTypes.func,
        /**
         * Define if the label is shown in option's dropdown
         */
        showLabel: PropTypes.bool,
        /**
         * Define if the value is shown in option's dropdown
         */
        showValue: PropTypes.bool,
        /**
         * Define if the description is shown in option's dropdown
         */
        showDescription: PropTypes.bool,
        // rest will be validated by `SelectBox`
    };

    static defaultProps = {
        showLabel: true,
        showValue: true,
        showDescription: true,
    };

    /**
     * @param props
     */
    constructor(props) {
        super(props);
        this.displayName = 'AutoCompleteBox';
        this.handleInputChange = this.handleInputChange.bind(this);

        this.currentInputValue = '';
    }

    optionRender = option => {
        const { showLabel, showValue, showDescription } = this.props;
        const { label, value, description } = option;
        const escapedInput = this.currentInputValue.replace(/[?*|$]/g, '\\$0');
        // only show value entry if it is not same as label and is allowed to show
        const optionValue = (value !== label) && showValue && (
            <code key="autoCompleteValue" className="Select-option__value">
                <Highlight
                    textToHighlight={value}
                    searchWord={escapedInput}
                />
            </code>
        );

        const optionDescription = description && showDescription && (
            <span
                key="autoCompleteDescription"
                className="Select-option__description"
            >
                <Highlight
                    textToHighlight={description}
                    searchWord={escapedInput}
                />
            </span>
        );

        const optionLabel = label && showLabel && (
            <strong key="autoCompleteLabel" className="Select-option__label">
                <Highlight
                    textToHighlight={label}
                    searchWord={escapedInput}
                />
            </strong>
        );

        return [
            optionLabel,
            optionValue,
            optionDescription,
        ];
    };

    // will only be triggered when the user type something in textfield
    handleInputChange(inputValue) {
        if (_.isFunction(this.props.inputRestriction)) {
            inputValue = this.props.inputRestriction(inputValue);
        }
        const inputValueCleaned = inputValue.replace(/\$/g, '');
        // check if value really changed
        if (!_.isEqual(inputValueCleaned, this.currentInputValue)) {
            this.currentInputValue = _.clone(inputValueCleaned);
            // directly pass the current value to parent component (e.g. to update external options)
            if (_.isFunction(this.props.handleValueChange)) {
                this.props.handleValueChange(inputValueCleaned);
            }
        }
        return inputValueCleaned;
    }

    render() {
        const {
            showLabel, showValue, showDescription, ...props
        } = this.props;
        return (
            <SelectBox
                {...props}
                className={cx(this.props.className, 'Select--AutoComplete')}
                onInputChange={this.handleInputChange}
                searchable
                optionRenderer={this.optionRender}
            />
        );
    }
}

export default AutoCompleteBox;
