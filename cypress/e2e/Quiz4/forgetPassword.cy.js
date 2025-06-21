import forgotPasswordPage from '../../support/pageObjects/forgotPasswordPage';

describe("Fitur Login - OrangeHRM", () => {
  beforeEach(() => {
    forgotPasswordPage.visit();
  });

  it("8. Melakukan Reset Password", () => {
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.enterUsername("Admin");
    forgotPasswordPage.clickReset();
    cy.wait(1000);
  });

  it("9. Melakukan Click Cancel", () => {
    forgotPasswordPage.clickForgotPassword();
    forgotPasswordPage.clickCancel();
    cy.wait(1000);
  });
});
