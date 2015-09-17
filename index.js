/* global __WEBPACK__ */
if (__WEBPACK__) {
    // only load style when using webpack
    require('./style/style.less');
}

// MDL Elements

import Alert from './src/Alert';
import Button from './src/Button';
import Error from './src/Error';
import Icon from './src/Icon';
import Info from './src/Info';
import Spinner from './src/Spinner';
import Success from './src/Success';
import Warning from './src/Warning';

export default {
    Alert,
    Button,
    Error,
    Icon,
    Info,
    Spinner,
    Success,
    Warning
};
