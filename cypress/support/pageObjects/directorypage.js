class DirectoryPage {
  clickMenuDirectory() {
    cy.get('a.oxd-main-menu-item').contains('Directory').click();
  }

  interceptDirectory() {
    cy.intercept('GET', '/web/index.php/api/v2/directory/employees*').as('getDirectory');
  }
}

export default new DirectoryPage();
