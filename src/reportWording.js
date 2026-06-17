// Report wording helpers for Classic/private and Modern AntrophAI battle text.
// Kept pure so battle mechanics can be separated from report presentation.

function fmt(n) { const v = Number.isFinite(Number(n)) ? Number(n) : 0; return Math.floor(v).toLocaleString("en-GB"); }
function safeDisplay(value) { if (value === null || value === undefined) return ""; if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value); if (Array.isArray(value)) return value.map(safeDisplay).join(", "); try { return JSON.stringify(value); } catch { return String(value); } }

export const REPORT_WORDING_MODE = "modern";
export const REPORT_WORDING_MODES = {
  classic: "Classic report wording",
  modern: "Modern AntrophAI wording"
};
export const REPORT_WORDING_MODE_NOTES = {
  classic: "Admin-protected nostalgia mode. Preserves high-sensitivity copied/retained classic AntrophAI report wording.",
  modern: "Default AntrophAI wording. Uses newly written report prose from the same battle facts."
};
export function normaliseReportTextMode(mode) { return mode === "modern" ? "modern" : "classic"; }
export function reportOpeningLine(mode, attackerName, defenderName) {
  return normaliseReportTextMode(mode) === "modern"
    ? `Battle record opened: ${attackerName} engaged ${defenderName}.`
    : `Here are the results of the battle between ${attackerName} and ${defenderName}:`;
}
export function reportTurretDisabledLine(mode, attackerName, defenderName, turretCount, disableCost) {
  return normaliseReportTextMode(mode) === "modern"
    ? `${attackerName} spent ${fmt(disableCost)} Cards to neutralise ${fmt(turretCount)} of ${defenderName}'s defensive turrets before contact.`
    : `${attackerName} disabled ${fmt(turretCount)} defensive turrets for ${fmt(disableCost)} Cardisium before the battle.`;
}
export function reportTurretNoEnergyLine(mode, defenderName, turretCount) {
  return normaliseReportTextMode(mode) === "modern"
    ? `${defenderName}'s ${fmt(turretCount)} defensive turrets stayed silent: insufficient stored energy.`
    : `${defenderName}'s ${fmt(turretCount)} turrets had insufficient energy and did not fire.`;
}
export function reportTurretFireLine(mode, defenderName, turretsFired, energyConsumed, damagePower, targetLines = []) {
  const targetText = targetLines.length ? ` (${targetLines.join(", ")})` : "";
  return normaliseReportTextMode(mode) === "modern"
    ? `${defenderName}'s turret grid fired before the main engagement. ${fmt(turretsFired)} turrets consumed ${fmt(energyConsumed)} energy and removed ${fmt(damagePower)} attacking power${targetText}.`
    : `${defenderName}'s defensive turrets fire first: ${fmt(turretsFired)} turrets consume ${fmt(energyConsumed)} energy and destroy ${fmt(damagePower)} power${targetText}.`;
}
export function reportUnitExchangeLine(mode, attackerName, attackerUnit, defenderName, defenderUnit, killed, lostPower) {
  return normaliseReportTextMode(mode) === "modern"
    ? `${attackerName}'s ${attackerUnit} engaged ${defenderName}'s ${defenderUnit}, destroying ${fmt(killed)} units and removing ${fmt(lostPower)} power.`
    : `${attackerName}'s ${attackerUnit} attacks ${defenderName}'s ${defenderUnit} and shoot down ${fmt(killed)} units. ${defenderName} lost ${fmt(lostPower)} power because of this.`;
}
export function reportPlayerSummaryLine(mode, won, defenderName, landSpoils, cardsSpoils, attackerLostPower, attackerLossPct, defenderLostPower, defenderLossPct) {
  if (normaliseReportTextMode(mode) === "modern") {
    return won
      ? `The attack succeeded. Your empire secured ${fmt(landSpoils)} land and ${fmt(cardsSpoils)} Cards. You lost ${fmt(attackerLostPower)} power (${Math.floor(attackerLossPct)}%); ${defenderName} lost ${fmt(defenderLostPower)} power (${Math.floor(defenderLossPct)}%).`
      : `The attack failed. Your empire lost ${fmt(attackerLostPower)} power (${Math.floor(attackerLossPct)}%); ${defenderName} lost ${fmt(defenderLostPower)} power (${Math.floor(defenderLossPct)}%).`;
  }
  return won
    ? `Your attack was successful, and you gained ${fmt(landSpoils)} land and ${fmt(cardsSpoils)} Cardisium. You lost ${fmt(attackerLostPower)} (${Math.floor(attackerLossPct)}%) power, while ${defenderName} lost ${fmt(defenderLostPower)} (${Math.floor(defenderLossPct)}%) power.`
    : `Your attack failed. You lost ${fmt(attackerLostPower)} (${Math.floor(attackerLossPct)}%) power, while ${defenderName} lost ${fmt(defenderLostPower)} (${Math.floor(defenderLossPct)}%) power.`;
}
export function reportBotSummaryLine(mode, attackerName, defenderName, attackerWon, landSpoils, cardsSpoils, attackerLostPower, attackerLossPct, defenderLostPower, defenderLossPct) {
  if (normaliseReportTextMode(mode) === "modern") {
    return attackerWon
      ? `${attackerName}'s attack succeeded. ${attackerName} secured ${fmt(landSpoils)} land and ${fmt(cardsSpoils)} Cards. ${attackerName} lost ${fmt(attackerLostPower)} power (${Math.floor(attackerLossPct)}%); ${defenderName} lost ${fmt(defenderLostPower)} power (${Math.floor(defenderLossPct)}%).`
      : `${attackerName}'s attack failed. ${attackerName} lost ${fmt(attackerLostPower)} power (${Math.floor(attackerLossPct)}%); ${defenderName} lost ${fmt(defenderLostPower)} power (${Math.floor(defenderLossPct)}%).`;
  }
  return attackerWon
    ? `${attackerName}'s attack was successful, and ${attackerName} gained ${fmt(landSpoils)} land and ${fmt(cardsSpoils)} Cardisium. ${attackerName} lost ${fmt(attackerLostPower)} (${Math.floor(attackerLossPct)}%) power, while ${defenderName} lost ${fmt(defenderLostPower)} (${Math.floor(defenderLossPct)}%) power.`
    : `${attackerName}'s attack failed. ${attackerName} lost ${fmt(attackerLostPower)} (${Math.floor(attackerLossPct)}%) power, while ${defenderName} lost ${fmt(defenderLostPower)} (${Math.floor(defenderLossPct)}%) power.`;
}
export function reportProtectionExperienceLine(mode, targetLabel, protectionHours, xpGained, perspective = "player", xpActorLabel = "") {
  if (normaliseReportTextMode(mode) === "modern") {
    const subject = perspective === "player" ? "The target" : targetLabel;
    const xpText = perspective === "player" ? `your empire gained ${fmt(xpGained)} experience` : `${xpActorLabel || "the attacker"} gained ${fmt(xpGained)} experience`;
    return `${subject} received ${protectionHours.toFixed(2)} hours of attack protection, and ${xpText}.`;
  }
  return perspective === "player"
    ? `The person has been put in protection for ${protectionHours.toFixed(2)} hours and you have gained ${fmt(xpGained)} experience.`
    : `${targetLabel} has been put in protection for ${protectionHours.toFixed(2)} hours and ${xpActorLabel || "the attacker"} has gained ${fmt(xpGained)} experience.`;
}

