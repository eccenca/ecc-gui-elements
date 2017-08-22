import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Nothing from '../Nothing/Nothing';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const FloatingActionList = React.createClass({
    mixins: [PerformanceMixin],

    propTypes: {
        actions: React.PropTypes.array.isRequired,
        className: React.PropTypes.string,
        fabSize: React.PropTypes.string.isRequired,
        fixed: React.PropTypes.bool,
        iconName: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            fabSize: 'large',
            fixed: false,
            iconName: 'add',
        };
    },

    getInitialState() {
        return {
            activeFAB: false,
        };
    },

    handleFAB(event) {
        event.stopPropagation();
        this.setState({
            activeFAB: !this.state.activeFAB,
        });
    },

    render() {
        const {
            actions,
            className,
            fabSize,
            fixed,
            iconName,
            ...otherProps
        } = this.props;

        if (!actions || actions.length < 1) {
            return <Nothing />;
        }

        const classes = classNames(
            {
                'ecc-floatingactionlist': true
            },
            className
        );

        const floatinglist =  (
            <div className={classes} {...otherProps}>
                <Button
                    className={
                        classNames(
                            'ecc-floatingactionlist__button',
                            {
                                'is-active': this.state.activeFAB === true
                            }
                        )
                    }
                    iconName={actions.length > 1 ? iconName : actions[0].icon}
                    fabSize={fabSize}
                    colored
                    tooltip={actions.length > 1 ? false : actions[0].label}
                    onClick={
                        actions.length > 1 ? this.handleFAB : actions[0].handler
                    }
                />
                {actions.length > 1
                    ? <ul className="mdl-menu mdl-shadow--2dp ecc-floatingactionlist__menu">
                          {_.map(actions, (action, idx) =>
                              <li key={`FloatingAction_${idx}_${action.label}`}>
                                  <button
                                      className="mdl-menu__item"
                                      onClick={action.handler}>
                                      {action.icon
                                          ? <Icon name={action.icon} />
                                          : false}
                                      {action.label}
                                  </button>
                              </li>,
                          )}
                      </ul>
                    : false}
                {actions.length > 1 && this.state.activeFAB
                    ? <div
                          className="ecc-floatingactionlist__menu--backdrop"
                          onMouseOver={this.handleFAB}
                      />
                    : false}
            </div>
        );

        if (fixed === true) {
            return (<div className="ecc-floatingactionlist__wrapper--fixed">
                {floatinglist}
            </div>);
        }

        return floatinglist;
    },
});

export default FloatingActionList;
