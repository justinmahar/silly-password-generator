const mammals = [
  'Alpaca',
  'Anteater',
  'Antelope',
  'Ape',
  'Armadillo',
  'Badger',
  'Beaver',
  'Bobcat',
  'Buffalo',
  'Bull',
  'Camel',
  'Capybara',
  'Caribou',
  'Cat',
  'Cheetah',
  'Chimpanzee',
  'Chipmunk',
  'Cougar',
  'Cow',
  'Coyote',
  'Deer',
  'Dingo',
  'Dog',
  'Dolphin',
  'Donkey',
  'Elephant',
  'Elk',
  'Ferret',
  'Fox',
  'Giraffe',
  'Goat',
  'Gorilla',
  'Groundhog',
  'Guinea Pig',
  'Hamster',
  'Hare',
  'Hedgehog',
  'Hippopotamus',
  'Horse',
  'Hyena',
  'Jackal',
  'Jaguar',
  'Kangaroo',
  'Koala',
  'Lemur',
  'Leopard',
  'Lion',
  'Llama',
  'Lynx',
  'Mammoth',
  'Manatee',
  'Meerkat',
  'Mink',
  'Mole',
  'Mongoose',
  'Monkey',
  'Moose',
  'Mouse',
  'Narwhal',
  'Ocelot',
  'Opossum',
  'Orangutan',
  'Orca',
  'Otter',
  'Ox',
  'Panda',
  'Pangolin',
  'Pig',
  'Platypus',
  'Polar Bear',
  'Porcupine',
  'Porpoise',
  'Prairie Dog',
  'Rabbit',
  'Raccoon',
  'Rat',
  'Reindeer',
  'Rhinoceros',
  'Sea Lion',
  'Seal',
  'Sheep',
  'Skunk',
  'Sloth',
  'Snow Leopard',
  'Squirrel',
  'Sun Bear',
  'Tapir',
  'Tasmanian Devil',
  'Tiger',
  'Wallaby',
  'Walrus',
  'Warthog',
  'Weasel',
  'Whale',
  'Wildebeest',
  'Wolf',
  'Wolverine',
  'Wombat',
  'Yak',
  'Zebra',
];
const birds = [
  'Blue Jay',
  'Bluebird',
  'Buzzard',
  'Chickadee',
  'Chicken',
  'Condor',
  'Crane',
  'Crow',
  'Dove',
  'Duck',
  'Eagle',
  'Emu',
  'Falcon',
  'Finch',
  'Flamingo',
  'Goose',
  'Grouse',
  'Hawk',
  'Hen',
  'Heron',
  'Hummingbird',
  'Kestrel',
  'Kiwi',
  'Lark',
  'Macaw',
  'Magpie',
  'Mockingbird',
  'Ostrich',
  'Owl',
  'Parakeet',
  'Parrot',
  'Partridge',
  'Pelican',
  'Penguin',
  'Pheasant',
  'Pigeon',
  'Quail',
  'Raven',
  'Roadrunner',
  'Robin',
  'Rooster',
  'Sea Gull',
  'Starling',
  'Stork',
  'Sunbird',
  'Swan',
  'Toucan',
  'Turkey',
  'Vulture',
  'Woodpecker',
];

const reptiles = [
  'Alligator',
  'Anaconda',
  'Bearded Dragon',
  'Boa Constrictor',
  'Caiman',
  'Chameleon',
  'Cobra',
  'Copperhead',
  'Crocodile',
  'Gecko',
  'Iguana',
  'Komodo Dragon',
  'Lizard',
  'Mamba',
  'Python',
  'Rattlesnake',
  'Skink',
  'Snake',
  'Tortoise',
  'Turtle',
  'Viper',
];

const amphibians = ['Frog', 'Newt', 'Bullfrog', 'Toad', 'Salamander', 'Mudpuppy', 'Tadpole', 'Axolotl'];

const fish = [
  'Anchovy',
  'Angelfish',
  'Anglerfish',
  'Barracuda',
  'Bluegill',
  'Carp',
  'Catfish',
  'Clownfish',
  'Cod',
  'Eel',
  'Flounder',
  'Flying Fish',
  'Goldfish',
  'Grouper',
  'Guppy',
  'Herring',
  'Koi Fish',
  'Mackerel',
  'Marlin',
  'Piranha',
  'Pufferfish',
  'Salmon',
  'Seabass',
  'Shark',
  'Snapper',
  'Squid',
  'Stingray',
  'Sturgeon',
  'Sunfish',
  'Swordfish',
  'Tigerfish',
  'Tilapia',
  'Trout',
  'Tuna',
];

const dinosaurs = ['Dinosaur'];

