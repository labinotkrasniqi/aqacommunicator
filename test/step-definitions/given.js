import { Given } from '@cucumber/cucumber';
import VideoPage from '../pageobjects/VideoPage'
import ChatPage from '../pageobjects/ChatPage'


//User login
Given(/^I'm on the login page$/, async () => {
    await Host.url('https://chat.staging.broadvoice.io/')

});



// User logout
Given(/^I am logged In$/, async() =>{ 
    await Host.url('https://chat.staging.broadvoice.io/')
});



// Turning off mic and camera
Given(/^I am in the looby-camera$/, async() =>{
    await Host.url('https://chat.staging.broadvoice.io/video-app/room')
    await VideoPage.startPrivateMeeting()
});


//Private meeting
Given(/^I am on start meeting page$/, async () => {
    await Host.url('https://chat.staging.broadvoice.io/video-app/room')

})

//Turning camera on and off on the call
Given(/^I am already on the call$/,async()=>{
    await expect(Host).toHaveUrlContaining("https://staging.broadvoice.io/video/Chat.Automation1")
})


// Turning off mic and camera on the looby
Given(/^I am in the looby$/, async() =>{
    await Host.url('https://chat.staging.broadvoice.io/video-app/room')
    await VideoPage.startPrivateMeeting()
    await Host.pause(10000)
    await Host.switchWindow("https://staging.broadvoice.io/video/Chat.Automation1")
});


Given(/^I search for user$/, async()=>{
    await ChatPage.searchUser("Chat Automation 2");
})

Given(/^I am on the chat page$/, async()=>{
    await ChatPage.messageBoxIsDisplayed();
});

Given(/^I am on a group chat page$/, async()=>{
    await ChatPage.selectSavedGroup();
    expect(ChatPage.chatHeader).toHaveText('group_test2');
});