import { Page, Locator } from '@playwright/test';

export class HomePage {
    private readonly signInButton: Locator;
    private readonly signUpButton: Locator;

    constructor(private readonly page: Page) {
        this.signInButton = page.getByRole('link', { name: 'Sign in' });
        this.signUpButton = page.getByRole('link', { name: 'Sign up' });
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }
}