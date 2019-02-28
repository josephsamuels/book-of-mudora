class ItemController {
    constructor() {
        'ngInject';

        this.itemLevels = {
            'bomb': 1,
            'bombos-medallion': 1,
            'book-of-mudora': 1,
            'boomerang': 1,
            'bottle': 1,
            'bow': 1,
            'bug-net': 1,
            'cane-byrna': 1,
            'cane-somaria': 1,
            'ether-medallion': 1,
            'flippers': 1,
            'fire-rod': 1,
            'flute': 1,
            'gloves': 2,
            'hookshot': 1,
            'ice-rod': 1,
            'lamp': 1,
            'magic-cape': 1,
            'magic-hammer': 1,
            'magic-mirror': 1,
            'magic-powder': 1,
            'magical-boomerang': 1,
            'moon-pearl': 1,
            'mushroom': 1,
            'pegasus-boots': 1,
            'quake-medallion': 1,
            'shield': 3,
            'shovel': 1,
            'silver-arrows': 1,
            'tunic': 3,
            'sword': 4
        };

        this.level = 0;
        this.levels = 0;
    }

    $onInit() {
        this.levels = this.itemLevels[this.type];
    }

    toggleItem() {
        this.level = (this.level + 1) % (this.levels + 1);
    }
}

export default ItemController;
