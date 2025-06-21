import loginPage from '../../support/pageObjects/loginPage';
import directoryPage from '../../support/pageObjects/directorypage';

describe('Directory Page Test with POM and Intercept', () => {
  beforeEach(() => {
    loginPage.visit('/'); // -> baseUrl
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    cy.url().should('include', '/dashboard');
  });

  it('should intercept and validate directory page load', () => {
    directoryPage.interceptDirectory();
    directoryPage.clickMenuDirectory();

    cy.wait('@getDirectory').its('response.statusCode').should('eq', 200);
    // directoryPage.validatePage(); // hanya jika fungsi ini memang ada
  });
});
