import React from 'react';
import {
    Button,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    Icon,
    Chip,
    ChipVisual,
} from '../../index.js';

class TestButtons extends React.PureComponent {
    render() {
        const buttons = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Buttons</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>MDL button types</h5>
                    <Button>Normal</Button>
                    <Button accent>Accented</Button>
                    <Button colored>Colored</Button>
                    <Button raised>Raised</Button>
                    <Button raised accent>Accent Raised</Button>
                    <Button raised colored>Colored Raised</Button>
                    <h5>Semantic button types</h5>
                    <DismissiveButton accent>Dismissive</DismissiveButton>
                    <AffirmativeButton accent>Affirmative</AffirmativeButton>
                    <DisruptiveButton accent>Disruptive</DisruptiveButton>
                    <DismissiveButton raised colored>Dismissive</DismissiveButton>
                    <AffirmativeButton raised colored>Affirmative</AffirmativeButton>
                    <DisruptiveButton raised colored>Disruptive</DisruptiveButton>
                    <br/>
                    <DismissiveButton iconName="hide" />
                    <AffirmativeButton iconName="hide" />
                    <DisruptiveButton iconName="hide" />
                    <DismissiveButton raised iconName="hide" />
                    <AffirmativeButton raised iconName="hide" />
                    <DisruptiveButton raised iconName="hide" />
                    <h5>Buttons using canonical icons</h5>
                    <Button colored iconName="edit" tooltip="own tooltip"/>
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
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood" />
                    </Button>
                    <Button raised={true}>
                        <Icon name="hide" />
                        Hide
                    </Button>
                    <Button iconName="more_vert" />
                </div>
            </div>
        );

        const chips = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Chip</h4>
                </div>
                <hr className="mdl-layout-spacer"/>
                <div className="mdl-card__content">
                    <Chip
                        onClick={() => console.log('#1 chip clicked')}
                    >
        <ChipVisual image="https://placekitten.com/150/150"/>
                            clickable with image visual
                            </Chip>         <Chip
                        onClick={() => console.log('#1 chip clicked')}
                    >
        <ChipVisual label="AB"/>
            clickable with text visual
                            </Chip>
                    <Chip >
                            plain chip
                            </Chip>
                </div>
            </div>
        );

        return (
            <div>
                {buttons}
                {chips}
            </div>
        );
    }
};

export default TestButtons;
