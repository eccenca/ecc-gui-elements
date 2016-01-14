import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import MaterialMixin from '../mixins/MaterialMixin';
// does not use Checkbox from react-mdl because overspecified onChange property request

const Checkbox = React.createClass({
    mixins: [MaterialMixin],

    propTypes: {
        className: React.PropTypes.string,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        id: React.PropTypes.string,
        label: React.PropTypes.string,
        onChange: React.PropTypes.func,
        ripple: React.PropTypes.bool
    },

    defaultProps: {
        ripple: false
    },

    render() {
        const {className, id, ripple, onChange, checked, disabled, label, children, ...otherProps} = this.props;

        let inputId = _.uniqueId('switch_');
        if (id) {
            inputId = id;
        }

        let checkboxlabel = label ? label : false;
        if (!checkboxlabel && children) {
            checkboxlabel = children;
        }

        const classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}
                   htmlFor={inputId}
            >
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-checkbox__input"
                    defaultChecked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                {checkboxlabel ? <span className="mdl-checkbox__label">{checkboxlabel}</span> : false}
            </label>
        );
    }
});

export default Checkbox;
