/// <reference types="cypress" />

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Click en un botón de la calculadora por su label
       * @example cy.clickButton('7')
       */
      clickButton(label: string): Chainable<void>;
      
      /**
       * Verifica que el display muestre un valor específico
       * @example cy.checkDisplay('42')
       */
      checkDisplay(value: string): Chainable<void>;
      
      /**
       * Verifica que se muestre un mensaje de error
       * @example cy.checkError('No se puede dividir por cero')
       */
      checkError(message: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('clickButton', (label: string) => {
  cy.contains('button', label).click();
});

Cypress.Commands.add('checkDisplay', (value: string) => {
  // Buscar el display principal que muestra el número
  cy.get('div[class*="text-4xl"]').should('contain', value);
});

Cypress.Commands.add('checkError', (message: string) => {
  // Buscar el mensaje de error que tiene clases text-red
  cy.get('div[class*="text-red"]').should('be.visible').and('contain', message);
});

export {};

