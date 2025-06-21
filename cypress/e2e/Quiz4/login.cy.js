import loginPage from '../../support/pageObjects/loginPage';

describe("Fitur Login - OrangeHRM", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("1. Login berhasil dengan kredensial valid", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.interceptLogin();
    cy.wait(1000);
  });

  it("2. Login gagal dengan password salah", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("salah123");
    loginPage.clickLogin();
    loginPage.interceptLogin();
    cy.wait(1000);
  });

  it("3. Login gagal dengan username salah", () => {
    loginPage.enterUsername("salahUser");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.interceptLogin();
    cy.wait(1000);
  });

  it("4. Login gagal dengan username kosong", () => {
    loginPage.enterUsername(" ");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("5. Login gagal dengan password kosong", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword(" ");
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("6. Login gagal dengan username dan password kosong", () => {
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("7. Navigasi ke halaman Forgot Password", () => {
    loginPage.clickForgotPasswordLink();
    loginPage.getForgotPasswordHeader().should("contain", "Reset Password");
    cy.wait(1000);
  });
});