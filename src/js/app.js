// TODO: write your code here
export class Character {
  constructor() {
    this.stone = false;
    this.baseAttack = 100;
    this.distance = 1;
  }

  get stoned() {
    return this.stoned;
  }

  set stoned(value) {
    this.stoned = Boolean(value);
  }

  get attack() {
    let attackPower = this.baseAttack * (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }
    return Math.max(0, Math.round(attackPower));
  }
  set attack(distance) {
    this.distance = Math.max(1, Math.min(5, distance));
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