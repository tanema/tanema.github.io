import { generateAttributes } from './attributes';
import { generateHeritage } from './heritage';
import { generateWeapon } from './weapons';
import { generateName } from './names';
import { traits } from './traits';
import { pickMult } from '../lib/rand';

export const newCharacter = () => {
  const heritage = generateHeritage();
  return {
    name: generateName(),
    heritage: heritage,
    traits: pickMult(traits, 3),
    weapon: generateWeapon(heritage),
    attrs: generateAttributes(),
  }
}

export const characterString = (character) => {
  const {heritage, weapon, traits, attrs} = character;
  return `
You are a ${attrs.adjective} ${heritage.name} from ${attrs.homeland} that ${attrs.backstory} and grew up learning to be a ${attrs.trade}

Heritage: ${heritage.name}
HP: ${heritage.hp}
Heritage Trait: ${heritage.trait}
Mastery: ${heritage.mastered}

Belief: ${attrs.belief}
Homeland: ${attrs.homeland}
Trade: ${attrs.trade}

Traits:
${traits.join("\n")}

Weapons Mastery: ${weapon.type}
Weapons: ${weapon.mastered.join(", ")}
  `
}
