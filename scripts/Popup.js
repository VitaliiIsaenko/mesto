export default class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.openedPopupClass = 'popup_opened';
        this.closeButton = this.popupElement.querySelector('.popup__close');

        this.setEventListeners();
    }

    open() {
        this.popupElement.classList.add(this.openedPopupClass);
    }

    close() {
        this.popupElement.classList.remove(this.openedPopupClass);

    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOutsidePopupClose() {
        if (evt.target === this.popupElement) {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this.closeButton.addEventListener('click', () => this.close());
        this.popupElement.addEventListener('click', () => this._handleOutsidePopupClose());
    }
}