/* global __WEBPACK__ */

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
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
} from './src/elements/Card';

import {
    BaseDialog,
    ConfirmationDialog,
} from './src/elements/Dialog';

import Checkbox from './src/elements/Checkbox/Checkbox';

import {
    Chip,
    ChipVisual
} from './src/elements/Chip/Chip';

import Content from 'react-mdl/lib/Layout/Content';

import {
    ContextMenu,
    MenuItem,
} from './src/elements/ContextMenu/ContextMenu';

import Icon from './src/elements/Icon/Icon';

import Layout from 'react-mdl/lib/Layout/Layout';

import Nothing from './src/elements/Nothing/Nothing';

import NotAvailable from './src/elements/NotAvailable/NotAvailable';

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

import Version from './src/elements/Version/Version';

export default {
    MaterialMixin,
    PerformanceMixin,

    Alert,
    Button,
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    Checkbox,
    Chip,
    ChipVisual,
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
    NotAvailable,
    Progressbar,
    Radio,
    RadioGroup,
    SelectBox,
    Spinner,
    Success,
    Switch,
    Warning,
    Tabs,
    Version,
    Pagination,
    TextField,
};
