class ItemController {
    constructor() {
        this.status = 0;
        this.item = 'sword';
        this.levels = 5;
    }

    toggleItem() {
        this.status = (this.status + 1) % this.levels;
    }
}
export { ItemController }