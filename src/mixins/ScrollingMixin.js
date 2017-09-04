import ReactDOM from 'react-dom';
import scrollIntoView from 'scroll-into-view';
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
        if (typeof element === 'undefined') {
            if (__DEBUG__) {
                console.log('Can not scroll undefined element.');
            }
            return false;
        }
        if (__DEBUG__) {
            console.log('scrolling element with a height of ' + element.scrollHeight);
        }
        scrollIntoView(
            element,
            {
                time: _.get(options, 'animationTime', 500),
                align: {
                    topOffset: _.get(options, 'topOffset', 0),
                }
            },
            function(result) {
                if (__DEBUG__) {
                    console.log('element scrolling ' + result + ', now at ' + element.getBoundingClientRect().top);
                }
                if (_.isFunction(options.callbackFinished)) {
                    options.callbackFinished(result);
                }
            }
        );
    },
}

export default ScrollingMixin;