const insects = [
  'Ant',
  'Antlion',
  'Aphid',
  'Beetle',
  'Bumblebee',
  'Butterfly',
  'Caterpillar',
  'Cicada',
  'Cockroach',
  'Cricket',
  'Damselfly',
  'Dragonfly',
  'Earwig',
  'Flea',
  'Fly',
  'Fruit Fly',
  'Grasshopper',
  'Honey Bee',
  'Hornet',
  'Horse fly',
  'Hoverfly',
  'Katydid',
  'Lacewing',
  'Ladybug',
  'Leafhopper',
  'Locust',
  'Mayfly',
  'Mosquito',
  'Moth',
  'Praying Mantis',
  'Scorpionfly',
  'Silverfish',
  'Sowbug',
  'Stick bug',
  'Stink Bug',
  'Stonefly',
  'Sweat Bee',
  'Termite',
  'Wasp',
  'Yellow Jacket',
];
const arachnids = ['Spider', 'Scorpion', 'Daddy Long Legs', 'Tarantula'];
const crustaceans = ['Barnacle', 'Crab', 'Lobster', 'Krill', 'Prawn', 'Shrimp', 'Crayfish'];
const mollusks = ['Snail', 'Slug', 'Nautilus', 'Squid', 'Octopus', 'Clam', 'Mussel', 'Oyster', 'Scallop', 'Cuttlefish'];
const invertebrates = ['Worm', 'Jellyfish', 'Sponge', 'Millipede', 'Centipede'];
const mythicalCreatures = [
  'Griffin',
  'Harpy',
  'Gorgon',
  'Hippogriff',
  'Phoenix',
  'Thunderbird',
  'Hellhound',
  'Werewolf',
  'Chimera',
  'Sphinx',
  'Mermaid',
  'Kraken',
  'Sasquatch',
  'Yeti',
  'Jackalope',
  'Basilisk',
  'Dragon',
  'Monster',
  'Hydra',
  'Unicorn',
  'Pegasus',
  'Centaur',
  'Golem',
  'Homunculus',
  'Cyclops',
  'Titan',
  'Fairy',
  'Leprechaun',
  'Gnome',
  'Ghoul',
  'Imp',
  'Troll',
  'Pixie',
  'Serpent',
  'Ogre',
  'Elf',
  'Siren',
  'Dementor',
  'Giant',
  'Goblin',
  'Reaper',
  'Thestral',
  'Poltergeist',
  'Banshee',
  'Nymph',
  'Demon',
  'Angel',
];

export const allCreatures = [
  ...mammals,
  ...birds,
  ...reptiles,
  ...amphibians,
  ...fish,
  ...dinosaurs,
  ...insects,
  ...arachnids,
  ...crustaceans,
  ...mollusks,
  ...invertebrates,
  ...mythicalCreatures,
];
// --- END Creatures ---

// --- START Attributes ---

