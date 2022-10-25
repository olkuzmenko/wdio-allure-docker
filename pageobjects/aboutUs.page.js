class AboutUsPage{
    get seeTheBrandLink () {
        return $('a[title="Telnyx Brand"]');
    }

    get downloadSetLink () {
        return $('main a[class="mchNoDecorate"]')
    }

    async clickSeeTheBrandLink() {
        await this.seeTheBrandLink.scrollIntoView()
        await this.seeTheBrandLink.click()
    }

    async clickDownloadSetLink() {
        await this.downloadSetLink.scrollIntoView()
        await this.downloadSetLink.click()
    }
}

module.exports = new AboutUsPage();