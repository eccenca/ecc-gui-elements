import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    FloatingActionList,
    Icon,
    Chip,
    ChipVisual,
} from '../../index';

function TestChips() {
    const image =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.JPG';

    const brokenImage =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.png';
    const chips = (
        <Card>
            <CardTitle documentLevel="h4">Test Chips</CardTitle>
            <CardContent>
                <h5>Plain chips</h5>
                <Chip>Plain chip with only a simple but long label</Chip>
                <Chip>
                    <ChipVisual
                        image={image}
                        alt="My alternative label for the image."
                    />
                    Plain chip with image (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual
                        image={brokenImage}
                        alt="My alternative label for the image."
                    />
                    Plain chip with broken image (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual label="" />
                    Plain chip with 0 char text visual (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual label="A" />
                    Plain chip with 1 char text visual (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual label="AB" />
                    Plain chip with 2 chars text visual (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual label="ABC" />
                    Plain chip with 3 chars text visual (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual label="AB" bgColor="teal" textColor="white" />
                    Plain chip with colors (ChipVisual property)
                </Chip>
                <Chip>
                    <ChipVisual>
                        <img src={image} alt="" />
                    </ChipVisual>
                    Plain chip with image (ChipVisual content)
                </Chip>
                <Chip>
                    <ChipVisual>
                        <img src={brokenImage} alt="" />
                    </ChipVisual>
                    Plain chip with broken image (ChipVisual content)
                </Chip>
                <Chip>
                    <ChipVisual>
                        <Icon name="confirm" tooltip="test" />
                    </ChipVisual>
                    Plain chip with icon (ChipVisual content)
                </Chip>
                <Chip className="my-own-chip-class">
                    <ChipVisual label="C1" />
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
                    <ChipVisual image={image} />
                    clickable with image visual
                </Chip>
                <Chip onClick={() => alert('#2 chip clicked')}>
                    <ChipVisual label="AB" />
                    clickable with text visual
                </Chip>
                <Chip href="http://example.com/">single href</Chip>
                <Chip
                    href="http://example.com/"
                    onClick={() => alert('#4 chip clicked')}>
                    href and onclick event
                </Chip>
            </CardContent>
            <FloatingActionList
                fixed
                actions={[
                    {
                        icon: 'add',
                        label: 'Something',
                        handler() {
                            alert('You clicked the FAB.');
                        },
                    },
                ]}
            />
        </Card>
    );

    return <div>{chips}</div>;
}
export default TestChips;
