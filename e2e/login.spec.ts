import { test, expect } from '@playwright/test'

test('Verify that user can able to login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

    const signUpLink = page.getByRole('link', { name: 'Sign up' }).filter({ hasText: 'Sign Up' })
    await expect(signUpLink).toBeVisible()
    await signUpLink.click()

    const signUpmodal = page.getByRole('heading', { name: 'Sign up' })
    await expect(signUpmodal).toContainText('Sign up')
    await signUpmodal.click()

    const userNameSignUp = page.getByRole('textbox', { name: 'Username:' }).fill('Test123')
    // await expect(userNameSignUp).toBeVisible()
    const passwordSignUp = page.getByRole('textbox', { name: 'Password:' }).fill('123445566')

    const signUpbtn = page.getByRole('button', { name: 'Sign up' })
    await expect(signUpbtn).toBeVisible()
    await signUpbtn.click()

    const closeSignUpModal = page.getByLabel('Sign up').getByText('Close')
    await expect(closeSignUpModal).toBeVisible()
    await closeSignUpModal.click()
})
