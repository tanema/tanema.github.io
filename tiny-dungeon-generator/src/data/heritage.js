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
  "Human": {
    "hp": 6,
    "traits": traits,
    "desc": "Humans are the most prolific Heritage due to their extreme adaptability and determination. Humans are capable of living in punishing conditions, from icy tundra to blistering deserts. They can produce glorious cities or live simple lives as nomads. Humans are just as varied as the places where you find them.They come in all shapes and sizes and temperaments. On average, they are between 5 and 6 feet tall, with males tending to be taller than females.",
    "img": "dist/images/human.png",
  },
  "Fey": {
    "hp": 6,
    "traits": [
      "Bow Mastery: You have Mastered bows and have Advantage when using them. This is in addition to the Mastered weapon chosen at Adventurer Creation.",
    ],
    "mastered": "Bow",
    "desc": "Known as elves to humans, Fey build their cities secluded deep within forests. They are renowned for their talent with archery, which they use to deadly effect to protect their territories, while remaining hidden in the treetops. They are by nature a secretive people, and it can be difficult to earn their trust. Fey are slightly shorter than the average human, with slender, graceful frames and elongated ears that taper to a point. They have a tendency to be androgynous in appearance and are considered to be incredibly beautiful even by members of other Heritages.",
    "img": "dist/images/fey.png",
  },
  "Dwarf": {
    "hp": 8,
    "traits": [
      "Dark Vision: You are able to see in total darkness. However, if you are exposed to sudden bursts of light (spells, alchemist’s flash bombs), you suffer Disadvantage on your next turn.",
    ],
    "desc": "Dwarves are stocky and gruff creatures that hail from magnificent cities hewn into mountains.They pride themselves on their drinking, craftsmanship, and fighting prowess. Dwarven society is heavily influenced by a strong sense of honor and justice. Because of this, they are viewed as being trustworthy individuals, but also stubborn and set in their ways. On average, both male and female dwarves stand 4 feet tall, and have broad, muscular bodies. It is highly suspect to find an adult male dwarf without a long, braided beard. Beard growth is a rite of passage for dwarven men, and once they start growing their beard, they never shave it off.",
    "img": "dist/images/dwarf.png",
  },
  "Goblin": {
    "hp": 4,
    "traits": [
      "Goblin Agility: You can Test 1d6 whenever you are successfully hit by an enemy. If your Test is successful, you evade the attack and do not take damage. Declaring Evade as an Action has no additional benefit."
    ],
    "desc": "Goblins are a diminutive, green-skinned people that eke out a living wherever they can—usually living in small tribes or as solitary individuals.Their behavior,even in adulthood,is childlike. They are inquisitive by nature and somewhat mischievous, although their antics are rarely malicious. Goblins are also easily distracted by shiny objects, and they have a particular affection for gold. Standing just over 3 feet tall, goblins are on average very scrawny and have wide, oblong heads with protruding, bat-like ears. They are notoriously quick, and due to their compulsive fascination with gold, they have gained notoriety as being thieves. Despite their appearance and impish nature, goblins are usually good- natured creatures that enjoy the company of anyone who can tolerate them.",
    "img": "dist/images/goblin.png",
  },
  "Salimar": {
    "hp": 5,
    "traits": [
      "Pyrothermic Healing: Any damage that would be dealt to you by a source of natural (non- magical) fire instead heals you for that amount.",
      "Cryothermic Healing: Any damage that would be dealt to you by a source of natural (non-magical) extreme cold instead heals you for that amount",
    ],
    "desc": "Salimar have earned a reputation for being hard-nosed, but fair merchants, living by waterways and port cities to conduct business. They are highly intelligent and dignified creatures with a great respect for - and interest in - culture. In Salimarian culture, being well-dressed is an absolute must, as it is symbolic of their wealth and stature. Their skin is glossy black and smooth with patches from their head to their tail that range from snow white, to silver, to dark grey. On average, Salimar stand roughly 4 and one-half feet tall; they have elongated bodies with somewhat stumpy legs and thick tails. It is widely known that Salimar are not only immune to fire, but are actually healed by it.",
    "img": "dist/images/salamar.png",
  },
  "Treefolk": {
    "hp": 9,
    "traits": [
      "Ancient Heart: You cannot be healed by any means other than direct sunlight and sleep. For each Hit Point to be healed, you must be directly in the sun for an hour (moving or stationary) or use the sleeping rules."
    ],
    "desc": "Treefolk are massive, lumbering beasts, akin to living trees. They tend to live very long lives—hundreds of years—and have a reputation for being wise and learned.They are solitary creatures, preferring to live alone, even from their own kind, keeping to the forests they tend and grow. Treefolk are huge, standing close to 12 feet tall. They look like mobile trees, long bark covered bodies striding through the woods, as their crown of leaves reaches to the skies.",
    "img": "dist/images/treefolk.png",
  },
  "Karhu": {
    "hp": 7,
    "traits": [
      "Powerful Claws: You have Claw as a Mastered Weapon. You cannot use ranged weapons."
    ],
    "mastered": "Claw",
    "desc": "Karhu are intelligent and lumbering bears who wander the world having all manner of adventures. There are three types of Karhu: the agile, but smaller black Karhu; the strong and powerful brown Karhu; and the rare, but majestic polar Karhu,. The Karhu have a reputation for being calm and pensive but terrifying when provoked or angered. Karhu can walk on all fours or stand upright like the other Heritages. They tend to wield no weapons (even though theycan),butoftencanbefoundusingarmor. Magic among them is exceptionally rare. They are roughly the same size as mundane bears of the same type.",
    "img": "dist/images/karhu.png",
  },
  "Lizardfolk": {
    "hp": 6,
    "traits": [
      "Cold-Blooded: Any attempt to persuade, influence, or manipulate a Lizardfolk through appeals to emotion or feelings suffers Disadvantage."
    ],
    "desc": "Cold-blooded, cruel, and primitive, Lizardfolk are the remains of a servant Heritage created by wizards. Strong, violent, and territorial, Lizardfolk stalk the swamps and jungles of the world, carving out their fate by tooth, claw and spiked club. Most Lizardfolk adventurers start as outcasts or raiders, and eventually grow into something more, becoming heroes and legends of the Lizardfolk back home. They make implacable allies and relentless foes. Lizardfolks are scaled, with a muted assortment of colors (the better to lurk and blend into the swamps they call home.) Many have a ridge of fins or spikes along their spine, and some webbing in their clawed feet and hands.",
    "img": "dist/images/lizardfolk.png",
  }
};

export const generateHeritage = () => {
  const name = randPick(heritage)
  const attrs = heritage_attributes[name];
  return {
    name,
    desc: attrs.desc,
    img: attrs.img,
    hp: attrs.hp,
    trait: randPick(attrs.traits),
    mastered: attrs.mastered,
  }
}
