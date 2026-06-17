export const WORDING_MODES = {
  classic: "classic",
  modern: "modern",
};

export const classicLabels = {
  resources: {
    food: "Food",
    water: "Water",
    energy: "Energy",
    missiles: "Missiles",
    cards: "Cardisium",
  },
  buildings: {
    water_purifiers: "Water Purifiers",
    mineral_extractors: "Mineral Extractors",
    nutrition_suppliers: "Nutrition Suppliers",
    missile_bases: "Missile Bases",
    impact_shields: "Impact Shields",
    living_areas: "Living Areas",
    police_stations: "Police Stations",
    factories: "Factories",
    blast_shields: "Blast Shields",
    science_labs: "Science Labs",
    spy_stations: "Spy Stations",
    barracks: "Barracks",
    power_plants: "Power Plants",
    turrets: "Turrets",
    star_wars: "Star Wars",
    banks: "Banks",
  },
  pages: {
    alliances: "Alliances",
    bank: "Bank",
    barracks: "Barracks",
    disband: "Disband",
    battlelog: "Battle Log",
    bonus: "Bonus",
    build: "Build",
    destroy: "Destroy",
    explore: "Explore",
    factories: "Factories",
    market: "Market",
    messages: "Messages",
    missiles: "Missiles",
    mines: "Mines",
    news: "News",
    online: "Online",
    rankings: "Rankings",
    science: "Science Labs",
    search: "Search",
    shops: "Shops",
    spy: "Spy Center",
    status: "Status",
    todo: "To Do",
    war: "War",
  },
  actions: {
    build: "Build",
    startConstruction: "Start Construction",
    train: "Train",
    startTraining: "Start Training",
    attack: "Attack",
    research: "Research",
    deposit: "Deposit",
    withdraw: "Withdraw",
    missiles: "Missiles",
    disband: "Disband",
    destroy: "Destroy",
    destroy_verb: "Destroy",
    explore: "Explore",
    explore_verb: "Explore",
    reset_speed_factor: "Speed Factor",
  },
  alliance: {
    alliance: "Alliance",
    alliances: "Alliances",
    members: "Alliance Members",
    message: "Alliance Message",
    broadcast: "Alliance Broadcast",
    invite: "Alliance Invite",
  },
};

export const neutralAntrophaiLabels = {
  resources: {
    cards: "Cards",
    water: "Water",
    energy: "Energy",
  },
  pages: {
    battlelog: "Battle Log",
    bonus: "Bonuses",
    market: "Exchange",
    messages: "Messages",
    news: "News",
    online: "Online",
    rankings: "Rankings",
    search: "Search",
    shops: "Stores",
    status: "Status",
    todo: "To Do",
    alliances: "Unions",
    records: "Records",
    help: "Field Manual",
  },
  actions: {
    clear: "Clear",
    save: "Save",
    view: "View",
    dismiss: "Dismiss",
    withdraw: "Withdraw",
  },
  alliance: {
    alliance: "Union",
    alliances: "Unions",
    members: "Union Members",
    message: "Union Message",
    broadcast: "Union Broadcast",
    invite: "Union Invite",
  },
};

export const raceResourceLabels = {
  human: { food: "Rations", water: "Water", energy: "Energy", missiles: "IGBMs", cards: "Cards" },
  trysaur: { food: "Meat", water: "Water", energy: "Energy", missiles: "Galaxy Spears", cards: "Cards" },
  relu: { food: "Charge", water: "Water", energy: "Energy", missiles: "Dimensional Darts", cards: "Cards" },
  lithi: { food: "Host Matter", water: "Water", energy: "Energy", missiles: "Colony Spines", cards: "Cards" },
  zarth: { food: "Plasma", water: "Water", energy: "Energy", missiles: "Void Pulses", cards: "Cards" },
};

