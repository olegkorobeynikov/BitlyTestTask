const downloadQRCodePngBtnLocator = '#button-download-qr-code-png';

class MainPage {

    constructor() {
    }

    elements = {
        urlTabBtn : () => cy.get("a[href='#url']"),
        textTabBtn : () => cy.get("a[href='#text']"),

        downloadQRCodePngBtn : () => cy.get(downloadQRCodePngBtnLocator),
        createQRCodeBtn : () => cy.get('#button-create-qr-code'),
    }

    navigateToMain() {
        cy.visit('/');
    }

    gotoUrlPage() {
        this.elements.urlTabBtn().click();
    }

    gotoTextPage() {
        this.elements.textTabBtn().click();
    }

    clickCreateQRCode() {
        //this.elements.createQRCodeBtn().click();
        cy.get('#button-create-qr-code').click();
    }

    clickDownloadQRCode() {
        this.elements.downloadQRCodePngBtn().click();
    }

    clickDownloadPngAndWaitIt() {
        cy.intercept('GET', 'https://api.qrcode-monkey.com//qr/custom?download?true*').as('getQRFile');

        // should remove that workaround after closing issue -> https://github.com/cypress-io/cypress/issues/14857
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 15000);
            })
            cy.get(downloadQRCodePngBtnLocator).click();
        }) 

        cy.wait('@getQRFile', { "timeout" : 15000 });
    }
}

export default MainPage;