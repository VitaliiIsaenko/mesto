export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._openedPopupClass = 'popup_opened';
        this._closeButton = this._popupElement.querySelector('.popup__close');
    }

    open() {
        this._popupElement.classList.add(this._openedPopupClass);
    }

    close() {
        this._popupElement.classList.remove(this._openedPopupClass);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOutsidePopupClose(evt) {
        if (evt.target === this._popupElement) {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', (evt) => this._handleOutsidePopupClose(evt));
    }
}