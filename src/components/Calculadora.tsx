'use client';

import { useState } from 'react';
import { sumar, restar, multiplicar, dividir } from '@/actions';

type Operacion = '+' | '-' | '*' | '/' | null;

export default function Calculadora() {
  const [display, setDisplay] = useState<string>('0');
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<Operacion>(null);
  const [nuevoNumero, setNuevoNumero] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const agregarNumero = (numero: string) => {
    setError('');
    if (nuevoNumero) {
      setDisplay(numero);
      setNuevoNumero(false);
    } else {
      setDisplay(display === '0' ? numero : display + numero);
    }
  };

  const agregarPunto = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNuevoNumero(false);
    }
  };

  const cambiarSigno = () => {
    setDisplay((prev) => {
      const num = parseFloat(prev);
      return (num * -1).toString();
    });
  };

  const limpiar = () => {
    setDisplay('0');
    setValorAnterior(null);
    setOperacion(null);
    setNuevoNumero(true);
    setError('');
  };

  const seleccionarOperacion = (op: Operacion) => {
    if (valorAnterior !== null && !nuevoNumero) {
      calcular();
    } else {
      setValorAnterior(parseFloat(display));
    }
    setOperacion(op);
    setNuevoNumero(true);
  };

  const calcular = async () => {
    if (valorAnterior === null || operacion === null) return;

    const valorActual = parseFloat(display);
    let resultado: number;

    try {
      switch (operacion) {
        case '+':
          resultado = await sumar(valorAnterior, valorActual);
          break;
        case '-':
          resultado = await restar(valorAnterior, valorActual);
          break;
        case '*':
          resultado = await multiplicar(valorAnterior, valorActual);
          break;
        case '/':
          resultado = await dividir(valorAnterior, valorActual);
          break;
        default:
          return;
      }

      setDisplay(resultado.toString());
      setValorAnterior(null);
      setOperacion(null);
      setNuevoNumero(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en la operación');
      setDisplay('0');
      setValorAnterior(null);
      setOperacion(null);
      setNuevoNumero(true);
    }
  };

  const botones = [
    { label: 'C', onClick: limpiar, className: 'bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 text-white col-span-2' },
    { label: '±', onClick: cambiarSigno, className: 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-900 dark:text-white' },
    { label: '/', onClick: () => seleccionarOperacion('/'), className: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white' },
    
    { label: '7', onClick: () => agregarNumero('7'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '8', onClick: () => agregarNumero('8'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '9', onClick: () => agregarNumero('9'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '*', onClick: () => seleccionarOperacion('*'), className: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white' },
    
    { label: '4', onClick: () => agregarNumero('4'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '5', onClick: () => agregarNumero('5'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '6', onClick: () => agregarNumero('6'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '-', onClick: () => seleccionarOperacion('-'), className: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white' },
    
    { label: '1', onClick: () => agregarNumero('1'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '2', onClick: () => agregarNumero('2'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '3', onClick: () => agregarNumero('3'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '+', onClick: () => seleccionarOperacion('+'), className: 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white' },
    
    { label: '0', onClick: () => agregarNumero('0'), className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white col-span-2' },
    { label: '.', onClick: agregarPunto, className: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-900 dark:text-white' },
    { label: '=', onClick: calcular, className: 'bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600 text-white' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 space-y-4">
        {/* Display */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 min-h-[80px] flex flex-col justify-end">
          {operacion && valorAnterior !== null && (
            <div className="text-gray-600 dark:text-gray-400 text-sm text-right mb-1">
              {valorAnterior} {operacion}
            </div>
          )}
          <div className="text-gray-900 dark:text-white text-4xl font-light text-right break-all">
            {display}
          </div>
          {error && (
            <div className="text-red-600 dark:text-red-400 text-xs text-right mt-1">
              {error}
            </div>
          )}
        </div>

        {/* Botones */}
        <div className="grid grid-cols-4 gap-3">
          {botones.map((boton, index) => (
            <button
              key={index}
              onClick={boton.onClick}
              className={`${boton.className} p-4 rounded-lg text-xl font-semibold transition-all active:scale-95 shadow-lg`}
            >
              {boton.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

