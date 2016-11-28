/*global componentHandler */
import materialDesign from 'material-design-lite/compiled/material';
import {findDOMNode} from 'react-dom';

import _ from 'lodash';

const MaterialMixin = {
    materialDesign,
    componentDidMount() {
        componentHandler.upgradeDom();
    },
    componentWillUnmount() {
        const comp = findDOMNode(this);
        if (!_.isNull(comp)) {
            componentHandler.downgradeElements(comp);
        }
    },
    componentDidUpdate() {
        const comp = findDOMNode(this);
        if (!_.isNull(comp)) {
            componentHandler.upgradeElements(comp);
        }
    }
};

export default MaterialMixin;
