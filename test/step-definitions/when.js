import { When } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage'
import VideoPage from '../pageobjects/VideoPage'
import ChatPage from '../pageobjects/ChatPage'
import DirectoryPage from '../pageobjects/DirectoryPage'

const path = require('path');
const randomPassword = '334344443';
function randomEmail() {
    const username = Math.floor(Math.random() * 100000)
    return (username + '@gmail.com')
}

//User login
When(/^I log in with a test user$/, async () => {
    await LoginPage.login('labinnot.krasniqi+chata1@gmail.com','Cookiemaster!234')
});

When(/^I log in with a test user with invalid credentials$/, async() => {
    await LoginPage.login(randomEmail(), randomPassword)
});

When(/^I enter a password$/, async() => {
    await LoginPage.password.setValue(randomPassword);
}); 

When(/^I log in with empty username$/, async() => {
    await LoginPage.loginWithEmptyEmail('')
}); 

When(/^I log in with empty password$/, async() => {
    await LoginPage.loginWithEmptyPassword('')
}); 

When(/^I proceed with only username$/, async() => {
    await LoginPage.loginWithOnlyEmail('kosovo@aqacom.com')
}); 

When(/^I click the forgot password link$/, async() => {
    await LoginPage.forgotPasswordLink.click();
}); 

When(/^I click the hide\/show password button$/, async() => {
    chaiExpect(LoginPage.showPasswordButton).to.exist;
    await LoginPage.showPasswordButton.click();
});

When(/^I click back to communicator client button$/, async() => {
    await LoginPage.backToCommunicatorClientButton.click();
});

When(/^I log in with Chat1$/, async() =>{
    await LoginPage.login('labinnot.krasniqi+chata1@gmail.com','Cookiemaster!234')
})

When(/^I log in with Chat2$/, async() =>{
    await LoginPage.login('labinnot.krasniqi+chata2@gmail.com','Cookiemaster!234')
})

//User logout
When(/^User logs out$/, async() =>{
    await LoginPage.logout()
    await Host.pause(3000)
})


//Private meeting
When(/^I choose private call$/, async () => {
    await VideoPage.startPrivateMeeting()
    await Host.pause(15000)
    await Host.switchWindow("https://staging.broadvoice.io/video/Chat.Automation1")
    await Host.pause(2000)
    await $("//button[contains(text(),'Accept')]").click()
    await VideoPage.joinMeeting.click()

})

//Turning camera/mic on and off on the call

When(/^I click on the camera button$/,async()=>{
    await VideoPage.cameraID.click()
})

When(/^I click on my microphone$/, async() =>{
    await VideoPage.micID.click()
    await Host.pause(1000)
});

When(/^I make a voice call to a contact in my directory$/, async() =>{
    await Host.pause(5000)
    await DirectoryPage.firstCallButton.click()
});

When(/^I make a video call to a contact in my directory$/, async() =>{
    await Host.pause(5000)
    await DirectoryPage.firstVideoCallButton.click()
    await Host.pause(5000)
});


When(/^I type a message$/, async()=>{
    await ChatPage.typeMessage("someone");
})

When(/^I send a message$/, async()=>{
    await ChatPage.sendMessage();
})

When(/^I send an emoji$/, async()=>{
    await ChatPage.messageBox.click()
    browser.keys('🤖')
    await ChatPage.sendMessage();
})

When(/^I click the mute button$/, async()=>{
    await ChatPage.muteButton.click();
})

When(/^I click the mute group button$/, async()=>{
    await ChatPage.muteGroupButton.click();
})

When(/^I click the view pinned messages button$/, async()=>{
    await ChatPage.pinButton.click();
})

When(/^I click the close button on the pinned messages drawer$/, async()=>{
    await ChatPage.closePinnedMessagesButton.click();
})

When(/^I send a url message$/, async()=>{
    await ChatPage.typeMessage(ChatPage.url);
    await ChatPage.sendMessage();
})

When(/^I upload and send a file$/, async()=>{
    const filePath = 'test/files/imgg.jpg'
    const remoteFilePath = await browser.uploadFile(filePath)
    await ChatPage.fileUploadField.setValue(remoteFilePath);
    await Host.pause(3000)
    await ChatPage.sendMessage();
})

When(/^I hover over a message$/, async()=>{
    const message = '/html/body/div[1]/div/div[2]/div[4]/div[3]/div/div[12]/div/div[12]'
    await $(message).scrollIntoView();
    await $(message).moveTo()
    await Host.pause(1000000).saveScreenshot();
})

When(/^I click the favorite button$/, async()=>{
    await ChatPage.favoriteButton.click();
})

When(/^I un-pin a pinned message$/, async()=>{
    const pinnedCount = await ChatPage.pinnedMessagesCountDisplayed
    if (pinnedCount > 0) {
        await ChatPage.unpinMessageFromDrawerButton.click();
    }
})

When(/^I click to view a pinned message$/, async()=>{
    await ChatPage.viewFirstPinnedMessage.click();
})

When(/^I message Chat1 user$/, async()=>{
    await ChatPage.messageUser('Chat Automation 1', ChatPage.chatMessage);
})

When(/^I message Chat2 user$/, async()=>{
    await ChatPage.messageUser('Chat Automation 2', ChatPage.chatMessage);
})

When(/^I find the recipient$/, async()=>{
    await ChatPage.findUser('Chat Automation 1');
})
