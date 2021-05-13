import Card from './Card.js';
import FormValidator from './FormValidator.js';
import InitialCards from './InitialCards.js';
import Section from './Section.js';
import PopupImage from './PopupImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from "./UserInfo.js";

// Profile
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const cardAddButton = profile.querySelector('.profile__add');

function profileFormSubmitHandler({ name, about }) {
    userInfo.setUserInfo(name, about);
    profilePopup.close();
}

// Cards
function cardFormSubmitHandler({ name, link }) {
    pictureListSection.addItem({ name: name, link: link });
    cardPopup.close();
}

const userInfo = new UserInfo('.profile__name', '.profile__about');

const cardPopup = new PopupWithForm('.popup_type_add-card',
    cardFormSubmitHandler);
cardPopup.setEventListeners();

const profilePopup = new PopupWithForm('.popup_type_edit-profile',
    profileFormSubmitHandler);
profilePopup.setEventListeners();

function getNewCard(name, link) {
    let popupImage = new PopupImage('.popup_type_picture', name, link);
    popupImage.setEventListeners();
    let card = new Card({ name, link }, '#picture-template',
        () => popupImage.open()).generateCard();
    return card;
}

const formValidatorSettings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

const profileValidator = new FormValidator(formValidatorSettings, profilePopup.form);
profilePopup.setValidator(profileValidator);
profileValidator.enableValidation();

const addCardFormValidator = new FormValidator(formValidatorSettings, cardPopup.form)
cardPopup.setValidator(addCardFormValidator);
addCardFormValidator.enableValidation();

profileEditButton.addEventListener('click', () => {
    profilePopup.setValues(userInfo.getUserInfo());
    profilePopup.open()
});
cardAddButton.addEventListener('click', () => cardPopup.open());

let pictureListSection = new Section({
    items: InitialCards,
    renderer: (el) => {
        return getNewCard(el.name, el.link);
    }
}, '.pictures__list ');
pictureListSection.render();