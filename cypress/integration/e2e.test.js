describe('Weather App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should see current city weather', () => {
    cy
      .findByTestId('CURRENT')
      .within(() => {
        cy.findByTestId('TEMP').should('be.visible');
        cy.findByTestId('WEATHER').should('be.visible');
        cy.findByTestId('HUMIDITY').should('be.visible');
        cy.findByTestId('WIND').should('be.visible');
      });
  });

  it('should see current city name', () => {
    cy
      .findByTestId('CURRENT')
      .within(() => {
        cy.findByTestId('NAME').should('be.visible');
      });
  });

  it('should see other 4 cities weather', () => {
    cy
      .findByTestId('OTHER_CITIES')
      .within(() => {
        cy.findAllByTestId('CITY')
          .should('have.length', 4)
          .first()
          .within(() => {
            cy.findByTestId('NAME').should('be.visible');
            cy.findByTestId('TEMP').should('be.visible');
            cy.findByTestId('WEATHER_ICON').should('be.visible');
          });
      });
  });

  it('should see forecast weather', () => {
    cy
      .findByTestId('FORECAST')
      .within(() => {
        cy.findAllByTestId('WEATHER')
          .should('have.length', 7)
          .first()
          .within(() => {
            cy.findByTestId('DAY').should('be.visible');
            cy.findByTestId('WEATHER_ICON').should('be.visible');
            cy.findByTestId('TEMP').should('be.visible');
          });
      });
  });
});
