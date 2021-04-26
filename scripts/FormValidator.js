export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
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

    _setEventListeners(buttonElement, inputList) {
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    enableValidation() {
        const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._toggleButtonState(inputList, buttonElement);
            inputList.forEach(inputElement => this._checkInputValidity(inputElement));
            if (this._hasInvalidInput(inputList)) {
                evt.stopImmediatePropagation();
            }
        });
        this._setEventListeners(buttonElement, inputList);
    }

    _hasInvalidInput(inputList) {
        return inputList.some(i => !i.validity.valid);
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(this._settings.inactiveButtonClass);
        } else {
            buttonElement.removeAttribute('disabled');
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    }
}