class ChatPage{

    mutedIconImage = '/1f742eff2b40520e537bd68ac208c5aa.svg'

    unmutedIconImage = '/03fb6287d1b21094ecbb0a9cfd63ab89.svg'

    get searchBar(){
        return $('div.default.text')
    }

    get messageBox(){
        return $('.ce-new-message')
    }

    get sendButton(){
        return $('.message-button-send')
    }

    get muteButton(){
        return $('#mute-person')
    }

    get pinButton(){
        return $('#pinned-button')
    }

    get closePinnedMessagesButton(){
        return $('div.header > img')
    }

    get pinnedMessagesDrawer() {
        return $('.pinned-sidebar')
    }

    get pinnedMessagesDrawerHeader() {
        return $('div.header > div')
    }

    get conversationContainer() {
        return $('.context-content-items-list')
    }

    get muteButton() {
        return $('#mute-person')
    }

    async searchUser(username) {
        await this.searchBar.click()
        await this.searchBar.setValue(username)
    }

    async typeMessage(text) {
        await this.messageBox.setValue(text)
    }

    async messageBoxIsDisplayed() {
        await this.messageBox.isDisplayed()
    }

    async sendMessage() {
        await this.sendButton.click()
    }

}
export default new ChatPage()