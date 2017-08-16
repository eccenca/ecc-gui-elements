import basicClassCreator from 'react-mdl/lib/utils/basicClassCreator';
import Card from './Card.js';
import CardTitle from './CardTitle.js';
import CardActions from './CardActions.js';

import {
    CardMenu
} from 'react-mdl/lib/Card';

const CardContent = basicClassCreator('CardContent', 'mdl-card__content');

export {
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
};
