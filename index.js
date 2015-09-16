/* global __WEBPACK__ */
// only load style when using webpack
if (__WEBPACK__) {
    require('./style/style.less');
}
// code
import Alert from './src/Alert';
import Button from './src/Button';
import Error from './src/Error';
import Icon from './src/Icon';
import Info from './src/Info';
import Success from './src/Success';
import Warning from './src/Warning';

export default {
    Alert,
    Button,
    Error,
    Icon,
    Info,
    Success,
    Warning
};
