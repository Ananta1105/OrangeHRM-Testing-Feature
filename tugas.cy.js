
describe('Login Feature',() => {

// User Login with Valid Credentials
it('User Login with Valid credentials', () => {
    cy.intercept('POST', '/api/v1/auth/login').as('loginRequest');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.intercept("GET","**/employees/action-summary").as("actionSummary");
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
});

// User login with invalid username
it('User Login with Invalid Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]').type('admin123');
    cy.get('[name="password"]').type('admin123');
    cy.intercept("GET","**/core/i18n/messages").as("messages");
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.wait('@messages').its('response.statusCode').should('eq', 304);
    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
})
//User Login with Invalid Password
it('User Login with Invalid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]').type('Admin');  
    cy.get('[name="password"]').type('user1234');
    cy.intercept("GET","**/core/i18n/messages").as("messages");
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.wait('@messages').its('response.statusCode').should('eq', 304);
    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  
  });

//User Login with Invalid Username and Invalid Password
it('User Login with Invalid Username and Invalid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]').type('Admin');  
    cy.get('[name="password"]').type('user1234');
    cy.intercept("GET","**/core/i18n/messages").as("messages");
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.wait('@messages').its('response.statusCode').should('eq', 304);
    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  
  });

// Users Login without input Username and Password
it('Users Login without input Username and Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]');
    cy.get('[name="password"]');
    cy.intercept("GET","**/core/i18n/messages").as("messages");
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');
  })

it('User Login with Blank Username and input Valid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]'); 
    cy.get('[name="password"]').type('admin123');
    cy.intercept('POST', '/web/index.php/auth/login').as('loginRequest');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required'); 
  });

it('User Login with Valid Username and Blank Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]').type('Admin'); 
    cy.get('[name="password"]');
    cy.intercept('POST', '/web/index.php/auth/login').as('loginRequest');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required'); 
  });

it('User Login with Blank Username and Invalid Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
    cy.get('[name="username"]'); 
    cy.get('[name="password"]').type('admin1234');
    cy.intercept('POST', '/web/index.php/auth/login').as('loginRequest');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required'); 
  });

})


// ---- Fitur Forgot Your Password ----

describe('Forgot Your Password Feature',() => {

it('User success Forgot Password with Valid Credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.contains('Forgot your password?').should('be.visible');
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode'); 
    cy.get('h6').should('contain.text', 'Reset Password');
    cy.get('input[name="username"]').type('Admin');
    cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
    cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
    cy.wait('@requestResetPassword').then((intercept)=>{
      expect(intercept.response.statusCode).to.equal(302);});
    cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully');
  });

it('User success Forgot Password with Different Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.contains('Forgot your password?').should('be.visible');
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode'); 
    cy.get('h6').should('contain.text', 'Reset Password');
    cy.get('input[name="username"]').type('Adminn');
    cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
    cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
    cy.wait('@requestResetPassword').then((intercept)=>{
      expect(intercept.response.statusCode).to.equal(302);});
    cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully');
  });

it('User Cancel for The Reset Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.contains('Forgot your password?').should('be.visible');
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode'); 
    cy.get('h6').should('contain.text', 'Reset Password');
    cy.get('input[name="username"]').type('Adminn');
    cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
    cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click();
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
  });

it('User Reset Password Without Input Username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.contains('Forgot your password?').should('be.visible');
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode'); 
    cy.get('h6').should('contain.text', 'Reset Password');
    cy.get('input[name="username"]');
    cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
    cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');
  });

})
