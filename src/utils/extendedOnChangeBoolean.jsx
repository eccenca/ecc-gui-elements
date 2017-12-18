import _ from 'lodash';

const extendedOnChangeBoolean = (onChangeFn, event) => {
    if (_.isFunction(onChangeFn)) {
        onChangeFn({
            event,
            name: event.target.name,
            value: event.target.checked,
            rawValue: event.target.value,
        });
    }
};

export default extendedOnChangeBoolean;
