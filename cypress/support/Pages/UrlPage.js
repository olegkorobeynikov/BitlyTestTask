import MainPage from "./MainPage.js"

class UrlPage extends MainPage {
 
    constructor() {
        super()
    }

    elements = {
        qrCodeUrlInput : () => cy.get('#qrcodeUrl'),
    }

    navigate() {
        cy.visit('/#url');
    }

    typeUrlText(text) {
        this.elements.qrCodeUrlInput().clear().type(text);
    }

    clearUrlInput() {
        this.elements.qrCodeUrlInput().clear();
    }

}
export default UrlPage;