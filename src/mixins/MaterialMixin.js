/*global componentHandler */
import materialDesign from 'material-design-lite/compiled/material';
import {findDOMNode} from 'react-dom';

const MaterialMixin = {
    materialDesign,
    componentDidMount() {
        componentHandler.upgradeDom();
    },
    componentWillUnmount() {
        componentHandler.downgradeElements(findDOMNode(this));
    },
    componentDidUpdate() {
        componentHandler.upgradeElements(findDOMNode(this));
    }
};

export default MaterialMixin;
