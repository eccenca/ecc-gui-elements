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
                    <DismissiveButton iconName="hide"/>
                    <AffirmativeButton iconName="hide"/>
                    <DisruptiveButton iconName="hide"/>
                    <DismissiveButton raised iconName="hide"/>
                    <AffirmativeButton raised iconName="hide"/>
                    <DisruptiveButton raised iconName="hide"/>
                    <h5>Buttons using canonical icons</h5>
                    <Button colored iconName="edit" tooltip="own tooltip"/>
                    <Button accent iconName="delete" tooltip={false}/>
                    <Button raised iconName="arrow_nextpage"/>
                    <Button raised colored iconName="arrow_prevpage"/>
                    <Button raised accent iconName="arrow_lastpage"/>
                    <Button fabSize="mini" iconName="arrow_firstpage"/>
                    <Button fabSize="large" iconName="arrow_dropdown"/>
                    <Button iconName="expand_more"/>
                    <Button iconName="expand_less"/>
                    <Button iconName="menu_more"/>
                    <Button iconName="filter"/>
                    <Button iconName="sort"/>
                    <Button iconName="hide"/>
                    <Button iconName="access_forbidden"/>
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood"/>
                    </Button>
                    <Button raised={true}>
                        <Icon name="hide"/>
                        Hide
                    </Button>
                    <Button iconName="more_vert"/>
                </div>
            </div>
        );

        const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.JPG';

        const brokenImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.png';
        const chips = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Chip</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Plain chips</h5>
                    <Chip>
                        Plain chip with only a simple but long label
                    </Chip>
                    <Chip>
                        <ChipVisual image={image} alt="My alternative label for the image."/>
                        Plain chip with image (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual image={brokenImage} alt="My alternative label for the image."/>
                        Plain chip with broken image (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual label=""/>
                        Plain chip with 0 char text visual (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual label="A"/>
                        Plain chip with 1 char text visual (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual label="AB"/>
                        Plain chip with 2 chars text visual (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual label="ABC"/>
                        Plain chip with 3 chars text visual (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual
                            label="AB"
                            bgColor="teal"
                            textColor="white"
                        />
                        Plain chip with colors (ChipVisual property)
                    </Chip>
                    <Chip>
                        <ChipVisual>
                            <img src={image} alt=""/>
                        </ChipVisual>
                        Plain chip with image (ChipVisual content)
                    </Chip>
                    <Chip>
                        <ChipVisual>
                            <img src={brokenImage} alt=""/>
                        </ChipVisual>
                        Plain chip with broken image (ChipVisual content)
                    </Chip>
                    <Chip>
                        <ChipVisual>
                            <Icon name="done" tooltip="test"/>
                        </ChipVisual>
                        Plain chip with icon (ChipVisual content)
                    </Chip>
                    <Chip
                        className="my-own-chip-class"
                    >
                        <ChipVisual label="C1"/>
                        Plain chip with extra chip class
                    </Chip>
                    <Chip>
                        <ChipVisual
                            label="C2"
                            className="my-own-visual-class"
                            bgColor="red"
                            textColor="white"
                        />
                        Plain chip with extra chipvisual class
                    </Chip>
                    <h5>Clickable chips</h5>
                    <Chip onClick={() => alert('#1 chip clicked')}>
                        <ChipVisual image={image}/>
                        clickable with image visual
                    </Chip>
                    <Chip onClick={() => alert('#2 chip clicked')}>
                        <ChipVisual label="AB"/>
                        clickable with text visual
                    </Chip>
                </div>
            </div>
        );

        return (
            <div>
                {buttons}
                <hr className="mdl-layout-spacer"/>
                {chips}
            </div>
        );
    }
}
;

export default TestButtons;
