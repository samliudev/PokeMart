// const { type } = require("express/lib/response");
// Math.floor(Math.random() * (5 - 3.9) + 3.9)
const pokemonArr = [
  {
    name: "Bulbasaur",
    type: "Grass, Poison",
    image: "https://i.imgur.com/VN6df4o.jpeg",
    price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    countInStock: Math.floor(Math.random() * 5),
    rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
    numReviews: Math.ceil(Math.random() * 20),
  },
  {
    name: "Ivysaur",
    type: "Grass, Poison",
    image: "https://i.imgur.com/gktbDGb.jpeg",
    price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    countInStock: Math.floor(Math.random() * 5),
    rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
    numReviews: Math.ceil(Math.random() * 20),
  },
  {
    name: "Venusaur",
    type: "Grass, Poison",
    image: "https://i.imgur.com/0liEa8F.jpeg",
    price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    countInStock: Math.floor(Math.random() * 5),
    rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
    numReviews: Math.ceil(Math.random() * 20),
  },
  // {
  //
  //   name: "Charmander",
  //   type: "Fire",
  //   image: "https://i.imgur.com/HOjIuKA.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Charmeleon",
  //   type: "Fire",
  //   image: "https://i.imgur.com/kKSB3U3.jpeg",
  //   description:
  //     "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Charizard",
  //   type: "Fire, Flying",
  //   image: "https://i.imgur.com/4mI8dBA.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Squirtle",
  //   type: "Water",
  //   image: "https://i.imgur.com/lHHHiNh.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Wartortle",
  //   type: "Water",
  //   image: "https://i.imgur.com/Yd3LVZI.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Blastoise",
  //   type: "Water",
  //   image: "https://i.imgur.com/EXJDRhw.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Caterpie",
  //   type: "Bug",
  //   image: "https://i.imgur.com/ZycId9a.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Metapod",
  //   type: "Bug",
  //   image: "https://i.imgur.com/8drBAVu.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Butterfree",
  //   type: "Bug, Flying",
  //   image: "https://i.imgur.com/t7oaYHl.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Weedle",
  //   type: "Bug, Poison",
  //   image: "https://i.imgur.com/Ff2IPEr.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Kakuna",
  //   type: "Bug, Poison",
  //   image: "https://i.imgur.com/eF5uT9e.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Beedrill",
  //   type: "Bug, Poison",
  //   image: "https://i.imgur.com/AwXlJOM.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Pidgey",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/DyW28fI.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Pidgeotto",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/KEWWBDz.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Pidgeot",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/Isp7ZR8.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Rattata",
  //   type: "Normal",
  //   image: "https://i.imgur.com/LIe3ZLt.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Raticate",
  //   type: "Normal",
  //   image: "https://i.imgur.com/Bhf34OF.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Spearow",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/pCatj7Z.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Inept at flying high. However, it can fly around very fast to protect its territory.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Fearow",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/C7UwKqL.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Ekans",
  //   type: "Poison",
  //   image: "https://i.imgur.com/nHbxnyS.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Arbok",
  //   type: "Poison",
  //   image: "https://i.imgur.com/aH8PTbs.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Pikachu",
  //   type: "Electric",
  //   image: "https://i.imgur.com/4SrGCdX.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Raichu",
  //   type: "Electric",
  //   image: "https://i.imgur.com/VOc1Gxp.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its long tail serves as a ground to protect itself from its own high-voltage power.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Sandshrew",
  //   type: "Ground",
  //   image: "https://i.imgur.com/VhBLL6V.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Sandslash",
  //   type: "Ground",
  //   image: "https://i.imgur.com/fFazao0.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidoran-f",
  //   type: "Poison",
  //   image: "https://i.imgur.com/xXlBKf5.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidorina",
  //   type: "Poison",
  //   image: "https://i.imgur.com/gjHiDlj.jpeg/",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidoqueen",
  //   type: "Poison",
  //   image: "https://i.imgur.com/emaLahw.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidoran-m",
  //   type: "Poison",
  //   image: "https://i.imgur.com/MyiD3Cm.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidorino",
  //   type: "Poison",
  //   image: "https://i.imgur.com/Nfb7TGJ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Nidoking",
  //   type: "Poison",
  //   image: "https://i.imgur.com/z17kift.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Clefairy",
  //   type: "Bug",
  //   image: "https://i.imgur.com/CQACXLN.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Clefable",
  //   type: "Fairy",
  //   image: "https://i.imgur.com/PKTdqX7.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Vulpix",
  //   type: "Fire",
  //   image: "https://i.imgur.com/anumWPm.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Ninetales",
  //   type: "Fire",
  //   image: "https://i.imgur.com/BsiJHcr.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Jigglypuff",
  //   type: "Normal, Fairy",
  //   image: "https://i.imgur.com/ROrTahE.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Wigglytuff",
  //   type: "Normal, Fairy",
  //   image: "https://i.imgur.com/jGUNMln.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Zubat",
  //   type: "Poison, Flying",
  //   image: "https://i.imgur.com/XcE9Yt7.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Golbat",
  //   type: "Poison, Flying",
  //   image: "https://i.imgur.com/mQah8G0.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Oddish",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/dehfWs9.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Gloom",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/xCMibYC.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Vileplume",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/XQKhnhN.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Paras",
  //   type: "Bug, Grass",
  //   image: "https://i.imgur.com/KurxNRa.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Parasect",
  //   type: "Bug, Grass",
  //   image: "https://i.imgur.com/7PJe4sJ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Venonat",
  //   type: "Bug, Poison",
  //   image: "https://i.imgur.com/9qUyaaX.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Venomoth",
  //   type: "Bug, Poison",
  //   image: "https://i.imgur.com/S8AdnGV.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Diglett",
  //   type: "Ground",
  //   image: "https://i.imgur.com/H56otDx.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Dugtrio",
  //   type: "Ground",
  //   image: "https://i.imgur.com/EibRcjQ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Meowth",
  //   type: "Normal",
  //   image: "https://i.imgur.com/TlPRD2d.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Persian",
  //   type: "Normal",
  //   image: "https://i.imgur.com/0DDug1o.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Psyduck",
  //   type: "Water",
  //   image: "https://i.imgur.com/kXfAI8l.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Golduck",
  //   type: "Water",
  //   image: "https://i.imgur.com/jLQqU7I.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Mankey",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/xhGDYGK.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Primeape",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/hkonqgU.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It stops being angry only when nobody else is around. To view this moment is very difficult.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Growlithe",
  //   type: "Fire",
  //   image: "https://i.imgur.com/nYfelHI.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Arcanine",
  //   type: "Fire",
  //   image: "https://i.imgur.com/G5LI3G8.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Poliwag",
  //   type: "Water",
  //   image: "https://i.imgur.com/PJ1ENgC.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Poliwhirl",
  //   type: "Water",
  //   image: "https://i.imgur.com/nEFTNv5.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Poliwrath",
  //   type: "Water, Fighting",
  //   image: "https://i.imgur.com/dbg0shr.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Abra",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/CDzuaWN.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Kadabra",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/pIgbAWm.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Alakazam",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/xlSt3tS.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Machop",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/PNTbgVd.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Machoke",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/jfcUfwI.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Machamp",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/rnCHg0O.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Bellsprout",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/Tcgxz3m.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Weepinbell",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/hCXAyiw.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Victreebel",
  //   type: "Grass, Poison",
  //   image: "https://i.imgur.com/EgGId1U.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Tentacool",
  //   type: "Water, Poison",
  //   image: "https://i.imgur.com/9jKJCwM.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Tentacruel",
  //   type: "Water, Poison",
  //   image: "https://i.imgur.com/X9PslWV.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Geodude",
  //   type: "Rock, Ground",
  //   image: "https://i.imgur.com/LVAwAPc.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Graveler",
  //   type: "Rock, Ground",
  //   image: "https://i.imgur.com/iW5o9Jv.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Golem",
  //   type: "Rock, Ground",
  //   image: "https://i.imgur.com/R1T66t3.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Ponyta",
  //   type: "Fire",
  //   image: "https://i.imgur.com/rypSExt.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Rapidash",
  //   type: "Fire",
  //   image: "https://i.imgur.com/rUiPMNV.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Slowpoke",
  //   type: "Water, Psychic",
  //   image: "https://i.imgur.com/Uo2gswf.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Slowbro",
  //   type: "Water, Psychic",
  //   image: "https://i.imgur.com/CD7gGVx.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Magnemite",
  //   type: "Electric, Steel",
  //   image: "https://i.imgur.com/SvEC8Hh.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Magneton",
  //   type: "Electric, Steel",
  //   image: "https://i.imgur.com/nLjpUHM.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Farfetchd",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/fSepXZj.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Doduo",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/rEXwuiw.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Dodrio",
  //   type: "Normal, Flying",
  //   image: "https://i.imgur.com/jVq4xar.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Seel",
  //   type: "Water",
  //   image: "https://i.imgur.com/YSMGYyu.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Dewgong",
  //   type: "Water",
  //   image: "https://i.imgur.com/VAJ6GtL.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Grimer",
  //   type: "Poison",
  //   image: "https://i.imgur.com/ZYrjLDV.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Muk",
  //   type: "Poison",
  //   image: "https://i.imgur.com/bAqJQf3.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Shellder",
  //   type: "Water",
  //   image: "https://i.imgur.com/jrUNlPN.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Cloyster",
  //   type: "Water",
  //   image: "https://i.imgur.com/8RkFQny.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Gastly",
  //   type: "Ghost, Poison",
  //   image: "https://i.imgur.com/S4vIZuQ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Haunter",
  //   type: "Ghost, Poison",
  //   image: "https://i.imgur.com/VXDpVXj.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Gengar",
  //   type: "Ghost, Poison",
  //   image: "https://i.imgur.com/PtKdgyc.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Onix",
  //   type: "Rock, Ground",
  //   image: "https://i.imgur.com/T0G7czE.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Drowzee",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/eIfMJwW.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Hypno",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/VJGv6B9.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Krabby",
  //   type: "Water",
  //   image: "https://i.imgur.com/sqYPAXX.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //
  //   name: "Kingler",
  //   type: "Water",
  //   image: "https://i.imgur.com/Nlrs71U.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Voltorb",
  //   type: "Electric",
  //   image: "https://i.imgur.com/lfAYoh6.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Electrode",
  //   type: "Electric",
  //   image: "https://i.imgur.com/CpF1nYy.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Exeggcute",
  //   type: "Grass, Psychic",
  //   image: "https://i.imgur.com/xyLW37j.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Exeggutor",
  //   type: "Grass, Psychic",
  //   image: "https://i.imgur.com/0ZQ1SEm.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Cubone",
  //   type: "Ground",
  //   image: "https://i.imgur.com/EnYNIGM.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Marowak",
  //   type: "Ground",
  //   image: "https://i.imgur.com/To5as6p.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Hitmonlee",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/HzHPT7u.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Hitmonchan",
  //   type: "Fighting",
  //   image: "https://i.imgur.com/ZAXu2Wc.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Lickitung",
  //   type: "Normal",
  //   image: "https://i.imgur.com/IxLzpv8.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Koffing",
  //   type: "Poison",
  //   image: "https://i.imgur.com/B2NCk1x.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Weezing",
  //   type: "Poison",
  //   image: "https://i.imgur.com/KGavDDz.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It mixes gases between its two bodies. It’s said that these Pokémon were seen all over the Galar region back in the day.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Rhyhorn",
  //   type: "Ground, Rock",
  //   image: "https://i.imgur.com/FupyBEh.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Rhydon",
  //   type: "Ground, Rock",
  //   image: "https://i.imgur.com/mG2x6mn.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Chansey",
  //   type: "Normal",
  //   image: "https://i.imgur.com/j6lYURt.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The egg Chansey carries is not only delicious but also packed with nutrition. It’s used as a high-class cooking ingredient.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Tangela",
  //   type: "Grass",
  //   image: "https://i.imgur.com/d0pH3jJ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Kangaskhan",
  //   type: "Normal",
  //   image: "https://i.imgur.com/WCBM60l.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Horsea",
  //   type: "Water",
  //   image: "https://i.imgur.com/hPJDz9s.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Seadra",
  //   type: "Water",
  //   image: "https://i.imgur.com/0sBpEWn.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Goldeen",
  //   type: "Water",
  //   image: "https://i.imgur.com/sjD6jjp.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Seaking",
  //   type: "Water",
  //   image: "https://i.imgur.com/jSwRMPu.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Staryu",
  //   type: "Water",
  //   image: "https://i.imgur.com/MJ4Tq3S.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Starmie",
  //   type: "Water",
  //   image: "https://i.imgur.com/IwyMpFo.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Mr. Mime",
  //   type: "Psychic, Fairy",
  //   image: "https://i.imgur.com/AolSJTf.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Scyther",
  //   type: "Bug, Flying",
  //   image: "https://i.imgur.com/ETgwGYK.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Jynx",
  //   type: "Ice, Psychic",
  //   image: "https://i.imgur.com/2DK6aEu.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Electabuzz",
  //   type: "Electric",
  //   image: "https://i.imgur.com/VTlw60a.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Magmar",
  //   type: "Fire",
  //   image: "https://i.imgur.com/5Fu8RcL.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Pinsir",
  //   type: "Bug",
  //   image: "https://i.imgur.com/Orx7o0E.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Tauros",
  //   type: "Normal",
  //   image: "https://i.imgur.com/3cC6rPn.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Magikarp",
  //   type: "Water",
  //   image: "https://i.imgur.com/nbxoMDn.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Gyarados",
  //   type: "Water, Flying",
  //   image: "https://i.imgur.com/YRrbP9f.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Lapras",
  //   type: "Water",
  //   image: "https://i.imgur.com/w87ZZ80.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Ditto",
  //   type: "Normal",
  //   image: "https://i.imgur.com/juGlzg0.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Eevee",
  //   type: "Normal",
  //   image: "https://i.imgur.com/7uoeLgG.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It has the ability to alter the composition of its body to suit its surrounding environment.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Vaporeon",
  //   type: "Water",
  //   image: "https://i.imgur.com/FprzdCt.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Jolteon",
  //   type: "Electric",
  //   image: "https://i.imgur.com/mNNnCkS.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Flareon",
  //   type: "Fire",
  //   image: "https://i.imgur.com/PTVe3TB.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Porygon",
  //   type: "Normal",
  //   image: "https://i.imgur.com/KyQyCdv.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Omanyte",
  //   type: "Rock, Water",
  //   image: "https://i.imgur.com/4RFzPj9.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Omastar",
  //   type: "Rock, Water",
  //   image: "https://i.imgur.com/yge9fQI.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Kabuto",
  //   type: "Rock, Water",
  //   image: "https://i.imgur.com/lUDnrk6.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Kabutops",
  //   type: "Rock, Water",
  //   image: "https://i.imgur.com/TcwiOvv.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Aerodactyl",
  //   type: "Rock, Flying",
  //   image: "https://i.imgur.com/oW0ZxfW.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Snorlax",
  //   type: "Normal",
  //   image: "https://i.imgur.com/Hlwaziz.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Articuno",
  //   type: "Ice, Flying",
  //   image: "https://i.imgur.com/EREOJBj.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Zapdos",
  //   type: "Electric",
  //   image: "https://i.imgur.com/BwXCCKJ.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Moltres",
  //   type: "Fire",
  //   image: "https://i.imgur.com/9h9f44p.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Dratini",
  //   type: "Dragon",
  //   image: "https://i.imgur.com/KRlqWJE.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Dragonair",
  //   type: "Dragon",
  //   image: "https://i.imgur.com/5VoV8es.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Dragonite",
  //   type: "Dragon",
  //   image: "https://i.imgur.com/5iLnel4.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
  // {
  //

  //   name: "Mewtwo",
  //   type: "Psychic",
  //   image: "https://i.imgur.com/iFop2sr.jpeg",
  //   price: (Math.floor(Math.random() * 100000) / 100).toFixed(2),
  //   description:
  //     "ts DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
  //   countInStock: Math.floor(Math.random() * 5),
  //   rating: Number((Math.random() * (5 - 3) + 3).toFixed(1)),
  //   numReviews: Math.ceil(Math.random() * 20),
  // },
];
export default pokemonArr;
