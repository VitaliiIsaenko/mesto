import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import { formValidatorSettings } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import './index.css';
import Api from "../utils/Api.js";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: '95c85b95-3cb8-4962-9069-374e5b282358',
        'Content-Type': 'application/json'
    }
})

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const cardAddButton = profile.querySelector('.profile__add');

const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar');
api.getUserInfo().then(result => userInfo.setUserInfo(result.name, result.about, result.avatar))
    .catch(err => console.log(err));

const cardPopup = new PopupWithForm('.popup_type_add-card', cardFormSubmitHandler);
cardPopup.setEventListeners();
cardPopup.setFormValidator(new FormValidator(formValidatorSettings, cardPopup.getForm()));

const profilePopup = new PopupWithForm('.popup_type_edit-profile', profileFormSubmitHandler);
profilePopup.setEventListeners();
profilePopup.setFormValidator(new FormValidator(formValidatorSettings, profilePopup.getForm()));

const popupImage = new PopupWithImage('.popup_type_picture');
popupImage.setEventListeners();

let pictureListSection = null;

api.getInitialCards().then(cards => {
        cards.forEach(c => c.likesCount = c.likes.length);
        console.log(cards);
        pictureListSection = new Section({
            items: cards,
            renderer: (el) => getNewCard(el)
        }, '.pictures__list ');
        pictureListSection.render();
    })
    .catch(err => console.log(err));

function profileFormSubmitHandler({ name, about }) {
    api.patchUserInfo(name, about)
        .then(_ => userInfo.setUserInfo(name, about))
        .catch(err => console.log(err))
        .finally(_ => profilePopup.close());
}

function cardFormSubmitHandler(cardData) {
    api.postCard(cardData.name, cardData.link)
        .then(_ => pictureListSection.addItem(cardData))
        .catch(err => console.log(err))
        .finally(_ => cardPopup.close());


}

function getNewCard(data) {
    console.log(data);
    const card = new Card(data, '#picture-template',
        () => popupImage.open(data.name, data.link)).generateCard();
    return card;
}

profileEditButton.addEventListener('click', () => {
    profilePopup.open(userInfo.getUserInfo())
});

cardAddButton.addEventListener('click', () => cardPopup.open());