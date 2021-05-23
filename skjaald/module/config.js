import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const SKJAALD = {};

// ASCII Artwork
SKJAALD.ASCII = `  ____  _  __   _   _        _    _     ____   
/ ___|| |/ /  | | / \      / \  | |   |  _ \  
\___ \| ' /_  | |/ _ \    / _ \ | |   | | | | 
 ___) | . \ |_| / ___ \  / ___ \| |___| |_| | 
|____/|_|\_\___/_/   \_\/_/   \_\_____|____/  
                                              

`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
SKJAALD.abilities = {
  "str": "SKJAALD.AbilityStr",
  "dex": "SKJAALD.AbilityDex",
  "con": "SKJAALD.AbilityCon",
  "int": "SKJAALD.AbilityInt",
  "wis": "SKJAALD.AbilityWis",
  "cha": "SKJAALD.AbilityCha"
};

SKJAALD.abilityAbbreviations = {
  "str": "SKJAALD.AbilityStrAbbr",
  "dex": "SKJAALD.AbilityDexAbbr",
  "con": "SKJAALD.AbilityConAbbr",
  "int": "SKJAALD.AbilityIntAbbr",
  "wis": "SKJAALD.AbilityWisAbbr",
  "cha": "SKJAALD.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
SKJAALD.alignments = {
  'lg': "SKJAALD.AlignmentLG",
  'ng': "SKJAALD.AlignmentNG",
  'cg': "SKJAALD.AlignmentCG",
  'ln': "SKJAALD.AlignmentLN",
  'tn': "SKJAALD.AlignmentTN",
  'cn': "SKJAALD.AlignmentCN",
  'le': "SKJAALD.AlignmentLE",
  'ne': "SKJAALD.AlignmentNE",
  'ce': "SKJAALD.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
SKJAALD.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
};

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
SKJAALD.attunements = {
  0: "SKJAALD.AttunementNone",
  1: "SKJAALD.AttunementRequired",
  2: "SKJAALD.AttunementAttuned"
};

/* -------------------------------------------- */


SKJAALD.weaponProficiencies = {
  "sim": "SKJAALD.WeaponSimpleProficiency",
  "mar": "SKJAALD.WeaponMartialProficiency"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
SKJAALD.weaponIds = {
    "battleaxe": "I0WocDSuNpGJayPb",
    "blowgun": "wNWK6yJMHG9ANqQV",
    "bola": "DWLMnODrnHn8IbAG",
    "club": "nfIRTECQIG81CvM4",
    "dagger": "0E565kQUBmndJ1a2",
    "dart": "3rCO8MTIdPGSW6IJ",
    "flail": "UrH3sMdnUDckIHJ6",
    "glaive": "rOG1OM2ihgPjOvFW",
    "greataxe": "1Lxk6kmoRhG8qQ0u",
    "greatbow": "ruDHgl2ec7jPVmh9",
    "greatclub": "QRCsxkCwWNwswL9o",
    "greatsword": "xMkP8BmFzElcsMaR",
    "halberd": "DMejWAc8r8YvDPP1",
    "handaxe": "eO7Fbv5WBk5zvGOc",
    "handcrossbow": "qaSro7kFhxD6INbZ",
    "heavycrossbow": "RmP0mYRn2J7K26rX",
    "lance": "RnuxdHUAIgxccVwj",
    "lightcrossbow": "ddWvQRLmnnIS0eLF",
    "lighthammer": "XVK6TOL4sGItssAE",
    "longbow": "3cymOVja8jXbzrdT",
    "longknife": "r8KOiJqCfN4S2Rex",
    "longsword": "10ZP2Bu3vnCuYMIB",
    "mace": "Ajyq6nGwF7FtLhDQ",
    "maul": "DizirD7eqjh8n95A",
    "morningstar": "dX8AxCh9o0A9CkT3",
    "net": "aEiM49V8vWpWw7rU",
    "pike": "tC0kcqZT9HHAO0PD",
    "quarterstaff": "g2dWN7PQiMRYWzyk",
    "rapier": "Tobce1hexTnDk4sV",
    "scimitar": "fbC0Mg1a73wdFbqO",
    "shortsword": "osLzOwQdPtrK3rQH",
    "sickle": "i4NeNZ30ycwPDHMx",
    "spear": "OG4nBBydvmfWYXIk",
    "shortbow": "GJv6WkD7D2J6rP6M",
    "sling": "3gynWO9sN4OLGMWD",
    "trident": "F65ANO66ckP8FDMa",
    "warpick": "2YdfjN1PIIrSHZii",
    "warhammer":  "F0Df164Xv1gWcYt0",
    "whip": "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */



SKJAALD.toolProficiencies = {
  "art": "SKJAALD.ToolArtisans",
  "disg": "SKJAALD.ToolDisguiseKit",
  "forg": "SKJAALD.ToolForgeryKit",
  "game": "SKJAALD.ToolGamingSet",
  "herb": "SKJAALD.ToolHerbalismKit",
  "music": "SKJAALD.ToolMusicalInstrument",
  "navg": "SKJAALD.ToolNavigators",
  "pois": "SKJAALD.ToolPoisonersKit",
  "thief": "SKJAALD.ToolThieves",
  "vehicle": "SKJAALD.ToolVehicle"
};

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 *
 * @enum {string}
 */
SKJAALD.toolIds = {
  "alchemist": "SztwZhbhZeCqyAes",
  "bagpipes": "yxHi57T5mmVt0oDr",
  "brewer": "Y9S75go1hLMXUD48",
  "calligrapher": "jhjo20QoiD5exf09",
  "card": "YwlHI3BVJapz4a3E",
  "carpenter": "8NS6MSOdXtUqD7Ib",
  "cartographer": "fC0lFK8P4RuhpfaU",
  "cobbler": "hM84pZnpCqKfi8XH",
  "cook": "Gflnp29aEv5Lc1ZM",
  "dice": "iBuTM09KD9IoM5L8",
  "disg": "IBhDAr7WkhWPYLVn",
  "drum": "69Dpr25pf4BjkHKb",
  "dulcimer": "NtdDkjmpdIMiX7I2",
  "flute": "eJOrPcAz9EcquyRQ",
  "forg": "cG3m4YlHfbQlLEOx",
  "glassblower": "rTbVrNcwApnuTz5E",
  "herb": "i89okN7GFTWHsvPy",
  "horn": "aa9KuBy4dst7WIW9",
  "jeweler": "YfBwELTgPFHmQdHh",
  "leatherworker": "PUMfwyVUbtyxgYbD",
  "lute": "qBydtUUIkv520DT7",
  "lyre": "EwG1EtmbgR3bM68U",
  "mason": "skUih6tBvcBbORzA",
  "navg": "YHCmjsiXxZ9UdUhU",
  "painter": "ccm5xlWhx74d6lsK",
  "panflute": "G5m5gYIx9VAUWC3J",
  "pois": "il2GNi8C0DvGLL9P",
  "potter": "hJS8yEVkqgJjwfWa",
  "shawm": "G3cqbejJpfB91VhP",
  "smith": "KndVe2insuctjIaj",
  "thief": "woWZ1sO5IUVGzo58",
  "tinker": "0d08g1i5WXnNrCNA",
  "viol": "baoe3U5BfMMMxhCU",
  "weaver": "ap9prThUB2y9lDyj",
  "woodcarver": "xKErqkLo4ASYr5EP",
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
SKJAALD.timePeriods = {
  "inst": "SKJAALD.TimeInst",
  "turn": "SKJAALD.TimeTurn",
  "round": "SKJAALD.TimeRound",
  "minute": "SKJAALD.TimeMinute",
  "hour": "SKJAALD.TimeHour",
  "day": "SKJAALD.TimeDay",
  "month": "SKJAALD.TimeMonth",
  "year": "SKJAALD.TimeYear",
  "perm": "SKJAALD.TimePerm",
  "spec": "SKJAALD.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
SKJAALD.abilityActivationTypes = {
  "none": "SKJAALD.None",
  "action": "SKJAALD.Action",
  "bonus": "SKJAALD.BonusAction",
  "reaction": "SKJAALD.Reaction",
  "minute": SKJAALD.timePeriods.minute,
  "hour": SKJAALD.timePeriods.hour,
  "day": SKJAALD.timePeriods.day,
  "special": SKJAALD.timePeriods.spec,
  "legendary": "SKJAALD.LegAct",
  "lair": "SKJAALD.LairAct",
  "crew": "SKJAALD.VehicleCrewAction"
};

/* -------------------------------------------- */


SKJAALD.abilityConsumptionTypes = {
  "ammo": "SKJAALD.ConsumeAmmunition",
  "attribute": "SKJAALD.ConsumeAttribute",
  "material": "SKJAALD.ConsumeMaterial",
  "charges": "SKJAALD.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
SKJAALD.actorSizes = {
  "tiny": "SKJAALD.SizeTiny",
  "sm": "SKJAALD.SizeSmall",
  "med": "SKJAALD.SizeMedium",
  "lg": "SKJAALD.SizeLarge",
  "huge": "SKJAALD.SizeHuge",
  "grg": "SKJAALD.SizeGargantuan"
};

SKJAALD.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars
 * @enum {number}
 */
SKJAALD.tokenHPColors = {
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
}

/* -------------------------------------------- */

/**
 * Creature types
 * @type {Object}
 */
SKJAALD.creatureTypes = {
  "aberration": "SKJAALD.CreatureAberration",
  "beast": "SKJAALD.CreatureBeast",
  "celestial": "SKJAALD.CreatureCelestial",
  "construct": "SKJAALD.CreatureConstruct",
  "dragon": "SKJAALD.CreatureDragon",
  "elemental": "SKJAALD.CreatureElemental",
  "fey": "SKJAALD.CreatureFey",
  "fiend": "SKJAALD.CreatureFiend",
  "giant": "SKJAALD.CreatureGiant",
  "humanoid": "SKJAALD.CreatureHumanoid",
  "monstrosity": "SKJAALD.CreatureMonstrosity",
  "ooze": "SKJAALD.CreatureOoze",
  "plant": "SKJAALD.CreaturePlant",
  "undead": "SKJAALD.CreatureUndead"
};


/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
SKJAALD.itemActionTypes = {
  "mwak": "SKJAALD.ActionMWAK",
  "rwak": "SKJAALD.ActionRWAK",
  "msak": "SKJAALD.ActionMSAK",
  "rsak": "SKJAALD.ActionRSAK",
  "save": "SKJAALD.ActionSave",
  "heal": "SKJAALD.ActionHeal",
  "abil": "SKJAALD.ActionAbil",
  "util": "SKJAALD.ActionUtil",
  "other": "SKJAALD.ActionOther"
};

/* -------------------------------------------- */

SKJAALD.itemCapacityTypes = {
  "items": "SKJAALD.ItemContainerCapacityItems",
  "weight": "SKJAALD.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
SKJAALD.limitedUsePeriods = {
  "sr": "SKJAALD.ShortRest",
  "lr": "SKJAALD.LongRest",
  "day": "SKJAALD.Day",
  "charges": "SKJAALD.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character
 * @type {Object}
 */
SKJAALD.equipmentTypes = {
  "light": "SKJAALD.EquipmentLight",
  "medium": "SKJAALD.EquipmentMedium",
  "heavy": "SKJAALD.EquipmentHeavy",
  "bonus": "SKJAALD.EquipmentBonus",
  "natural": "SKJAALD.EquipmentNatural",
  "shield": "SKJAALD.EquipmentShield",
  "clothing": "SKJAALD.EquipmentClothing",
  "trinket": "SKJAALD.EquipmentTrinket",
  "vehicle": "SKJAALD.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
SKJAALD.armorProficiencies = {
  "lgt": SKJAALD.equipmentTypes.light,
  "med": SKJAALD.equipmentTypes.medium,
  "hvy": SKJAALD.equipmentTypes.heavy,
  "shl": "SKJAALD.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
SKJAALD.consumableTypes = {
  "ammo": "SKJAALD.ConsumableAmmunition",
  "potion": "SKJAALD.ConsumablePotion",
  "poison": "SKJAALD.ConsumablePoison",
  "food": "SKJAALD.ConsumableFood",
  "scroll": "SKJAALD.ConsumableScroll",
  "wand": "SKJAALD.ConsumableWand",
  "rod": "SKJAALD.ConsumableRod",
  "trinket": "SKJAALD.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
SKJAALD.currencies = {
  "pp": "SKJAALD.CurrencyPP",
  "gp": "SKJAALD.CurrencyGP",
  "ep": "SKJAALD.CurrencyEP",
  "sp": "SKJAALD.CurrencySP",
  "cp": "SKJAALD.CurrencyCP",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
SKJAALD.currencyConversion = {
  cp: {into: "sp", each: 10},
  sp: {into: "ep", each: 5 },
  ep: {into: "gp", each: 2 },
  gp: {into: "pp", each: 10}
};

/* -------------------------------------------- */


// Damage Types
SKJAALD.damageTypes = {
  "acid": "SKJAALD.DamageAcid",
  "bludgeoning": "SKJAALD.DamageBludgeoning",
  "cold": "SKJAALD.DamageCold",
  "fire": "SKJAALD.DamageFire",
  "force": "SKJAALD.DamageForce",
  "lightning": "SKJAALD.DamageLightning",
  "necrotic": "SKJAALD.DamageNecrotic",
  "piercing": "SKJAALD.DamagePiercing",
  "poison": "SKJAALD.DamagePoison",
  "psychic": "SKJAALD.DamagePsychic",
  "radiant": "SKJAALD.DamageRadiant",
  "slashing": "SKJAALD.DamageSlashing",
  "thunder": "SKJAALD.DamageThunder"
};

// Damage Resistance Types
SKJAALD.damageResistanceTypes = mergeObject(foundry.utils.deepClone(SKJAALD.damageTypes), {
  "physical": "SKJAALD.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SKJAALD.movementTypes = {
  "burrow": "SKJAALD.MovementBurrow",
  "climb": "SKJAALD.MovementClimb",
  "fly": "SKJAALD.MovementFly",
  "swim": "SKJAALD.MovementSwim",
  "walk": "SKJAALD.MovementWalk",
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SKJAALD.movementUnits = {
  "ft": "SKJAALD.DistFt",
  "mi": "SKJAALD.DistMi"
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from SKJAALD.movementUnits
 * @type {Object<string,string>}
 */
SKJAALD.distanceUnits = {
  "none": "SKJAALD.None",
  "self": "SKJAALD.DistSelf",
  "touch": "SKJAALD.DistTouch",
  "spec": "SKJAALD.Special",
  "any": "SKJAALD.DistAny"
};
for ( let [k, v] of Object.entries(SKJAALD.movementUnits) ) {
  SKJAALD.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
SKJAALD.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
SKJAALD.targetTypes = {
  "none": "SKJAALD.None",
  "self": "SKJAALD.TargetSelf",
  "creature": "SKJAALD.TargetCreature",
  "ally": "SKJAALD.TargetAlly",
  "enemy": "SKJAALD.TargetEnemy",
  "object": "SKJAALD.TargetObject",
  "space": "SKJAALD.TargetSpace",
  "radius": "SKJAALD.TargetRadius",
  "sphere": "SKJAALD.TargetSphere",
  "cylinder": "SKJAALD.TargetCylinder",
  "cone": "SKJAALD.TargetCone",
  "square": "SKJAALD.TargetSquare",
  "cube": "SKJAALD.TargetCube",
  "line": "SKJAALD.TargetLine",
  "wall": "SKJAALD.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are SKJAALD target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
SKJAALD.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
SKJAALD.healingTypes = {
  "healing": "SKJAALD.Healing",
  "temphp": "SKJAALD.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {string[]}
 */
SKJAALD.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @enum {string}
 */
SKJAALD.senses = {
  "blindsight": "SKJAALD.SenseBlindsight",
  "darkvision": "SKJAALD.SenseDarkvision",
  "tremorsense": "SKJAALD.SenseTremorsense",
  "truesight": "SKJAALD.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
SKJAALD.skills = {
  "acr": "SKJAALD.SkillAcr",
  "ani": "SKJAALD.SkillAni",
  "arc": "SKJAALD.SkillArc",
  "ath": "SKJAALD.SkillAth",
  "dec": "SKJAALD.SkillDec",
  "his": "SKJAALD.SkillHis",
  "ins": "SKJAALD.SkillIns",
  "itm": "SKJAALD.SkillItm",
  "inv": "SKJAALD.SkillInv",
  "med": "SKJAALD.SkillMed",
  "nat": "SKJAALD.SkillNat",
  "prc": "SKJAALD.SkillPrc",
  "prf": "SKJAALD.SkillPrf",
  "per": "SKJAALD.SkillPer",
  "rel": "SKJAALD.SkillRel",
  "slt": "SKJAALD.SkillSlt",
  "ste": "SKJAALD.SkillSte",
  "sur": "SKJAALD.SkillSur"
};


/* -------------------------------------------- */

SKJAALD.spellPreparationModes = {
  "prepared": "SKJAALD.SpellPrepPrepared",
  "pact": "SKJAALD.PactMagic",
  "always": "SKJAALD.SpellPrepAlways",
  "atwill": "SKJAALD.SpellPrepAtWill",
  "innate": "SKJAALD.SpellPrepInnate"
};

SKJAALD.spellUpcastModes = ["always", "pact", "prepared"];

SKJAALD.spellProgression = {
  "none": "SKJAALD.SpellNone",
  "full": "SKJAALD.SpellProgFull",
  "half": "SKJAALD.SpellProgHalf",
  "third": "SKJAALD.SpellProgThird",
  "pact": "SKJAALD.SpellProgPact",
  "artificer": "SKJAALD.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
SKJAALD.spellScalingModes = {
  "none": "SKJAALD.SpellNone",
  "cantrip": "SKJAALD.SpellCantrip",
  "level": "SKJAALD.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
SKJAALD.weaponTypes = {
  "simpleM": "SKJAALD.WeaponSimpleM",
  "simpleR": "SKJAALD.WeaponSimpleR",
  "basic": "SKJAALD.WeaponBasic",
  "combat": "SKJAALD.WeaponCombat",
  "martialM": "SKJAALD.WeaponMartialM",
  "martialR": "SKJAALD.WeaponMartialR",
  "elite": "SKJAALD.WeaponElite",
  "magitech": "SKJAALD.WeaponMagitech",
  "natural": "SKJAALD.WeaponNatural",
  "improv": "SKJAALD.WeaponImprov",
  "siege": "SKJAALD.WeaponSiege",
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
SKJAALD.weaponProperties = {
  "acc": "SKJAALD.WeaponPropertiesAcc",
  "ada": "SKJAALD.WeaponPropertiesAda",
  "amm": "SKJAALD.WeaponPropertiesAmm",
  "arp": "SKJAALD.WeaponPropertiesArp",
  "bal": "SKJAALD.WeaponPropertiesBal",
  "clv": "SKJAALD.WeaponPropertiesClv",
  "def": "SKJAALD.WeaponPropertiesDef",
  "dem": "SKJAALD.WeaponPropertiesDem",
  "fin": "SKJAALD.WeaponPropertiesFin",
  "fir": "SKJAALD.WeaponPropertiesFir",
  "foc": "SKJAALD.WeaponPropertiesFoc",
  "gre": "SKJAALD.WeaponPropertiesGre",
  "hvy": "SKJAALD.WeaponPropertiesHvy",
  "hef": "SKJAALD.WeaponPropertiesHef",
  "ind": "SKJAALD.WeaponPropertiesInd",
  "ken": "SKJAALD.WeaponPropertiesKen",
  "lgt": "SKJAALD.WeaponPropertiesLgt",
  "lod": "SKJAALD.WeaponPropertiesLod",
  "mgc": "SKJAALD.WeaponPropertiesMgc",
  "pen": "SKJAALD.WeaponPropertiesPen",
  "rch": "SKJAALD.WeaponPropertiesRch",
  "rli": "SKJAALD.WeaponPropertiesRli",
  "rel": "SKJAALD.WeaponPropertiesRel",
  "ret": "SKJAALD.WeaponPropertiesRet",
  "sie": "SKJAALD.WeaponPropertiesSie",
  "sil": "SKJAALD.WeaponPropertiesSil",
  "spc": "SKJAALD.WeaponPropertiesSpc",
  "thr": "SKJAALD.WeaponPropertiesThr",
  "two": "SKJAALD.WeaponPropertiesTwo",
  "Unw": "SKJAALD.WeaponPropertiesUnw",
  "ver": "SKJAALD.WeaponPropertiesVer",
  "vis": "SKJAALD.WeaponPropertiesVis"
};


// Spell Components
SKJAALD.spellComponents = {
  "V": "SKJAALD.ComponentVerbal",
  "S": "SKJAALD.ComponentSomatic",
  "M": "SKJAALD.ComponentMaterial"
};

// Spell Schools
SKJAALD.spellSchools = {
  "abj": "SKJAALD.SchoolAbj",
  "bio": "SKJAALD.SchoolBio",
  "con": "SKJAALD.SchoolCon",
  "div": "SKJAALD.SchoolDiv",
  "enc": "SKJAALD.SchoolEnc",
  "evo": "SKJAALD.SchoolEvo",
  "ill": "SKJAALD.SchoolIll",
  "nec": "SKJAALD.SchoolNec",
  "trs": "SKJAALD.SchoolTrs",
  "nature": "SKJAALD.SchoolNat",
  "divine": "SKJAALD.SchoolDivine"
};

// Spell Pillars
SKJAALD.spellPillars = {
  "arcane": "SKJAALD.PillarArcane",
  "mass": "SKJAALD.PillarMass",
  "essence": "SKJAALD.PillarEssence",
  "psionic": "SKJAALD.PillarPsionic",
  "nature": "SKJAALD.PillarNature",
  "divine": "SKJAALD.PillarDivine"
};

// Spell Levels
SKJAALD.spellLevels = {
  0: "SKJAALD.SpellLevel0",
  1: "SKJAALD.SpellLevel1",
  2: "SKJAALD.SpellLevel2",
  3: "SKJAALD.SpellLevel3",
  4: "SKJAALD.SpellLevel4",
  5: "SKJAALD.SpellLevel5",
  6: "SKJAALD.SpellLevel6",
  7: "SKJAALD.SpellLevel7",
  8: "SKJAALD.SpellLevel8",
  9: "SKJAALD.SpellLevel9",
  10: "SKJAALD.SpellLevel10",
  11: "SKJAALD.SpellLevel11",
  12: "SKJAALD.SpellLevel12"
};

// Spell Scroll Compendium UUIDs
SKJAALD.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
SKJAALD.sourcePacks = {
  ITEMS: "SKJAALD.items"
}

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
SKJAALD.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
SKJAALD.polymorphSettings = {
  keepPhysical: 'SKJAALD.PolymorphKeepPhysical',
  keepMental: 'SKJAALD.PolymorphKeepMental',
  keepSaves: 'SKJAALD.PolymorphKeepSaves',
  keepSkills: 'SKJAALD.PolymorphKeepSkills',
  mergeSaves: 'SKJAALD.PolymorphMergeSaves',
  mergeSkills: 'SKJAALD.PolymorphMergeSkills',
  keepClass: 'SKJAALD.PolymorphKeepClass',
  keepFeats: 'SKJAALD.PolymorphKeepFeats',
  keepSpells: 'SKJAALD.PolymorphKeepSpells',
  keepItems: 'SKJAALD.PolymorphKeepItems',
  keepBio: 'SKJAALD.PolymorphKeepBio',
  keepVision: 'SKJAALD.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
SKJAALD.proficiencyLevels = {
  0: "SKJAALD.NotProficient",
  1: "SKJAALD.Proficient",
  0.5: "SKJAALD.HalfProficient",
  2: "SKJAALD.Expertise",
  3: "SKJAALD.Mastery"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
SKJAALD.cover = {
  0: 'SKJAALD.None',
  .5: 'SKJAALD.CoverHalf',
  .75: 'SKJAALD.CoverThreeQuarters',
  1: 'SKJAALD.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
SKJAALD.conditionTypes = {
  "blinded": "SKJAALD.ConBlinded",
  "casting": "SKJAALD.ConCasting",
  "charmed": "SKJAALD.ConCharmed",
  "concentration": "SKJAALD.ConConcentration",
  "dashing": "SKJAALD.ConDashing",
  "deafened": "SKJAALD.ConDeafened",
  "disengage": "SKJAALD.ConDisengage",
  "dodging": "SKJAALD.ConDodging",
  "diseased": "SKJAALD.ConDiseased",
  "exhaustion": "SKJAALD.ConExhaustion",
  "frightened": "SKJAALD.ConFrightened",
  "grappled": "SKJAALD.ConGrappled",
  "helping": "SKJAALD.ConHelping",
  "hidden": "SKJAALD.ConHidden",
  "incapacitated": "SKJAALD.ConIncapacitated",
  "invisible": "SKJAALD.ConInvisible",
  "overwatch": "SKJAALD.ConOverwatch",
  "paralyzed": "SKJAALD.ConParalyzed",
  "petrified": "SKJAALD.ConPetrified",
  "poisoned": "SKJAALD.ConPoisoned",
  "prone": "SKJAALD.ConProne",
  "rage": "SKJAALD.ConRage",
  "readied": "SKJAALD.ConReadied",
  "restrained": "SKJAALD.ConRestrained",
  "stunned": "SKJAALD.ConStunned",
  "unconscious": "SKJAALD.ConUnconscious"
};

// Languages
SKJAALD.languages = {
  "common": "SKJAALD.LanguagesCommon",
  "aarakocra": "SKJAALD.LanguagesAarakocra",
  "abyssal": "SKJAALD.LanguagesAbyssal",
  "ancientdraconic": "SKJAALD.LanguagesAncientDraconic",
  "aquan": "SKJAALD.LanguagesAquan",
  "auran": "SKJAALD.LanguagesAuran",
  "bollgan": "SKJAALD.LanguagesBollgan",
  "celestial": "SKJAALD.LanguagesCelestial",
  "deep": "SKJAALD.LanguagesDeepSpeech",
  "draconic": "SKJAALD.LanguagesDraconic",
  "druidic": "SKJAALD.LanguagesDruidic",
  "dwarvish": "SKJAALD.LanguagesDwarvish",
  "elenic": "SKJAALD.LanguagesElenic",
  "elvish": "SKJAALD.LanguagesElvish",
  "giant": "SKJAALD.LanguagesGiant",
  "gith": "SKJAALD.LanguagesGith",
  "gnomish": "SKJAALD.LanguagesGnomish",
  "goblin": "SKJAALD.LanguagesGoblin",
  "gnoll": "SKJAALD.LanguagesGnoll",
  "halfling": "SKJAALD.LanguagesHalfling",
  "ignan": "SKJAALD.LanguagesIgnan",
  "infernal": "SKJAALD.LanguagesInfernal",
  "orc": "SKJAALD.LanguagesOrc",
  "primordial": "SKJAALD.LanguagesPrimordial",
  "reikish": "SKJAALD.LanguagesReikish",
  "skarrian": "SKJAALD.LanguagesSkarrian",
  "sylvan": "SKJAALD.LanguagesSylvan",
  "telmathian": "SKJAALD.LanguagesTelmathian",
  "terran": "SKJAALD.LanguagesTerran",
  "cant": "SKJAALD.LanguagesThievesCant",
  "undercommon": "SKJAALD.LanguagesUndercommon",
  "vormish": "SKJAALD.LanguagesVormish"
};

// Character Level XP Requirements
SKJAALD.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
SKJAALD.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
SKJAALD.classFeatures = ClassFeatures;

// Configure Optional Character Flags
SKJAALD.characterFlags = {
  "diamondSoul": {
    name: "SKJAALD.FlagsDiamondSoul",
    hint: "SKJAALD.FlagsDiamondSoulHint",
    section: "Feats",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "SKJAALD.FlagsElvenAccuracy",
    hint: "SKJAALD.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "SKJAALD.FlagsHalflingLucky",
    hint: "SKJAALD.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "SKJAALD.FlagsInitiativeAdv",
    hint: "SKJAALD.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "SKJAALD.FlagsAlert",
    hint: "SKJAALD.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "SKJAALD.FlagsJOAT",
    hint: "SKJAALD.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "SKJAALD.FlagsObservant",
    hint: "SKJAALD.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "powerfulBuild": {
    name: "SKJAALD.FlagsPowerfulBuild",
    hint: "SKJAALD.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "reliableTalent": {
    name: "SKJAALD.FlagsReliableTalent",
    hint: "SKJAALD.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "SKJAALD.FlagsRemarkableAthlete",
    hint: "SKJAALD.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "SKJAALD.FlagsWeaponCritThreshold",
    hint: "SKJAALD.FlagsWeaponCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "spellCriticalThreshold": {
    name: "SKJAALD.FlagsSpellCritThreshold",
    hint: "SKJAALD.FlagsSpellCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "SKJAALD.FlagsMeleeCriticalDice",
    hint: "SKJAALD.FlagsMeleeCriticalDiceHint",
    section: "Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
SKJAALD.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(SKJAALD.characterFlags));
