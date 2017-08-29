import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import UseMessageBus from 'ecc-mixins/src/messagebus/UseMessageBus';
import Button from './Button';
import Progressbar from '../Progressbar/Progressbar';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const ProgressButton = React.createClass({
    mixins: [PerformanceMixin, UseMessageBus],

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
        };
    },

    componentDidMount() {
        if (_.get(this.props, 'progressTopic', null)) {
            this.subscribe(
                _.get(this.props, 'progressTopic'),
                this.handleProgressUpdates
            );
        }
    },

    handleProgressUpdates({progressNumber}) {
        if (_.isNumber(progressNumber)) {
            this.setState({
                progress: progressNumber
            })
        }
    },

    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, className, tooltip, progressTopic, ...otherProps} = this.props;

        const classes = classNames(
            'mdl-progress mdl-js-progress',
            className
        );

        let progressbar = (
            <Progressbar
                appearLocal
                indeterminate={this.state.progress ? false : true}
                progress={this.state.progress ? this.state.progress : 0}
            />
        );

        if (typeof tooltip !== 'undefined' && tooltip) {
            progressbar = (
                <ReactMDLTooltip
                    label={this.state.progress ? tooltip + ': ' + this.state.progress + '%' : tooltip}
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
