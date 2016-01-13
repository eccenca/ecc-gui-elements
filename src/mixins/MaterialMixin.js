import materialDesign from 'material-design-lite/compiled/material';
import { findDOMNode } from 'react-dom';

const MaterialMixin = {
    materialDesign,
    componentDidMount() {
        window.componentHandler.upgradeDom();
    },
    componentWillUnmount() {
        window.componentHandler.downgradeElements(findDOMNode(this));
    },
    componentDidUpdate() {
        window.componentHandler.upgradeElements(findDOMNode(this));
    }
};

export default MaterialMixin;
