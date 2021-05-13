import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHanlder) {
        super(popupSelector);
        this.formSubmitHanlder = formSubmitHanlder;
        this.form = this.popupElement.querySelector('.form');
    }

    setValidator(formValidator) {
        this._formValidator = formValidator;
    }

    setValues(data) {
        // console.log(data);

        Object.keys(data).forEach(key => {
            let el = this.form.querySelector(`.form__input[name='${key}']`);
            if (el !== undefined) {
                el.value = data[key];
            }
        });
        if (this._formValidator !== undefined) {
            this._formValidator.toggleButtonState();
        }
        // Object.entries(data).forEach((k, v) => {
        //     // console.log(k);
        //     // console.log(v);
        //     // let el = this.form.querySelector(`.form__input[name='${k}']`);
        //     // el.value = v;
        // });
    }

    _getInputValues() {
        return Array.from(this.form.querySelectorAll('.form__input'))
            .reduce((prev, curr) => {
                prev[curr.name] = curr.value;
                return prev;
            }, {});
    }

    setEventListeners() {
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.formSubmitHanlder(this._getInputValues())
        });
        super.setEventListeners();
    }

    close() {
        this.form.reset();

        if (this._formValidator !== undefined) {
            this._formValidator.toggleButtonState();
        }

        super.close();
    }
}