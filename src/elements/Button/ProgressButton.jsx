import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import Button from './Button';
import Progressbar from '../Progressbar/Progressbar';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const ProgressButton = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        progress: React.PropTypes.number,
        progressTopic: React.PropTypes.object,
        tooltip: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
        };
    },
    getInitialState() {
        return {
            progress: _.get(this.props, 'progress', 0),
            lastUpdate: _.get(this.props, 'lastUpdate', false),
        };
    },

    componentDidMount() {
        if (_.has(this.props, 'progressTopic')){
            const topic =  _.get(this.props, 'progressTopic');
            if(_.isFunction(topic.subscribe)){
                this.subscription = topic.subscribe(this.handleProgressUpdates);
            }
        }
    },

    componentWillUnmount(){
        if(_.has(this, 'subscription')){
            this.subscription.dispose();
        }
    },

    handleProgressUpdates({progressNumber, lastUpdate = false}) {
        if (_.isNumber(progressNumber)) {
            this.setState({
                progress: progressNumber,
                lastUpdate,
            })
        }
    },

    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, className, tooltip, ...otherProps} = this.props;
        delete otherProps.progress;
        delete otherProps.progressTopic;

        const classes = classNames(
            'mdl-progress mdl-js-progress',
            className
        );

        let progressbar = (
            <Progressbar
                appearLocal
                indeterminate={!this.state.progress}
                progress={this.state.progress ? this.state.progress : 0}
            />
        );

        if (typeof tooltip !== 'undefined' && tooltip) {
            const lastUpdate = this.state.lastUpdate ? this.state.lastUpdate + ' ' : '';
            progressbar = (
                <ReactMDLTooltip
                    label={this.state.progress ? `${lastUpdate}${tooltip}: ${this.state.progress}%` : lastUpdate + tooltip}
                >
                    {progressbar}
                </ReactMDLTooltip>
            )
        }

        // render button
        return (
            <Button
                raised
                disabled
                {...otherProps}
            >
                {children}
                {progressbar}
            </Button>
        );
    },
});

export default ProgressButton;
