import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHanlder) {
        super(popupSelector);
        this.formSubmitHanlder = formSubmitHanlder;
        this.form = this.popupElement.querySelector('.form');
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
        super.close();
    }
}