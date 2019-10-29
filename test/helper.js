import _ from 'lodash';

// transform payload object to string
const recursiveSerializeData = (data, level) => {
    if (_.isString(data)) {
        // only add quotes " if not in root level (e.g. query should not have quotes)
        return encodeURIComponent(level > 1 ? `"${data}"` : data);
    }
    if (_.isBoolean(data) || _.isNumber(data)) return data;
    if (_.isArray(data)) {
        return `[${_.map(data, element => recursiveSerializeData(element, level + 1)).join(',')}]`;
    }
    // handle nested objects
    if (_.isPlainObject(data) && level > 0) {
        return `{${_.map(data, (value, key) => `"${key}":${recursiveSerializeData(value, level + 1)}`)}}`;
    }
    // root level objects
    return _.map(data, (value, key) => `${key}=${recursiveSerializeData(value, level + 1)}`).join('&');
};
const history = ({ location, action }) => ({
    go: jest.fn(),
    action,
    block: jest.fn(),
    createHref: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    length: 8,
    listen: jest.fn(),
    location,
    push: jest.fn(),
    replace: jest.fn(),
});

export {
    history,
};
