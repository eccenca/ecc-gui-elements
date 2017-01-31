import React from 'react';
import _ from 'lodash';
import ReactMDLMenu from 'react-mdl/lib/Menu';
import {MenuItem} from 'react-mdl/lib/Menu';
import Button from './elements/Button/Button';
import MaterialMixin from './mixins/MaterialMixin';


/**
* This component provides a context menu
* @type {[type]}
*/
const ContextMenu = React.createClass({
    mixins: [MaterialMixin],

    propTypes: {
        align: React.PropTypes.string,
        className: React.PropTypes.string,
        ripple: React.PropTypes.bool,
        target: React.PropTypes.string,
        tooltip: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            align: 'right',
            ripple: false,
            tooltip: 'open menu',
        };
    },
    getInitialState() {
        return {
            target: this.props.target || _.uniqueId('app-contextmenu-'),
        };
    },

    render() {
        const {
            align,
            className,
            iconName,
            ripple,
            tooltip,
            ...otherProps
        } = this.props;

        let children = _.cloneDeep(this.props.children);
        const target = this.state.target;

        const menu = () => {
            if (typeof children !== 'undefined') {
                // check for classNames
                children = _.map(children, (obj, idx) => {
                    // add className if none exist
                    if (!_.has(obj, 'props.className')) {
                        obj.props.className = `item-${_.kebabCase(obj.props.children)}`;
                    }
                    obj.key = `MenuItem.${idx}`;
                    return obj;
                });
                return (
                    <ReactMDLMenu
                        align={align}
                        className={className}
                        ripple={ripple}
                        target={target}
                        {...otherProps}
                    >
                        {children}
                    </ReactMDLMenu>
                );

            }
            return false;

        }

        return (
            <div className={'contextmenu-container'}>
                <Button
                    iconName={iconName ? iconName : 'menu_more'}
                    id={target}
                    tooltip={tooltip ? false : false}
                />
                {menu()}
            </div>
        );
    }
});

export default {
    ContextMenu,
    MenuItem
};
