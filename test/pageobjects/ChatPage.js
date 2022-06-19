class ChatPage{

    mutedIconImage = '/1f742eff2b40520e537bd68ac208c5aa.svg'

    unmutedIconImage = '/03fb6287d1b21094ecbb0a9cfd63ab89.svg'

    favoriteIconImage = '/aa13d30453972fb8c7684f8404575d74.svg'

    unfavoriteIconImage = '/1f29ab476a44be2f15b39c26b98c69d2.svg'

    url = 'https://wwww.labinot.com'

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

    get muteGroupButton(){
        return $('.inline-block > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button')
    }

    get pinButton(){
        return $('#pinned-button')
    }

    get favoriteButton(){
        return $('#add-person-favorites')
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

    get sentLink() {
        return $(`//*[contains(text(),${this.url})]`)
    }

    get fileUploadField() {
        return $('#embedpollfileinput');
    }

    get chatHeader() {
        return $('.channel-header-topic');
    }

    get searchDropdown() {
        return $('i.dropdown')
    }

    get sentMessage() {
        return $('#ccig_2022-06-19 > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div')
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

    async hoverMessage(message) {
        await message.moveTo();
    }

    async selectSavedGroup() {
        await this.searchDropdown.click()
        await $('div.visible:nth-child(5) > div:nth-child(2) > div').click()
    }

}
export default new ChatPage()