class ForgotPasswordPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  clickForgotPassword() {
    cy.contains('Forgot your password?').click();
  }

  enterUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  clickReset() {
    cy.get('button[type="submit"]').click();
  }

  interceptReset() {
    cy.intercept('POST', '/web/index.php/api/v2/forgot-password').as('forgotRequest');
  }

  clickCancel() {
    cy.get('button[type="button"]').click();
  }
}

export default new ForgotPasswordPage();
