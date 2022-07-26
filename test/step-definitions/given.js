import { Given } from '@cucumber/cucumber';
import VideoPage from '../pageobjects/VideoPage'
import ChatPage from '../pageobjects/ChatPage'
import DirectoryPage from '../pageobjects/DirectoryPage'

//Close all browsers
Given(/^I close all windows$/, async () => {
    await browser.closeWindow()
    await Host.pause(3000)
});

Given(/^I switch to the default window$/, async () => {
    const handles = browser.getWindowHandles();
    if (handles.length > 1) {
        browser.switchToWindow(handles[1]);
        browser.closeWindow();
        browser.switchToWindow(handles[0]);
    }
});

//User login
Given(/^I'm on the login page$/, async () => {
    await Host.url('https://chat.staging.broadvoice.io/')
});

//User login
Given(/^I refresh the page$/, async () => {
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

//Directory page
Given(/^I am on directory page$/, async () => {
    await ChatPage.directoryButton.click();
})

Given(/^I navigate to directory page$/, async () => {
    await ChatPage.navigateToChatPage()
    await ChatPage.navigateToDirectoryPage()
})


Given(/^I search for user$/, async()=>{
    await ChatPage.searchUser("Chat Automation 2");
})

Given(/^I am on the chat page$/, async()=>{
    await Host.pause(10000)
    await ChatPage.searchBar.click();
    await Host.pause(4000)
    browser.keys('Chat Automation 2')
    await Host.pause(7000)
    await ChatPage.displayedResult.click();
    await Host.pause(5000)
    await ChatPage.messageBoxIsDisplayed();
});

Given(/^I am on a group chat page$/, async()=>{
    await Host.pause(5000)
    await ChatPage.searchBar.click();
    await Host.pause(4000)
    browser.keys('group')
    await ChatPage.displayedResult.click();
    await Host.pause(5000)
    await ChatPage.messageBoxIsDisplayed();
});