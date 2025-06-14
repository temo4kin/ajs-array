import { ArrayBufferConverter } from '../ArrayBufferConverter.js';
import { getBuffer } from '../ArrayBufferConverter.js'

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  describe('load', () => {
    it('должен загружать буфер', () => {
      const buffer = getBuffer();
      converter.load(buffer);
      expect(converter.buffer).toBe(buffer);
    });
  });

  describe('toString', () => {
    it('должен выбрасывать ошибку, если буфер не загружен', () => {
      expect(() => converter.toString()).toThrow('Не загружен буфер');
    });

    it('должен преобразовывать ArrayBuffer в строку', () => {
      const buffer = getBuffer();
      converter.load(buffer);
      const result = converter.toString();
      
      expect(typeof result).toBe('string'); 
      expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
    });

    it('должен корректно обрабатывать пустой буфер', () => {
      const emptyBuffer = new ArrayBuffer(0);
      converter.load(emptyBuffer);
      expect(converter.toString()).toBe('');
    });
  });
});

describe('getBuffer', () => {
  it('должен возвращать ArrayBuffer', () => {
    const buffer = getBuffer();
    expect(buffer instanceof ArrayBuffer).toBe(true);
  });

  it('должен содержать корректные данные', () => {
    const buffer = getBuffer();
    const view = new Uint16Array(buffer);
    let result = '';
    
    for (let i = 0; i < view.length; i++) {
      result += String.fromCharCode(view[i]);
    }
    
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});