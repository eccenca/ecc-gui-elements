import React from 'react';
import vis from 'vis';

import MaterialMixin from './mixins/MaterialMixin';

const Timeline = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        items: React.PropTypes.array,
        onSelect: React.PropTypes.func,
    },

    componentWillReceiveProps(props) {
        if (this.state.timeline) {
            this.state.timeline.destroy();
            const timeline = new vis.Timeline(this.refs.vis, new vis.DataSet(props.items), {});
            timeline.on('select', this.onTimelineSelect);
            this.setState({timeline});
        }
    },

    componentDidMount() {
        const timeline = new vis.Timeline(this.refs.vis, new vis.DataSet(this.props.items), {});
        timeline.on('select', this.onTimelineSelect);
        this.setState({timeline});
    },

    componentWillUnmount() {
        if (this.state.timeline) {
            this.state.timeline.destroy();
        }
    },

    onTimelineSelect({items}) {
        if (this.props.onSelect) {
            this.props.onSelect(items);
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
