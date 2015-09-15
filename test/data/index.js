import resparqler from 'ecc-resparqler';

// basic response data
const responseData = {
    head: {
        vars: ['s', 'p', 'o'],
    },
    results: {
        bindings: [{
            s: {
                type: 'uri',
                value: 'http://eccenca.com/GraphA'
            },
            p: {
                type: 'uri',
                value: 'http://eccenca.com/predicate'
            },
            o: {
                type: 'string',
                value: 'I am a stirng'
            },
        }, {
            s: {
                type: 'uri',
                value: 'http://eccenca.com/GraphB'
            },
            p: {
                type: 'uri',
                value: 'http://eccenca.com/predicate2'
            },
            o: {
                type: 'string',
                value: 'I am a string 2'
            },
        }]
    }
};

const parsedData = resparqler.parse(responseData);

export {parsedData, responseData};
