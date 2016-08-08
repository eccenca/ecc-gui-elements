import React from 'react';
import _ from 'lodash';
import Button from './Button';
import Select from 'react-select/lib/Select.js';
import 'react-select/dist/react-select.css';

/**
* This component provides a pagination for switching through lists of results
* @type {[type]}
*/
const Pagination = React.createClass({
    // define property types
    propTypes: {
        /**
        * contains actual start value which is shown
        */
        offset: React.PropTypes.number.isRequired,
        /**
        * contains number of max shown elements per page
        */
        limit: React.PropTypes.number.isRequired,
        /**
        * contains actual number of shown items (only needed if offsetAsPage is false)
        */
        actualResults: React.PropTypes.number,
        /**
        * contains total number of results
        */
        totalResults: React.PropTypes.number.isRequired,
        /**
        * contains method which is called if offset have to change by user
        */
        handleNewOffset: React.PropTypes.func.isRequired,
        /**
        * contains method which is called if limit have to change by user
        */
        handleNewLimit: React.PropTypes.func,
        /**
        * if true provides site information as "pages" instead of "numbers of elements"
        * Note: if offsetAsPage=true and offset is not a multiple from limit
        * the page output gets wierd for the last page
        */
        offsetAsPage: React.PropTypes.bool,
    },
    getDefaultProps() {
        return {
            /**
            * sets site information as "numbers of elements" as default
            */
            offsetAsPage: false,
            /**
            * predefined available range steps
            */
            limitRange: [5, 10, 25, 50, 100, 200],
        };
    },
    // trigger event to show first results
    onClickFirst() {
        this.props.handleNewOffset(0);
    },
    // trigger event to show previous results (regarding to limit)
    onClickBack() {
        const newOffset = this.props.offset - this.props.limit;
        this.props.handleNewOffset(newOffset < 0 ? 0 : newOffset);
    },
    // trigger event to show next results (regarding to limit)
    onClickForward() {
        this.props.handleNewOffset(this.props.offset + this.props.limit);
    },
    // trigger event to show last results (regarding to limit)
    onClickLast() {
        this.props.handleNewOffset(this.props.totalResults - this.props.limit);
    },
    // trigger event to use new limit
    handleSetNewLimit(limitObject) {
        this.props.handleNewLimit(limitObject.value);
    },

    // template rendering
    render() {
        // render actual site information
        const pageInformation = (
            <span className="ecc-mixins__pagination-pageInfo">
                {this.props.offsetAsPage ?
                    _.floor(this.props.offset / this.props.limit + 1) : this.props.offset + 1
                }
                {this.props.offsetAsPage ? '' : ` - ${this.props.offset + this.props.actualResults}`}
                {this.props.offsetAsPage ?
                    ` of ${_.ceil(this.props.totalResults / this.props.limit)}`
                        : ` of ${this.props.totalResults}`
                }
            </span>
        );
        return (
            <div className="ecc-gui-elements__pagination" key={'bla'/*paginationId*/}>
                {this.props.handleNewLimit ? (
                    <span className="ecc-gui-elements__pagination-limit-size">
                        <Select
                            value={ {value: this.props.limit, label: this.props.limit}}
                            options={_.map(this.props.limitRange, it =>
                                {return {value: it, label: it}; }
                            )}
                            clearable={false}
                            onChange={this.handleSetNewLimit}
                        />
                    </span>
                ) : ''}
                <span className="ecc-gui-elements__pagination-actions">
                        <Button onClick={this.onClickFirst}
                            disabled={this.props.offset === 0}
                            iconName="arrow_firstpage"
                        />
                        <Button onClick={this.onClickBack}
                                disabled={this.props.offset === 0}
                                iconName="arrow_prevpage"
                        />
                        {pageInformation}
                        <Button onClick={this.onClickForward}
                                disabled={this.props.offset + this.props.limit >= this.props.totalResults}
                                iconName="arrow_nextpage"
                        />
                        <Button onClick={this.onClickLast}
                            disabled={this.props.offset + this.props.limit >= this.props.totalResults}
                            iconName="arrow_lastpage"
                        />
                </span>
            </div>
        );
    },
});

export default Pagination;
