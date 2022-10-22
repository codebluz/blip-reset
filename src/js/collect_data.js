export default class CollectData {
    static idUser() {
        const idUser = document.querySelector('#contact-id').value;
        return idUser;
    }
    static botKey() {
        const botKey = document.querySelector('#key-select').value;
        return botKey;
    }
}
