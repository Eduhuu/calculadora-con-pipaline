describe('Calculadora - Pruebas de Integración', () => {
  beforeEach(() => {
    // Visitar la página principal antes de cada prueba
    cy.visit('/');
    
    // Verificar que la calculadora esté visible
    cy.contains('h1', 'Calculadora').should('be.visible');
  });

  describe('Operaciones Básicas', () => {
    it('debe realizar una suma correctamente', () => {
      // 5 + 3 = 8
      cy.clickButton('5');
      cy.checkDisplay('5');
      
      cy.clickButton('+');
      cy.clickButton('3');
      cy.checkDisplay('3');
      
      cy.clickButton('=');
      cy.checkDisplay('8');
    });

    it('debe realizar una resta correctamente', () => {
      // 10 - 4 = 6
      cy.clickButton('1');
      cy.clickButton('0');
      cy.checkDisplay('10');
      
      cy.clickButton('-');
      cy.clickButton('4');
      cy.checkDisplay('4');
      
      cy.clickButton('=');
      cy.checkDisplay('6');
    });

    it('debe realizar una multiplicación correctamente', () => {
      // 6 * 7 = 42
      cy.clickButton('6');
      cy.checkDisplay('6');
      
      cy.clickButton('*');
      cy.clickButton('7');
      cy.checkDisplay('7');
      
      cy.clickButton('=');
      cy.checkDisplay('42');
    });

    it('debe realizar una división correctamente', () => {
      // 15 / 3 = 5
      cy.clickButton('1');
      cy.clickButton('5');
      cy.checkDisplay('15');
      
      cy.clickButton('/');
      cy.clickButton('3');
      cy.checkDisplay('3');
      
      cy.clickButton('=');
      cy.checkDisplay('5');
    });

    it('debe manejar números decimales', () => {
      // 3.5 + 2.5 = 6
      cy.clickButton('3');
      cy.clickButton('.');
      cy.clickButton('5');
      cy.checkDisplay('3.5');
      
      cy.clickButton('+');
      cy.clickButton('2');
      cy.clickButton('.');
      cy.clickButton('5');
      cy.checkDisplay('2.5');
      
      cy.clickButton('=');
      cy.checkDisplay('6');
    });

    it('debe manejar números negativos', () => {
      // -5 + 3 = -2
      cy.clickButton('5');
      cy.clickButton('±');
      cy.checkDisplay('-5');
      
      cy.clickButton('+');
      cy.clickButton('3');
      cy.checkDisplay('3');
      
      cy.clickButton('=');
      cy.checkDisplay('-2');
    });
  });

  describe('Manejo de Errores', () => {
    it('debe mostrar error al dividir por cero', () => {
      // 10 / 0 = Error
      cy.clickButton('1');
      cy.clickButton('0');
      cy.checkDisplay('10');
      
      cy.clickButton('/');
      cy.clickButton('0');
      cy.checkDisplay('0');
      
      cy.clickButton('=');
      
      // Verificar que se muestra el mensaje de error
      cy.checkError('No se puede dividir por cero');
      
      // Verificar que el display se resetea a 0
      cy.checkDisplay('0');
    });

    it('debe limpiar el error al presionar C', () => {
      // Generar un error primero
      cy.clickButton('5');
      cy.clickButton('/');
      cy.clickButton('0');
      cy.clickButton('=');
      
      // Verificar que hay error
      cy.checkError('No se puede dividir por cero');
      
      // Limpiar
      cy.clickButton('C');
      
      // Verificar que el error desapareció
      cy.contains('[class*="text-red"]', 'No se puede dividir por cero').should('not.exist');
      cy.checkDisplay('0');
    });

    it('debe limpiar el error al ingresar un nuevo número después del error', () => {
      // Generar un error primero
      cy.clickButton('8');
      cy.clickButton('/');
      cy.clickButton('0');
      cy.clickButton('=');
      
      // Verificar que hay error
      cy.checkError('No se puede dividir por cero');
      
      // Ingresar un nuevo número
      cy.clickButton('7');
      
      // Verificar que el error desapareció y se muestra el nuevo número
      cy.contains('[class*="text-red"]', 'No se puede dividir por cero').should('not.exist');
      cy.checkDisplay('7');
    });
  });

  describe('Funcionalidades de la Interfaz', () => {
    it('debe limpiar la calculadora con el botón C', () => {
      // Ingresar algunos números y operaciones
      cy.clickButton('5');
      cy.clickButton('+');
      cy.clickButton('3');
      
      // Limpiar
      cy.clickButton('C');
      
      // Verificar que todo se resetea
      cy.checkDisplay('0');
    });

    it('debe cambiar el signo del número con el botón ±', () => {
      cy.clickButton('5');
      cy.checkDisplay('5');
      
      cy.clickButton('±');
      cy.checkDisplay('-5');
      
      cy.clickButton('±');
      cy.checkDisplay('5');
    });

    it('debe mostrar la operación en curso', () => {
      cy.clickButton('7');
      cy.clickButton('+');
      cy.clickButton('3');
      
      // Verificar que se muestra la operación previa
      cy.contains('7 +').should('be.visible');
    });
  });

  describe('Casos Edge', () => {
    it('debe manejar división de cero entre un número', () => {
      // 0 / 5 = 0
      cy.clickButton('0');
      cy.clickButton('/');
      cy.clickButton('5');
      cy.clickButton('=');
      cy.checkDisplay('0');
    });

    it('debe manejar números muy grandes', () => {
      // 999999 + 1 = 1000000
      cy.clickButton('9');
      cy.clickButton('9');
      cy.clickButton('9');
      cy.clickButton('9');
      cy.clickButton('9');
      cy.clickButton('9');
      cy.checkDisplay('999999');
      
      cy.clickButton('+');
      cy.clickButton('1');
      cy.clickButton('=');
      cy.checkDisplay('1000000');
    });

    it('debe manejar múltiples puntos decimales (solo permite uno)', () => {
      cy.clickButton('3');
      cy.clickButton('.');
      cy.clickButton('5');
      cy.clickButton('.');
      cy.checkDisplay('3.5'); // No debe agregar otro punto
    });

    it('debe manejar operaciones con resultado negativo', () => {
      // 3 - 10 = -7
      cy.clickButton('3');
      cy.clickButton('-');
      cy.clickButton('1');
      cy.clickButton('0');
      cy.clickButton('=');
      cy.checkDisplay('-7');
    });
  });
});

