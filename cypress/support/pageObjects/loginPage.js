class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  interceptLogin() {
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');
  }

  VerifikasiLoginGagal() {
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  }

  clickForgotPasswordLink() {
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
  }

  getForgotPasswordHeader() {
    return cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title");
  }
}


export default new LoginPage();
