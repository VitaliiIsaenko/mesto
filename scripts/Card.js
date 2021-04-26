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

        this._setEventListeners();

        const picturePhoto = this._element.querySelector('.pictures__item-photo');
        picturePhoto.src = this._image;
        picturePhoto.alt = this._text;

        this._element.querySelector('.pictures__item-name').textContent = this._text;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.pictures__item-like')
            .addEventListener('click', () => this._handleLikeClick());

        this._element.querySelector('.pictures__item-remove')
            .addEventListener('click', () => this._handleRemoveClick());

        this._element.querySelector('.pictures__item-photo')
            .addEventListener('click', () => this._handleCardClick());
    }

    _handleLikeClick() {
        this._element.querySelector('.pictures__item-like').classList.toggle('pictures__item-like_active');
    }

    _handleRemoveClick() {
        this._element.remove()
    }
}