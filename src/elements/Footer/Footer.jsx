import React from 'react';
import PropTypes from 'prop-types';
import Version from '../Version/Version';

/**

```js
import {Footer} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            // all properties are optional, if one is given then a additional
            // footer line is generated on top of the other children elements
            <Footer
                version="vX.Y.Z"
                company="Company name"
                companyUrl="https://company.example.com/"
                workspace="Workspace title"
                userName="User account id"
            >
                <!--
                    any children elements
                    it is recommended to use MDL sub elements for footer here
                    @see https://getmdl.io/components/index.html#layout-section/footer
                -->
            </Footer>
        )
    },
    // ....
});
```
*/

const Footer = props => {
    const year = new Date().getFullYear();
    const {
        userName,
        workspace,
        version,
        company,
        companyUrl,
        children,
    } = props;

    const infoApplication = version ? (
        <div className="mdl-logo">
            <Version version={version} />
            {' '}
&copy;
            {year}
        </div>
    ) : (
        false
    );

    const infoCompany = company && companyUrl ? (
        <li>
            <a href={companyUrl} target="_blank">
                {company}
            </a>
        </li>
    ) : (
        false
    );

    const infoUser = userName ? (
        <li>
            {'Logged in as: '}
            {userName}
        </li>
    ) : (
        false
    );

    const infoWorkspace = workspace ? (
        <li>
            {'Workspace: '}
            {workspace}
        </li>
    ) : (
        false
    );

    const generatedFooterContent = (
        infoApplication
        || infoCompany
        || infoWorkspace
        || infoUser
    ) ? (
            <section className="mdl-mini-footer">
                {
                    (infoApplication || infoCompany) ? (
                        <div className="mdl-mini-footer__left-section">
                            {infoApplication}
                            <ul className="mdl-mini-footer__link-list">
                                {infoCompany}
                            </ul>
                        </div>
                    ) : (
                        false
                    )
                }
                {
                    (infoWorkspace || infoUser) ? (
                        <div className="mdl-mini-footer__right-section">
                            <ul className="mdl-mini-footer__link-list">
                                {infoWorkspace}
                                {infoUser}
                            </ul>
                        </div>
                    ) : (
                        false
                    )
                }
            </section>
        ) : (
            false
        );

    const additionalFooterContent = children ? (
        <section className="mdl-mini-footer">
            {children}
        </section>
    ) : (
        false
    );

    return (
        <footer className="ecc-component-footer">
            {generatedFooterContent}
            {additionalFooterContent}
        </footer>
    );
};

Footer.propTypes = {
    /**
        string (optional): company name
    */
    company: PropTypes.string,
    /**
        string (optional): URL of company website
    */
    companyUrl: PropTypes.string,
    /**
        string (optional): version identifier
    */
    version: PropTypes.string,
    /**
        string (optional): idientifier of current workspace
    */
    workspace: PropTypes.string,
    /**
        string (optional): identifier of currently logged in user
    */
    userName: PropTypes.string,
};

Footer.defaultProps = {
    company: '',
    companyUrl: '',
    version: '',
    workspace: '',
    userName: '',
};

Footer.displayName = 'Footer';

export default Footer;
