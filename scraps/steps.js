import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage'
import VideoPage from '../pageobjects/VideoPage'






















When(/^I click the new meeting button$/, async () => {
      await VideoPage.newMeetingButton.click()

});

When(/^I choose public call$/, async () => {
      await VideoPage.startPublicMeeting()
})

Then(/^The public video call should start$/, async () => {

      await expect (VideoPage.cameraID).toExist();
})

//Leaving a call
When(/^I click on leave call button$/,async()=>{
      await Host.pause(3000)
      await VideoPage.leaveCallID.click()
      await Host.pause(1000)
})
When(/^I choose leave call$/,async()=>{
      await VideoPage.confirmLeaveCall.click()
})

Then(/^The call should end$/,async()=>{
      Host.pause(2000)
      const leaveMessage = await $("//h2[contains(text(),'You left the meeting')]").getText()
      expect(leaveMessage).toHaveTextContaining("You left the meeting")
})











//Join a meeting 

When(/^User A starts the call$/, async()=>{
      await Host.url("https://staging.broadvoice.io/video/login/")
      await Host.$("//button[contains(text(),'Accept')]").click()
      await Host.$('input[name="email"]').setValue('qa@poviolabs.com')
      await Host.$('input[name="password"]').setValue('Test123')
      await Host.$('button[type="submit"]').click()
      await Host.pause(1000)
      await Host.$('#new-meeting').click()
      await Host.$('#new-meeting-select').click()
      await Host.pause(2000)
      await Host.$('#join-meeting').click()
     
     

})

When(/^User B requests to join the call$/, async()=>{
      const hostUrl= await Host.getUrl()
      await Guest.url(hostUrl)
      await Guest.$("//button[contains(text(),'Accept')]").click()
      await Guest.pause(2000)
      await Guest.$('input[name="displayNameBV"]').setValue("Guest1")
      await Guest.$('#join-meeting-guest').click()

})

Then(/^User A allows user B to enter their meeting$/, async()=>{
     await Host.pause(2000)
     const checkGuest = await Host.$("//div[contains(text(),'Guest1 (guest)')]").getText()
     expect(checkGuest).to.contain("Guest1 (guest)")
     await Host.$('#admit-all-participants').click()

})


When(/^User starts the call$/, async()=>{
      await Host.url("https://staging.broadvoice.io/video/")
      // await Host.$("//button[contains(text(),'Accept')]").click()
      // await Host.$('input[name="email"]').setValue('qa@poviolabs.com')
      // await Host.$('input[name="password"]').setValue('Test123')
      // await Host.$('button[type="submit"]').click()
      await Host.pause(1000)
      await Host.$('#new-meeting').click()
      await Host.$('#new-meeting-select').click()
      await Host.pause(2000)
      await Host.$('#join-meeting').click()
     
     

})

When(/^Guest tries to join the call$/, async()=>{
      const hostUrl= await Host.getUrl()
      await Guest.url(hostUrl)
      await Guest.pause(2000)
      await Guest.$('input[name="displayNameBV"]').setValue("Guest1")
      await Guest.$('#join-meeting-guest').click()

})

Then(/^User rejects guest user from entering their meeting$/, async()=>{
     await Host.pause(2000)
     const checkGuest = await Host.$("//div[contains(text(),'Guest1 (guest)')]").getText()
     expect(checkGuest).to.contain("Guest1 (guest)")
     await Host.$('#reject-all-participants').click()

     const rejectMessage = await Guest.$("//h4[contains(text(),'Sorry you were denied access to the meeting.')]").getText()
     expect(rejectMessage).to.contain("Sorry you were denied access to the meeting.")

})