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
})
