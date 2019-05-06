import React from 'react';
import _ from 'lodash';
import {
    Card,
    CardTitle,
    CardContent,
} from '../../index';

class TestTypography extends React.PureComponent {
    render() {
        const typoclasses = [
            'mdl-typography--display-4',
            'mdl-typography--display-4-color-contrast',
            'mdl-typography--display-3',
            'mdl-typography--display-3-color-contrast',
            'mdl-typography--display-2',
            'mdl-typography--display-2-color-contrast',
            'mdl-typography--display-1',
            'mdl-typography--display-1-color-contrast',
            'mdl-typography--headline',
            'mdl-typography--headline-color-contrast',
            'mdl-typography--title',
            'mdl-typography--title-color-contrast',
            'mdl-typography--subhead',
            'mdl-typography--subhead-color-contrast',
            'mdl-typography--body-2',
            'mdl-typography--body-2-color-contrast',
            'mdl-typography--body-1',
            'mdl-typography--body-1-color-contrast',
            'mdl-typography--body-2-force-preferred-font',
            'mdl-typography--body-2-force-preferred-font-color-contrast',
            'mdl-typography--body-1-force-preferred-font',
            'mdl-typography--body-1-force-preferred-font-color-contrast',
            'mdl-typography--caption',
            'mdl-typography--caption-force-preferred-font',
            'mdl-typography--caption-color-contrast',
            'mdl-typography--caption-force-preferred-font-color-contrast',
            'mdl-typography--menu',
            'mdl-typography--menu-color-contrast',
            'mdl-typography--button',
            'mdl-typography--button-color-contrast',
        ];

        return (
            <Card>
                <CardTitle>Test for simple typography elements</CardTitle>
                <CardContent>
                    <h1>Headline Level 1 (display-3)</h1>
                    <h2>Headline Level 2 (display-2)</h2>
                    <h3>Headline Level 3 (display-1)</h3>
                    <h4>Headline Level 4 (headline)</h4>
                    <h5>Headline Level 5 (title)</h5>
                    <h6>Headline Level 6 (subhead)</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                    </p>
                    <h1>Headline Level 1<br/>second line</h1>
                    <h2>Headline Level 2<br/>second line</h2>
                    <h3>Headline Level 3<br/>second line</h3>
                    <h4>Headline Level 4<br/>second line</h4>
                    <h5>Headline Level 5<br/>second line</h5>
                    <h6>Headline Level 6<br/>second line</h6>
                    <blockquote>
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
                    </blockquote>
                    {_.map(typoclasses, (typoClassName) => (
                        <div className={typoClassName}>
                            .{typoClassName}<br/>second line
                        </div>
                    ))}
                </CardContent>
            </Card>
        );
    }
}
export default TestTypography;
