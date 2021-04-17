function showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
};

function hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
};

function setEventListeners(formElement, buttonElement, inputList, settings) {
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
};

function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach((formElement) => {
        const buttonElement = formElement.querySelector(settings.submitButtonSelector);
        const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));

        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
            toggleButtonState(inputList, buttonElement, settings);
            inputList.forEach(inputElement => checkInputValidity(formElement, inputElement, settings));
            if (hasInvalidInput(inputList)) {
                evt.stopImmediatePropagation();
            }
        });
        setEventListeners(formElement, buttonElement, inputList, settings);
    });
};

function hasInvalidInput(inputList) {
    return inputList.some(i => !i.validity.valid);
}

function toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(settings.inactiveButtonClass);
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(settings.inactiveButtonClass);
    }
}