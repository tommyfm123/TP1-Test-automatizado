import Dividir from './funcionDividir.js';
import { expect } from 'chai'; // Solo necesitas expect, assert y should no se usan aquí

describe('División', function() {
  it('debería dividir dos números correctamente', function() {
    expect(Dividir(10, 2)).to.equal(5);
  });

  it('debería lanzar un error al intentar dividir por cero', function() {
    expect(() => {
      Dividir(10, 0);
    }).to.throw('No se puede dividir por cero');
  });

  it('debería devolver el segundo número si el primer número es 0', function() {
    expect(Dividir(0, 5)).to.equal(0);
  });

  it('debería devolver 0 si ambos números son 0', function() {
    expect(Dividir(0, 0)).to.equal(0);
  });

  it('debería devolver NaN si el primer número es NaN', function() {
    expect(Dividir(NaN, 5)).to.be.NaN;
  });

  it('debería devolver el primer número si el segundo número es 1', function() {
    expect(Dividir(10, 1)).to.equal(10); // Utiliza should para verificar la igualdad
  });
});
