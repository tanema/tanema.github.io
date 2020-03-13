import { randPick, pickMult } from '../lib/rand';

const weapon_types = [
  "light",
  "heavy",
  "ranged",
];

const weapons = {
  "light": ["Dagger", "Short Sword", "Hand Axe", "Rapier", "Mace", "Staff", "Club"],
  "heavy": ["Greatsword", "War Axe", "Spear", "Polearm", "Two-Handed Flail", "Warhammer"],
  "ranged": ["Sling", "Crossbow", "Bow", "Throwing Darts", "Shuriken"],
}

export const generateWeapon = (heritage) => {
  let availableTypes = weapon_types
  if(heritage.name === "Fey") {
    availableTypes = ["ranged"]
  } else if(heritage.name === "Karhu") {
    availableTypes = ["light", "heavy"]
  }
  const type = randPick(availableTypes)
  const mastered = pickMult(weapons[type], 1)
  if(heritage.mastered) {
    mastered.push(heritage.mastered)
  }
  return {type, mastered}
}
