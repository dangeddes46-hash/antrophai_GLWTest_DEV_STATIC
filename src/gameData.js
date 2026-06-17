// Core AntrophAI data/constants extracted from App.jsx in v0.41.28.

export const buildingOrder = [
  ["water_purifiers", "Water Purifiers", 250],
  ["mineral_extractors", "Mineral Extractors", 200],
  ["nutrition_suppliers", "Nutrition Suppliers", 200],
  ["missile_bases", "Missile Bases", 5000],
  ["impact_shields", "Impact Shields", 35000],
  ["living_areas", "Living Areas", 300],
  ["police_stations", "Police Stations", 500],
  ["factories", "Factories", 500],
  ["blast_shields", "Blast Shields", 350],
  ["science_labs", "Science Labs", 600],
  ["spy_stations", "Spy Stations", 1250],
  ["barracks", "Barracks", 1000],
  ["power_plants", "Power Plants", 7500],
  ["turrets", "Turrets", 12500],
  ["star_wars", "Star Wars", 5000],
  ["banks", "Banks", 1250],
];

export const races = {
  lithi: { name: "Li'thi", maxTrain: 1999, mineableMinerals: ["Hitera", "Feronga", "Antoria", "Sophitor", "Armidi"], unitStats: [
    { name: "Laveti", off: 3, def: 3, cost: 6 }, { name: "Orph'irges", off: 8, def: 6, cost: 14 }, { name: "Missile tanks", off: 241, def: 220, cost: 461 }, { name: "Soul Divers", off: 165, def: 180, cost: 345 }, { name: "Incabusers", off: 267, def: 292, cost: 559 }, { name: "Black parroths", off: 686, def: 661, cost: 1347 },
  ] },
  human: { name: "Human", maxTrain: 1299, mineableMinerals: ["Ciber", "Arthok", "Sophitor", "Ontigro", "Feronga"], unitStats: [
    { name: "Troopers", off: 2, def: 2, cost: 4 }, { name: "Laser Tanks", off: 117, def: 128, cost: 245 }, { name: "Missile Forces", off: 17, def: 17, cost: 34 }, { name: "Shuttles", off: 328, def: 310, cost: 638 }, { name: "Star cruisers", off: 645, def: 662, cost: 1307 }, { name: "Air forces", off: 399, def: 448, cost: 847 },
  ] },
  zarth: { name: "Zarth", maxTrain: 2499, mineableMinerals: ["Aldora", "Ontigro", "Tyron", "Arthok", "Positronium"], unitStats: [
    { name: "Nemesi", off: 4, def: 4, cost: 8 }, { name: "Flying parroths", off: 25, def: 23, cost: 48 }, { name: "Zolanith", off: 53, def: 48, cost: 101 }, { name: "Poiteruns", off: 249, def: 215, cost: 464 }, { name: "Zovotor", off: 264, def: 238, cost: 502 }, { name: "P'inska", off: 331, def: 293, cost: 624 },
  ] },
  trysaur: { name: "Trysaur", maxTrain: 1749, mineableMinerals: ["Nerwhil", "Chrophat", "Endaurios", "Ontigro", "Aldora"], unitStats: [
    { name: "Arphages", off: 3, def: 3, cost: 6 }, { name: "In'aburs", off: 132, def: 136, cost: 268 }, { name: "Implatinons", off: 113, def: 110, cost: 223 }, { name: "Fortavi", off: 227, def: 221, cost: 448 }, { name: "Pascortha", off: 187, def: 197, cost: 384 }, { name: "Silvato", off: 839, def: 822, cost: 1661 },
  ] },
  relu: { name: "Re'lu", maxTrain: 2499, mineableMinerals: ["Armidi", "Positronium", "Phorfirum", "Nerwhil", "Hitera"], unitStats: [
    { name: "Ithica", off: 9, def: 8, cost: 17 }, { name: "Posi'stra", off: 40, def: 38, cost: 78 }, { name: "Eph'fo", off: 108, def: 110, cost: 218 }, { name: "Ahtribio", off: 231, def: 225, cost: 456 }, { name: "Aourthi", off: 269, def: 268, cost: 537 }, { name: "Pa'sik", off: 568, def: 559, cost: 1127 },
  ] },
};
Object.values(races).forEach((race) => { race.units = race.unitStats.map((u) => [u.name, u.cost]); });
export function libraryKeyFromName(name = "") {
  return String(name).toLowerCase().replace(/'/g, "_").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").replace(/_+/g, "_");
}
export function libraryStatusLabel(status = "missing") {
  return String(status || "missing").replace(/_/g, " ");
}

export const mineralOrder = ["Aldora", "Antoria", "Armidi", "Arthok", "Chrophat", "Ciber", "Endaurios", "Feronga", "Hitera", "Nerwhil", "Ontigro", "Phorfirum", "Positronium", "Sophitor", "Tyron"];
export const shopPrices = Object.fromEntries(mineralOrder.map((m) => [m, 33333]));
Object.assign(shopPrices, { Arthok: 61107, Phorfirum: 10069, Tyron: 58406, Chrophat: 55789, Feronga: 39688, Armidi: 11000, Endaurios: 65000, Food: 40, Water: 2, Energy: 3333 });
export const shopItemOrder = ["Food", "Water", "Energy", ...mineralOrder];
export const day1Build = { water_purifiers: 150, mineral_extractors: 25, nutrition_suppliers: 240, living_areas: 390, police_stations: 75, factories: 70, science_labs: 50 };
export const roundProfiles = {
  "Intro Game": { gameSpeed: "1", startingLand: "1000", startingCards: "1000000", revives: "10% revives", protectionBaseHours: "2", exploreEnabled: true },
  "Better Conflict": { gameSpeed: "2", startingLand: "1000", startingCards: "1000000", revives: "Full revive system", protectionBaseHours: "1", exploreEnabled: true },
  "Godlike Warfare": { gameSpeed: "4", startingLand: "50000", startingCards: "10000000", revives: "Full revive system", protectionBaseHours: "0.5", exploreEnabled: false },
  "Turbo Game": { gameSpeed: "60", startingLand: "10000", startingCards: "1000000", revives: "10% revives", protectionBaseHours: "0.25", exploreEnabled: true },
};
export const TURRET_CONFIG = {
  enabled: true,
  powerPerTurret: 1000,
  baseKillRate: 0.20,
  variance: 0.10,
  baseEnergyPerShot: 150,
  energyFloorPerShot: 50,
  energyLevel60Multiplier: Math.pow(50 / 150, 1 / 60),
  disableBaseCostPerTurret: 50000,
  disableFloorCostPerTurret: 10000,
  disableLevel60Multiplier: Math.pow(10000 / 50000, 1 / 60),
  powerPlantEnergyPerTick: 50
};

