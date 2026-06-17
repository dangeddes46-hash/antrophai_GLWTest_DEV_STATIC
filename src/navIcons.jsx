import React from "react";

const conceptIconPath = (fileName) => `/assets/lhs_icons_concept/${fileName}.png`;
export const navIconRegistry = {
  "status-panel": { title: "Status", source: "approved-chopped-concept-v1", image: conceptIconPath("status-panel") },
  "build-blocks": { title: "Build", source: "approved-chopped-concept-v1", image: conceptIconPath("build-blocks") },
  "barracks-formation": { title: "Barracks", source: "approved-chopped-concept-v1", image: conceptIconPath("barracks-formation") },
  "attack-crosshair": { title: "Attack", source: "approved-chopped-concept-v1", image: conceptIconPath("attack-crosshair") },
  "bank-vault": { title: "Bank", source: "approved-chopped-concept-v1", image: conceptIconPath("bank-vault") },
  "science-nodes": { title: "Science", source: "approved-chopped-concept-v1", image: conceptIconPath("science-nodes") },
  "spy-eye": { title: "Spy", source: "approved-chopped-concept-v1", image: conceptIconPath("spy-eye") },
  "explore-compass": { title: "Explore", source: "approved-chopped-concept-v1", image: conceptIconPath("explore-compass") },

  "alliance-links": { title: "Alliance", source: "approved-chopped-concept-v1", image: conceptIconPath("alliance-links") },
  "battlelog-report": { title: "Battle Log", source: "approved-chopped-concept-v1", image: conceptIconPath("battlelog-report") },
  "messages-envelope": { title: "Messages", source: "approved-chopped-concept-v1", image: conceptIconPath("messages-envelope") },
  "news-bulletin": { title: "News", source: "approved-chopped-concept-v1", image: conceptIconPath("news-bulletin") },
  "online-radar": { title: "Online", source: "approved-chopped-concept-v1", image: conceptIconPath("online-radar") },
  "rankings-bars": { title: "Rankings", source: "approved-chopped-concept-v1", image: conceptIconPath("rankings-bars") },
  "search-magnifier": { title: "Search", source: "approved-chopped-concept-v1", image: conceptIconPath("search-magnifier") },
  "todo-checklist": { title: "To Do", source: "approved-chopped-concept-v1", image: conceptIconPath("todo-checklist") },

  "bonus-starburst": { title: "Bonus", source: "approved-chopped-concept-v1", image: conceptIconPath("bonus-starburst") },
  "destroy-action": { title: "Destroy", source: "approved-chopped-concept-v1", image: conceptIconPath("destroy-action") },
  "disband-action": { title: "Disband", source: "approved-chopped-concept-v1", image: conceptIconPath("disband-action") },
  "factories-cog": { title: "Factories", source: "approved-chopped-concept-v1", image: conceptIconPath("factories-cog") },
  "market-swap": { title: "Market", source: "approved-chopped-concept-v1", image: conceptIconPath("market-swap") },
  "missiles-rocket": { title: "Missiles", source: "approved-chopped-concept-v1", image: conceptIconPath("missiles-rocket") },
  "mines-drill": { title: "Mines", source: "approved-chopped-concept-v1", image: conceptIconPath("mines-drill") },
  "shops-crate": { title: "Shops", source: "approved-chopped-concept-v1", image: conceptIconPath("shops-crate") },

  // Future links use existing approved concept icons in the lite build so no production icon folder is required.
  "starwars-orbit-ship": { title: "Star Wars", source: "approved-chopped-concept-v1-fallback", image: conceptIconPath("missiles-rocket") },
  "defence-shield": { title: "Defences", source: "approved-chopped-concept-v1-fallback", image: conceptIconPath("attack-crosshair") },
};

export const navIconByPage = {
  alliances: "alliance-links",
  bank: "bank-vault",
  barracks: "barracks-formation",
  battlelog: "battlelog-report",
  bonus: "bonus-starburst",
  build: "build-blocks",
  destroy: "destroy-action",
  disband: "disband-action",
  explore: "explore-compass",
  factories: "factories-cog",
  market: "market-swap",
  messages: "messages-envelope",
  missiles: "missiles-rocket",
  mines: "mines-drill",
  news: "news-bulletin",
  online: "online-radar",
  rankings: "rankings-bars",
  science: "science-nodes",
  search: "search-magnifier",
  shops: "shops-crate",
  spy: "spy-eye",
  status: "status-panel",
  todo: "todo-checklist",
  war: "attack-crosshair",
  starwars: "starwars-orbit-ship",
  defences: "defence-shield",
  turrets: "defence-shield",
};

export function NavIcon({ name, className = "" }) {
  const icon = navIconRegistry[name];
  if (!icon) return null;
  if (icon.image) {
    return <img className={`antro-lhs-nav-icon ${className}`} src={icon.image} alt="" aria-hidden="true" draggable="false" />;
  }
  return (
    <svg className={`antro-lhs-nav-icon ${className}`} viewBox={icon.viewBox || "0 0 24 24"} aria-hidden="true" focusable="false">
      {icon.elements || icon.paths?.map((d, i) => <path key={`${name}-${i}`} d={d} />)}
    </svg>
  );
}
