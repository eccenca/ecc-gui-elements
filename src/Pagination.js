import React from 'react';
import _ from 'lodash';
import Button from './Button';
import SelectBox from './Input/SelectBox';

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
        this.props.handleNewOffset(this.props.totalResults - (this.props.totalResults % this.props.limit));
    },

    // template rendering
    render() {
         // set start value
        let startResults = this.props.offset;
        // is offsetAsPage is used
        if (this.props.offsetAsPage) {
            startResults = _.floor(this.props.offset / this.props.limit + 1);
        }
        // if actualResults exists add one up (counting starts with 0 vs with 1)
        else if (this.props.actualResults > 0) {
            startResults = this.props.offset + 1;
        }
        // render actual site information
        const pageInformation = (
            <span className="ecc-gui-elements__pagination-pageInfo">
                {startResults}
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
                    <div className="ecc-gui-elements__pagination-limit">
                        <span className="ecc-gui-elements__pagination-limit_text">
                            Rows per page:
                        </span>
                        <div className="ecc-gui-elements__pagination-limit_size">
                            <SelectBox
                                value={this.props.limit}
                                options={this.props.limitRange}
                                clearable={false}
                                onChange={this.props.handleNewLimit}
                            />
                        </div>
                    </div>
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
