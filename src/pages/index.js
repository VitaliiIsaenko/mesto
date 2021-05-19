import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import { initialCards, formValidatorSettings } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import './index.css';

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const cardAddButton = profile.querySelector('.profile__add');

const userInfo = new UserInfo('.profile__name', '.profile__about');

const cardPopup = new PopupWithForm('.popup_type_add-card', cardFormSubmitHandler);
cardPopup.setEventListeners();
cardPopup.setFormValidator(new FormValidator(formValidatorSettings));

const profilePopup = new PopupWithForm('.popup_type_edit-profile', profileFormSubmitHandler);
profilePopup.setEventListeners();
profilePopup.setFormValidator(new FormValidator(formValidatorSettings));

const popupImage = new PopupWithImage('.popup_type_picture');
popupImage.setEventListeners();

let pictureListSection = new Section({
    items: initialCards,
    renderer: (el) => getNewCard(el.name, el.link)
}, '.pictures__list ');
pictureListSection.render();

function profileFormSubmitHandler({ name, about }) {
    userInfo.setUserInfo(name, about);
    profilePopup.close();
}

function cardFormSubmitHandler({ name, link }) {
    pictureListSection.addItem({ name: name, link: link });
    cardPopup.close();
}

function getNewCard(name, link) {
    let card = new Card({ name, link }, '#picture-template',
        () => popupImage.open(name, link)).generateCard();
    return card;
}

profileEditButton.addEventListener('click', () => {
    profilePopup.setFormValues(userInfo.getUserInfo());
    profilePopup.open()
});

cardAddButton.addEventListener('click', () => cardPopup.open());