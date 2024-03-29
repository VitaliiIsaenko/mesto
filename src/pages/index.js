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
let pictureListSection = null;

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
        userInfo.setUserInfo(user._id, user.name, user.about, user.avatar);

        pictureListSection = new Section({
            items: cards,
            renderer: getNewCard
        }, '.pictures__list ');
        pictureListSection.render();
    })
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

function profileFormSubmitHandler({ name, about }) {
    profilePopup.renderLoading(true);
    api.patchUserInfo(name, about)
        .then(data => {
            userInfo.setUserInfo(data._id, data.name, data.about, data.avatar);
            profilePopup.close();
        })
        .catch(err => console.log(err))
        .finally(_ => {
            profilePopup.renderLoading(false);
        });
}

function avatarFormSubmitHandler({ avatar }) {
    popupAvatar.renderLoading(true);
    api.patchUserAvatar(avatar)
        .then(data => {
            userInfo.setUserInfo(data._id, data.name, data.about, data.avatar);
            popupAvatar.close();
        })
        .catch(err => console.log(err))
        .finally(_ => {
            popupAvatar.renderLoading(false);
        });
}

function cardFormSubmitHandler(cardData) {
    cardPopup.renderLoading(true);

    api.postCard(cardData.name, cardData.link)
        .then(data => {
            pictureListSection.addItem(data);
            cardPopup.close();
        })
        .catch(err => console.log(err))
        .finally(_ => {
            cardPopup.renderLoading(false);
        });
}

function getNewCard(data) {
    const card = new Card(data, '#picture-template',
        userInfo.getUserInfo().id,
        () => popupImage.open(data.name, data.link),
        (removeElement) => {
            popupConfirm.open(() => {
                popupConfirm.renderLoading(true);
                api.removeCard(data._id)
                    .then(_ => {
                        removeElement();
                        popupConfirm.close();
                    })
                    .catch(err => console.log(err))
                    .finally(_ => popupConfirm.renderLoading(false));
            });
        },
        (like) => {
            api.likeCard(data._id)
                .then(data => {
                    like(data.likes.length);
                })
                .catch(err => console.log(err));
        },
        (dislike) => {
            api.dislikeCard(data._id)
                .then(data => {
                    dislike(data.likes.length);
                })
                .catch(err => console.log(err));
        }
    ).generateCard();
    return card;
}

avatarEditButton.addEventListener('click', () => {
    popupAvatar.open();
})

profileEditButton.addEventListener('click', () => {
    profilePopup.open(userInfo.getUserInfo())
});

cardAddButton.addEventListener('click', () => cardPopup.open());