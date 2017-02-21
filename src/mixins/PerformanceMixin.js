import _ from 'lodash';

const PerformanceMixin = {
    shouldComponentUpdate(nextProps, nextState) {

        if (_.isEqual(nextState, this.state) === false) {
            /*
            if (__DEBUG__) {
                const stateDiff = _.reduce(this.state, function(result, value, key) {
                    return _.isEqual(value, nextState[key]) ? result : result.concat(key);
                }, []);
                console.log(stateDiff);
            }
            */
            return true;
        }

        if (_.isEqual(nextProps, this.props) === false) {
            /*
            if (__DEBUG__) {
                const propsDiff = _.reduce(this.props, function(result, value, key) {
                    return _.isEqual(value, nextProps[key]) ? result : result.concat(key);
                }, []);
                console.log(propsDiff);
            }
            */
            return true;
        }

        return false;
    },

};

export default PerformanceMixin;
