import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
test('test', async ({ page }) => {

const Login=new LoginPage(page)


Login.gotoLoginPage()
Login.login('tomsmith','SuperSecretPassword!')


 
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('S');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('Super');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('SuperS');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('SuperSecret');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('SuperSecretP');
  // await page.getByLabel('Password').press('CapsLock');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});