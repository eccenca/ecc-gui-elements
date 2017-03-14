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

// MDL Elements

import {
    Alert,
    Error,
    Info,
    Success,
    Warning,
} from './src/elements/Alert';

import ConfirmationDialog from './src/Dialog/ConfirmationDialog';
import BaseDialog from './src/Dialog/BaseDialog';

import Button from './src/elements/Button/Button';
import AffirmativeButton from './src/elements/Button/AffirmativeButton';
import DismissiveButton from './src/elements/Button/DismissiveButton';
import DisruptiveButton from './src/elements/Button/DisruptiveButton';
import Checkbox from './src/Input/Checkbox';
import Icon from './src/Icon';
import {ContextMenu, MenuItem} from './src/ContextMenu';
import Nothing from './src/Nothing';
import Progressbar from './src/Progressbar';
import Radio from './src/elements/Radio/RadioButton';
import RadioGroup from './src/elements/Radio/RadioGroup';
import Spinner from './src/Spinner';
import Switch from './src/Input/Switch';
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
