import { test, expect } from '@playwright/test'

test('Verify that user can able to login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

    const signUpbtn = page.getByRole('link', { name: 'Sign up' }).filter({ hasText: 'Sign Up' })
    await expect(signUpbtn).toBeVisible()
    await signUpbtn.click()

    const signUpmodal = page.getByRole('heading', { name: 'Sign up' })
    await expect(signUpmodal).toContainText('Sign up')
    await signUpmodal.click()
})