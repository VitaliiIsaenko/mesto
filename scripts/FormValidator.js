export default class FormValidator {
    constructor(settings) {
        this._settings = settings;
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    }

    _setEventListeners(formElement, buttonElement, inputList) {
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._settings.formSelector));

        formList.forEach((formElement) => {
            const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
            const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));

            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._toggleButtonState(inputList, buttonElement);
                inputList.forEach(inputElement => this._checkInputValidity(formElement, inputElement));
                if (this._hasInvalidInput(inputList)) {
                    evt.stopImmediatePropagation();
                }
            });
            this._setEventListeners(formElement, buttonElement, inputList);
        });
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