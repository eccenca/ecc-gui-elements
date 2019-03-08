/* eslint camelcase: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {includes} from 'lodash';
import Tooltip from '../Tooltip/Tooltip';
import ligatureCodes from './icontable.json';
import canonicalIconNames from './canonicalicons.json';
import canonicalTooltips from './canonicaltooltips.json';


/**
import {Icon} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Icon
                name="cloud_download" // icon name, @see https://material.io/icons/
                tooltip="cloudy clouds" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
                badge="5" // Badge, as shown in https://getmdl.io/components/index.html#badges-section
            />
        )
    },
    // ....
});
```
*/


const Icon = props => {

    const {className, badge = false, ...otherProps} = props;

    let name = otherProps.name;
    delete otherProps.name;

    let tooltip = otherProps.tooltip;
    delete otherProps.tooltip;

    if (!tooltip && tooltip !== false) {
        if (typeof canonicalTooltips[name] !== 'undefined') {
            tooltip = canonicalTooltips[name];
        } else if (__DEBUG__) {
            console.warn(`Icon "${name}" has no canonical tooltip defined`);
        }
    }

    if (typeof canonicalIconNames[name] !== 'undefined') {
        if (name === 'delete' && __DEBUG__) {
            console.warn(
                'Do not use "delete" as icon name. Please use "remove" instead.'
            );
        }
        name = canonicalIconNames[name];
    } else if (__DEBUG__) {
        console.log(
            `%cFound usage of "${name}" as icon name. Use canonical icon names if possible.`,
            'color: orange'
        );
    }

    if (!includes(ligatureCodes, name)) {
        if (__DEBUG__) {
            console.error(`"${name}" is not a valid icon name.`);
        }
        name = 'error';
    }

    const classes = classNames(
        'material-icons',
        {'mdl-badge mdl-badge--overlap': badge},
        className
    );

    let icon = (
        <i className={classes} data-badge={badge} {...otherProps}>
            {name}
        </i>
    );

    if (tooltip) {
        icon = <Tooltip label={tooltip}>{icon}</Tooltip>;
    }
    return icon;
};

Icon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    tooltip: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.bool,
    ]),
};
Icon.displayName = 'Icon';

export default Icon;
