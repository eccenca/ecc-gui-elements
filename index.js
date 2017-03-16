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

import Content from 'react-mdl/lib/Layout/Content';

import {
    ContextMenu,
    MenuItem,
} from './src/elements/ContextMenu/ContextMenu';

import Icon from './src/elements/Icon/Icon';

import Layout from 'react-mdl/lib/Layout/Layout';

import Nothing from './src/elements/Nothing/Nothing';

import Pagination from './src/elements/Pagination/Pagination';

import Progressbar from './src/elements/Progressbar/Progressbar';

import {
    Radio,
    RadioGroup,
} from './src/elements/Radio';

import SelectBox from './src/elements/SelectBox/SelectBox';

import Spinner from './src/elements/Spinner/Spinner';

import Switch from './src/elements/Switch/Switch';

import Tabs from './src/elements/Tabs/Tabs';

import TextField from './src/elements/TextField/TextField';

import Timeline from './src/elements/Timeline/Timeline';

import Version from './src/elements/Version/Version';

export default {
    MaterialMixin,
    PerformanceMixin,

    Alert,
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    Checkbox,
    Content,
    ContextMenu,
    MenuItem,
    Error,
    ConfirmationDialog,
    BaseDialog,
    Icon,
    Info,
    Layout,
    Nothing,
    Progressbar,
    Radio,
    RadioGroup,
    SelectBox,
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