export function transformClassicReportTextForMode(line, mode = REPORT_WORDING_MODE) {
  const text = safeDisplay(typeof line === "object" && line !== null ? line.text : line);
  if (normaliseReportTextMode(mode) !== "modern") return text;
  let m = text.match(/^Here are the results of the battle between (.*?) and (.*?):?$/);
  if (m) return `Battle record opened: ${m[1]} engaged ${m[2]}.`;
  m = text.match(/^(.*?) disabled ([\d,]+) defensive turrets for ([\d,]+) Cardisium before the battle\.$/);
  if (m) return `${m[1]} spent ${m[3]} Cards to neutralise ${m[2]} defensive turrets before contact.`;
  m = text.match(/^(.*?)'s ([\d,]+) turrets had insufficient energy and did not fire\.$/);
  if (m) return `${m[1]}'s ${m[2]} defensive turrets stayed silent: insufficient stored energy.`;
  m = text.match(/^(.*?)'s defensive turrets fire first: ([\d,]+) turrets consume ([\d,]+) energy and destroy ([\d,]+) power(.*)\.$/);
  if (m) return `${m[1]}'s turret grid fired before the main engagement. ${m[2]} turrets consumed ${m[3]} energy and removed ${m[4]} attacking power${m[5] || ""}.`;
  m = text.match(/^(.*?)'s (.*?) attacks (.*?)'s (.*?) and shoot down ([\d,]+) units\. (.*?) lost ([\d,]+) power because of this\.$/);
  if (m) return `${m[1]}'s ${m[2]} engaged ${m[3]}'s ${m[4]}, destroying ${m[5]} units and removing ${m[7]} power.`;
  m = text.match(/^Your attack was successful, and you gained ([\d,]+) land and ([\d,]+) Cardisium\. You lost ([\d,]+) \((\d+)%\) power, while (.*?) lost ([\d,]+) \((\d+)%\) power\.$/);
  if (m) return `The attack succeeded. Your empire secured ${m[1]} land and ${m[2]} Cards. You lost ${m[3]} power (${m[4]}%); ${m[5]} lost ${m[6]} power (${m[7]}%).`;
  m = text.match(/^Your attack failed\. You lost ([\d,]+) \((\d+)%\) power, while (.*?) lost ([\d,]+) \((\d+)%\) power\.$/);
  if (m) return `The attack failed. Your empire lost ${m[1]} power (${m[2]}%); ${m[3]} lost ${m[4]} power (${m[5]}%).`;
  m = text.match(/^(.*?)'s attack was successful, and \1 gained ([\d,]+) land and ([\d,]+) Cardisium\. \1 lost ([\d,]+) \((\d+)%\) power, while (.*?) lost ([\d,]+) \((\d+)%\) power\.$/);
  if (m) return `${m[1]}'s attack succeeded. ${m[1]} secured ${m[2]} land and ${m[3]} Cards. ${m[1]} lost ${m[4]} power (${m[5]}%); ${m[6]} lost ${m[7]} power (${m[8]}%).`;
  m = text.match(/^(.*?)'s attack failed\. \1 lost ([\d,]+) \((\d+)%\) power, while (.*?) lost ([\d,]+) \((\d+)%\) power\.$/);
  if (m) return `${m[1]}'s attack failed. ${m[1]} lost ${m[2]} power (${m[3]}%); ${m[4]} lost ${m[5]} power (${m[6]}%).`;
  m = text.match(/^The person has been put in protection for ([\d.]+) hours and you have gained ([\d,]+) experience\.$/);
  if (m) return `The target received ${m[1]} hours of attack protection, and your empire gained ${m[2]} experience.`;
  m = text.match(/^(.*?) has been put in protection for ([\d.]+) hours and (.*?) has gained ([\d,]+) experience\.$/);
  if (m) return `${m[1]} received ${m[2]} hours of attack protection, and ${m[3]} gained ${m[4]} experience.`;
  m = text.match(/^([\d,]+) (.*?) of (.*?)'s army survive after the battle! \((\d+)% revives\)$/);
  if (m) return `${m[3]}'s surviving ${m[2]} re-formed after the battle: ${m[1]} units restored (${m[4]}% revive).`;
  if (/Cardisium/.test(text)) return text.replace(/Cardisium/g, "Cards").replace(/using a retal/g, "by retaliation order").replace(/attacked/g, "engaged");
  return text;
}
