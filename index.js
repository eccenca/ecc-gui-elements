/* global __WEBPACK__ */
if (__WEBPACK__) {
    // only load style when using webpack
    // currently not used at all because component is only used as wrapper
    require('./style/style.scss');
}

// Mixins

import MaterialMixin from './src/mixins/MaterialMixin';

// MDL Elements

import Alert from './src/Alert/Alert';
import Button from './src/Button';
import Checkbox from './src/Input/Checkbox';
import Error from './src/Alert/Error';
import ConfirmationDialog from './src/Dialog/ConfirmationDialog';
import BaseDialog from './src/Dialog/BaseDialog';
import Icon from './src/Icon';
import Info from './src/Alert/Info';
import {ContextMenu, MenuItem} from './src/ContextMenu';
import Nothing from './src/Nothing';
import Progressbar from './src/Progressbar';
import Spinner from './src/Spinner';
import Success from './src/Alert/Success';
import Switch from './src/Input/Switch';
import Timeline from './src/Timeline';
import Warning from './src/Alert/Warning';
import Tabs from './src/Tabs';
import Version from './src/Version';
import Pagination from './src/Pagination';
import SelectBox from './src/Input/SelectBox';
import TextField from './src/Input/TextField';

export default {
    MaterialMixin,
    Alert,
    Button,
    Checkbox,
    ContextMenu,
    SelectBox,
    Error,
    ConfirmationDialog,
    BaseDialog,
    Icon,
    Info,
    MenuItem,
    Nothing,
    Progressbar,
    Spinner,
    Success,
    Switch,
    Timeline,
    Warning,
    Tabs,
    Version,
    Pagination,
    TextField,
};
