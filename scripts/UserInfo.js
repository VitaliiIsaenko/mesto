export default class UserInfo {
    constructor(nameSelector, aboutSelector) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
    }

    getUserInfo() {

        let result = {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent
        };

        // Object.entries(result)
        // .forEach((k, v) => {
        // console.log(k);
        // console.log(v);
        // });
        return result;

    }

    setUserInfo(name, about) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
    }
}