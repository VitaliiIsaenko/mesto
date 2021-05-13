export default class Card {
    constructor(data, selector, handleCardClick) {
        this._text = data.name;
        this._image = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const element = document
            .querySelector(this._selector)
            .content
            .querySelector('.pictures__item')
            .cloneNode(true);

        return element;
    }

    generateCard() {
        this._element = this._getTemplate();
        this.imageElement = this._element.querySelector('.pictures__item-photo');
        this._nameElement = this._element.querySelector('.pictures__item-name');
        this._likeButton = this._element.querySelector('.pictures__item-like');
        this._removeButton = this._element.querySelector('.pictures__item-remove');

        this._setEventListeners();

        this.imageElement.src = this._image;
        this.imageElement.alt = this._text;
        this._nameElement.textContent = this._text

        return this._element;
    }

    _setEventListeners() {
        this._likeButton
            .addEventListener('click', () => this._handleLikeClick());

        this._removeButton
            .addEventListener('click', () => this._handleRemoveClick());

        this.imageElement
            .addEventListener('click', () => this._handleCardClick());
    }

    _handleLikeClick() {
        this._likeButton.classList.toggle('pictures__item-like_active');
    }

    _handleRemoveClick() {
        this._element.remove()
    }
}