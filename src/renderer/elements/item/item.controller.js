export default class ItemController {
    constructor() {
        'ngInject';

        this.items = {
            'bomb': { steps: 1 },
            'bombos-medallion': { steps: 1 },
            'book-of-mudora': { steps: 1 },
            'boomerang': { steps: 1 },
            'bottle': { steps: 1 },
            'bow': { steps: 3 },
            'bug-net': { steps: 1 },
            'cane-byrna': { steps: 1 },
            'cane-somaria': { steps: 1 },
            'ether-medallion': { steps: 1 },
            'flippers': { steps: 1 },
            'fire-rod': { steps: 1 },
            'flute': { steps: 1 },
            'gloves': { steps: 2 },
            'hookshot': { steps: 1 },
            'ice-rod': { steps: 1 },
            'lamp': { steps: 1 },
            'magic-cape': { steps: 1 },
            'magic-hammer': { steps: 1 },
            'magic-mirror': { steps: 1 },
            'magic-powder': { steps: 1 },
            'magical-boomerang': { steps: 1 },
            'moon-pearl': { steps: 1 },
            'mushroom': { steps: 1 },
            'pegasus-boots': { steps: 1 },
            'quake-medallion': { steps: 1 },
            'shield': { steps: 3 },
            'shovel': { steps: 1 },
            'tunic': { default: 1, steps: 3 },
            'sword': { steps: 4 }
        };
    }

    $onInit() {
        this.level = this.items[this.type].default || 0;
    }

    toggleItem() {
        this.level = (this.level + 1) % (this.items[this.type].steps + 1);

        if (this.level < this.items[this.type].default) {
            this.level = this.items[this.type].default;
        }
    }
}
