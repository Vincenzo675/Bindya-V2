
const { System, isPrivate } = require('../lib/');

// Static hero data for Mobile Legends: Bang Bang

const heroes = {

    "Miya": { 
        description: "The Moonlight Archer, skilled in rapid-fire techniques and ambush tactics.",
        role: "Marksman",
        specialities: ["Finisher", "Damage"],
        lane: "Gold Lane",
        region: "Azrya Woodlands"
    },

    "Balmond": {
        description: "The Bloody Beast, a fearsome fighter known for his high damage and regeneration.",
        role: "Fighter",
        specialities: ["Damage", "Regeneration"],
        lane: "Jungle",
        region: "The Barren Lands"
    },

    "Saber": {
        description: "A stealthy assassin capable of eliminating enemies with high burst damage.",
        role: "Assassin",
        specialities: ["High Damage", "Burst"],
        lane: "Mid Lane",
        region: "Shadow Swamp"
    },

    "Alice": {
        description: "A young and powerful mage adept at dealing high damage and controlling crowds.",
        role: "Mage",
        specialities: ["High Damage", "Crowd Control"],
        lane: "Mid Lane",
        region: "Magic Academy"
    },

    "Nana": {
        description: "Cute but deadly, Nana uses her magic to provide utility and high damage.",
        role: "Mage",
        specialities: ["High Damage", "Utility"],
        lane: "Mid Lane",
        region: "Mystic Realm"
    },

    "Tigreal": {
        description: "The fearless knight, known for his high HP and crowd control abilities.",
        role: "Tank",
        specialities: ["High HP", "Crowd Control"],
        lane: "Exp Lane",
        region: "Imperial City"
    },

    "Alucard": {
        description: "A deadly assassin turned fighter, skilled in dealing high damage and sustaining through battles.",
        role: "Fighter",
        specialities: ["High Damage", "Sustain"],
        lane: "Exp Lane",
        region: "Dark Forest"
    },

    "Karina": {
        description: "The agile assassin who can deal massive damage while evading attacks.",
        role: "Assassin",
        specialities: ["Burst Damage", "Mobility"],
        lane: "Mid Lane",
        region: "The Shadow Abyss"
    },

    "Akai": {
        description: "The playful panda who can initiate fights and provide crowd control.",
        role: "Tank",
        specialities: ["Crowd Control", "Initiator"],
        lane: "Exp Lane",
        region: "Cloud Valley"
    },

    "Franco": {
        description: "The brutal fighter with strong initiation capabilities.",
        role: "Tank",
        specialities: ["Crowd Control", "Initiation"],
        lane: "Exp Lane",
        region: "The Land of Dawn"
    },

    "Bane": {
        description: "The pirate captain who excels in area damage and regeneration.",
        role: "Fighter",
        specialities: ["Area Damage", "Sustain"],
        lane: "Jungle",
        region: "Bermuda Triangle"
    },

    "Bruno": {
        description: "The football star who specializes in long-range damage and finishing.",
        role: "Marksman",
        specialities: ["High Burst Damage", "Finisher"],
        lane: "Gold Lane",
        region: "Kinjou"
    },

    "Clint": {
        description: "The quick-draw marksman known for his burst damage and mobility.",
        role: "Marksman",
        specialities: ["Burst Damage", "Mobility"],
        lane: "Gold Lane",
        region: "The Western Isles"
    },

    "Rafaela": {
        description: "The angelic healer who supports her team with healing and crowd control.",
        role: "Support",
        specialities: ["Healing", "Crowd Control"],
        lane: "Roaming",
        region: "Heaven's Edge"

    },

    "Eudora": {
        description: "The electric mage who excels in burst damage and crowd control.",
        role: "Mage",
        specialities: ["High Burst Damage", "Stun"],
        lane: "Mid Lane",
        region: "Magic Academy"
    },

    "Zilong": {
        description: "The dragon warrior known for his high mobility and damage.",
        role: "Fighter",
        specialities: ["Mobility", "Damage"],
        lane: "Jungle",
        region: "Dragon's Lair"
    },

    "Fanny": {
        description: "The agile assassin who can traverse the battlefield quickly and deal devastating damage.",
        role: "Assassin",
        specialities: ["Mobility", "Burst Damage"],
        lane: "Jungle",
        region: "Shadow Swamp"
    },

    "Layla": {
        description: "The marksman with long-range attacks, specializing in high damage output.",
        role: "Marksman",
        specialities: ["High Range Damage", "Finisher"],
        lane: "Gold Lane",
        region: "Sunspark Plains"
    },

    "Minotaur": {
        description: "The powerful tank who excels in team fights with healing abilities.",
        role: "Tank",
        specialities: ["Healing", "Crowd Control"],
        lane: "roaming",
        region: "The Minotaur's Domain"
    },

    "Lolita": {

        description: "The guardian with a shield that can absorb damage and control enemies.",

        role: "Tank",

        specialities: ["Crowd Control", "Defense"],

        lane: "Exp Lane",

        region: "Land of Dawn"

    },

    "Hayabusa": {

        description: "The swift assassin capable of dealing burst damage while escaping.",

        role: "Assassin",

        specialities: ["High Burst Damage", "Mobility"],

        lane: "Jungle",

        region: "The Shadow Forest"

    },

    "Freya": {

        description: "The valiant warrior with high damage output and sustainability.",

        role: "Fighter",

        specialities: ["Damage", "Sustain"],

        lane: "Exp Lane",

        region: "Elysium"

    },

    "Gord": {

        description: "A powerful mage with the ability to control magical energy, Gord specializes in burst damage and crowd control.",

        role: "Mage",

        specialities: ["Burst Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Natalia": {

        description: "An assassin who excels at ambushing and executing enemies, Natalia is stealthy and deadly.",

        role: "Assassin",

        specialities: ["Stealth", "Burst Damage"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Kagura": {

        description: "A versatile mage who can control a magic umbrella to deal damage and escape, Kagura is known for her mobility.",

        role: "Mage",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Chou": {

        description: "A fighter who excels at crowd control and mobility, Chou can knock enemies away and isolate targets.",

        role: "Fighter",

        specialities: ["Mobility", "Crowd Control"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Sun": {

        description: "A fighter who can summon clones of himself to confuse enemies and deal damage, Sun is a master of deception.",

        role: "Fighter",

        specialities: ["Clone Summoning", "Sustained Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Alpha": {

        description: "A powerful fighter with mechanical enhancements, Alpha specializes in dealing high damage and tanking.",

        role: "Fighter",

        specialities: ["Damage Dealer", "Tank"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Ruby": {

        description: "A fighter who uses a scythe to deal damage and sustain through lifesteal, Ruby excels in close combat.",

        role: "Fighter",

        specialities: ["Lifesteal", "Crowd Control"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Yi Sun-shin": {

        description: "A marksman with the ability to switch between ranged and melee attacks, Yi Sun-shin excels at mobility and damage.",

        role: "Marksman",

        specialities: ["Mobility", "Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Moskov": {

        description: "A marksman who specializes in high damage and penetration, Moskov excels at taking down enemies from afar.",

        role: "Marksman",

        specialities: ["High Damage", "Penetration"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Johnson": {

        description: "A tank who can transform into a vehicle to engage enemies, Johnson excels at initiating fights and crowd control.",

        role: "Tank",

        specialities: ["Initiation", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Cyclops": {

        description: "A mage known for his magical prowess and high burst damage, Cyclops excels at dealing area damage.",

        role: "Mage",

        specialities: ["Area Damage", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Estes": {

        description: "A support hero who excels at healing allies, Estes can sustain his team during fights.",

        role: "Support",

        specialities: ["Healing", "Sustain"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Hilda": {

        description: "A fighter who excels at sustaining through damage while dealing heavy hits, Hilda thrives in the frontline.",

        role: "Fighter",

        specialities: ["Sustain", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Aurora": {

        description: "A mage who controls ice to deal area damage and freeze enemies, Aurora excels at crowd control.",

        role: "Mage",

        specialities: ["Crowd Control", "Area Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Lapu-lapu": {

        description: "A fighter who can switch between offense and defense, Lapu-lapu excels in dueling and area control.",

        role: "Fighter",

        specialities: ["Dual Wielding", "Area Control"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Vexana": {

        description: "A mage who manipulates souls to deal damage and control enemies, Vexana excels at crowd control.",

        role: "Mage",

        specialities: ["Crowd Control", "Damage Over Time"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Roger": {

        description: "A versatile fighter who can switch between ranged and melee attacks, Roger excels at flexibility.",

        role: "Fighter",

        specialities: ["Versatility", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Karrie": {

        description: "A marksman who excels at shredding tanks, Karrie can deal consistent damage with her passive ability.",

        role: "Marksman",

        specialities: ["High Attack Speed", "Tank Shredder"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Gatotkaca": {

        description: "A tank with the ability to soak up damage and initiate fights, Gatotkaca excels in frontline battles.",

        role: "Tank",

        specialities: ["Initiation", "Tank"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Harley": {

        description: "A magician who excels at burst damage and mobility, Harley can quickly eliminate targets.",

        role: "Mage",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Irithel": {

        description: "A marksman who excels at mobility and sustained damage, Irithel can reposition quickly during fights.",

        role: "Marksman",

        specialities: ["Mobility", "Sustained Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Grock": {

        description: "A tank who can absorb a lot of damage and provides crowd control, Grock excels at zone control.",

        role: "Tank",

        specialities: ["Crowd Control", "Tank"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Argus": {

        description: "A fighter who can become invulnerable for a short duration, Argus excels at engaging and surviving.",

        role: "Fighter",

        specialities: ["Invulnerability", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Odette": {

        description: "A mage who excels at area damage and crowd control, Odette can deal massive damage in team fights.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Lancelot": {

        description: "A fighter known for his high burst damage and mobility, Lancelot excels at quick engagements.",

        role: "Fighter",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Diggie": {

        description: "A support hero who can remove crowd control effects from allies, Diggie excels at utility.",

        role: "Support",

        specialities: ["Utility", "Crowd Control Removal"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Hylos": {

        description: "A tank who can sustain through damage and provide crowd control, Hylos excels at frontline fighting.",

        role: "Tank",

        specialities: ["Sustain", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Zhask": {

        description: "A mage who can control a nightmare to deal damage from afar, Zhask excels in zoning enemies.",

        role: "Mage",

        specialities: ["Zoning", "Area Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Helcurt": {

        description: "An assassin who excels at mobility and burst damage, Helcurt can silence enemies and strike quickly.",

        role: "Assassin",

        specialities: ["Silence", "Burst Damage"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Pharsa": {

        description: "A mage who controls the skies to deal damage from a distance, Pharsa excels at area damage and crowd control.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Lesley": {

        description: "A marksman known for her long-range sniping capabilities, Lesley excels at dealing massive damage from a distance.",

        role: "Marksman",

        specialities: ["Long-Range Damage", "Critical Hits"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Jawhead": {

        description: "A tank who excels at mobility and crowd control, Jawhead can throw enemies around and initiate fights.",

        role: "Tank",

        specialities: ["Crowd Control", "Initiation"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Angela": {

        description: "A support hero who can heal allies and provide shields, Angela excels at sustaining her team during battles.",

        role: "Support",

        specialities: ["Healing", "Utility"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Gusion": {

        description: "An assassin known for his quick burst damage and mobility, Gusion excels at taking down squishy targets rapidly.",

        role: "Assassin",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Valir": {

        description: "A mage who controls fire to deal area damage and push enemies back, Valir excels at zoning opponents.",

        role: "Mage",

        specialities: ["Area Damage", "Zoning"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Martis": {

        description: "A fighter who excels at dealing damage and crowd control, Martis can quickly engage and disengage in fights.",

        role: "Fighter",

        specialities: ["Damage", "Crowd Control"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Uranus": {

        description: "A tank who excels in soaking damage and regeneration, Uranus can sustain himself and protect allies.",

        role: "Tank",

        specialities: ["Sustain", "Damage Absorption"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Hanabi": {

        description: "A marksman who excels at dealing high burst damage with her ultimate ability, Hanabi can clear waves and secure kills.",

        role: "Marksman",

        specialities: ["Burst Damage", "Area Control"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Chang'e": {

        description: "A mage who excels at area damage and healing, Chang'e can support her team while dealing damage.",

        role: "Mage",

        specialities: ["Area Damage", "Healing"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Kaja": {

        description: "A support hero who can snatch and control enemies, Kaja excels at catching out opponents and protecting allies.",

        role: "Support",

        specialities: ["Crowd Control", "Utility"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Selena": {

        description: "An assassin with the ability to switch forms, Selena excels at crowd control and burst damage.",

        role: "Assassin",

        specialities: ["Crowd Control", "Burst Damage"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Aldous": {

        description: "A fighter who can deal massive damage with his ultimate ability, Aldous excels at picking off squishy targets.",

        role: "Fighter",

        specialities: ["Single Target Damage", "Burst Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Claude": {

        description: "A marksman known for his mobility and sustained damage, Claude can quickly reposition and deal damage.",

        role: "Marksman",

        specialities: ["Mobility", "Sustained Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Vale": {

        description: "A mage who controls wind to deal area damage and control the battlefield, Vale excels in team fights.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Leomord": {

        description: "A fighter who can transform into a knight to deal damage and control the battlefield, Leomord excels in versatility.",

        role: "Fighter",

        specialities: ["Transformation", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Lunox": {

        description: "A mage who manipulates light and darkness, Lunox excels at burst damage and sustaining herself in fights.",

        role: "Mage",

        specialities: ["Burst Damage", "Sustain"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Hanzo": {

        description: "An assassin who can summon his spirit to deal damage, Hanzo excels at burst damage and mobility.",

        role: "Assassin",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Belerick": {

        description: "A tank who excels at absorbing damage and providing crowd control, Belerick is a strong frontline presence.",

        role: "Tank",

        specialities: ["Crowd Control", "Damage Absorption"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Kimmy": {

        description: "A marksman who uses her energy-powered gun to deal damage from a distance, Kimmy excels at poke and sustained fire.",

        role: "Marksman",

        specialities: ["Poke Damage", "Sustained Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

        "Thamuz": {

        description: "A fighter who excels at dealing damage over time with his skills, Thamuz can sustain himself while dealing damage.",

        role: "Fighter",

        specialities: ["Damage Over Time", "Sustain"],

        lane: "Exp",

        region: "Land of Dawn"

   },
   

   "Harith": {

        description: "A fast assassin who manipulates time, Harith excels at burst damage and mobility.",

        role: "Assassin",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Minsitthar": {

        description: "A fighter who excels at controlling the battlefield, Minsitthar is known for his crowd control and team fight potential.",

        role: "Fighter",

        specialities: ["Crowd Control", "Team Fight"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Kadita": {

        description: "A mage who commands water to deal area damage, Kadita excels in controlling enemies and dealing burst damage.",

        role: "Mage",

        specialities: ["Area Damage", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Faramis": {

        description: "A support mage who can revive allies and provide crowd control, Faramis excels at team fights.",

        role: "Support",

        specialities: ["Revival", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Badang": {

        description: "A fighter with strong crowd control, Badang excels at dealing damage and disrupting enemies.",

        role: "Fighter",

        specialities: ["Crowd Control", "Burst Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Khufra": {

        description: "A tank known for his initiation and crowd control, Khufra excels at disrupting enemy formations.",

        role: "Tank",

        specialities: ["Initiation", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Granger": {

        description: "A marksman who excels at burst damage and poke, Granger can deal heavy damage from a distance.",

        role: "Marksman",

        specialities: ["Burst Damage", "Poke Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Guinevere": {

        description: "A mage who excels at crowd control and burst damage, Guinevere can engage and deal damage effectively.",

        role: "Mage",

        specialities: ["Crowd Control", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Esmeralda": {

        description: "A tank-mage hybrid who excels at shielding herself and dealing area damage, Esmeralda can sustain in fights.",

        role: "Tank/Mage",

        specialities: ["Shielding", "Area Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Terizla": {

        description: "A fighter who excels at dealing damage and soaking damage with high sustain, Terizla is strong in duels.",

        role: "Fighter",

        specialities: ["Sustain", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "X.borg": {

        description: "A fighter who excels in dealing damage over time and can self-heal, X.borg is a strong frontline hero.",

        role: "Fighter",

        specialities: ["Damage Over Time", "Sustain"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Ling": {

        description: "An agile assassin who excels at mobility and burst damage, Ling can traverse the battlefield effortlessly.",

        role: "Assassin",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Dyrroth": {

        description: "A fighter who excels at dealing damage and healing, Dyrroth is formidable in duels and skirmishes.",

        role: "Fighter",

        specialities: ["Sustain", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Lylia": {

        description: "A mage known for her area damage and crowd control, Lylia excels at zoning and controlling fights.",

        role: "Mage",

        specialities: ["Area Damage", "Zoning"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Baxia": {

        description: "A tank who excels at mobility and disrupting enemies, Baxia can soak damage and provide utility.",

        role: "Tank",

        specialities: ["Disruption", "Mobility"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Masha": {

        description: "A fighter who excels at high damage and mobility, Masha can quickly engage and disengage in fights.",

        role: "Fighter",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Wanwan": {

        description: "A marksman who excels at mobility and burst damage, Wanwan can quickly take down squishy targets.",

        role: "Marksman",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Silvanna": {

        description: "A fighter with crowd control abilities, Silvanna excels at engaging and zoning enemies.",

        role: "Fighter",

        specialities: ["Crowd Control", "Area Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Cecilion": {

        description: "A mage who excels at dealing area damage and crowd control, Cecilion can control the battlefield with his skills.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Carmilla": {

        description: "A support hero who excels at crowd control and shielding allies, Carmilla is strong in team fights.",

        role: "Support",

        specialities: ["Crowd Control", "Healing"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Atlas": {

        description: "A tank who excels at initiating fights and crowd control, Atlas can disrupt enemy formations.",

        role: "Tank",

        specialities: ["Initiation", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Popol and Kupa": {

        description: "A marksman duo who excel at dealing damage while Kupa provides utility, they can control fights effectively.",

        role: "Marksman",

        specialities: ["Damage", "Utility"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Yu Zhong": {

        description: "A fighter who excels at damage and crowd control, Yu Zhong can sustain himself in fights with his skills.",

        role: "Fighter",

        specialities: ["Sustain", "Crowd Control"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Luo Yi": {

        description: "A mage who excels at zoning and crowd control, Luo Yi can deal area damage effectively.",

        role: "Mage",

        specialities: ["Area Damage", "Zoning"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Benedetta": {

        description: "An assassin who excels at mobility and burst damage, Benedetta can quickly take down enemies.",

        role: "Assassin",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Khaleed": {

        description: "A fighter who excels at area damage and sustain, Khaleed can control the battlefield with his abilities.",

        role: "Fighter",

        specialities: ["Area Damage", "Sustain"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Barats": {

        description: "A tank who excels at soaking damage and crowd control, Barats can sustain himself and his team.",

        role: "Tank",

        specialities: ["Crowd Control", "Damage Absorption"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Brody": {

        description: "A marksman who excels at burst damage and mobility, Brody can deal high damage quickly.",

        role: "Marksman",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Yve": {

        description: "A mage who excels at area damage and crowd control, Yve can manipulate the battlefield to her advantage.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Mathilda": {

        description: "A support hero who excels at mobility and utility, Mathilda can help allies navigate battles effectively.",

        role: "Support",

        specialities: ["Utility", "Mobility"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Paquito": {

        description: "A fighter who excels at mobility and burst damage, Paquito can quickly engage and take down enemies.",

        role: "Fighter",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Gloo": {

        description: "A tank who excels at crowd control and area damage, Gloo can disrupt enemies and provide utility.",

        role: "Tank",

        specialities: ["Crowd Control", "Area Damage"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Beatrix": {

        description: "A marksman who excels at burst damage and versatility, Beatrix can adapt her attacks based on the situation.",

        role: "Marksman",

        specialities: ["Burst Damage", "Versatility"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Phoveus": {

        description: "A mage who excels at dealing damage and mobility, Phoveus can dive into fights and burst down enemies.",

        role: "Mage",

        specialities: ["Burst Damage", "Mobility"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Natan": {

        description: "A marksman who excels at mobility and area damage, Natan can reposition quickly to deal with threats.",

        role: "Marksman",

        specialities: ["Mobility", "Area Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Aulus": {

        description: "A fighter who excels at sustain and damage, Aulus can become a formidable presence in fights.",

        role: "Fighter",

        specialities: ["Sustain", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Aamon": {

        description: "An assassin who excels at burst damage and stealth, Aamon can take out squishy targets quickly.",

        role: "Assassin",

        specialities: ["Burst Damage", "Stealth"],

        lane: "Jungle",

        region: "Land of Dawn"

    },

    "Valentina": {

        description: "A mage who excels at crowd control and utility, Valentina can turn the tide of battle with her skills.",

        role: "Mage",

        specialities: ["Crowd Control", "Utility"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Edith": {

        description: "A fighter who can transform and change playstyle, Edith excels in both tanking and damage.",

        role: "Fighter",

        specialities: ["Transformation", "Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Floryn": {

        description: "A support hero who excels at healing and providing utility to allies, Floryn can enhance team fights.",

        role: "Support",

        specialities: ["Healing", "Utility"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Yin": {

        description: "A fighter known for his crowd control and sustain, Yin can engage enemies effectively and control fights.",

        role: "Fighter",

        specialities: ["Crowd Control", "Sustain"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Melissa": {

        description: "A marksman who excels at damage and kite potential, Melissa can deal damage while maintaining distance.",

        role: "Marksman",

        specialities: ["Kiting", "Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Xavier": {

        description: "A mage known for his area damage and crowd control, Xavier can control the battlefield with his skills.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Julian": {

        description: "A versatile mage who excels at burst damage and area control, Julian can adapt to various situations.",

        role: "Mage",

        specialities: ["Burst Damage", "Area Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Fredrinn": {

        description: "A fighter who excels at absorbing damage and disrupting enemies, Fredrinn is a strong frontline presence.",

        role: "Fighter",

        specialities: ["Tankiness", "Disruption"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Joy": {

        description: "A unique hero with burst damage and mobility, Joy can engage and escape quickly, making her elusive.",

        role: "Assassin",

        specialities: ["Mobility", "Burst Damage"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Novaria": {

        description: "A mage who excels at area damage and crowd control, Novaria can manipulate the battlefield with her skills.",

        role: "Mage",

        specialities: ["Area Damage", "Crowd Control"],

        lane: "Mid",

        region: "Land of Dawn"

    },

    "Arlott": {

        description: "A fighter known for his versatility and burst damage, Arlott can adapt his playstyle based on the situation.",

        role: "Fighter",

        specialities: ["Versatility", "Burst Damage"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Ixia": {

        description: "A marksman who excels at kiting and burst damage, Ixia can take down enemies while staying safe.",

        role: "Marksman",

        specialities: ["Kiting", "Burst Damage"],

        lane: "Gold",

        region: "Land of Dawn"

    },

    "Nolan": {

        description: "A fighter who excels in crowd control and tankiness, Nolan can disrupt enemies while dealing damage.",

        role: "Fighter",

        specialities: ["Crowd Control", "Tankiness"],

        lane: "Exp",

        region: "Land of Dawn"

    },

    "Cici": {

        description: "A support hero who provides healing and crowd control, Cici can help her team in crucial moments.",

        role: "Support",

        specialities: ["Healing", "Crowd Control"],

        lane: "Roam",

        region: "Land of Dawn"

    },

    "Chip": {

        description: "A fighter who excels at dealing damage and providing utility, Chip can engage in fights effectively.",

        role: "Fighter",

        specialities: ["Damage", "Utility"],

        lane: "Exp",

        region: "Land of Dawn"

    },
};

// GET ML HERO INFORMATION COMMAND
System({
    pattern: /^getml\s+(.+)$/i, // Updated pattern to capture entire input after 'getml'
    fromMe: isPrivate, // Restrict to private messages
    desc: 'Get information about Mobile Legends: Bang Bang heroes',
    type: 'game', // Type of command
}, async (message, match, m) => {
    // Ensure we have a match from the command
    if (!match[1]) {
        await message.send('Please specify a hero name after the command.');
        return;
    }

    const query = match[1].trim(); // Ensure the full input after 'getml' is captured and trimmed

    console.log(`Received query: "${query}"`); // Debugging line to see the received query

    // Find hero with exact case-insensitive matching
    const hero = Object.keys(heroes).find(h => h.toLowerCase() === query.toLowerCase());

    // Check if the hero was found
    if (hero) {
        const heroData = heroes[hero];
        const response = `*Hero: ${hero}*\n\n` +
            `Description: ${heroData.description}\n` +
            `Role: ${heroData.role}\n` +
            `Specialities: ${heroData.specialities.join(', ')}\n` +
            `Lane: ${heroData.lane}\n` +
            `Region: ${heroData.region}\n\n` +
            `*Remember to always work as a team!*`;

        await message.send(response);
    } else {
        await message.send(`No information found for hero: ${query}. Please check the spelling or try another hero.`);
    }
});

// GET ML HERO LIST COMMAND
System({
    pattern: /^getml$/, // Pattern to list all heroes
    fromMe: isPrivate, // Restrict to private messages
    desc: 'List all Mobile Legends: Bang Bang heroes',
    type: 'game', // Type of command
}, async (message, match, m) => {
    const heroList = Object.keys(heroes).map((hero, index) => `${index + 1}. ${hero}`).join('\n');
    const response = `Here are the names of the heroes:\n\n${heroList}`;
    await message.send(response);
});
