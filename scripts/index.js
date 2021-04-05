const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Profile
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = profilePopup.querySelector('.form');

const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileNameInput = profileForm.querySelector('.form__input_type_name');
const profileJobInput = profileForm.querySelector('.form__input_type_job');

// Pictures
const picturePopup = document.querySelector('.popup_type_picture');
const pictureCloseButton = picturePopup.querySelector('.popup__close');

const pictureList = document.querySelector('.pictures__list');

// Cards
const cardAddButton = profile.querySelector('.profile__add');

const cardPopup = document.querySelector('.popup_type_add-card');
const cardForm = cardPopup.querySelector('.form');

const cardCloseButton = cardPopup.querySelector('.popup__close');



function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Profile
function openProfilePopup(profileName, profileJob) {
    profileNameInput.value = profileName;
    profileJobInput.value = profileJob;
    openPopup(profilePopup);
}

function profileFormSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;

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
function cardFormSubmitHandler(evt) {
    evt.preventDefault();

    const cardNameInput = cardForm.querySelector('.form__input_type_name');
    const cardPictureLinkInput = cardForm.querySelector('.form__input_type_picture-link');

    const card = createCard(cardNameInput.value, cardPictureLinkInput.value);
    pictureList.prepend(card);

    closeCardPopup();
}

function closeCardPopup() {
    cardForm.reset();
    closePopup(cardPopup);
}

function createCard(name, photoLink) {
    const pictureTemplate = document.querySelector('#picture-template').content;
    const pictureCopy = pictureTemplate.cloneNode(true);
    const picturePhoto = pictureCopy.querySelector('.pictures__item-photo');
    const pictureName = pictureCopy.querySelector('.pictures__item-name');
    picturePhoto.src = photoLink;
    picturePhoto.alt = name;
    pictureName.textContent = name;

    const likeButton = pictureCopy.querySelector('.pictures__item-like');
    likeButton.addEventListener('click', evt => evt.target.classList.toggle('pictures__item-like_active'));

    const trashButton = pictureCopy.querySelector('.pictures__item-remove');
    trashButton.addEventListener('click', evt => evt.target.closest('.pictures__item').remove());

    const image = pictureCopy.querySelector('.pictures__item-photo');
    image.addEventListener('click', evt => {
        const pictureItem = evt.target.closest('.pictures__item');
        const link = pictureItem.querySelector('.pictures__item-photo').src;
        const name = pictureItem.querySelector('.pictures__item-name').textContent;
        openPicturePopup(name, link);
    });

    return pictureCopy;
}

function initializeCards() {
    // я думал, что вариант с созданием массива и использованием append() на массиве элементов будет эффективнее, 
    // так как перерисовка будет происходить 1 раз, а не каждый раз в цикле
    initialCards.forEach(el => {
        pictureList.append(createCard(el.name, el.link));
    });
}

// Profile
profileForm.addEventListener('submit', profileFormSubmitHandler);
profileEditButton.addEventListener('click', evt => openProfilePopup(profileName.textContent, profileJob.textContent));
profileCloseButton.addEventListener('click', _ => closePopup(profilePopup));

// Pictures
pictureCloseButton.addEventListener('click', _ => closePopup(picturePopup));

// Cards
cardForm.addEventListener('submit', cardFormSubmitHandler);
cardAddButton.addEventListener('click', _ => openPopup(cardPopup));
cardCloseButton.addEventListener('click', closeCardPopup);

initializeCards();