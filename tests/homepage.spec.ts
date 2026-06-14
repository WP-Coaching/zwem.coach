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
      page.getByRole('heading', { name: /Data, Tijden & Locatie/i })
    ).toBeVisible()

    // Pricing section
    await expect(
      page.getByRole('heading', { name: /Prijs & Benodigdheden/i })
    ).toBeVisible()
    await expect(page.getByText(/€280/i)).toBeVisible()
  })

  test('should display program information correctly', async ({ page }) => {
    await expect(page.getByText(/15 jaar en ouder/i)).toBeVisible()
    await expect(
      page.getByText(/Maximaal 15 personen per groep/i)
    ).toBeVisible()
  })

  test('should display schedule information', async ({ page }) => {
    await expect(page.getByText(/10 wekelijkse sessies/i)).toBeVisible()
    await expect(page.getByText(/Groep 1: Maandag/i).first()).toBeVisible()
    await expect(page.getByText(/Groep 2: Woensdag/i).first()).toBeVisible()
    await expect(page.getByText(/07:00 - 08:00/i).first()).toBeVisible()
  })

  test('should display location information', async ({ page }) => {
    await expect(page.getByText(/Zwembad 't Zeepaardje/i).first()).toBeVisible()
    await expect(page.getByText(/Heldenplein 13/i).first()).toBeVisible()
    await expect(page.getByText(/1800 Vilvoorde/i).first()).toBeVisible()
  })

  test('should have contact information in footer', async ({ page }) => {
    await expect(page.getByText(/info@zwem.coach/i)).toBeVisible()
  })

  test('should open modal when clicking CTA button', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /Inschrijven/i }).first()
    await ctaButton.click()

    // Check modal appears
    await expect(page.getByText(/Kies je lesmoment/i)).toBeVisible()
    await expect(
      page.getByText(/Selecteer de groep die het beste bij je schema past/i)
    ).toBeVisible()
  })

  test('should close modal when clicking cancel', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /Inschrijven/i }).first()
    await ctaButton.click()

    // Modal should be visible
    await expect(page.getByText(/Kies je lesmoment/i)).toBeVisible()

    // Click cancel
    const cancelButton = page.getByRole('button', { name: /Annuleren/i })
    await cancelButton.click()

    // Modal should be hidden
    await expect(page.getByText(/Kies je lesmoment/i)).not.toBeVisible()
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
