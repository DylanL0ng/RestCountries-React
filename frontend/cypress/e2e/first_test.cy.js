describe('Country Search Feature', () => {
  it('Renders default elements on the screen', () => {
    // Ensure that the default elements, like the header, are visible on the initial page load.
    // This provides a basic check for the application's default state.
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="cypress-header"]').should('exist', 'The header should be visible');
  });

  it('Inputs "Ireland" as the country and then renders the countries on the screen', () => {
    // Simulate user input for the country 'Ireland', click the search button,
    // and verify that the expected country statistics are rendered.
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="cypress-searchbar"]').type('Ireland').should('have.value', 'Ireland');
    cy.get('[data-testid="cypress-searchbutton"]').click();

    // Verify that the search results contain country statistics for the selected country.
    cy.get('[data-testid="cypress-countryresults"]').should('have.length.greaterThan', 0);
    cy.get('[data-testid^="cypress-country-stats-"]').each(($element) => {
      cy.get($element).should('exist', 'Country stats should be visible').within(() => {
        cy.get('[data-testid^="cypress-country-name-"]').should('exist', 'Country name should be visible');
        cy.get('[data-testid^="cypress-country-region-"]').should('exist', 'Country region should be visible');
        cy.get('[data-testid^="cypress-country-capital-"]').should('exist', 'Country capital should be visible');
        cy.get('[data-testid^="cypress-country-population-"]').should('exist', 'Country population should be visible');
      });
    });
  });

  it('Inputs "Random Country" as the country and then error message should prompt', () => {
    // Simulate user input for a non-existent country, click the search button,
    // and verify that an error message is displayed.
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="cypress-searchbar"]').type('Random Country').should('have.value', 'Random Country');
    cy.get('[data-testid="cypress-searchbutton"]').click();

    // Verify that an error message is displayed when searching for a non-existent country.
    cy.get('[data-testid="cypress-errorprompt"]').should('exist', 'Error prompt should be visible')
      .should('have.text', 'Sorry, no country could be found. Please try again.');
  });
});
