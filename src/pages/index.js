import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupImage from '../components/PopupImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../constants.js";
import './index.css';

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const cardAddButton = profile.querySelector('.profile__add');

const userInfo = new UserInfo('.profile__name', '.profile__about');

const cardPopup = new PopupWithForm('.popup_type_add-card', cardFormSubmitHandler);
cardPopup.setEventListeners();

const profilePopup = new PopupWithForm('.popup_type_edit-profile', profileFormSubmitHandler);
profilePopup.setEventListeners();

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
    let popupImage = new PopupImage('.popup_type_picture', name, link);
    popupImage.setEventListeners();

    let card = new Card({ name, link }, '#picture-template',
        () => popupImage.open()).generateCard();
    return card;
}

profileEditButton.addEventListener('click', () => {
    profilePopup.setFormValues(userInfo.getUserInfo());
    profilePopup.open()
});

cardAddButton.addEventListener('click', () => cardPopup.open());