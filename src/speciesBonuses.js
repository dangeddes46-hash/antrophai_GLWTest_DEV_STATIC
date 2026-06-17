import { races } from "./gameData.js";
import { REPORT_WORDING_MODE, normaliseReportTextMode } from "./reportWording.js";

export const TRYSAUR_WAR_DRUM_MAX_USES = 500;
export function speciesBonusesEnabled(mode = REPORT_WORDING_MODE) { return normaliseReportTextMode(mode) === "modern"; }
export function raceKeyForEntity(entityOrRace = {}) {
  if (typeof entityOrRace === "string") return races[entityOrRace] ? entityOrRace : "human";
  const key = entityOrRace?.race || entityOrRace?.raceKey;
  return races[key] ? key : "human";
}
export function normaliseSpeciesProgress(entity = {}) {
  return { trainingSpeedOrdersCompleted: Math.max(0, Math.floor(Number(entity?.trainingSpeedOrdersCompleted || 0))) };
}
export function humanConstructionSpeedMultiplier(entity = {}, mode = REPORT_WORDING_MODE) {
  return speciesBonusesEnabled(mode) && raceKeyForEntity(entity) === "human" ? 1.05 : 1;
}
export function trysaurWarDrumProgress(completedOrders = 0) {
  const cappedUses = Math.max(0, Math.min(TRYSAUR_WAR_DRUM_MAX_USES, Math.floor(Number(completedOrders) || 0)));
  const progress = cappedUses / TRYSAUR_WAR_DRUM_MAX_USES;
  const curve = 1 - Math.pow(1 - progress, 2);
  const bonusFactor = 1 + 0.5 * curve;
  return { cappedUses, progress, curve, bonusFactor, speedMultiplier: 2 * bonusFactor };
}
export function trainingSpeedDivider(entity = {}, useSpeedMinerals = false, mode = REPORT_WORDING_MODE) {
  if (!useSpeedMinerals) return 1;
  const raceKey = raceKeyForEntity(entity);
  if (!speciesBonusesEnabled(mode) || raceKey !== "trysaur") return 2;
  return trysaurWarDrumProgress(normaliseSpeciesProgress(entity).trainingSpeedOrdersCompleted).speedMultiplier;
}
export function lithiTrainCapMultiplierForRow(rowIndex = 0, entity = {}, useSpeedMinerals = false, mode = REPORT_WORDING_MODE) {
  if (!useSpeedMinerals || !speciesBonusesEnabled(mode) || raceKeyForEntity(entity) !== "lithi") return 1;
  if (rowIndex <= 1) return 10;
  if (rowIndex <= 4) return 4;
  return 2;
}
export function effectiveMaxTrainForRow(raceKey, rowIndex = 0, { entity = {}, useSpeedMinerals = false, mode = REPORT_WORDING_MODE } = {}) {
  const base = races[raceKey]?.maxTrain || 0;
  return base * lithiTrainCapMultiplierForRow(rowIndex, entity || raceKey, useSpeedMinerals, mode);
}
export function effectiveMaxTrainByRow(raceKey, options = {}) {
  return Array.from({ length: 6 }, (_, rowIndex) => effectiveMaxTrainForRow(raceKey, rowIndex, options));
}
export function reluReviveMultiplier(entity = {}, mode = REPORT_WORDING_MODE) {
  return speciesBonusesEnabled(mode) && raceKeyForEntity(entity) === "relu" ? 1.1 : 1;
}
export function zarthMiningMultiplier(entity = {}, mode = REPORT_WORDING_MODE) {
  return speciesBonusesEnabled(mode) && raceKeyForEntity(entity) === "zarth" ? 1.2 : 1;
}
export function completedSpeedTrainCounter(entity = {}) {
  return normaliseSpeciesProgress(entity).trainingSpeedOrdersCompleted;
}
export function shouldAwardTrysaurWarDrums(entity = {}, order = null, mode = REPORT_WORDING_MODE) {
  return Boolean(order?.speedMinerals) && speciesBonusesEnabled(mode) && raceKeyForEntity(entity) === "trysaur";
}
export function awardCompletedTrysaurWarDrums(entity = {}, order = null, mode = REPORT_WORDING_MODE) {
  if (!shouldAwardTrysaurWarDrums(entity, order, mode)) return entity;
  return { ...entity, trainingSpeedOrdersCompleted: completedSpeedTrainCounter(entity) + 1 };
}
