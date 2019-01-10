import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    FloatingActionList,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    Icon,
} from '../../index';

class TestButtons extends React.PureComponent {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const buttons = (
            <Card fixedActions>
                <CardTitle documentLevel="h4">Test Buttons</CardTitle>
                <CardContent>
                    <h5>MDL button types</h5>
                    <Button>Normal</Button>
                    <Button accent>Accented</Button>
                    <Button colored>Colored</Button>
                    <Button raised>Raised</Button>
                    <Button raised accent>
                        Accent Raised
                    </Button>
                    <Button raised colored>
                        Colored Raised
                    </Button>
                </CardContent>
                <CardContent>
                    <h5>Semantic button types</h5>
                    <DismissiveButton accent>Dismissive</DismissiveButton>
                    <AffirmativeButton accent>Affirmative</AffirmativeButton>
                    <DisruptiveButton accent>Disruptive</DisruptiveButton>
                    <DismissiveButton raised colored>
                        Dismissive
                    </DismissiveButton>
                    <AffirmativeButton raised colored>
                        Affirmative
                    </AffirmativeButton>
                    <DisruptiveButton raised colored>
                        Disruptive
                    </DisruptiveButton>
                    <br />
                    <DismissiveButton iconName="hide" />
                    <AffirmativeButton iconName="hide" />
                    <DisruptiveButton iconName="hide" />
                    <DismissiveButton raised iconName="hide" />
                    <AffirmativeButton raised iconName="hide" />
                    <DisruptiveButton raised iconName="hide" />
                </CardContent>
                <CardContent>
                    <h5>Buttons using canonical icons</h5>
                    <Button colored iconName="edit" tooltip="own tooltip" />
                    <Button accent iconName="delete" tooltip={false} />
                    <Button raised iconName="arrow_nextpage" />
                    <Button raised colored iconName="arrow_prevpage" />
                    <Button raised accent iconName="arrow_lastpage" />
                    <Button fabSize="mini" iconName="arrow_firstpage" />
                    <Button fabSize="large" iconName="arrow_dropdown" />
                    <Button iconName="expand_more" />
                    <Button iconName="expand_less" />
                    <Button iconName="menu_more" />
                    <Button iconName="filter" />
                    <Button iconName="sort" />
                    <Button iconName="hide" />
                    <Button iconName="access_forbidden" />
                </CardContent>
                <CardContent>
                    <h5>Clearance buttons</h5>
                    <Button
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        accent
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        colored
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        raised
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        raised
                        accent
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        raised
                        colored
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <br />
                    <Button className="mdl-button--clearance">Clear</Button>
                    <Button accent className="mdl-button--clearance">
                        Clear
                    </Button>
                    <Button colored className="mdl-button--clearance">
                        Clear
                    </Button>
                    <Button raised className="mdl-button--clearance">
                        Clear
                    </Button>
                    <Button raised accent className="mdl-button--clearance">
                        Clear
                    </Button>
                    <Button raised colored className="mdl-button--clearance">
                        Clear
                    </Button>
                </CardContent>
                <CardActions fixed>
                    <FloatingActionList
                        iconName="edit"
                        actions={[
                            {
                                label: 'Something',
                                handler() {
                                    alert('You clicked the FAB.');
                                },
                            },
                        ]}
                    />
                    <Button
                        raised
                        ripple={false}
                        tooltip="This is a Test!"
                        fabSize="mini">
                        <Icon name="mood" />
                    </Button>
                    <Button raised>
                        <Icon name="hide" />
                        Hide
                    </Button>
                    <Button iconName="menu_more" />
                </CardActions>
            </Card>
        );

        return <div>{buttons}</div>;
    }
}
export default TestButtons;
