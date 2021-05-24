import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._form = this._popupElement.querySelector('.form');
    }

    open(submitHanlder) {
        this._submitHanlder = submitHanlder;
        super.open();
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHanlder();
            super.close();
        });
        super.setEventListeners();
    }
}