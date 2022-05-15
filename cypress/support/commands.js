Cypress.Commands.add('resetDownloadsFile', () => {
    let fileForReset = './cypress/downloads/qr-code.png';
    let emptyData = '';
    cy.writeFile(fileForReset, emptyData);
})