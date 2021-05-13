export default class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.value,
            about: this._aboutElement.value
        };
    }

    setUserInfo(name, about) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
    }
}