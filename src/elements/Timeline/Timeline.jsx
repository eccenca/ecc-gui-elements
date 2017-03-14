import React from 'react';
import DataSet from '../../../lib/vis/lib/DataSet';
import VisTimeline from '../../../lib/vis/lib/timeline/Timeline';
import PerformanceMixin from './../../mixins/PerformanceMixin';

const Timeline = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        items: React.PropTypes.array,
        options: React.PropTypes.object,
        onSelect: React.PropTypes.func,
    },

    componentWillReceiveProps(props) {
        if (this.state.timeline) {
            this.state.timeline.destroy();
            const timeline = new VisTimeline(this.refs.vis, new DataSet(props.items), this.props.options);
            timeline.on('select', this.onTimelineSelect);
            this.setState({timeline});
        }
    },

    componentDidMount() {
        const timeline = new VisTimeline(this.refs.vis, new DataSet(this.props.items), this.props.options);
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
