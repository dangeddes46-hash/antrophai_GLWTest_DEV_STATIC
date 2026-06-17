import { buildingOrder, mineralOrder, races, TURRET_CONFIG } from "./gameData.js";
import { REPORT_WORDING_MODE } from "./reportWording.js";
import { trainingSpeedDivider } from "./speciesBonuses.js";

export const LAND_POWER_VALUE = 1;

export function fmt(n) { const v = Number.isFinite(Number(n)) ? Number(n) : 0; return Math.floor(v).toLocaleString("en-GB"); }
export function safeDisplay(value) { if (value === null || value === undefined) return ""; if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value); if (Array.isArray(value)) return value.map(safeDisplay).join(", "); try { return JSON.stringify(value); } catch { return String(value); } }
export function compactFmt(n) { const v = Number.isFinite(Number(n)) ? Math.floor(Number(n)) : 0; const a = Math.abs(v); for (const [d, s] of [[1e12, "T"], [1e9, "B"], [1e6, "M"], [1e3, "K"]]) { if (a >= d) { const r = a >= d * 100 ? Math.round(v / d) : Math.round((v / d) * 10) / 10; return `${Number.isInteger(r) ? r.toFixed(0) : r.toFixed(1)}${s}`; } } return String(v); }
export function parseQty(v) { const n = Number(v); return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0; }
export const TEXT_LIMITS = { playerName: 20, allianceName: 24, allianceAnnouncement: 140, messageTo: 20, messageBody: 500, newsDraft: 200, search: 30, targetName: 30, gameName: 40 };
export function cleanSingleLineText(value, max = 80) { return String(value || "").replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ").slice(0, max); }
export function cleanMultiLineText(value, max = 500) { return String(value || "").replace(/\r\n/g, "\n").replace(/[\t]+/g, " ").slice(0, max); }
export function cleanStoredName(value, fallback = "") { const cleaned = cleanSingleLineText(value, TEXT_LIMITS.playerName).trim(); return cleaned || fallback; }
export function clampTextInput(setter, max, multiline = false) { return (value) => setter(multiline ? cleanMultiLineText(value, max) : cleanSingleLineText(value, max)); }
export function clampPercentInput(value) { if (value === "") return ""; const n = Number(value); if (!Number.isFinite(n)) return "0"; return String(Math.max(0, Math.min(100, Math.floor(n)))); }
export function allocationIsValid(values) { return Object.values(values).map(parseQty).every((v) => v >= 0 && v <= 100) && Object.values(values).map(parseQty).reduce((a, b) => a + b, 0) === 100; }
export function emptyBuildings() { return Object.fromEntries(buildingOrder.map(([id]) => [id, 0])); }
export function emptyMinerals() { return Object.fromEntries(mineralOrder.map((m) => [m, 0])); }
export function emptyBuildForm() { return Object.fromEntries(buildingOrder.map(([id]) => [id, ""])); }
export function scienceLevelBonus(level) { return 1 + (Number(level || 0) * 0.0005); }
export function sciencePercent(level) { return (Number(level || 0) * 0.05).toFixed(2); }
export function totalBuildings(b = {}) { return Object.values(b || {}).reduce((s, v) => s + (Number(v) || 0), 0); }
export function reservedBuildLand(playerLike = {}) { return playerLike.buildOrder ? totalBuildings(playerLike.buildOrder.build) : 0; }
export function totalEmpireLand(playerLike = {}) { return (playerLike.freeLand || 0) + totalBuildings(playerLike.buildings || {}); }
export function buildCost(build = {}) { return buildingOrder.reduce((s, [id, , cost]) => s + parseQty(build[id]) * cost, 0); }
const CONSTRUCTION_FACTORY_CURVE = [
  [0, 1],
  [500, 3],
  [1000, 5],
  [2000, 9],
  [4000, 13],
  [8000, 19],
  [16000, 25],
  [32000, 33],
];

export function constructionFactoryMultiplier(buildings = {}, allocation = {}) {
  const factories = Math.max(0, Number(buildings.factories || 0));
  const effective = factories * (parseQty(allocation.construction ?? 100) / 100);
  if (effective <= 0) return 1;
  for (let i = 1; i < CONSTRUCTION_FACTORY_CURVE.length; i += 1) {
    const [prevFactories, prevMultiplier] = CONSTRUCTION_FACTORY_CURVE[i - 1];
    const [nextFactories, nextMultiplier] = CONSTRUCTION_FACTORY_CURVE[i];
    if (effective <= nextFactories) {
      const span = nextFactories - prevFactories;
      const progress = span > 0 ? (effective - prevFactories) / span : 0;
      return prevMultiplier + ((nextMultiplier - prevMultiplier) * progress);
    }
  }
  const [lastFactories, lastMultiplier] = CONSTRUCTION_FACTORY_CURVE[CONSTRUCTION_FACTORY_CURVE.length - 1];
  return lastMultiplier + ((effective - lastFactories) / 8000);
}
export function constructionDurationSeconds(cost, buildings = {}, allocation = {}) { return (Number(cost) || 0) / 4 / constructionFactoryMultiplier(buildings, allocation); }
export function normaliseBuildSpeedFactor(value) { const n = parseQty(value); return Math.max(1, Math.min(9, n || 1)); }
export function buildSpeedMultiplier(speedFactor) { const f = normaliseBuildSpeedFactor(speedFactor); return (f * f + 11 * f + 18) / 30; }
export function speedFactorBuildCost(baseCost, speedFactor) { return (Number(baseCost) || 0) * normaliseBuildSpeedFactor(speedFactor); }
export function speedFactorBuildSeconds(baseCost, speedFactor, buildings = {}, allocation = {}) { return constructionDurationSeconds(baseCost, buildings, allocation) / buildSpeedMultiplier(speedFactor); }

export function barracksTrainingMultiplier(buildings = {}) {
  const barracks = Math.max(0, Number(buildings?.barracks || 0));
  if (barracks <= 1000) return 1 + barracks / 1000;
  if (barracks <= 4000) return 2 + ((barracks - 1000) / 3000) * 2;
  return 4;
}
export function trainingDurationSeconds(cost, buildings = {}, useSpeedMinerals = false, entity = {}, mode = REPORT_WORDING_MODE) {
  const fullSpeedSeconds = ((Number(cost) || 0) / 10862.90322580645) * 60;
  const barracksMultiplier = barracksTrainingMultiplier(buildings);
  const seconds = fullSpeedSeconds * (4 / barracksMultiplier);
  return seconds / trainingSpeedDivider(entity, useSpeedMinerals, mode);
}
export const SCIENCE_TICK_SECONDS = 1800;
export const SCIENCE_IG_TARGET_LEVEL = 180;
export const SCIENCE_IG_TARGET_TICKS = 90 * 24 * 2;
const SCIENCE_IG_SUM_SQUARES = SCIENCE_IG_TARGET_LEVEL * (SCIENCE_IG_TARGET_LEVEL + 1) * (2 * SCIENCE_IG_TARGET_LEVEL + 1) / 6;
const SCIENCE_QUADRATIC_TICK_COEFFICIENT = (SCIENCE_IG_TARGET_TICKS * 4) / SCIENCE_IG_SUM_SQUARES;
export function scienceLabMultiplier(buildings = {}) {
  const labs = Math.max(0, Number(buildings?.science_labs || 0));
  if (labs <= 1000) return 1 + labs / 1000;
  if (labs <= 4000) return 2 + ((labs - 1000) / 3000) * 2;
  return 4;
}
export function scienceDurationSeconds(currentLevel = 0, buildings = {}) {
  const nextLevel = Math.max(1, Math.floor(Number(currentLevel || 0)) + 1);
  const baselineTicks = SCIENCE_QUADRATIC_TICK_COEFFICIENT * nextLevel * nextLevel;
  return Math.max(1, Math.floor((baselineTicks * SCIENCE_TICK_SECONDS) / scienceLabMultiplier(buildings)));
}
export function armyPower(raceKey, army = []) { const r = races[raceKey] || races.human; return r.units.reduce((s, [, cost], i) => s + cost * (army[i] || 0), 0); }
export function publicPowerForEmpire(entity = {}) {
  const raceKey = entity.raceKey || entity.race || "human";
  const landPower = totalEmpireLand(entity) * LAND_POWER_VALUE;
  const missilePower = Math.min(Number(entity.missiles || 0), 200) * 10000;
  return armyPower(raceKey, entity.army || []) + landPower + missilePower + (Number(entity.powerOffset || 0));
}
export function stackNames(raceKey, stack = []) { const r = races[raceKey] || races.human; return stack.map((unitClass) => r.units[unitClass - 1]?.[0] || `Class ${unitClass}`).join(", "); }
