import React from 'react';
import _ from 'lodash';
import Button from './../../elements/Button/Button';
import SelectBox from './../../elements/SelectBox/SelectBox';
import PerformanceMixin from './../../mixins/PerformanceMixin';

const calculatePagination = ({limit, offset, totalResults}) => {
    const onLastPage = offset + limit >= totalResults;
    return {
        limit,
        offset,
        totalResults,
        onFirstPage: offset === 0 || totalResults === 0,
        onLastPage,
        currentPage: Math.min(
            _.ceil(totalResults / limit),
            _.floor(1 + offset / limit)
        ),
        totalPages: _.ceil(totalResults / limit),
        lastItemOnPage: onLastPage ? totalResults : offset + limit,
    };
};

/**
 * This component provides a pagination for switching through lists of results
 */
const Pagination = React.createClass({
    mixins: [PerformanceMixin],
    displayName: 'Pagination',

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
        /**
         * define position of page change dropdown/dropup
         */
        isTopPagination: React.PropTypes.bool,
        /**
         * text displayed next to limit changer selectbox
         */
        newLimitText: React.PropTypes.string,
        /**
         * possible page sizes
         */
        limitRange: React.PropTypes.array,
        disabled: React.PropTypes.bool,
    },
    getInitialState() {
        return {
            customOffset: this.props.offset+1,
        }
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
            disabled: false,
        };
    },
    // trigger event to show first results
    onClickFirst() {
        const {limit, totalResults} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: 0,
                totalResults,
            })
        );
    },
    // trigger event to show previous results (regarding to limit)
    onClickBack() {
        const {limit, totalResults, offset} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: offset < limit ? 0 : offset - limit,
                totalResults,
            })
        );
    },
    // trigger event to show next results (regarding to limit)
    onClickForward() {
        const {limit, totalResults, offset} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: offset + limit,
                totalResults,
            })
        );
    },
    // trigger event to show last results (regarding to limit)
    onClickLast() {
        const {limit, totalResults} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: (_.ceil(totalResults / limit) - 1) * limit,
                totalResults,
            })
        );
    },
    // triggered when the input field is used
    onChangePage(newPage) {
        const {limit, totalResults} = this.props;
        this.setState({
            customOffset: parseInt(newPage),
        });
        if (newPage < 1 || newPage > totalResults) {
            return;
        }
        this.props.onChange(
            calculatePagination({
                limit,
                offset: parseInt(newPage)-1,
                totalResults,
            })
        );


    },
    onNewLimit(limit) {
        const {offset, totalResults} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: _.floor(offset / limit) * limit,
                totalResults,
            })
        );

    },
    // template rendering
    render() {

        const {
            offsetAsPage,
            offset,
            limit,
            totalResults,
            newLimitText,
            disabled,
            isTopPagination = false,
        } = this.props;

        const valid = this.state.customOffset > 0 && this.state.customOffset <= totalResults;

        const limitRange = _.chain(this.props.limitRange)
            .push(limit)
            .filter(_.isNumber)
            .sortBy()
            .sortedUniq()
            .value();

        const {
            currentPage,
            totalPages,
            lastItemOnPage,
            onLastPage,
            onFirstPage,
        } = calculatePagination(this.props);

        let pageInfo = '';

        if (offsetAsPage) {
            pageInfo = `${currentPage} of ${totalPages}`;
        } else {
            const firstItem = Math.min(totalResults, offset + 1);
            const lastItem = lastItemOnPage;
            const start =
                firstItem === lastItem
                    ? lastItem
                    : `${firstItem} - ${lastItem}`;
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
                                optionsOnTop={isTopPagination !== true}
                            />
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div className="ecc-gui-elements__pagination-actions">
                    <Button
                        className="ecc-gui-elements__pagination-actions__first-page-button"
                        onClick={this.onClickFirst}
                        disabled={onFirstPage || disabled}

                        iconName="arrow_firstpage"
                    />
                    <Button
                        className="ecc-gui-elements__pagination-actions__prev-page-button"
                        onClick={this.onClickBack}
                        disabled={onFirstPage || disabled}
                        iconName="arrow_prevpage"
                    />
                    {pageInformation}
                    <input
                        disabled={disabled}
                        min={1}
                        max={totalResults}
                        type="number"
                        value={this.state.customOffset}
                        className={valid?"valid":"invalid"}
                        onChange={
                            e => {
                                this.onChangePage(e.target.value)
                            }
                        }/>
                    <Button
                        className="ecc-gui-elements__pagination-actions__next-page-button"
                        onClick={this.onClickForward}
                        disabled={onLastPage || disabled}
                        iconName="arrow_nextpage"
                    />
                    <Button
                        className="ecc-gui-elements__pagination-actions__last-page-button"
                        onClick={this.onClickLast}
                        disabled={onLastPage || disabled}
                        iconName="arrow_lastpage"
                    />
                </div>
            </div>
        );
    },
});

export default Pagination;
