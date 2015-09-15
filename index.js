/* global __WEBPACK__ */
// only load style when using webpack
if (__WEBPACK__) {
    require('./style/style.less');
}
// code
import Component from './src/component';
import Widget from './src/widget';
import Button from 'react-mdl/lib/Button';

export default Component;
export {
    Widget,
    Button
};
