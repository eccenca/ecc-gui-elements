import React from 'react';
import ReactDOM from 'react-dom';
import scrollIntoViewExternal from 'scroll-into-view';
import _ from 'lodash';

export default function ScrollingHOC(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.scrollIntoView = this.scrollIntoView.bind(this);
            this.scrollElementIntoView = this.scrollElementIntoView.bind(this);
        }

        scrollIntoView(options = {}) {
            this.scrollElementIntoView(ReactDOM.findDOMNode(this), options);

            /*
            options {
                animationTime: 500, // (optional) integer, time in milliseconds
                topOffset: 0, // (optional) integer, pixels to offset top alignment
                callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed'
            }
            */
        }

        scrollElementIntoView(element, options = {}) {
            let domElement = false;
            if (_.isElement(element)) {
                // is already a DOM element
                domElement = element;
                if (__DEBUG__) {
                    console.log(
                        `scrolling DOM element with a height of ${
                            domElement.scrollHeight
                            }`
                    );
                }
            } else if (_.get(element, 'props', false) !== false) {
                // await a mounted react element or component
                // TODO: improve test, 'props' is only a weak check, findDOMNode still can fail
                domElement = ReactDOM.findDOMNode(element);
                if (__DEBUG__) {
                    console.log(
                        `scrolling react element with a height of ${
                            domElement.scrollHeight
                            }`
                    );
                }
            }

            if (!domElement) {
                if (__DEBUG__) {
                    console.warn(
                        'Cannot scroll element that is not part of the DOM.'
                    );
                }
                return false;
            }

            return scrollIntoViewExternal(
                domElement,
                {
                    time: _.get(options, 'animationTime', 500),
                    align: {
                        top: 0, // align it to the top, or user cannot see top part if element is higher than the viewport
                        topOffset: _.get(options, 'topOffset', 0),
                    },
                    /*
                        We replace the standard isScrollable with a function which also checks
                        overflowX and overflowY, as only checking overflow is not enough in IE/Edge,
                        because if the following is set:
                        .foo {
                            overflow-x: hidden;
                            overflow-y: auto;
                        }
                        `getComputedStyle(element).overflow` will yield `'hidden'`
                     */
                    isScrollable(el) {
                        if (el === window) {
                            return true;
                        }

                        if (
                            el.scrollHeight !== el.clientHeight ||
                            el.scrollWidth !== el.clientWidth
                        ) {
                            const css = getComputedStyle(el);

                            return (
                                css &&
                                (css.overflow !== 'hidden' ||
                                    (_.get(options, 'scrollY', true) &&
                                        css.overflowY !== 'hidden') ||
                                    (_.get(options, 'scrollX', true) &&
                                        css.overflowX !== 'hidden'))
                            );
                        }
                        return false;
                    },
                },
                result => {
                    if (__DEBUG__) {
                        console.log(
                            `element scrolling ${result}, now at ${
                                domElement.getBoundingClientRect().top
                                }`
                        );
                    }

                    if (_.isFunction(options.callbackFinished)) {
                        options.callbackFinished(result);
                    }
                }
            );
        }

    render() {
            return (<WrappedComponent scrollElementIntoView={this.scrollElementIntoView} scrollIntoView={this.scrollIntoView} {...this.props}/>)
        }
    }
};

