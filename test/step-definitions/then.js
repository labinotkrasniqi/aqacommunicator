import { Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage'
import VideoPage from '../pageobjects/VideoPage'

//User login
Then(/^I should be logged in$/, async () => {
    await Host.pause(2000)
    await expect(Host).toHaveUrlContaining("chat/conversations")

});

Then(/^Login is unsucessful$/, async () => {
    await LoginPage.verifyErrorMsg()
});


// User logout
Then(/^I should be on the logging page$/, async() =>{
    expect(Host).toHaveUrlContaining('login');
})

//Private meeting
Then(/^The private video call should start$/, async () => {
    const element =  await $('#camera-toggle');
    chaiExpect(element).to.exist; 
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





