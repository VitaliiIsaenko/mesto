export default class Card {
    constructor(data, selector, currentUserId, handleCardClick, cardRemoveHandler, cardLikeHandler, cardDislikeHanlder) {
        this._ownCard = currentUserId === data.owner._id;
        this._text = data.name;
        this._image = data.link;
        this._likesCount = data.likes.length;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._cardRemoveHanlder = cardRemoveHandler;
        this._cardLikeHandler = cardLikeHandler;
        this._cardDislikeHanlder = cardDislikeHanlder;

        this._isLiked = data.likes.some(l => l._id == currentUserId);
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
        this._imageElement = this._element.querySelector('.pictures__item-photo');
        this._nameElement = this._element.querySelector('.pictures__item-name');
        this._likeButton = this._element.querySelector('.pictures__item-like');
        this._removeButton = this._element.querySelector('.pictures__item-remove');
        this._likesCounter = this._element.querySelector('.pictures__item-likes-count');

        if (!this._ownCard) {
            this._removeButton.remove();
            this._removeButton = null;
        }

        if (this._isLiked) {
            this._toggleLike(this._likesCount);
        }

        this._setEventListeners();

        this._imageElement.src = this._image;
        this._imageElement.alt = this._text;
        this._nameElement.textContent = this._text
        this._likesCounter.textContent = this._likesCount;

        return this._element;
    }

    _setEventListeners() {
        this._likeButton
            .addEventListener('click', () => this._handleLikeClick());

        if (this._ownCard) {
            this._removeButton
                .addEventListener('click', () => this._handleRemoveClick());
        }

        this._imageElement
            .addEventListener('click', () => this._handleCardClick());
    }

    _handleLikeClick() {
        if (this._isLiked) {
            this._cardDislikeHanlder((likesCount) => this._toggleLike(likesCount));
        } else {
            this._cardLikeHandler((likesCount) => this._toggleLike(likesCount));
        }
        this._isLiked = !this._isLiked;
    }

    _toggleLike(newLikesCount) {
        this._likesCount = newLikesCount;
        this._likesCounter.textContent = this._likesCount;
        this._likeButton.classList.toggle('pictures__item-like_active');
    }

    _handleRemoveClick() {
        this._cardRemoveHanlder(() => this._removeElement());
    }

    _removeElement() {
        if (this._ownCard) {
            this._element.remove();
        }
    }
}