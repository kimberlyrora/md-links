import { isAbsolute, convertToAbsolute, isDirectorySync, isFileSync, readFileSync, extFile } from '../src/pathAndFs.js';
// Test para función isAbsolute
describe('isAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Debería devolver true si es ruta absoluta', () => {
    expect(isAbsolute('C:\\My Program\\recursión')).toBe(true);
  });
  it('Debería devolver false si es una función relativa', () => {
    expect(isAbsolute('.\\recursión')).toBe(false);
  });
});
// Test para función convertToAbsolute
describe('convertToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('Debería devolver una ruta absoluta a partir de una ruta relativa', () => {
    expect(convertToAbsolute('.\\..\\LIM008-fe-md-links')).toBe('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links');
  });
});
// Test para isDirectorySync
describe('isDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof isDirectorySync).toBe('function');
  });
  it('Debería devolver true si la ruta es un directorio', () => {
    expect(isDirectorySync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links')).toBe(true);
  });
  it('Debería devolver false si la ruta no es un directorio', () => {
    expect(isDirectorySync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md')).toBe(false);
  });
});

// Test para isFileSync
describe('isFileSync', () => {
  it('Deberia ser una función', () => {
    expect(typeof isFileSync).toBe('function');
  });
  it('Debería devolver true si es un archivo', () => {
    expect(isFileSync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md')).toBe(true);
  });
  it('Debería devolver false si no es un archivo', () => {
    expect(isFileSync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links')).toBe(false);
  });
});
// Test para readFileSync
describe('readFileSync', () => {
  it('Debería ser una función', () => {
    expect(typeof readFileSync).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    expect(readFileSync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md').toString()).toBe('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});

