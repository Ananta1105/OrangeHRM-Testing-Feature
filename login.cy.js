/// <reference types="cypress"/>
 
describe('Login Feature',() => {
  // User Login with Valid Credentials
    it('User Login with Valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })

  // User Login with Invalid Username
    it('User Login with Invalid Username', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang salah
        cy.get('[name="username"]').type('Adminn');  // Username yang salah
        // Mengisi password yang benar
        cy.get('[name="password"]').type('admin123');  // Password yang benar (misalnya)
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      });

  //User Login with Invalid Password
    it('User Login with Invalid Password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang benar
        cy.get('[name="username"]').type('Admin');  // Username yang salah
        // Mengisi password yang salah
        cy.get('[name="password"]').type('user1234');  // Password yang benar (misalnya)
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      });
    
  // Users Login without input Username and Password
    it('Users Login without input Username and Password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]')
        // Mengisi password kosong
        cy.get('[name="password"]');
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');  // Memastikan pesan error tampil
      })
    
  // User Login with Blank Username and input Valid Password  
    it('User Login with Blank Username and input Valid Password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password benar
        cy.get('[name="password"]').type('admin123');  // password yang benar
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })

  // User Login with Input Valid Username and Blank Password    
    it('User Login with Input Valid Username and Blank Password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]').type('Admin'); // Mengisi username valid
        // Mengisi password benar
        cy.get('[name="password"]');  // Tanpa isi password
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
  
  // User Login with Blank username and Input Invalid password
    it('User Login with Blank username and Input Invalid password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password benar
        cy.get('[name="password"]').type('admin112233');  // password yang salah
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })

  // User Login with Blank username and Input Invalid password
    it('User Login with Invalid username and Blank password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]').type ('Admim'); // Username yang salah
        // Mengisi password benar
        cy.get('[name="password"]');  // password dibiarkan kosong
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
 
})

// ---------------Fitur Reset Password---------------

describe('Forgot Your Password Feature', () => {

    beforeEach(() => {
      // Mengunjungi halaman login sebelum setiap test
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
  
    it('User Successfull Reset Password with Valid Username', () => {
      // Memastikan tombol 'Forgot your password?' terlihat
      cy.contains('Forgot your password?').should('be.visible');
      
      // Klik tombol 'Forgot your password?'
      cy.contains('Forgot your password?').click();
      
      // Memastikan halaman pemulihan password terbuka dengan URL yang benar
      cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
      
      // Memastikan form reset password terlihat
      cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
      cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
      cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
      cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
      cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    });
    it('User Successfull Reset Password with Different Username', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
        
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
        
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        cy.get('input[name="username"]').type('Adminn');  // Memastikan input email terlihat
        cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    });
    it('User Cancel for Reset The Password', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
        
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
        
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
        cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
        cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click();
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
    });
    // Perobaan Forgot Password Tanpa Username
    it('Users Cannot Reset Password without input Username', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
      
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
      
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        // Mengisi username kosong
        cy.get('[name="username"]')
        // Mengklik tombol Reset Password
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
  
  });
