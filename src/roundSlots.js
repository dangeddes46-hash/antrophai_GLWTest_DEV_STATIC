import { roundProfiles } from "./gameData.js";

export const GAME_TOTAL_TICKS = 90 * 24 * 2;
export const GAME_TOTAL_GAME_MS = GAME_TOTAL_TICKS * 30 * 60 * 1000;
export const accountRounds = [
  { key: "intro", profileName: "Intro Game", name: "Intro Game", status: "starting_now", opens: "Open now", starts: "Starting now", startFraction: 0, description: "Fresh-return / first-contact round. Use this for a clean first look after years away.", speed: "Standard" },
  { key: "glw", profileName: "Godlike Warfare", name: "Godlike Warfare", status: "late_round", opens: "Open", starts: "Live - final third", startFraction: 0.70, description: "Fast combat-heavy test round already deep into its lifecycle. Intended for late-round pressure testing.", speed: "4x" },
  { key: "admin-start", profileName: "Godlike Warfare", name: "Admin Start New Round", status: "admin_start", opens: "Admin controlled", starts: "Start on demand", startFraction: 0, description: "Reserved space for admins to seed or launch a fresh custom round profile once setup controls are formalised.", speed: "Admin" },
];
export const speciesTraits = {
  human: { title: "Systems and logistics", trait: "Modern trait: construction crews work 5% faster.", summary: "Organised, adaptable command animals. Humans survive by turning weakness into systems." },
  trysaur: { title: "War economy", trait: "Modern trait: speed-mineral training builds permanent War Drums momentum, ramping the speed-train effect from 2x up to 3x by 500 completed boosted trains.", summary: "Saurian conquerors shaped by hierarchy, pressure and endless war." },
  relu: { title: "Analysis and precision", trait: "Modern trait: revive outcomes gain a 10% multiplier after the normal revive calculation.", summary: "Abandoned infrastructure refined into conscious soulcore agency." },
  lithi: { title: "Brood expansion", trait: "Modern trait: when speed minerals are used, max train expands massively — 10x for rows 1-2, 4x for rows 3-5, and 2x for row 6.", summary: "Biological conquest through infestation, brood pressure and living matter." },
  zarth: { title: "Field coherence", trait: "Modern trait: mineral extraction yields 20% more output.", summary: "Membrane, pressure and plasma life temporarily forced into coherent forms." },
};

export const SAVE_KEY = "antrophia-web-prototype-v040-21-fresh-glw-world";
export const ROUND_SLOT_PREFIX = `${SAVE_KEY}-round-slot-`;
export const ROUND_SLOT_INDEX_KEY = `${SAVE_KEY}-round-slot-index`;
export const ROUND_SLOT_CURRENT_KEY = `${SAVE_KEY}-round-slot-current`;
export function roundSlotSaveKey(slotKey = "main") { return `${ROUND_SLOT_PREFIX}${String(slotKey || "main")}`; }

export function canonicalRoundKeyForSlot(slot = {}) {
  const slotKey = String(slot?.slotKey || "").toLowerCase();
  if (slotKey.startsWith("glw-")) return "glw";
  if (slotKey.startsWith("intro-")) return "intro";
  if (slotKey.startsWith("admin-start-") || slotKey.startsWith("custom-") || slotKey.startsWith("admin-")) return "admin-start";
  const name = String(slot?.roundName || slot?.label || slot?.gameName || slot?.roundProfile || "").toLowerCase();
  if (name.includes("godlike") || name === "glw") return "glw";
  if (name.includes("intro")) return "intro";
  if (name.includes("turbo") || name.includes("admin") || name.includes("custom")) return "admin-start";
  const roundKey = String(slot?.roundKey || "");
  return accountRounds.some((round) => round.key === roundKey) ? roundKey : "intro";
}
export function normaliseRoundSlotEntry(slot = {}) {
  if (!slot || typeof slot !== "object") return slot;
  const roundKey = canonicalRoundKeyForSlot(slot);
  return { ...slot, roundKey, roundName: slot.roundName || defaultRoundSlotLabel(roundKey), label: slot.label || slot.roundName || defaultRoundSlotLabel(roundKey) };
}
export function makeRoundSlotKey(roundKey = "glw") { return `${roundKey}-${Date.now()}`; }
export function defaultRoundSlotLabel(roundKey = "glw") { return accountRounds.find((round) => round.key === roundKey)?.name || roundKey || "Prototype Round"; }
export function roundProfileForKey(roundKey = "intro") { const round = accountRounds.find((r) => r.key === roundKey); return round?.profileName || (roundKey === "intro" ? "Intro Game" : "Godlike Warfare"); }
export function roundSpeedForKey(roundKey = "intro") { return Math.max(0.001, Number(roundProfiles[roundProfileForKey(roundKey)]?.gameSpeed) || 1); }
export function roundStartTimestampForKey(roundKey = "intro", now = Date.now()) { const round = accountRounds.find((r) => r.key === roundKey) || accountRounds[0]; const elapsedGameMs = GAME_TOTAL_GAME_MS * Math.max(0, Math.min(0.98, Number(round?.startFraction) || 0)); return now - (elapsedGameMs / roundSpeedForKey(roundKey)); }
export function roundClockSnapshot(roundKey = "intro", startedAt = Date.now(), now = Date.now(), speedOverride = null) { const speed = Math.max(0.001, Number(speedOverride) || roundSpeedForKey(roundKey)); const elapsedGameMs = Math.max(0, (now - (Number(startedAt) || now)) * speed); const totalTicks = GAME_TOTAL_TICKS; const elapsedTicks = Math.min(totalTicks, Math.floor(elapsedGameMs / (30 * 60 * 1000))); const remainingTicks = Math.max(0, totalTicks - elapsedTicks); const percent = Math.min(100, Math.max(0, elapsedTicks / totalTicks * 100)); const realEndAt = (Number(startedAt) || now) + (GAME_TOTAL_GAME_MS / speed); return { speed, elapsedTicks, remainingTicks, totalTicks, percent, realEndAt, ended: remainingTicks <= 0 }; }
export function formatRoundClock(snapshot = {}) { return `${Number(snapshot.percent || 0).toFixed(1)}% complete · ${snapshot.remainingTicks ?? 0}/${snapshot.totalTicks ?? GAME_TOTAL_TICKS} ticks remaining`; }
