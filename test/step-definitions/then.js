import { Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage'
import VideoPage from '../pageobjects/VideoPage'
import ChatPage from '../pageobjects/ChatPage'
import DirectoryPage from '../pageobjects/DirectoryPage'

//User login
Then(/^I should be logged in$/, async () => {
    await Host.pause(2000)
    await expect(Host).toHaveUrlContaining('chat')
});

Then(/^I should see an invalid password error$/, async () => {
    await LoginPage.verifyErrorMsg()
});


// User logout
Then(/^I should be on the login page$/, async() =>{
    await expect(Host).toHaveUrlContaining('login');
})

//Private meeting
Then(/^The private video call should start$/, async () => {
    const element =  await $('#camera-toggle');
    chaiExpect(element).to.exist; 
})

Then(/^The call should be successful$/, async () => {
    chaiExpect(DirectoryPage.activeCallWrapper).to.exist;
    await Host.pause(5000)
    DirectoryPage.endCallButton.click()
})

Then(/^A new tab should be created for the call$/, async () => {
    await Host.pause(5000)
    browser.switchWindow('B-hive Video')
    await expect(Host).toHaveUrlContaining('video');
})

//Turning camera on and off on the call
Then(/^The camera should turn off$/,async()=>{
    await Host.pause(2000)
    const verifyText = await $("//div[contains(text(),'You')]").getText()
    expect(verifyText).toHaveTextContaining("Camera is turned off")
})

//Turning camera on/off and off on the looby
Then(/^The camera should change state$/, async() =>{
    await Host.pause(2000)
    const verifyText = await $("//div[contains(text(),'Camera is turned off')]").getText()
    expect(verifyText).toHaveTextContaining("Camera is turned off")
})

Then(/^The microphone should change state$/, async() =>{
    chaiExpect(VideoPage.micID).to.exist; 
    await VideoPage.micID.click()
});

Then(/^I should see the typed message$/, async() =>{
    expect(ChatPage.messageBox).toHaveValue('someone', { ignoreCase: true })
});

Then(/^I should see sent message in the chat history$/, async() =>{
    expect(ChatPage.conversationContainer).toHaveTextContaining('someone')
    expect(ChatPage.messageBox).toHaveValue('', { ignoreCase: true })
});

Then(/^The user should appear muted$/, async() =>{
    expect(ChatPage.muteButton).toHaveAttribute('src', ChatPage.mutedIconImage)
});

Then(/^The group should appear unmuted$/, async() =>{
    expect(ChatPage.muteGroupButton).toHaveAttribute('src', ChatPage.unmutedIconImage)
});

Then(/^The group should appear muted$/, async() =>{
    expect(ChatPage.muteGroupButton).toHaveAttribute('src', ChatPage.mutedIconImage)
});

Then(/^The user should appear unmuted$/, async() =>{
    expect(ChatPage.muteButton).toHaveAttribute('src', ChatPage.unmutedIconImage)
});

Then(/^I should see the pinned messages drawer$/, async() =>{
    chaiExpect(ChatPage.pinnedMessagesDrawer).to.exist
});

Then(/^I should not see pinned messages$/, async() =>{
    expect(ChatPage.pinnedMessagesDrawerHeader).to.be.null
});

Then(/^The url should open on a new page$/, async() =>{
    expect(ChatPage.sentLink).toHaveAttribute('target', '_blank')
});

Then(/^I should see sent emoji in the chat history$/, async() =>{
    expect(ChatPage.conversationContainer).toHaveTextContaining('🤖')
    expect(ChatPage.messageBox).toHaveValue('', { ignoreCase: true })
});

Then(/^I should see sent file in the chat history$/, async() =>{
    expect(ChatPage.conversationContainer).toHaveTextContaining('imgg.jpg')
    expect(ChatPage.messageBox).toHaveValue('', { ignoreCase: true })
});

Then(/^The user should appear favorited$/, async() =>{
    expect(ChatPage.favoriteButton).toHaveAttribute('src', ChatPage.favoriteIconImage)
});

Then(/^The user should appear unfavorited$/, async() =>{
    expect(ChatPage.favoriteButton).toHaveAttribute('src', ChatPage.unfavoriteIconImage)
});

Then(/^I should see clicked message in the chat history$/, async() =>{
    expect(ChatPage.conversationContainer).toHaveTextContaining(ChatPage.firstPinnedMessageText.getText())
});

Then(/^I should see my sent message in chat history$/, async() =>{
    expect(ChatPage.conversationContainer).toHaveTextContaining(ChatPage.chatMessage)
});

Then(/^I should be on the reset password page$/, async() =>{
    await expect(Host).toHaveUrlContaining('reset-password');
});

Then(/^I should see the edit email button$/, async() =>{
    chaiExpect(LoginPage.editEmailButton).to.exist;
});

Then(/^Password should be visible$/, async() =>{
    expect(LoginPage.password).toHaveAttribute('type', 'text')
});

Then(/^Password should be hidden$/, async() =>{
    expect(LoginPage.password).toHaveAttribute('type', 'password')
});

Then(/^The email field should be read only$/, async() =>{
    expect(LoginPage.email).toHaveAttribute('readonly', '')
});

Then(/^I should be on the password page$/, async() =>{
    expect(LoginPage.password).toExist()
});
