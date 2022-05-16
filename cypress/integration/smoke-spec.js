import UrlPage from '../support/Pages/UrlPage'
import TextPage from '../support/Pages/TextPage'
import MainPage from '../support/Pages/MainPage'

describe('Smoke tests. Correctly generate and download a QR code', () => {
    
    let testData;

    before(() => {
        cy.fixture('testData').then((data) => {                  
            testData = data;
        });
    })

    beforeEach( () => {
        cy.resetDownloadsFile()
        cy.wrap(testData).as('testData');
    });

    it('when given a URL', () => {
        var urlPage = new UrlPage();
        urlPage.navigateToMain();
        
        urlPage.typeUrlText(testData.url);
        urlPage.clickCreateQRCode();
        urlPage.clickDownloadPngAndWaitIt();

        cy.checkDownloadQRCodeWith('expected_url_qr_code.png');
    });

    it('when given TEXT', () => {
        var mainPage = new MainPage();
        mainPage.navigateToMain();
        mainPage.gotoTextPage();

        var textPage = new TextPage();
        textPage.typeUrlText(testData.text);
        textPage.clickCreateQRCode();
        textPage.clickDownloadPngAndWaitIt();

        cy.checkDownloadQRCodeWith('expected_text_qr_code.png');
    });
})
