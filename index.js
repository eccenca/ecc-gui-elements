/* global __WEBPACK__ */
// only load style when using webpack
if (__WEBPACK__) {
    require('./style/style.less');
}
// code
import Component from './src/component';
import Store from './src/store';
import Widget from './src/widget';

export default Component;
export {Store, Widget};
