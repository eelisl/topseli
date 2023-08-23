describe('Visit app', () => {
  it('Visits the Home Page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Töpseli').should('be.visible')
    cy.contains('Tänään').should('be.visible')
    cy.contains('Huomenna').should('be.visible')
    cy.contains('SaunaTime').should('be.visible')

    // Get the canvas element and its context
    cy.get('canvas').then(($canvas) => {
      // Click the button that triggers the rerender
      cy.contains('Huomenna').click();

      // Allow time for the rerender, if needed
      cy.wait(1000);
    });

    // SAUNATIME

    cy.contains('SaunaTime').should('be.visible')

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getUTCDate() + 1)

    const weekdays = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']

    cy.contains('Tänään').click()
    cy.wait(1000);
    cy.contains('Paras aika saunoa tänään').should('be.visible')
    cy.get(".saunatime-text").should("contain", (weekdays[today.getUTCDay()]))


    cy.contains('Huomenna').click()
    cy.wait(200);
    cy.contains('Paras aika saunoa huomenna').should('be.visible')
    cy.get(".saunatime-text").should("contain", (weekdays[tomorrow.getUTCDay()]))

    cy.contains('NaN').should('not.exist')
  })
})