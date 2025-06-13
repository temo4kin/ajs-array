// TODO: write your code here

export class Character {
  constructor() {
    this._stoned = false;
    this._baseAttack = 100;
    this._distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = Boolean(value);
  }

  get attack() {
    let attackPower = this._baseAttack * (1 - (this._distance - 1) * 0.1);
    
    if (this._stoned) {
      attackPower -= Math.log2(this._distance) * 5;
    }

    return Math.max(0, Math.round(attackPower));
  }

  set attack(dist) {
    this._distance = Math.max(1, Math.min(5, dist));
  }
}

export class Magician extends Character {
  constructor() {
    super();
  }
}

export class Daemon extends Character {
  constructor() {
    super();
  }
}