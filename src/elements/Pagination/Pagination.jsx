import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Button from './../../elements/Button/Button';
import SelectBox from './../../elements/SelectBox/SelectBox';
import TextField from './../../elements/TextField/TextField';

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
class Pagination extends React.Component {
    // define property types
    static propTypes = {
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
         * show element offset numbers as pagination information
         */
        showElementOffsetPagination: React.PropTypes.bool,
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
        /**
         * if true all buttons and inputs fields are disabled and visibility is decreased
         */
        disabled: React.PropTypes.bool,
        /**
         * the current page number can be edited to jump directly there, works only with `showElementOffsetPagination===false`
         */
        showPageInput: React.PropTypes.bool,
        /**
         * hide info about number of total results
         */
        hideTotalResults: React.PropTypes.bool,
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
        const {limit, totalResults} = this.props;

        this.props.onChange(
            calculatePagination({
                limit,
                offset: 0,
                totalResults,
            })
        );
    }
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
    }
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
    }
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
    }

    onNewLimit(limit) {
        const {offset, totalResults} = this.props;

        this.props.onChange(
            calculatePagination({
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
    handleKeyPress(e) {
        const newPage = e.target.value;
        if (e.charCode === 13) {
            const {limit, totalResults} = this.props;

            if (newPage < 1 || newPage * limit > totalResults) {
                return;
            }
            this.props.onChange(
                calculatePagination({
                    limit,
                    offset: limit * parseInt(newPage, 10) - 1,
                    totalResults,
                })
            );
            this.setState({customPage: undefined});
        }
    }
    // template rendering
    render() {
        const {
            showElementOffsetPagination,
            offset,
            limit,
            totalResults,
            newLimitText,
            isTopPagination,
            disabled,
            className,
        } = this.props;

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

        const pageField = !_.isUndefined(this.state.customPage)
            ? this.state.customPage
            : currentPage;

        const valid = pageField > 0 && pageField <= totalPages;

        let pageInfo = '';

        if (showElementOffsetPagination === false) {
            if (this.props.showPageInput) {
                pageInfo = (
                    <span>
                        <span>Page</span>
                        <TextField
                            className="ecc-gui-elements__pagination__pagenumber"
                            onKeyPress={this.handleKeyPress}
                            disabled={disabled === true}
                            min={1}
                            max={totalPages}
                            type="number"
                            value={pageField}
                            error={valid ? '' : 'Invalid page'}
                            onChange={e => {
                                this.onChangePage(e.value);
                            }}
                        />
                        <span>of {totalPages.toLocaleString()}</span>
                    </span>
                );
            } else {
                pageInfo = `Page ${currentPage.toLocaleString()} of ${totalPages.toLocaleString()}`;
            }
        } else {
            const firstItem = Math.min(totalResults, offset + 1);
            const lastItem = lastItemOnPage;
            const start =
                firstItem === lastItem
                    ? lastItem.toLocaleString()
                    : `${firstItem.toLocaleString()} - ${lastItem.toLocaleString()}`;
            pageInfo = `${start} of ${totalResults.toLocaleString()}`;
        }

        // render actual site information
        const pageInformation = (
            <span className="ecc-gui-elements__pagination-pageInfo">
                {pageInfo}
            </span>
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
                {this.props.hideTotalResults === false && (
                    <span className="ecc-gui-elements__pagination-summary">
                        Found {totalResults} {totalResults === 1 ? 'result' : 'results'}.
                    </span>
                )}
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
                        disabled={onLastPage || disabled === true}
                        iconName="arrow_lastpage"
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;