export const raceBuildingLabels = {
  human: {
    water_purifiers: "Water Plants", mineral_extractors: "Extraction Rigs", nutrition_suppliers: "Ration Centres", missile_bases: "Missile Silos", impact_shields: "Impact Barriers", living_areas: "Habitation Blocks", police_stations: "Security Posts", factories: "Fabricators", blast_shields: "Blast Barriers", science_labs: "Research Labs", spy_stations: "Intel Posts", barracks: "Training Yards", power_plants: "Power Cores", turrets: "Defence Turrets", star_wars: "Orbital Yards", banks: "Reserve Vaults",
  },
  trysaur: {
    water_purifiers: "War Wells", mineral_extractors: "Strip Pits", nutrition_suppliers: "Meat Stores", missile_bases: "Siege Launchers", impact_shields: "War Screens", living_areas: "Clan Holds", police_stations: "Discipline Halls", factories: "War Forges", blast_shields: "Shock Walls", science_labs: "Trial Halls", spy_stations: "Scout Dens", barracks: "Blood Yards", power_plants: "Furnace Cores", turrets: "Wall Guns", star_wars: "Conquest Docks", banks: "Tribute Vaults",
  },
  relu: {
    water_purifiers: "Hydro Arrays", mineral_extractors: "Resource Lattices", nutrition_suppliers: "Charge Banks", missile_bases: "Ballistic Nodes", impact_shields: "Kinetic Fields", living_areas: "Habitation Modules", police_stations: "Order Protocols", factories: "Fabrication Arrays", blast_shields: "Blast Fields", science_labs: "Analysis Cores", spy_stations: "Surveillance Arrays", barracks: "Combat Frames", power_plants: "Energy Matrices", turrets: "Sentry Arrays", star_wars: "Transit Arrays", banks: "Allocation Vaults",
  },
  lithi: {
    water_purifiers: "Moisture Hives", mineral_extractors: "Gnawing Pits", nutrition_suppliers: "Host Vats", missile_bases: "Spore Batteries", impact_shields: "Chitin Wards", living_areas: "Brood Chambers", police_stations: "Pheromonal Glands", factories: "Growth Vats", blast_shields: "Hardened Carapaces", science_labs: "Mutation Pools", spy_stations: "Scent Webs", barracks: "War Broods", power_plants: "Heat Organs", turrets: "Thorn Spines", star_wars: "Void Brood Nests", banks: "Hoard Glands",
  },
  zarth: {
    water_purifiers: "Condensation Veils", mineral_extractors: "Fissure Taps", nutrition_suppliers: "Plasma Vents", missile_bases: "Pressure Lance Sites", impact_shields: "Membrane Shields", living_areas: "Phase Hollows", police_stations: "Coherence Anchors", factories: "Matter Coalescers", blast_shields: "Pressure Shells", science_labs: "Phase Studies", spy_stations: "Signal Fissures", barracks: "Coalescence Grounds", power_plants: "Thermal Hearts", turrets: "Fissure Lances", star_wars: "Deep-Sky Membranes", banks: "Stability Reserves",
  },
};

export const racePageLabels = {
  human: { build: "Construction", barracks: "Training", disband: "Discharge", war: "Attack", science: "Research Labs", bank: "Reserve Vaults", destroy: "Demolition", explore: "Survey", factories: "Fabricators", mines: "Extraction Rigs", missiles: "IGBMs", spy: "Intel Posts" },
  trysaur: { build: "War Works", barracks: "Muster", disband: "Exile", war: "Conquest", science: "Trial Halls", bank: "Tribute Vaults", destroy: "Ruination", explore: "Scouting", factories: "War Forges", mines: "Strip Pits", missiles: "Galaxy Spears", spy: "Scout Dens" },
  relu: { build: "Fabrication", barracks: "Configuration", disband: "Redress", war: "Engagement", science: "Analysis Cores", bank: "Allocation Vaults", destroy: "Decommissioning", explore: "Mapping", factories: "Fabrication Arrays", mines: "Resource Lattices", missiles: "Dimensional Darts", spy: "Surveillance Arrays" },
  lithi: { build: "Growth", barracks: "Spawning", disband: "Liquify", war: "Infestation", science: "Mutation Pools", bank: "Hoard Glands", destroy: "Reclamation", explore: "Foraging", factories: "Growth Vats", mines: "Gnawing Pits", missiles: "Colony Spines", spy: "Scent Webs" },
  zarth: { build: "Coagulation", barracks: "Coalescence", disband: "Disperse", war: "Interaction", science: "Phase Studies", bank: "Stability Reserves", destroy: "Dissolution", explore: "Probing", factories: "Matter Coalescers", mines: "Fissure Taps", missiles: "Void Pulses", spy: "Signal Fissures" },
};

