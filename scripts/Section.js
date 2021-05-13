export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }

    render() {
        this.items.forEach(item => {
            this.container.append(this.renderer(item));
        });
    }

    addItem(item) {
        console.log(item);
        this.container.prepend(this.renderer(item));
    }
}