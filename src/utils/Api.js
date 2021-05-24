export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._baseUrl = options.baseUrl;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Cards fetching failed");
            })
            .then(data => {
                return data;
            })
            .catch(err => console.log(err));
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("User info fetching failed");
            })
            .then(data => {
                return {
                    "name": data.name,
                    "about": data.about,
                    "avatar": data.avatar
                };
            })
            .catch(err => console.log(err));
    }
}