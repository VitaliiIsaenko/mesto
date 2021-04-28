import Card from './Card.js';
import FormValidator from './FormValidator.js';
import InitialCards from './InitialCards.js';

// Profile
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = profilePopup.querySelector('.form');

const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileNameInput = profileForm.querySelector('.form__input_type_profile-name');
const profileAboutInput = profileForm.querySelector('.form__input_type_about');

// Pictures
const picturePopup = document.querySelector('.popup_type_picture');
const pictureCloseButton = picturePopup.querySelector('.popup__close');

const pictureList = document.querySelector('.pictures__list');

// Cards
const cardAddButton = profile.querySelector('.profile__add');

const cardPopup = document.querySelector('.popup_type_add-card');
const cardForm = cardPopup.querySelector('.form');

const cardNameInput = cardForm.querySelector('.form__input_type_card-name');
const cardPictureLinkInput = cardForm.querySelector('.form__input_type_picture-link');

const cardCloseButton = cardPopup.querySelector('.popup__close');

// Popups
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.openedPopup = popup;
    document.addEventListener('keydown', closePopupOnEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEscape);
}

function closePopupOnEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(evt.currentTarget.openedPopup);
    }
}

// Profile
function openProfilePopup(profileName, profileAbout) {
    profileNameInput.value = profileName;
    profileAboutInput.value = profileAbout;

    profileNameInput.dispatchEvent(new Event('input'));
    profileAboutInput.dispatchEvent(new Event('input'));

    openPopup(profilePopup);
}

function profileFormSubmitHandler(evt) {
    profileName.textContent = profileNameInput.value;
    profileAbout.textContent = profileAboutInput.value;

    closePopup(profilePopup);
}

// Pictures
function openPicturePopup(name, link) {
    const popupCaption = picturePopup.querySelector('.popup__image-caption');
    popupCaption.textContent = name;

    const popupImage = picturePopup.querySelector('.popup__image');
    popupImage.src = link;
    popupImage.alt = name;

    openPopup(picturePopup);
}

// Cards
function cardFormSubmitHandler() {
    const card = getNewCard(cardNameInput.value, cardPictureLinkInput.value);
    pictureList.prepend(card);

    cardForm.reset();
    addCardFormValidator.toggleButtonState();

    closePopup(cardPopup);
}

function getNewCard(name, link) {
    return new Card({ name, link }, '#picture-template',
        () => openPicturePopup(name, link)).generateCard();
}

const formValidatorSettings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

const profileValidator = new FormValidator(formValidatorSettings, profileForm);
profileValidator.enableValidation();

const addCardFormValidator = new FormValidator(formValidatorSettings, cardForm)
addCardFormValidator.enableValidation();

// Profile
profileForm.addEventListener('submit', profileFormSubmitHandler);
profileEditButton.addEventListener('click', () => openProfilePopup(profileName.textContent, profileAbout.textContent));
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));

// Pictures
pictureCloseButton.addEventListener('click', () => closePopup(picturePopup));

// Cards
cardForm.addEventListener('submit', cardFormSubmitHandler);
cardAddButton.addEventListener('click', () => openPopup(cardPopup));
cardCloseButton.addEventListener('click', () => closePopup(cardPopup));

// Popups
Array.from(document.querySelectorAll('.popup')).forEach(function(popup) {
    popup.addEventListener('click', function(evt) {
        if (evt.target === popup) {
            closePopup(popup);
        }
    });
});

function initializeCards(cards, container) {
    cards.forEach(el => {
        container.append(getNewCard(el.name, el.link));
    });
}

initializeCards(InitialCards, pictureList);