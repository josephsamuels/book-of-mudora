import ItemController from './item.controller';
import template from './item.template.html';
import './item.styles.css';

const item = {
    bindings: {
        type: '@'
    },
    controller: ItemController,
    template: template
};

export default item;
