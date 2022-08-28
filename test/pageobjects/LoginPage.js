class LoginPage {

    get email() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get sumbitButton() {

        return $('button[type="submit"]')
    }

    get logoutDropDown(){
        return $('.user-name-wrap-inner')
    }

    get logoutButton(){

        return $('#logout')
    }
    
    get loginErrorMsg(){
        return $('.ulp-input-error-message#error-element-password')
    }

    get forgotPasswordLink(){
        return $('a.ce3b5f436:nth-child(1)')
    }

    get backToCommunicatorClientButton(){
        return $('.ce3b5f436')
    }

    get editEmailButton(){
        return $('a.ce3b5f436:nth-child(2)')
    }

    get showPasswordButton(){
        return $('button.cc826122b:nth-child(4)')
    }


//Methods

    async login(email, password) {
        await this.email.setValue(email)
        await this.sumbitButton.click()
        await this.password.setValue(password)
        await this.sumbitButton.click()
        await Host.pause(3000)
    }

    async loginWithEmptyEmail(email) {
        await this.email.setValue(email)
        await this.sumbitButton.click()
        await Host.pause(3000)
    }

    async loginWithEmptyPassword(password) {
        await this.password.setValue(password)
        await this.sumbitButton.click()
        await Host.pause(3000)
    }

    async loginWithOnlyEmail(email) {
        await this.email.setValue(email)
        await this.sumbitButton.click()
        await Host.pause(3000)
    }

    async logout(){
        await Host.pause(3000)
        await this.logoutDropDown.click()
        await this.logoutButton.click()
    }

    async verifyErrorMsg(){
        const errorMsg = this.loginErrorMsg
        chaiExpect(errorMsg).to.exist;
    }

}

export default new LoginPage()