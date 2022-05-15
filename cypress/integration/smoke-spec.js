import UrlPage from '../support/Pages/UrlPage'
import TextPage from '../support/Pages/TextPage'
import MainPage from '../support/Pages/MainPage'

beforeEach( () => {
    cy.resetDownloadsFile()
})

describe('Smoke tests. Generate QR codes', () => {
    it('Generate and save url qr code', () => {
        var urlPage = new UrlPage();

        urlPage.navigateToMain();
        urlPage.typeUrlText('http://google.com');
        urlPage.clickCreateQRCode();
        urlPage.clickDownloadQRCodeAndWaitIt();

        cy.checkDownloadQRCode('expected_url_qr_code.png');
    });

    it('Generate and save text qr code', () => {
        var mainPage = new MainPage();
        mainPage.navigateToMain();
        mainPage.gotoTextPage();

        var textPage = new TextPage();
        let allCharacters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        textPage.typeUrlText(allCharacters);
        textPage.clickCreateQRCode();
        textPage.clickDownloadQRCodeAndWaitIt();

        cy.checkDownloadQRCode('expected_text_qr_code.png');
    });
})
