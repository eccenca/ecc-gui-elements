import React from 'react';
import _ from 'lodash';
import Button from './Button';
import SelectBox from './Input/SelectBox';
const calculatePagination = ({limit, offset, totalResults}) => {

    const onLastPage = (offset + limit) >= totalResults;

    return {
        limit,
        offset,
        totalResults,
        onFirstPage: offset === 0,
        onLastPage,
        currentPage: _.floor(offset / limit),
        totalPages: _.ceil(totalResults / limit),
        lastItemOnPage: onLastPage ? totalResults : offset + limit,
    };
};

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
         * contains total number of results
         */
        totalResults: React.PropTypes.number.isRequired,
        /**
         * contains method which is called if offset have to change by user
         */
        onChange: React.PropTypes.func.isRequired,
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

        const {limit, totalResults} = this.props;

        this.props.onChange(calculatePagination({
            limit,
            offset: 0,
            totalResults,
        }));
    },
    // trigger event to show previous results (regarding to limit)
    onClickBack() {

        const {limit, totalResults, offset} = this.props;

        this.props.onChange(calculatePagination({
            limit,
            offset: offset < limit ? 0 : offset - limit,
            totalResults,
        }));
    },
    // trigger event to show next results (regarding to limit)
    onClickForward() {

        const {limit, totalResults, offset} = this.props;

        this.props.onChange(calculatePagination({
            limit,
            offset: offset + limit,
            totalResults,
        }));

    },
    // trigger event to show last results (regarding to limit)
    onClickLast() {

        const {limit, totalResults} = this.props;

        this.props.onChange(calculatePagination({
            limit,
            offset: (_.ceil(totalResults / limit) - 1 ) * limit,
            totalResults,
        }));
    },
    onNewLimit(limit) {
        const {offset, totalResults} = this.props;

        this.props.onChange(calculatePagination({
            limit,
            offset: _.floor(offset / limit) * limit,
            totalResults,
        }));
    },
    // template rendering
    render() {
        const {offsetAsPage, offset, limit, totalResults, newLimitText} = this.props;

        const limitRange = _.chain(this.props.limitRange)
            .push(limit)
            .filter(_.isNumber)
            .sortBy()
            .sortedUniq()
            .value();


        const {currentPage, totalPages, lastItemOnPage, onLastPage, onFirstPage} = calculatePagination(this.props);

        let pageInfo = '';

        if (offsetAsPage) {
            pageInfo = `${currentPage + 1} of ${totalPages}`;
        } else {
            const start = offset + 1 === lastItemOnPage ? lastItemOnPage : `${offset + 1} - ${lastItemOnPage}`;
            pageInfo = `${start} of ${totalResults}`;
        }

        // render actual site information
        const pageInformation = (
            <span className="ecc-gui-elements__pagination-pageInfo">
                {pageInfo}
            </span>
        );
        return (
            <div className="ecc-gui-elements__pagination">
                {newLimitText && !_.isEmpty(limitRange) ? (
                    <div className="ecc-gui-elements__pagination-limit">
                        <span className="ecc-gui-elements__pagination-limit_text">
                            {newLimitText}
                        </span>
                        <div className="ecc-gui-elements__pagination-limit_size">
                            <SelectBox
                                value={limit}
                                options={limitRange}
                                clearable={false}
                                searchable={false}
                                onChange={this.onNewLimit}
                            />
                        </div>
                    </div>
                ) : ''}
                <div className="ecc-gui-elements__pagination-actions">
                    <Button onClick={this.onClickFirst}
                            disabled={onFirstPage}
                            iconName="arrow_firstpage"
                    />
                    <Button onClick={this.onClickBack}
                            disabled={onFirstPage}
                            iconName="arrow_prevpage"
                    />
                    {pageInformation}
                    <Button onClick={this.onClickForward}
                            disabled={onLastPage}
                            iconName="arrow_nextpage"
                    />
                    <Button onClick={this.onClickLast}
                            disabled={onLastPage}
                            iconName="arrow_lastpage"
                    />
                </div>
            </div>
        );
    },
});

export default Pagination;
