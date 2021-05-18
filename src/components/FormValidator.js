export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState(this._inputList, this._buttonElement);
            });
        });
    }

    revalidate() {
        this._inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement);
            this.toggleButtonState(this._inputList, this._buttonElement);
        });
    }

    enableValidation() {
        this.toggleButtonState();

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._inputList.forEach(inputElement => this._checkInputValidity(inputElement));
        });

        this._setEventListeners();
    }

    _hasInvalidInput() {
        return this._inputList.some(i => !i.validity.valid);
    }

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.setAttribute('disabled', true);
            this._buttonElement.classList.add(this._settings.inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    }
}