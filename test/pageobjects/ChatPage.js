class ChatPage{

    get searchBar(){
        return $('.dropdown-wrapper')

    }

    get messageBox(){
        return $('.ce-new-message _lr-hide')
    }

    get sendButton(){
        return $('.message-button-send')
    }

    get muteButton(){
        return $('#mute-person')
    }

    get pinButton(){
        return $('.pinned-icon')
    }

    async searchUser(username) {
        await this.searchBar.click()
        await this.searchBar.setValue(username)
    }


}
export default new ChatPage()