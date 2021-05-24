import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from "../components/UserInfo.js";
import { formValidatorSettings } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import './index.css';
import Api from "../utils/Api.js";
import PopupWithSubmit from '../components/PopupWithSubmit.js';

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
const avatarEditButton = profile.querySelector('.profile__avatar-edit');

const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar');
api.getUserInfo().then(result => userInfo.setUserInfo(result._id, result.name, result.about, result.avatar))
    .catch(err => console.log(err));

const cardPopup = new PopupWithForm('.popup_type_add-card', cardFormSubmitHandler);
cardPopup.setEventListeners();
cardPopup.setFormValidator(new FormValidator(formValidatorSettings, cardPopup.getForm()));

const profilePopup = new PopupWithForm('.popup_type_edit-profile', profileFormSubmitHandler);
profilePopup.setEventListeners();
profilePopup.setFormValidator(new FormValidator(formValidatorSettings, profilePopup.getForm()));

const popupImage = new PopupWithImage('.popup_type_picture');
popupImage.setEventListeners();

const popupConfirm = new PopupWithSubmit('.popup_type_approve');
popupConfirm.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', avatarFormSubmitHandler);
popupAvatar.setEventListeners();
popupAvatar.setFormValidator(new FormValidator(formValidatorSettings, popupAvatar.getForm()));

let pictureListSection = null;

api.getInitialCards().then(cards => {
        pictureListSection = new Section({
            items: cards,
            renderer: (el) => getNewCard(el)
        }, '.pictures__list ');
        pictureListSection.render();
    })
    .catch(err => console.log(err));

function profileFormSubmitHandler({ name, about }) {
    profilePopup.renderLoading(true);
    api.patchUserInfo(name, about)
        .then(data => userInfo.setUserInfo(data._id, data.name, data.about, data.avatar))
        .finally(_ => {
            profilePopup.renderLoading(false);
            profilePopup.close();
        });
}

function avatarFormSubmitHandler({ avatar }) {
    popupAvatar.renderLoading(true);
    api.patchUserAvatar(avatar)
        .then(data => userInfo.setUserInfo(data._id, data.name, data.about, data.avatar))
        .finally(_ => {
            popupAvatar.renderLoading(false);
            popupAvatar.close();
        });
}

function cardFormSubmitHandler(cardData) {
    cardPopup.renderLoading(true);

    api.postCard(cardData.name, cardData.link)
        .then(data => pictureListSection.addItem(data))
        .catch(err => console.log(err))
        .finally(_ => {
            cardPopup.renderLoading(false);
            cardPopup.close();
        });
}

function getNewCard(data) {
    const card = new Card(data, '#picture-template',
        userInfo.getUserInfo().id,
        () => popupImage.open(data.name, data.link),
        (removeElement) => {
            popupConfirm.open(() => {
                api.removeCard(data._id)
                    .then(_ => {
                        removeElement();
                    });
            });
        },
        (like) => {
            api.likeCard(data._id)
                .then(data => {
                    like(data.likes.length);
                });
        },
        (dislike) => {
            api.dislikeCard(data._id)
                .then(data => {
                    dislike(data.likes.length);
                });
        }
    ).generateCard();
    return card;
}

avatarEditButton.addEventListener('click', () => {
    popupAvatar.open(userInfo.getUserInfo());
})

profileEditButton.addEventListener('click', () => {
    profilePopup.open(userInfo.getUserInfo())
});

cardAddButton.addEventListener('click', () => cardPopup.open());