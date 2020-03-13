import { randPick } from '../lib/rand';
import { traits } from './traits';

const heritage = [
  "Human",
  "Fey",
  "Dwarf",
  "Goblin",
  "Salimar",
  "Treefolk",
  "Karhu",
  "Lizardfolk",
]

const heritage_attributes = {
  "Human": {"hp": 6, "traits": traits},
  "Fey": {
    "hp": 6,
    "traits": [
      "Bow Mastery: You have Mastered bows and have Advantage when using them. This is in addition to the Mastered weapon chosen at Adventurer Creation.",
    ],
    "mastered": "Bow"
  },
  "Dwarf": {
    "hp": 8,
    "traits": [
      "Dark Vision: You are able to see in total darkness. However, if you are exposed to sudden bursts of light (spells, alchemist’s flash bombs), you suffer Disadvantage on your next turn.",
    ],
  },
  "Goblin": {
    "hp": 4,
    "traits": [
      "Goblin Agility: You can Test 1d6 whenever you are successfully hit by an enemy. If your Test is successful, you evade the attack and do not take damage. Declaring Evade as an Action has no additional benefit."
    ],
  },
  "Salimar": {
    "hp": 5,
    "traits": [
      "Pyrothermic Healing: Any damage that would be dealt to you by a source of natural (non- magical) fire instead heals you for that amount.",
      "Cryothermic Healing: Any damage that would be dealt to you by a source of natural (non-magical) extreme cold instead heals you for that amount",
    ],
  },
  "Treefolk": {
    "hp": 9,
    "traits": [
      "Ancient Heart: You cannot be healed by any means other than direct sunlight and sleep. For each Hit Point to be healed, you must be directly in the sun for an hour (moving or stationary) or use the sleeping rules."
    ],
  },
  "Karhu": {
    "hp": 7,
    "traits": [
      "Powerful Claws: You have Claw as a Mastered Weapon. You cannot use ranged weapons."
    ],
    "mastered": "Claw"
  },
  "Lizardfolk": {
    "hp": 6,
    "traits": [
      "Cold-Blooded: Any attempt to persuade, influence, or manipulate a Lizardfolk through appeals to emotion or feelings suffers Disadvantage."
    ],
  }
};

export const generateHeritage = () => {
  const name = randPick(heritage)
  const attrs = heritage_attributes[name];
  return {
    name,
    hp: attrs.hp,
    trait: randPick(attrs.traits),
    mastered: attrs.mastered,
  }
}
