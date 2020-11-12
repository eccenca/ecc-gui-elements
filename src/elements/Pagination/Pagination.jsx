import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import Button from '../Button/Button';
import SelectBox from '../SelectBox/SelectBox';
import TextField from '../TextField/TextField';
import Spinner from '../Spinner/Spinner';
import Tooltip from '../Tooltip/Tooltip';

/**
 * This component provides a pagination for switching through lists of results
 */
class Pagination extends Component {
    // define property types
    static propTypes = {
        /**
         * contains actual start value which is shown
         */
        offset: PropTypes.number.isRequired,
        /**
         * contains number of max shown elements per page
         */
        limit: PropTypes.number.isRequired,
        /**
         * contains total number of results. The value must be positive or undefined.
         */
        totalResults: PropTypes.number,
        /**
         * contains method which is called if offset have to change by user
         */
        onChange: PropTypes.func.isRequired,
        /**
         * show element offset numbers as pagination information
         */
        showElementOffsetPagination: PropTypes.bool,
        /**
         * define position of page change dropdown/dropup
         */
        isTopPagination: PropTypes.bool,
        /**
         * text displayed next to limit changer selectbox
         */
        newLimitText: PropTypes.string,
        /**
         * possible page sizes
         */
        limitRange: PropTypes.array,
        /**
         * if true all buttons and inputs fields are disabled and visibility is decreased
         */
        disabled: PropTypes.bool,
        /**
         * the current page number can be edited to jump directly there, works only with
         * `showElementOffsetPagination===false`
         */
        showPageInput: PropTypes.bool,
        /**
         * hide info about number of total results
         */
        hideTotalResults: PropTypes.bool,
        /**
         * show a spinner if true and totalResults is not set
         */
        pendingTotal: PropTypes.bool,
        /**
         * additional class names
         */
        className: PropTypes.string,

        foundResultsText: PropTypes.string,

        pageWithLimitText: PropTypes.string,

        pageWithoutLimitText: PropTypes.string,
    };

    static defaultProps = {
        /**
         * sets site information as "numbers of elements" as default
         */
        showElementOffsetPagination: false,
        /**
         * predefined available range steps
         */
        limitRange: [5, 10, 25, 50, 100, 200],
        disabled: false,
        hideTotalResults: false,
        showPageInput: false,
        isTopPagination: false,
        pendingTotal: false,
        totalResults: undefined,
        className: '',
        newLimitText: '',
        foundResultsText: 'Found ::total:: results',
        pageWithLimitText: 'Page ::current:: of ::total::',
        pageWithoutLimitText: 'Page ::current::',
    };

