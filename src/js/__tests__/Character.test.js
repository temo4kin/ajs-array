import { Character } from '../app.js';
import { Magician } from '../app.js';
import { Daemon } from '../app.js';

describe('Классы персонажей', () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician();
    daemon = new Daemon();
  });

  test('Возможность создания экземпляра класса Magician', () => {
    expect(magician instanceof Magician).toBe(true);
  });

  test('Возможность создания экземпляра класса Deamon', () => {
    expect(daemon instanceof Daemon).toBe(true);
  });

  describe('Возможность атаки без "дурмана"', () => {
    test('Атака на 1 клетку', () => {
      magician.attack = 1;
      expect(magician.attack).toBe(100);
    });

    test('Атака на 2 клетки', () => {
      magician.attack = 2;
      expect(magician.attack).toBe(90);
    });

    test('Атака на 3 клетки', () => {
      daemon.attack = 3;
      expect(daemon.attack).toBe(80);
    });

    test('Атака на 4 клетки', () => {
      daemon.attack = 4;
      expect(daemon.attack).toBe(70);
    });

    test('Атака на 5 клеток', () => {
      magician.attack = 5;
      expect(magician.attack).toBe(60);
    });

    test('Атака на расстояние меньше 1 клетки', () => {
      magician.attack = 0;
      expect(magician.attack).toBe(100);
    });

    test('Атака на расстояние больше 5 клеток', () => {
      daemon.attack = 10;
      expect(daemon.attack).toBe(60);
    });
  });

  describe('Возможность атаки с "дурманом"', () => {
    test('Атака на 1 клетку с "дурманом"', () => {
      magician.stoned = true;
      magician.attack = 1;
      expect(magician.attack).toBe(100);
    });

    test('Атака на 2 клетки с "дурманом"', () => {
      magician.stoned = true;
      magician.attack = 2;
      expect(magician.attack).toBe(85);
    });

    test('Атака на 3 клетки с "дурманом"', () => {
      daemon.stoned = true;
      daemon.attack = 3;
      expect(daemon.attack).toBe(72);
    });

    test('Атака на 5 клеток с "дурманом"', () => {
      magician.stoned = true;
      magician.attack = 5;
      expect(magician.attack).toBe(48);
    });

    test('Атака с "дурманом" не может быть отрицательной', () => {
      magician.stoned = true;
      magician._baseAttack = 10;
      magician.attack = 5;
      expect(magician.attack).toBe(0);
    });
  });

  describe('Свойство "дурман"', () => {
    test('Установка и получение статуса "дурман"', () => {
      expect(magician.stoned).toBe(false);
      magician.stoned = true;
      expect(magician.stoned).toBe(true);
      magician.stoned = 'any truthy value';
      expect(magician.stoned).toBe(true);
      magician.stoned = 0;
      expect(magician.stoned).toBe(false);
    });
  });
});