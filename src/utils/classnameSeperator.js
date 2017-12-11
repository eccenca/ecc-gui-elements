import _ from 'lodash';

// check if several classnames are used and try to replace them with given property list
const classnameSeperator = (classname, propObject) =>
    _.map(
        _.split(classname, ' '),
        prop => ` ${_.get(propObject, [prop], prop)}`
    ).join(' ');

export default classnameSeperator;
