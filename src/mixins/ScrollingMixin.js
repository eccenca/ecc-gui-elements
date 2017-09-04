import ReactDOM from 'react-dom';
import scrollIntoViewExternal from 'scroll-into-view';
import _ from 'lodash';

const ScrollingMixin = {
    scrollIntoView(options = {}) {
        /*
            options {
                animationTime: 500, // (optional) integer, time in milliseconds
                topOffset: 0, // (optional) integer, pixels to offset top alignment
                callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed'
            }
        */
        this.scrollElementIntoView(
            ReactDOM.findDOMNode(this),
            options
        );
    },

    scrollElementIntoView(element, options = {}) {
        let domElement = false;
        if (_.isElement(element)) {
            // is already a DOM element
            domElement = element;
            if (__DEBUG__) {
                console.log('scrolling DOM element with a height of ' + domElement.scrollHeight);
            }
        }
        else if (_.get(element, 'props', false) !== false) {
            // await a mounted react element or component
            // TODO: improve test, 'props' is only a weak check, findDOMNode still can fail
            domElement = ReactDOM.findDOMNode(element);
            if (__DEBUG__) {
                console.log('scrolling react element with a height of ' + domElement.scrollHeight);
            }
        }

        if (!domElement) {
            if (__DEBUG__) {
                console.warn('Cannot scroll element that is not part of the DOM.');
            }
            return false;
        }

        scrollIntoViewExternal(
            domElement,
            {
                time: _.get(options, 'animationTime', 500),
                align: {
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
                isScrollable: function(element) {

                    if (element === window) {
                        return true
                    }

                    if (
                        element.scrollHeight !== element.clientHeight ||
                        element.scrollWidth !== element.clientWidth
                    ) {

                        const css = getComputedStyle(element);

                        return css && (css.overflow !== 'hidden' ||
                            (_.get(options, 'scrollY', true) && css.overflowY !== 'hidden') ||
                            (_.get(options, 'scrollX', true) && css.overflowX !== 'hidden'));
                    }
                    return false;
                }
            },
            function(result) {
                if (__DEBUG__) {
                    console.log('element scrolling ' + result + ', now at ' + domElement.getBoundingClientRect().top);
                }

                if (_.isFunction(options.callbackFinished)) {
                    options.callbackFinished(result);
                }
            }
        );
    },
}

export default ScrollingMixin;
