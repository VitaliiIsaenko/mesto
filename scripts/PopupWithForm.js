import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";
import { formValidatorSettings } from "./constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHanlder) {
        super(popupSelector);
        this._formSubmitHanlder = formSubmitHanlder;
        this._form = this._popupElement.querySelector('.form');
        this._formValidator = new FormValidator(formValidatorSettings, this._form);
        this._formValidator.enableValidation();
    }

    setFormValues(data) {
        Object.keys(data).forEach(key => {
            let el = this._form.querySelector(`.form__input[name='${key}']`);
            if (el !== undefined) {
                el.value = data[key];
            }
        });
        this._formValidator.revalidate();
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
        this._formValidator.toggleButtonState();
        super.close();
    }
}