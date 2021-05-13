import Popup from "./Popup.js";

export default class PopupImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this._name = name;
        this._link = link;

        this._popupCaption = this._popupElement.querySelector('.popup__image-caption');
        this._popupImage = this._popupElement.querySelector('.popup__image');
    }

    open() {
        this._popupCaption.textContent = this._name;
        this._popupImage.src = this._link;
        this._popupImage.alt = this._name;
        super.open();
    }
}