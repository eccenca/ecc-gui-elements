/* global describe, it */
// import helpers
import should from 'ecc-test-helpers';
import './spec_helper.js';

// imports
import {Alert} from '../index.js';

describe('Gui Elements Suite', function() {
    describe('Alert', function() {
        it('should render', function() {
            const React = this.React;
            const TestUtils = this.TestUtils;

            // render
            const comp = TestUtils.renderIntoDocument(
                <Alert border={true} vertSpacing={true} dismissLabel="remove">
                    <p>This is a</p>
                    <p>untyped message.</p>
                </Alert>
            );

            // check that div structure is rendered correctly
            const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'div');
            should(divs.length).equal(4);
            // check that children rendered correctly
            const p = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'p');
            should(p.length).equal(2);
            // check that dismiss button is rendered correctly
            const button = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'button');
            should(button.length).equal(1);
            const i = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'i');
            should(i.length).equal(1);
            const span = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'span');
            should(span.length).equal(1);
        });
    });

    // TODO: add tests for rest of components
});
