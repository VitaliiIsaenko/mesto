export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.containerSelector = containerSelector;
    }

    render() {
        this.items.forEach(item => {
            this.containerSelector.append(this.renderer(item));
        });
    }

    addItem(item) {
        this.containerSelector.prepend(this.renderer(item));
    }
}