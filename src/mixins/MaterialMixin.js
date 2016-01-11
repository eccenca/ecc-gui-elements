import materialDesign from 'material-design-lite/compiled/material';

const MaterialMixin = {
    materialDesign,

    componentDidUpdate() {
        window.componentHandler.upgradeDom();
    },
};

export default MaterialMixin;
