/* global __WEBPACK__ */
if (__WEBPACK__) {
    // only load style when using webpack
    // currently not used at all because component is only used as wrapper
    require('./style/style.scss');
}

// MDL Javascript

import 'react-mdl/extra/material.js';

// Mixins

import MaterialMixin from './src/mixins/MaterialMixin';
import PerformanceMixin from './src/mixins/PerformanceMixin';

// GUI Elements

import {
    Alert,
    Error,
    Info,
    Success,
    Warning,
} from './src/elements/Alert';

import {
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
} from './src/elements/Button';

import {
    BaseDialog,
    ConfirmationDialog,
} from './src/elements/Dialog';

import Checkbox from './src/elements/Checkbox/Checkbox';

import {
    ContextMenu,
    MenuItem,
} from './src/elements/ContextMenu/ContextMenu';

import {
    Radio,
    RadioGroup,
} from './src/elements/Radio';

import Switch from './src/elements/Switch/Switch';

import Icon from './src/Icon';
import Nothing from './src/Nothing';
import Progressbar from './src/Progressbar';
import Spinner from './src/Spinner';
import Timeline from './src/Timeline';
import Tabs from './src/Tabs';
import Version from './src/Version';
import Pagination from './src/Pagination';
import SelectBox from './src/elements/SelectBox/SelectBox';
import TextField from './src/elements/TextField/TextField';

export default {
    MaterialMixin,
    PerformanceMixin,
    Alert,
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
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
    Radio,
    RadioGroup,
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
