Issue(s):

**Coder**

I confirm that regarding my changed code...

***General***

- [ ] Issue(s) are set above (if existing)
- [ ] the code is conform to our coding conventions ([?](https://confluence.brox.de/x/EIGOAQ))
    - eslint does not fail
    - propTypes are complete and well defined
    - works and performs its intended function
    - is free of any redundant or duplicate code
    - is as modular as possible
    - fits our directory structure ([?](https://confluence.brox.de/x/lIfgAw))
    - has no commented out code ([?](https://medium.com/@kentcdodds/please-don-t-commit-commented-out-code-53d0b5b26d5f))
    - has no code that can be replaced with library functions (e.g. lodash)
- [ ] CHANGELOG.md is updated ([?](https://confluence.brox.de/display/ECCGMBH/UI+Working+Policy#UIWorkingPolicy-Changelog#changelog))
- [ ] README.md (incl. migration notes) and Template.md is up-to-date
- [ ] dependencies
    - are up to date
    - necessary, if new (check other components to avoid duplicate code)
    - yarn.lock contains no multiple components in different minor/patch versions

***Testing***

- [ ] stores and helper functions are unit tested
- [ ] works in a preferred browser (esp. CSS fixes)

***Code Documentation***

- [ ] the code is documented properly
    - all functions and classes are described and fits our conventions ([?](https://confluence.brox.de/display/ECCGMBH/UI+Working+Policy#UIWorkingPolicy-Changelog#Document+react+components))
    - propTypes are descriped
    - thrown (runtime) exceptions are documented
    - every unusual behavior or edge-case handling is described
    - the use and function of third-party libraries is documented
    - complex algorithms are explained and justified
    - data structures and units of measurement are explained
    - outdated comments have been removed/updated
- [ ] the code does not contain any **TODO**s
- [ ] **FIXME**s are checked and necessary

---

**Reviewer**

I confirm that regarding the changed code...

***General***

- [ ] the coder ticked all checkboxes
- [ ] CHANGELOG.md contains new entry and fits our convention ([?](https://confluence.brox.de/display/ECCGMBH/UI+Working+Policy#UIWorkingPolicy-Changelog#changelog))
- [ ] README.md and Template.md seems up-to-date

***Testing***

- [ ] unit tests are
    - complete
    - working
- [ ] works in a preferred browser (esp. CSS)

***Code Documentation***

- [ ] the code is documented properly
    - all functions and classes are described and fits our conventions ([?](https://confluence.brox.de/display/ECCGMBH/UI+Working+Policy#UIWorkingPolicy-Changelog#Document+react+components))
    - all propTypes are described
    - thrown (runtime) exceptions are documented
    - every unusual behavior or edge-case handling is described
    - the use and function of third-party libraries is documented
    - complex algorithms are explained and justified
    - data structures and units of measurement are explained
    - outdated comments have been removed/updated
- [ ] the code does not contain any **TODO**s
- [ ] **FIXME**s are necessary

*Template version 1.7.0*
