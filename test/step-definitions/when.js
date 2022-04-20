import {When} from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage'
import VideoPage from '../pageobjects/VideoPage'
import ChatPage from '../pageobjects/ChatPage'


//User login
When(/^I log in with a test user$/, async () => {
    await LoginPage.login('labinnot.krasniqi+chata1@gmail.com','Cookiemaster!234')
});

When(/^I log in with a test user with invalid credentials$/, async() => {
    await LoginPage.login('qa@poviolabs1.com','RandomPassword')
});

When(/^I log in with Chat1$/, async() =>{
    await LoginPage.login('labinnot.krasniqi+chata1@gmail.com','Cookiemaster!234')
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

When(/^I type a message$/, async()=>{
    await ChatPage.typeMessage("someone");
})

When(/^I send a message$/, async()=>{
    await ChatPage.sendMessage();
})

When(/^I click the mute button$/, async()=>{
    await ChatPage.muteButton.click();
})

When(/^I click the view pinned messages button$/, async()=>{
    await ChatPage.pinButton.click();
})

When(/^I click the close button on the pinned messages drawer$/, async()=>{
    await ChatPage.closePinnedMessagesButton.click();
})