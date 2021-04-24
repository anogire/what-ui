class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }

  checkChance = (value) => Math.ceil(this.health / value);
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const variant1 = fighter1.checkChance(fighter2.damagePerAttack);
  const variant2 = fighter2.checkChance(fighter1.damagePerAttack);

  if (variant1 == variant2) {
    return firstAttacker;
  } else {
    return (variant1 > variant2) ? fighter1.name : fighter2.name;
  }
}


console.log('\nTask #2. Two fighters, one winner');

const F1 = new Fighter("Lew", 10, 2);
const F2 = new Fighter("Harry", 5, 4);
console.log(`${F1.name} (health ${F1.health}, damage ${F1.damagePerAttack}) - 
${F2.name} (health ${F2.health}, damage ${F2.damagePerAttack}) = ${declareWinner(F1, F2, "Lew")}`); // "Lew"

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); // "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); // "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")); // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); // "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")); // "Harald"