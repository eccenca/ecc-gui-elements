/* global __WEBPACK__ */

// MDL Javascript

import '@eccenca/material-design-lite';

// React-MDL
import Layout from 'react-mdl/lib/Layout/Layout';
import Content from 'react-mdl/lib/Layout/Content';

// Mixins


import ScrollingHOC from './src/hocs/ScrollingHOC';

// GUI Elements

import {
    Alert, Error, Info, Success, Warning,
} from './src/elements/Alert';

import {
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    ProgressButton,
} from './src/elements/Button';

import BreadcrumbList from './src/elements/Breadcrumbs/BreadcrumbList';
import BreadcrumbItem from './src/elements/Breadcrumbs/BreadcrumbItem';

import {
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
    FloatingActionList,
} from './src/elements/Card';

import { BaseDialog, ConfirmationDialog } from './src/elements/Dialog';

import Checkbox from './src/elements/Checkbox/Checkbox';

import { Chip, ChipVisual } from './src/elements/Chip';

import { ContextMenu, MenuItem } from './src/elements/ContextMenu/ContextMenu';

import Icon from './src/elements/Icon/Icon';

import NotAvailable from './src/elements/NotAvailable/NotAvailable';

import Pagination from './src/elements/Pagination/Pagination';

import Progressbar from './src/elements/Progressbar/Progressbar';

import { Radio, RadioGroup } from './src/elements/Radio';

import SelectBox from './src/elements/SelectBox/SelectBox';
import AutoCompleteBox from './src/elements/AutoCompleteBox/AutoCompleteBox';

import Spinner from './src/elements/Spinner/Spinner';

import Switch from './src/elements/Switch/Switch';

import Table from './src/elements/Table/Table';
import TableHead from './src/elements/Table/TableHead';
import TableBody from './src/elements/Table/TableBody';
import TableRow from './src/elements/Table/TableRow';
import TableCell from './src/elements/Table/TableCell';

import Tabs from './src/elements/Tabs/Tabs';

import TextField from './src/elements/TextField/TextField';

import Tooltip from './src/elements/Tooltip/Tooltip';

import { DateField, DateTimefield } from './src/elements/DateField';

import Version from './src/elements/Version/Version';

import Footer from './src/elements/Footer/Footer';

export default {
    ScrollingHOC,
    Alert,
    BreadcrumbList,
    BreadcrumbItem,
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    ProgressButton,
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
    Checkbox,
    Chip,
    ChipVisual,
    Content,
    ContextMenu,
    Footer,
    MenuItem,
    Error,
    FloatingActionList,
    ConfirmationDialog,
    BaseDialog,
    Icon,
    Info,
    Layout,
    NotAvailable,
    Progressbar,
    Radio,
    RadioGroup,
    AutoCompleteBox,
    SelectBox,
    Spinner,
    Success,
    Switch,
    Warning,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Tabs,
    Version,
    Pagination,
    TextField,
    DateField,
    DateTimefield,
    Tooltip,
};
