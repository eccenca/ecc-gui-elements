import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbList from "./BreadcrumbList";


export default {
    BreadcrumbItem,
    BreadcrumbList
};




/**
 The are two simple React elements to create breadcrumb navigation.

 ```js
 import {
    BreadcrumbList,
    BreadcrumbItem,
} from '@eccenca/gui-elements';

 const Page = React.createClass({
    // template rendering
    render() {
        return (
            <BreadcrumbList
                className={'my-own-class'}
            >
                <BreadcrumbItem
                    onClick={function(){}} // (optional) function, breadcrumb is rendered as HTML button element
                >
                    Button
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="#" // (optional) string, breadcrumb is rendered as HTML link anchor
                >
                    Link
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Span
                </BreadcrumbItem>
            </BreadcrumbList>
        )
    },
    // ....
});
 ```
 */

