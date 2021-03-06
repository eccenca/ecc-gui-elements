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
                    <br />
                    <Button
                        disabled
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        disabled
                        accent
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        disabled
                        colored
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        disabled
                        raised
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        disabled
                        raised
                        accent
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button
                        disabled
                        raised
                        colored
                        iconName="hide"
                        tooltip="clear input"
                        className="mdl-button--clearance"
                    />
                    <Button raised accent disabled className="mdl-button--clearance">
                        Clear
                    </Button>
                </CardContent>
                <CardContent>
                    <h5>Buttons with Badges</h5>
                    <Button badge="1">Normal</Button>
                    <Button accent badge="2">Accented</Button>
                    <Button colored badge="3">Colored</Button>
                    <br />
                    <DismissiveButton raised colored badge="4">Dismissive</DismissiveButton>
                    <AffirmativeButton raised colored badge="5">Affirmative</AffirmativeButton>
                    <DisruptiveButton raised colored badge="6">Disruptive</DisruptiveButton>
                    <br />
                    <Button raised iconName="arrow_nextpage" badge="7" />
                    <Button raised colored iconName="arrow_prevpage" badge="8" />
                    <Button raised accent iconName="arrow_lastpage" badge="9" />
                    <Button fabSize="mini" iconName="arrow_firstpage" badge="10" />
                    <Button fabSize="large" iconName="arrow_dropdown" badge="11" />
                    <Button iconName="expand_more" badge="12" />
                    <Button iconName="expand_less" badge="13" />
                    <Button iconName="menu_more" badge="14" />
                    <Button iconName="filter" badge="15" />
                    <Button iconName="sort" badge="16" />
                    <Button iconName="hide" badge="17" />
                    <Button iconName="access_forbidden" badge="18" />
                </CardContent>
                <CardContent>
                    <h5>Buttons with icons</h5>
                    <DismissiveButton>
                        <Icon name="cancel" tooltip={false} />
                        {' '}
                        Cancel
                    </DismissiveButton>
                    <AffirmativeButton>
                        <Icon name="save" tooltip={false} />
                        {' '}
                        Save
                    </AffirmativeButton>
                    <DisruptiveButton>
                        <Icon name="remove" tooltip={false} />
                        {' '}
                        Remove
                    </DisruptiveButton>
                    <br />
                    <DismissiveButton raised>
                        <Icon name="cancel" tooltip={false} />
                        {' '}
                        Cancel
                    </DismissiveButton>
                    <AffirmativeButton raised>
                        <Icon name="save" tooltip={false} />
                        {' '}
                        Save
                    </AffirmativeButton>
                    <DisruptiveButton raised>
                        <Icon name="remove" tooltip={false} />
                        {' '}
                        Remove
                    </DisruptiveButton>
                    <br />
                    <Button>
                        <Icon name="arrow_prevpage" tooltip={false} />
                        {' '}
                        Left
                    </Button>
                    <Button>
                        Mid
                        {' '}
                        <Icon name="stop" tooltip={false} />
                        {' '}
                        dle
                    </Button>
                    <Button>
                        Right
                        {' '}
                        <Icon name="arrow_nextpage" tooltip={false} />
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
                        fabSize="mini"
                    >
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
