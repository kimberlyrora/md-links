"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stats = exports.brokenLinks = exports.uniqueLinks = void 0;

/**
 * Función que calcula los links únicos
 * @param {Array de Objeto al que se le aplicara el calculo de links únicos} arrObj
 * @returns number: número de links únicos 
 */
const uniqueLinks = arrObj => {
  const arrUniques = arrObj.reduce((acum, ele) => {
    if (acum.indexOf(ele.href) === -1) {
      acum.push(ele.href);
    }

    return acum;
  }, []);
  return arrUniques.length;
};
/**
 * Función que calcula los links rotos
 * @param {Array de Objeto al que se le aplicara el calculo de links rotos} arrObj
 * @returns number : número de links rotos 
 */


exports.uniqueLinks = uniqueLinks;

const brokenLinks = arrObj => {
  const arrBroken = arrObj.reduce((acum, ele) => {
    if (ele.statusText === 'fail') {
      acum.push(ele.href);
    }

    return acum;
  }, []);
  return arrBroken.length;
};

exports.brokenLinks = brokenLinks;

const templateBroke = arrObj => `\nTotal: ${arrObj.length}\nUnicos: ${uniqueLinks(arrObj)}\nRotos: ${brokenLinks(arrObj)}`;

const templateNoBroke = arrObj => `\nTotal: ${arrObj.length}\nUnicos: ${uniqueLinks(arrObj)}`;
/**
 * Función que hace estadisticas de los links según el parametro de condición
 * @param {Array de Objeto al que se le aplicara el calculo que se indique} arrObj 
 * @param {validate||undefined} condition
 * @returns con condición: total, únicos y rotos
 *          sin condición: total y únicos 
 */


const stats = (arrOb, condition) => {
  let result;

  if (condition === 'validate') {
    result = templateBroke(arrOb);
  } else result = templateNoBroke(arrOb);

  return result;
};

exports.stats = stats;