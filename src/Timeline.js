import React from 'react';
import vis from 'vis';
import '../node_modules/vis/dist/vis.css';

import MaterialMixin from './mixins/MaterialMixin';

const Timeline = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        items: React.PropTypes.array,
    },

    componentDidMount() {
        const timeline = new vis.Timeline(this.refs.vis, new vis.DataSet(this.props.items), {});
        this.setState({timeline});
    },

    componentWillUnmount() {
        if (this.state.timeline) {
            this.state.timeline.destroy();
        }
    },

    // template rendering
    render() {
        return (
            <div ref="vis"></div>
        );
    },
});

export default Timeline;
