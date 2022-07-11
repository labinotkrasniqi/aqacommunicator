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
        return $('#error-element-password')
    }




//Methods

    async login(email, password) {
        await this.email.setValue(email)
        await this.sumbitButton.click()
        await this.password.setValue(password)
        await this.sumbitButton.click()
        await Host.pause(3000)
    }

    
    async logout(){
        await Host.pause(3000)
        await this.logoutDropDown.click()
        await this.logoutButton.click()
    }

    async verifyErrorMsg(){
        const errorMsg = this.loginErrorMsg.getText()
        await expect(errorMsg).toHaveText('Wrong username1 or password')
    }

}

export default new LoginPage()