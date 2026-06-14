import { test, expect } from '@playwright/test'

test.describe('zwem.coach Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the hero section with correct title', async ({
    page,
  }) => {
    await expect(
      page.getByRole('heading', { name: /zwem\.coach/i }).first()
    ).toBeVisible()
    await expect(
      page.getByText(/Technieklessen Crawl Vilvoorde/i).first()
    ).toBeVisible()
    await expect(
      page.getByText(/Met Olympische expertise van Pieter Timmers en Ward Pellegrims/i)
    ).toBeVisible()
  })

  test('should have a CTA button in hero section', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /Inschrijven/i }).first()
    await expect(ctaButton).toBeVisible()
  })

  test('should display all main sections', async ({ page }) => {
    // Program section
    await expect(
      page.getByRole('heading', { name: /Programma/i })
    ).toBeVisible()

    // Coaches section
    await expect(
      page.getByRole('heading', { name: /Coaches/i })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /Pieter Timmers/i })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /Ward Pellegrims/i })
    ).toBeVisible()

    // Schedule section
    await expect(
      page.getByRole('heading', { name: /Trainingsreeksen 2026-2027/i })
    ).toBeVisible()

    // Pricing section (now Benodigdheden)
    await expect(
      page.getByRole('heading', { name: /Benodigdheden/i }).first()
    ).toBeVisible()
    await expect(page.getByText(/€280/i)).toBeVisible()
  })

  test('should display program information correctly', async ({ page }) => {
    await expect(page.getByText(/15 jaar en ouder/i)).toBeVisible()
    await expect(
      page.getByText(/Maximaal 10 zwemmers per lesgever/i).first()
    ).toBeVisible()
  })

  test('should display schedule information in cards', async ({ page }) => {
    await expect(page.getByText(/3 verschillende periodes van telkens 10 lessen/i)).toBeVisible()
    await expect(page.getByText(/Maandag:/i).first()).toBeVisible()
    await expect(page.getByText(/Woensdag:/i).first()).toBeVisible()
    await expect(page.getByText(/7u - 8u/i).first()).toBeVisible()
  })

  test('should have active registration links for available periods', async ({ page }) => {
    // Check that Monday and Wednesday have the correct Stripe links
    const mondayLink = page.getByRole('link', { name: /Inschrijven Maandag/i }).first()
    await expect(mondayLink).toBeVisible()
    await expect(mondayLink).toHaveAttribute('href', 'https://buy.stripe.com/your-monday-link')

    const wednesdayLink = page.getByRole('link', { name: /Inschrijven Woensdag/i }).first()
    await expect(wednesdayLink).toBeVisible()
    await expect(wednesdayLink).toHaveAttribute('href', 'https://buy.stripe.com/your-wednesday-link')
  })

  test('should show upcoming status for periods without links', async ({ page }) => {
    // Periode 2 and 3 don't have links and are in the future, they should show 'Inschrijvingen openen binnenkort'
    await expect(page.getByText(/Inschrijvingen openen binnenkort/i)).toHaveCount(2)
  })

  test('should display location information', async ({ page }) => {
    await expect(page.getByText(/zwembad 't Zeepaardje, Vilvoorde/i).first()).toBeVisible()
  })

  test('should have contact information in footer', async ({ page }) => {
    await expect(page.getByText(/info@zwem.coach/i)).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    // Check if main elements are still visible
    await expect(
      page.getByRole('heading', { name: /zwem\.coach/i }).first()
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /Inschrijven/i }).first()
    ).toBeVisible()
  })

  test('should have proper metadata', async ({ page }) => {
    await expect(page).toHaveTitle(/zwem\.coach/)
  })
})
