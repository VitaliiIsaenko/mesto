import Popup from "./Popup.js";

export default class PopupImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this.name = name;
        this.link = link;
    }

    open() {
        const popupCaption = this.popupElement.querySelector('.popup__image-caption');
        popupCaption.textContent = this.name;

        const popupImage = this.popupElement.querySelector('.popup__image');
        popupImage.src = this.link;
        popupImage.alt = this.name;

        super.open();
    }
}