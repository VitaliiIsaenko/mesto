import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);


        this._popupCaption = this._popupElement.querySelector('.popup__image-caption');
        this._popupImage = this._popupElement.querySelector('.popup__image');
    }

    open(name, link) {
        this._popupCaption.textContent = name;
        this._popupImage.src = link;
        this._popupImage.alt = name;
        super.open();
    }
}