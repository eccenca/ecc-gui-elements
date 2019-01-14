import React from 'react';
import {Card, CardTitle, CardContent, ContextMenu, MenuItem} from '../../index';

class TestContextMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.addContextMenuItem = this.addContextMenuItem.bind(this);
        this.removeContextMenuItem = this.removeContextMenuItem.bind(this);
    }

    addContextMenuItem() {
        this.setState({
            insertContextMenuItem: true,
        });
        console.log('insert MenuItem');
    }

    removeContextMenuItem() {
        this.setState({
            insertContextMenuItem: false,
        });
        console.log('remove MenuItem');
    }

    render() {
        return (
            <Card>
                <CardTitle>Test Context Menu</CardTitle>
                <CardContent>
                    <ContextMenu align="left" key="contextmenu1">
                        <MenuItem className="ownClassName" key="no1">
                            First First Item
                        </MenuItem>
                        <MenuItem>First Second Item</MenuItem>
                        <MenuItem>First Menu Item 3</MenuItem>
                        <MenuItem>First Another Menu Item</MenuItem>
                        <MenuItem onClick={this.addContextMenuItem}>
                            First Add Another
                        </MenuItem>
                        {this.state && this.state.insertContextMenuItem ? (
                            <MenuItem onClick={this.removeContextMenuItem}>
                                Remove me
                            </MenuItem>
                        ) : (
                            false
                        )}
                    </ContextMenu>
                    <ContextMenu
                        align="right"
                        iconName="add"
                        tooltip="add property"
                        key="contextmenu2">
                        <MenuItem>Second First Item</MenuItem>
                        <MenuItem>Second Second Item</MenuItem>
                        <MenuItem>Second Menu Item 3</MenuItem>
                        <MenuItem>Second Another Menu Item</MenuItem>
                        <MenuItem>Second Alright</MenuItem>
                    </ContextMenu>
                    <ContextMenu valign="top" key="contextmenu3">
                        <MenuItem>Only one menu item</MenuItem>
                    </ContextMenu>
                </CardContent>
            </Card>
        );
    }
}
export default TestContextMenu;
