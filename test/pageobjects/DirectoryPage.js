class DirectoryPage{

    get firstCallButton () {
        return $('div.four:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button')
    }

    get firstVideoCallButton () {
        return $('div.four:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > button')
    }

    get activeCallWrapper () {
        return $('.call-active-wrapper')
    }

    get endCallButton () {
        return $('div.btn-wrapper:nth-child(7)')
    }

}
export default new DirectoryPage()
