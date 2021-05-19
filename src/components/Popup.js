export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._openedPopupClass = 'popup_opened';
        this._closeButton = this._popupElement.querySelector('.popup__close');
        this._escEventHanlder = (evt) => this._handleEscClose(evt);
    }

    open() {
        this._popupElement.classList.add(this._openedPopupClass);
        document.addEventListener('keydown', this._escEventHanlder);
    }

    close() {
        this._popupElement.classList.remove(this._openedPopupClass);
        document.removeEventListener('keydown', this._escEventHanlder);
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
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', (evt) => this._handleOutsidePopupClose(evt));
    }
}