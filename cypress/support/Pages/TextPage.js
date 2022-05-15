import MainPage from "./MainPage.js"

class TextPage extends MainPage {
 
    constructor() {
        super()
    }

    elements = {
        qrCodeTextInput : () => cy.get('#qrcodeText'),
    }

    navigate() {
        cy.visit('/#text');
    }

    typeUrlText(text) {
        this.elements.qrCodeTextInput().clear().type(text);
    }

    clearUrlInput() {
        this.elements.qrCodeTextInput().clear();
    }

}
export default TextPage;