Cypress.Commands.add('checkDownloadQRCode', (filename2) => {
    var path = "./cypress/fixtures/expectedQRs/" + filename2;
    cy.task("compareImages", {
        filePath1: "./cypress/downloads/qr-code.png", 
        filePath2: path
    })
    .then(isMatching => { 
        expect(isMatching).to.be.true; 
    })
})