export const raceActionLabels = {
  human: { build: "Build", startConstruction: "Start Construction", train: "Train", startTraining: "Start Training", attack: "Attack", research: "Research", deposit: "Deposit", disband: "Discharge", reset_speed_factor: "Overtime Rate", destroy: "Demolition", destroy_verb: "Demolish", explore: "Survey", explore_verb: "Survey" },
  trysaur: { build: "Craft", startConstruction: "Start Crafting", train: "Muster", startTraining: "Start Muster", attack: "Conquer", research: "Trial", deposit: "Store Tribute", disband: "Exile", reset_speed_factor: "Spoils Offered", destroy: "Ruination", destroy_verb: "Ruin", explore: "Scouting", explore_verb: "Scout" },
  relu: { build: "Configure", startConstruction: "Start Configuration", train: "Configure", startTraining: "Start Configuration", attack: "Engage", research: "Analyse", deposit: "Allocate", disband: "Redress", reset_speed_factor: "Priority", destroy: "Decommissioning", destroy_verb: "Decommission", explore: "Mapping", explore_verb: "Map" },
  lithi: { build: "Grow", startConstruction: "Start Growth", train: "Spawn", startTraining: "Start Spawning", attack: "Infest", research: "Mutate", deposit: "Hoard", disband: "Liquify", reset_speed_factor: "Pheromonal Layering", destroy: "Reclamation", destroy_verb: "Reclaim", explore: "Foraging", explore_verb: "Forage" },
  zarth: { build: "Coagulate", startConstruction: "Start Coagulation", train: "Coalesce", startTraining: "Start Coalescence", attack: "Interact", research: "Study", deposit: "Stabilise", disband: "Disperse", reset_speed_factor: "Manifest Pressure", destroy: "Dissolution", destroy_verb: "Dissolve", explore: "Probing", explore_verb: "Probe" },
};

export const classicMineralLabels = {
  arthok: "Arthok",
  tyron: "Tyron",
  feronga: "Feronga",
  chrophat: "Chrophat",
  phorfirum: "Phorfirum",
  endaurios: "Endaurios",
  armidi: "Armidi",
  aldora: "Aldora",
  antoria: "Antoria",
  ciber: "Ciber",
  hitera: "Hitera",
  nerwhil: "Nerwhil",
  ontigro: "Ontigro",
  positronium: "Positronium",
  sophitor: "Sophitor",
};

export const mineralNameMapNew = {
  arthok: "Arthite",
  tyron: "Tyrite",
  feronga: "Ferongite",
  chrophat: "Chrophite",
  phorfirum: "Phorite",
  endaurios: "Endaurgen",
  armidi: "Armigen",
  aldora: "Aldorium",
  antoria: "Antorium",
  ciber: "Ciberium",
  hitera: "Hiterium",
  nerwhil: "Nerwhilium",
  ontigro: "Ontigrium",
  positronium: "Positrium",
  sophitor: "Sophitorium",
};

export function normaliseMineralKey(mineralKey = "") {
  return String(mineralKey || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function getMineralLabel(mineralKey, wordingMode = "classic") {
  const key = normaliseMineralKey(mineralKey);
  if (wordingMode !== WORDING_MODES.classic) {
    return mineralNameMapNew[key] ?? classicMineralLabels[key] ?? mineralKey;
  }
  return classicMineralLabels[key] ?? mineralKey;
}

export function normaliseRaceKey(race = "human") {
  const key = String(race || "human").toLowerCase().replace(/[^a-z]/g, "");
  if (key.includes("lithi")) return "lithi";
  if (key.includes("relu")) return "relu";
  if (key.includes("trysaur")) return "trysaur";
  if (key.includes("zarth")) return "zarth";
  return "human";
}

export function getLabel(key, { race = "human", wordingMode = "classic", labelType = "resources" } = {}) {
  if (labelType === "minerals") return getMineralLabel(key, wordingMode);
  if (wordingMode === WORDING_MODES.classic) return classicLabels[labelType]?.[key] ?? key;
  const raceKey = normaliseRaceKey(race);
  const raceMaps = {
    resources: raceResourceLabels,
    buildings: raceBuildingLabels,
    pages: racePageLabels,
    actions: raceActionLabels,
  };
  return (
    raceMaps[labelType]?.[raceKey]?.[key] ??
    neutralAntrophaiLabels[labelType]?.[key] ??
    classicLabels[labelType]?.[key] ??
    key
  );
}
