import React from 'react';
import PropTypes from 'prop-types';
import Version from '../Version/Version';

const Footer = props => {
    const year = new Date().getFullYear();
    const {
        userName,
        workspace,
        version,
        company,
        companyUrl,
    } = props;

    const loggedUser = userName ? (
        <span>
            {'Logged in as: '}
            {userName}
        </span>
    ) : (
        false
    );

    const loggedWorkspace = workspace ? (
        <span>
            {'Workspace: '}
            {workspace}
        </span>
    ) : (
        false
    );

    return (
        <div className="ecc-component-footer">
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">
                        <Version version={version} />
                        &copy;
                        {' '}
                        {year}
                    </div>
                    <ul className="mdl-mini-footer__link-list">
                        <li>
                            <a href={companyUrl} target="_blank">
                                {company}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mdl-mini-footer__right-section">
                    <ul className="mdl-mini-footer__link-list">
                        <li>{loggedWorkspace}</li>
                        <li>{loggedUser}</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    company: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    companyUrl: PropTypes.string.isRequired,
    workspace: PropTypes.string,
    userName: PropTypes.string,
};

Footer.defaultProps = {
    workspace: '',
    userName: '',
};

export default Footer;
