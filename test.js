// Importa assert de Chai utilizando la sintaxis de importación de ES6
import { assert } from 'chai';

// Importa la función que quieres probar
import sumar from './funcionSumar.js';

// Describe tu conjunto de pruebas
describe('Función sumar', () => {
    // Prueba individual
    it('Debería sumar dos números correctamente', () => {
        // Ejecuta la función que quieres probar
        const resultado = sumar(2, 3);
        // Comprueba si el resultado es el esperado
        assert.equal(resultado, 5);
    });
});
