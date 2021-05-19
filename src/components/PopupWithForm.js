import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHanlder) {
        super(popupSelector);
        this._formSubmitHanlder = formSubmitHanlder;
        this._form = this._popupElement.querySelector('.form');
    }

    setFormValidator(formValidator) {
        this._formValidator = formValidator;
        this._formValidator.enableValidation(this._form);
    }

    open(data = {}) {
        Object.keys(data).forEach(key => {
            const el = this._form.querySelector(`.form__input[name='${key}']`);
            if (el !== undefined) {
                el.value = data[key];
            }
        });

        super.open();
    }

    _getInputValues() {
        return Array.from(this._form.querySelectorAll('.form__input'))
            .reduce((prev, curr) => {
                prev[curr.name] = curr.value;
                return prev;
            }, {});
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmitHanlder(this._getInputValues())
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        if (this._formValidator !== undefined) {
            this._formValidator.toggleButtonState();
        }
        super.close();
    }
}