    constructor(props) {
        super(props);
        this.displayName = 'Pagination';
        this.onClickFirst = this.onClickFirst.bind(this);
        this.onClickBack = this.onClickBack.bind(this);
        this.onClickForward = this.onClickForward.bind(this);
        this.onClickLast = this.onClickLast.bind(this);
        this.onNewLimit = this.onNewLimit.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            customPage: undefined,
        };
    }

    // trigger event to show first results
    onClickFirst() {
        const { limit, totalResults, onChange } = this.props;

        onChange(
            this.calculatePagination({
                limit,
                offset: 0,
                totalResults,
            })
        );
    }

    // trigger event to show previous results (regarding to limit)
    onClickBack() {
        const {
            limit,
            totalResults,
            offset,
            onChange,
        } = this.props;

        onChange(
            this.calculatePagination({
                limit,
                offset: offset < limit ? 0 : offset - limit,
                totalResults,
            })
        );
    }

    // trigger event to show next results (regarding to limit)
    onClickForward() {
        const {
            limit,
            totalResults,
            offset,
            onChange,
        } = this.props;

        onChange(
            this.calculatePagination({
                limit,
                offset: offset + limit,
                totalResults,
            })
        );
    }

    // trigger event to show last results (regarding to limit)
    onClickLast() {
        const { limit, totalResults, onChange } = this.props;

        onChange(
            this.calculatePagination({
                limit,
                offset: (_.ceil(totalResults / limit) - 1) * limit,
                totalResults,
            })
        );
    }

    onNewLimit(limit) {
        const { offset, totalResults, onChange } = this.props;

        onChange(
            this.calculatePagination({
                limit,
                offset: _.floor(offset / limit) * limit,
                totalResults,
            })
        );
    }

    onChangePage(newPage) {
        this.setState({
            customPage: parseInt(newPage, 10),
        });
    }

    calculatePagination = ({ limit, offset, totalResults }) => {
        const onLastPage = offset + limit >= totalResults;

        return {
            limit,
            offset,
            totalResults,
            onFirstPage: offset === 0 || totalResults === 0,
            onLastPage,
            currentPage:
                totalResults === undefined
                    ? _.floor(1 + offset / limit)
                    : Math.min(
                        _.ceil(totalResults / limit),
                        _.floor(1 + offset / limit)
                    ),
            totalPages: _.ceil(totalResults / limit),
            lastItemOnPage: onLastPage ? totalResults : offset + limit,
        };
    }

    handleKeyPress(e) {
        const newPage = parseInt(e.target.value, 10);
        if (e.charCode === 13) {
            const { limit, totalResults, onChange } = this.props;
            const { totalPages } = this.calculatePagination(this.props);

            if (newPage < 1 || newPage > totalPages) {
                return;
            }

            onChange(
                this.calculatePagination({
                    limit,
                    offset: limit * (newPage - 1),
                    totalResults,
                })
            );
            this.setState({ customPage: undefined });
        }
    }

    // template rendering
    render() {
        const {
            showElementOffsetPagination,
            offset,
            limit,
            limitRange,
            totalResults,
            newLimitText,
            isTopPagination,
            disabled,
            className,
            pendingTotal,
            showPageInput,
            hideTotalResults,
            pageWithoutLimitText,
            pageWithLimitText,
            foundResultsText,

        } = this.props;

        const { customPage } = this.state;

        const limitRangeSorted = _.chain(limitRange)
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
        } = this.calculatePagination(this.props);

        const pageField = !_.isUndefined(customPage)
            ? (isNaN(customPage) ? 0 : customPage)
            : currentPage;

        const valid = pageField > 0 && pageField <= totalPages;

        let pageInfo = '';

        if (showElementOffsetPagination === false && showPageInput && !_.isUndefined(totalResults)) {
            pageInfo = [
                <span key="PageText">Page</span>,
                <TextField
                    key="PageNumber"
                    reducedSize
                    className="ecc-gui-elements__pagination__pagenumber"
                    onKeyPress={this.handleKeyPress}
                    disabled={disabled === true}
                    stretch={false}
                    style={{
                        // the calculation can be improved
                        width: `calc(${Math.max(1, pageField.toString().length)}ex + 1rem)`,
                    }}
                    min={1}
                    max={totalPages}
                    type="number"
                    value={pageField > 0 ? pageField : ''}
                    error={valid ? '' : 'Invalid page'}
                    onChange={e => {
                        this.onChangePage(e.value);
                    }}
                />,
                <span key="PageText2">
                    {'of '}
                    {totalPages.toLocaleString()}
                </span>,
            ];
        } else if (showElementOffsetPagination === false && !showPageInput && !_.isUndefined(totalResults)) {
            pageInfo = pageWithLimitText
                .replace('::current::', currentPage.toLocaleString())
                .replace('::total::', totalPages.toLocaleString())
        } else if (showElementOffsetPagination === false && _.isUndefined(totalResults)) {
            pageInfo = pageWithoutLimitText
                .replace('::current::', currentPage.toLocaleString());
        } else if (showElementOffsetPagination === true) {
            const firstItem = Math.min(totalResults, offset + 1);
            const lastItem = lastItemOnPage;
            const start = firstItem === lastItem
                ? lastItem.toLocaleString()
                : `${firstItem.toLocaleString()} - ${lastItem.toLocaleString()}`;
            pageInfo = `${start} of ${totalResults.toLocaleString()}`;
        }

        // render actual site information
        const pageInformation = (
            <div className="ecc-gui-elements__pagination-pageInfo">
                {pageInfo}
            </div>
        );
        const paginationClassNames = classNames(
            'ecc-gui-elements__pagination',
            {
                'ecc-gui-elements__pagination--disabled': disabled === true,
            },
            className
        );
        return (
            <div className={paginationClassNames}>
                {(
                    hideTotalResults === false
                    && !_.isUndefined(totalResults)

                ) && (
                    <span className="ecc-gui-elements__pagination-summary">
                        {foundResultsText.replace('::total::', totalResults.toLocaleString())}
                    </span>
                )}
                {newLimitText && !_.isEmpty(limitRangeSorted) ? (
                    <div className="ecc-gui-elements__pagination-limit">
                        <span className="ecc-gui-elements__pagination-limit_text">
                            {newLimitText}
                        </span>
                        <div className="ecc-gui-elements__pagination-limit_size">
                            <SelectBox
                                reducedSize
                                value={limit}
                                options={limitRangeSorted}
                                clearable={false}
                                searchable={false}
                                onChange={this.onNewLimit}
                                optionsOnTop={isTopPagination !== true}
                                disabled={disabled === true}
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
                        disabled={onFirstPage || disabled === true}
                        iconName="arrow_firstpage"
                    />
                    <Button
                        className="ecc-gui-elements__pagination-actions__prev-page-button"
                        onClick={this.onClickBack}
                        disabled={onFirstPage || disabled === true}
                        iconName="arrow_prevpage"
                    />
                    {pageInformation}
                    <Button
                        className="ecc-gui-elements__pagination-actions__next-page-button"
                        onClick={this.onClickForward}
                        disabled={onLastPage || disabled === true}
                        iconName="arrow_nextpage"
                    />
                    <Button
                        className="ecc-gui-elements__pagination-actions__last-page-button"
                        onClick={this.onClickLast}
                        disabled={onLastPage || disabled === true || totalResults < 1 || totalResults === undefined}
                        iconName="arrow_lastpage"
                    />
                </div>
                {totalResults === undefined && pendingTotal && (
                    <div className="ecc-gui-elements__pagination-processinfo">
                        <Tooltip
                            label="Fetch count of total results."
                        >
                            <Spinner appearInline={true} />
                        </Tooltip>
                    </div>
                )}
            </div>
        );
    }
}

export default Pagination;
