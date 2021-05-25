import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._form = this._popupElement.querySelector('.form');
        this._submit = this._popupElement.querySelector('.form__submit');
        this._submitText = this._submit.textContent;

    }

    open(submitHanlder) {
        this._submitHanlder = submitHanlder;
        super.open();
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHanlder();
        });
        super.setEventListeners();
    }

    renderLoading(isLoading, loadingText = 'Сохранение...') {
        if (isLoading) {
            this._submit.textContent = loadingText;
        } else {
            this._submit.textContent = this._submitText;
        }
    }
}