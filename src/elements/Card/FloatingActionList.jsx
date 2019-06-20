import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

/**
The `<FloatingActionList />` element provides functionality for a quick adaption of the floating action button (FAB) pattern from Material Design.
It can be configured with a single action handler or a list of them. Then it opens a list of provided actions when activated, with a single action it will trigger the configured event handler immediately on default.
The position of the FAB is always the right bottom corner within the card but there is an `fixed` option to made it always visible in case the card is not fully shown in the viewport.
When there is already a fixed `<CardActions />` element in use put the `<FloatingActionList />` in it to use it fixed.

```js
import {
    Card,
    CardTitle,
    CardContent,
    CardActions,
    FloatingActionList
} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <div>
                <Card>
                    <CardTitle>
                        Card title
                    </CardTitle>
                    <CardContent>
                        <!-- ... -->
                    </CardContent>
                    <FloatingActionList
                        className={'my-own-class'} // string, element can be enhanced with additional CSS classes
                        openToBottom={false|true} // boolean, action menu list is shown at the bottom of the FAB, default: false
                        allowSingleItemList={false|true} // boolean, opens a menu after click on FAB even if there is onle one action in the list, otherwise the FAB directly triggers that action, default: false
                        fabSize={'mini|large'} // string, what FAB size should be used, default: 'large'
                        fixed={false|true} // boolean, if FAB should be always visible sticky on botton when card is only partly shown, default: false
                        iconName={'add'} // string, name of icon what is used for the FAB before the list of actions is used, default: 'add', or if only one action is given and `allowSingleItemList` is false then the action icon is used.
                        actions={
                            [
                                // array of objects that define icon, label and handler method of each action
                                {
                                    icon: 'info',
                                    label: 'Open ConfirmationDialog',
                                    handler: this.openConfirmationDialog
                                },
                                {
                                    icon: 'info',
                                    label: 'Open BaseDialog',
                                    handler: this.openBaseDialog,
                                    disabled: true
                                },
                            ]
                        }
                    />
                </Card>
                <Card fixedActions={true}>
                    <CardTitle>
                        Card title
                    </CardTitle>
                    <CardContent>
                        <!-- ... -->
                    </CardContent>
                    <CardActions fixed={true}>
                        <!-- if a fixed button row is used then include the action list there if it need to be fixed, too. -->
                        <FloatingActionList
                            actions={
                                [
                                    {
                                        icon: 'info',
                                        label: 'Open ConfirmationDialog',
                                        handler: this.openConfirmationDialog
                                    },
                                ]
                            }
                        />
                    </CardActions>
                </Card>
            </div>
        )
    },
    // ....
});
```
*/
class FloatingActionList extends Component {
    static displayName = 'FloatingActionList';

    static propTypes = {
        /**
            array (required): list of action objects, each can have `icon`, `label`, `handler` and `disabled` properties
        */
        actions: PropTypes.array.isRequired,
        /**
            string (optional): additional CSS class name
        */
        className: PropTypes.string,
        /**
            string (optional): `large` (default) or `mini` FAB size
        */
        fabSize: PropTypes.string,
        /**
            boolean (optional): `true` sets FAB always visible sticky on botton when card is only partly shown, default: `false`
        */
        fixed: PropTypes.bool,
        /**
            string (optional): name of icon what is used for the FAB before the list of actions is used, default: 'add', or if only one action is given and `allowSingleItemList` is false then the action icon is used.
        */
        iconName: PropTypes.string,
        /**
            boolean (optional): opens a menu after click on FAB even if there is onle one action in the list, otherwise the FAB directly triggers that action, default: false
        */
        allowSingleItemList: PropTypes.bool,
        /**
            boolean (optional): action menu list is shown at the bottom of the FAB, default: `false`
        */
        openToBottom: PropTypes.bool,
    };

    static defaultProps = {
        fabSize: 'large',
        fixed: false,
        iconName: 'add',
        allowSingleItemList: false,
        openToBottom: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeFAB: false,
        };

        this.handleFAB = this.handleFAB.bind(this);

        this.refFAB = null;
        this.setRefFAB = element => {
            this.refFAB = element;
        };
        this.handleOutsideClick = () => {
            // close the fab button context menu whenever not the fab button is clieked
            document.addEventListener('click', event => {
                if (this.state.activeFAB === false) return;
                if (!this.refFAB.contains(event.target)) {
                    this.setState({
                        activeFAB: false,
                    });
                }
            });
        };
    }

    componentDidMount() {
        this.handleOutsideClick();
    }

    componentWillReceiveProps() {
        if (this.state.activeFAB) {
            this.setState({
                activeFAB: false,
            });
        }
    }

    handleFAB(event) {
        event.stopPropagation();
        this.setState({
            activeFAB: !this.state.activeFAB,
        });
    }

    render() {
        const {
            actions,
            className,
            fabSize,
            fixed,
            iconName,
            allowSingleItemList,
            openToBottom,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'ecc-floatingactionlist': true,
                'ecc-floatingactionlist--bottommenu': openToBottom,
            },
            className
        );

        const showMenuList = (actions.length > 1 || allowSingleItemList);

        const floatinglist = (
            <div className={classes} {...otherProps}>
                <Button
                    className={classNames('ecc-floatingactionlist__button', {
                        'is-active': this.state.activeFAB === true,
                    })}
                    iconName={
                        showMenuList || !actions[0].icon
                            ? (this.state.activeFAB ? 'hide' : iconName)
                            : actions[0].icon
                    }
                    fabSize={fabSize}
                    colored
                    tooltip={showMenuList ? false : actions[0].label}
                    onClick={showMenuList ? this.handleFAB : actions[0].handler}
                />
                {showMenuList ? (
                    <ul className="mdl-menu mdl-shadow--2dp ecc-floatingactionlist__menu">
                        {_.map(actions, (action, idx) => (
                            <li key={`FloatingAction_${idx}_${action.label}`}>
                                <button
                                    className="mdl-menu__item"
                                    onClick={action.handler}
                                    disabled={action.disabled}
                                >
                                    {action.icon ? (
                                        <Icon name={action.icon} />
                                    ) : (
                                        false
                                    )}
                                    {action.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    false
                )}
            </div>
        );

        return (
            <div
                ref={this.setRefFAB}
                className={fixed ? 'ecc-floatingactionlist__wrapper--fixed' : ''}
            >
                {floatinglist}
            </div>
        );
    }
}

export default FloatingActionList;
