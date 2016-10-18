import React from 'react';
import classNames from 'classnames';
import MaterialMixin from '../mixins/MaterialMixin';
import uniqueId from '../utils/uniqueId';
// does not use Switch from react-mdl because overspecified onChange property request

const Switch = React.createClass({
    mixins: [MaterialMixin],

    propTypes: {
        className: React.PropTypes.string,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        id: React.PropTypes.string,
        onChange: React.PropTypes.func,
        ripple: React.PropTypes.bool
    },

    defaultProps: {
        ripple: false
    },

    render() {
        const {className, id, ripple, onChange, checked, disabled, children, ...otherProps} = this.props;


        const classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}
                   htmlFor={id}
                   {...otherProps}
            >
                <input
                    type="checkbox"
                    id={id}
                    className="mdl-switch__input"
                    defaultChecked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                {
                    children ? (
                        <span className="mdl-switch__label">{children}</span>
                    ) : false
                }
            </label>
        );
    }
});

export default uniqueId(Switch, {prefix: 'switch'});
