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
        
        let testUrl = 'https://www.google.com/search?q=bitly.com&rlz=1C1GCEA_enRU958RU958&sxsrf' 
                + '=ALiCzsb7Vy9edULuGHogL2mr1651npRzRg%3A1652636847180&ei=rzyBYovZCsX1qwG8iJFQ&ved=0' 
                + 'ahUKEwjL7N-BiOL3AhXF-ioKHTxEBAoQ4dUDCA4&uact=5&oq=bitly.com&gs_lcp=Cgdnd3Mtd2l6EAM'
                + 'yBAgjECcyCwguEMcBENEDEJECMgUIABCABDIFCAAQkQIyBQgAEJECMgUIABCABDIFCAAQgAQyBQgAEIAEMg'
                + 'UIABCABDIFCAAQywE6CwguEIAEEMcBEKMCOggILhCABBDUAjoFCC4QgAQ6BwgjEOoCECc6CgguEMcBENEDEC'
                + 'c6DgguEIAEEMcBENEDENQCOgsILhCABBDHARDRAzoECAAQQzoECC4QQzoKCC4QxwEQ0QMQQ0oECEEYAEoECEY' 
                + 'YAFAAWKgmYOcnaAVwAHgAgAGmAYgBkQuSAQM5LjWYAQCgAQGwAQrAAQE&sclient=gws-wiz';

        urlPage.typeUrlText(testUrl);
        urlPage.clickCreateQRCode();
        urlPage.clickDownloadQRCodeAndWaitIt();

        cy.checkDownloadQRCode('expected_url_qr_code.png');
    });

    it.skip('Generate and save text qr code', () => {
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