export const attributes: string[] = [
  'Abandoned',
  'Abhorrent',
  'Abiding',
  'Addicted',
  'Adorable',
  'Adventurous',
  'Afraid',
  'Aggressive',
  'Agreeable',
  'Alcoholic',
  'Alert',
  'Aloof',
  'Ambitious',
  'Amused',
  'Ancient',
  'Angry',
  'Annoyed',
  'Annoying',
  'Anxious',
  'Arrogant',
  'Ashamed',
  'Attractive',
  'Auspicious',
  'Average',
  'Awesome',
  'Awful',
  'Bad',
  'Barren',
  'Baseless',
  'Bashful',
  'Basic',
  'Beautiful',
  'Belligerent',
  'Beneficial',
  'Best',
  'Better',
  'Bewildered',
  'Big',
  'Bitter',
  'Bizarre',
  'Black',
  'Bloody',
  'Blue',
  'Blushing',
  'Bored',
  'Boring',
  'Brainy',
  'Brave',
  'Bright',
  'Brilliant',
  'Broken',
  'Busy',
  'Calm',
  'Capable',
  'Careful',
  'Careless',
  'Caring',
  'Cautious',
  'Charming',
  'Cheap',
  'Cheerful',
  'Chubby',
  'Clean',
  'Clever',
  'Clumsy',
  'Cold',
  'Colorful',
  'Combative',
  'Comfortable',
  'Concerned',
  'Condemned',
  'Confused',
  'Cool',
  'Cooperative',
  'Courageous',
  'Crazy',
  'Creepy',
  'Cruel',
  'Curious',
  'Cute',
  'Daft',
  'Dainty',
  'Damaged',
  'Damn Fine',
  'Damned',
  'Damp',
  'Dangerous',
  'Dank',
  'Dark',
  'Dauntless',
  'Dead',
  'Defeated',
  'Defective',
  'Defiant',
  'Delicate',
  'Delicious',
  'Delightful',
  'Depressed',
  'Determined',
  'Difficult',
  'Dirty',
  'Discombobulated',
  'Disgusted',
  'Disgusting',
  'Disturbed',
  'Dizzy',
  'Doubtful',
  'Drab',
  'Dull',
  'Dusty',
  'Eager',
  'Educated',
  'Efficient',
  'Elated',
  'Elderly',
  'Elegant',
  'Embarrassed',
  'Enchanting',
  'Encouraging',
  'Energetic',
  'Enthusiastic',
  'Envious',
  'Evil',
  'Excellent',
  'Excited',
  'Exciting',
  'Expensive',
  'Exuberant',
  'Fabulous',
  'Fair',
  'Faithful',
  'Famous',
  'Fancy',
  'Fantastic',
  'Fast',
  'Fearful',
  'Fearless',
  'Ferocious',
  'Fierce',
  'Filthy',
  'Fine',
  'Fluffy',
  'Foolish',
  'Forgetful',
  'Fragile',
  'Frail',
  'Frantic',
  'Friendly',
  'Frightened',
  'Funny',
  'Fuzzy',
  'Gentle',
  'Gifted',
  'Glamorous',
  'Gleaming',
  'Glorious',
  'Good',
  'Gorgeous',
  'Graceful',
  'Grateful',
  'Great',
  'Greedy',
  'Green',
  'Grieving',
  'Grotesque',
  'Grumpy',
  'Handsome',
  'Happy',
  'Harsh',
  'Healthy',
  'Heavy',
  'Helpful',
  'Helpless',
  'Heroic',
  'Hilarious',
  'Homeless',
  'Homely',
  'Horrible',
  'Hot',
  'Huge',
  'Humorous',
  'Hungry',
  'Hurt',
  'Ignorant',
  'Illegal',
  'Imaginary',
  'Impolite',
  'Important',
  'Impossible',
  'Inexpensive',
  'Innocent',
  'Inquisitive',
  'Intelligent',
  'Interesting',
  'Itchy',
  'Jealous',
  'Jittery',
  'Jolly',
  'Joyous',
  'Juicy',
  'Juvenile',
  'Kind',
  'Large',
  'Lazy',
  'Light',
  'Little',
  'Lively',
  'Lone',
  'Lonely',
  'Long',
  'Loud',
  'Lovely',
  'Lucky',
  'Macho',
  'Magical',
  'Magnificent',
  'Massive',
  'Mature',
  'Mean',
  'Messy',
  'Mind blowing',
  'Modern',
  'Motionless',
  'Muddy',
  'Mysterious',
  'Nasty',
  'Naughty',
  'Nervous',
  'Nice',
  'Noisy',
  'Nutty',
  'Obedient',
  'Obese',
  'Obnoxious',
  'Odd',
  'Old fashioned',
  'Old',
  'Outrageous',
  'Outstanding',
  'Overconfident',
  'Panicky',
  'Peaceful',
  'Perfect',
  'Pink',
  'Plain',
  'Pleasant',
  'Poised',
  'Polite',
  'Poor',
  'Powerful',
  'Precious',
  'Pretty',
  'Prickly',
  'Proud',
  'Purple',
  'Putrid',
  'Puzzled',
  'Quaint',
  'Quick',
  'Quiet',
  'Ready',
  'Real',
  'Red',
  'Relieved',
  'Remarkable',
  'Repulsive',
  'Responsible',
  'Rich',
  'Romantic',
  'Royal',
  'Rude',
  'Scary',
  'Scintillating',
  'Secretive',
  'Selfish',
  'Serious',
  'Sharp',
  'Shiny',
  'Shocking',
  'Short',
  'Shy',
  'Sick',
  'Silly',
  'Sincere',
  'Skinny',
  'Sleepy',
  'Slim',
  'Slow',
  'Small',
  'Smiling',
  'Soft',
  'Sparkling',
  'Spicy',
  'Spiritual',
  'Splendid',
  'Spotless',
  'Stormy',
  'Strange',
  'Strong',
  'Stupid',
  'Successful',
  'Super',
  'Supreme',
  'Sweet',
  'Tactful',
  'Talented',
  'Tall',
  'Tame',
  'Tangy',
  'Tasteful',
  'Tasty',
  'Temperate',
  'Tenacious',
  'Tender hearted',
  'Tender',
  'Tense',
  'Terrible',
  'Terrific',
  'Thankful',
  'Therapeutic',
  'Thicc',
  'Thick',
  'Thin',
  'Thorough',
  'Thoughtful',
  'Thoughtless',
  'Tiny',
  'Tired',
  'Tough',
  'Troubled',
  'Ugliest',
  'Ugly',
  'Unbreakable',
  'Uninterested',
  'Unique',
  'Unsightly',
  'Untidy',
  'Unusual',
  'Upset',
  'Uptight',
  'Victorious',
  'Violent',
  'Vivacious',
  'Vulgar',
  'Wandering',
  'Warm',
  'Weak',
  'Wealthy',
  'Weary',
  'Wicked',
  'Wide eyed',
  'Wild',
  'Wise',
  'Witty',
  'Wonderful',
  'Worried',
  'Worrisome',
  'Young',
  'Youthful',
  'Zany',
  'Zealous',
];
