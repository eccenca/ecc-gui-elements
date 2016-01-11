/* global __WEBPACK__ */
if (__WEBPACK__) {
    // only load style when using webpack
    require('./style/style.less');
}

// Mixins

import MaterialMixin from './src/mixins/MaterialMixin';

// MDL Elements

import Alert from './src/Alert';
import Button from './src/Button';
import Checkbox from './src/Checkbox';
import Error from './src/Error';
import Dialog from './src/Dialog/Dialog';
import Icon from './src/Icon';
import Info from './src/Info';
import Nothing from './src/Nothing';
import Progressbar from './src/Progressbar';
import Spinner from './src/Spinner';
import Success from './src/Success';
import Switch from './src/Switch';
import Warning from './src/Warning';

export default {
    MaterialMixin,
    Alert,
    Button,
    Checkbox,
    Error,
    Dialog,
    Icon,
    Info,
    Nothing,
    Progressbar,
    Spinner,
    Success,
    Switch,
    Warning
};
