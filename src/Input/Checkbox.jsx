import React from 'react';
import classNames from 'classnames';
import MaterialMixin from '../mixins/MaterialMixin';
import uniqueId from '../utils/uniqueId';
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
        const {className, id, ripple, onChange, checked, disabled, label, children} = this.props;

        let checkboxlabel = label ? label : false;
        if (!checkboxlabel && children) {
            checkboxlabel = children;
        }

        const classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}
                   htmlFor={id}
            >
                <input
                    type="checkbox"
                    id={id}
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

export default uniqueId(Checkbox, {prefix: 'checkbox'});
