class VideoPage {

    get newMeetingButton() { return $('#new-meeting') }
    get publicMetting() { return $('#new-meeting-select') }
    get joinMeeting() { return $('#join-meeting') }
    get privateMeeting() { return $('#new-meeting-select-private') }
    get cameraID() {return $('#camera-toggle')}
    get micID() {return $('#mic-toggle')}
    get leaveCallID(){return $('#leave-call')}
    get confirmLeaveCall(){return $('#admin-leave-call-confirmed')}
    get guestName() {return $('#input[name="displayNameBV')}
    get admitParticipants() {return $('#admit-all-participants')}

    get PersonalNewMeeting() {return $('#start-meeting')}



    async startPublicMeeting() {
        await this.publicMetting.click()
        await Host.pause(2000)
        await this.joinMeeting.click()
    }

    async startPrivateMeeting() {
      await Host.pause(2000)
      await this.PersonalNewMeeting.click()
    }

}

export default new VideoPage();