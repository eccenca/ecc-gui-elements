import materialDesign from 'material-design-lite/compiled/material';

const MaterialMixin = {
    materialDesign,

    componentDidUpdate() {
        materialDesign.upgradeDom();
    },
};

export default MaterialMixin;
