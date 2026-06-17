export const prototypeChangelog = [
  { version: "v0.41.63", title: "Shared Battle Material and Mixed gallery folders", notes: ["Corrected the archive gallery structure so Archive Plates remains race-foldered, while Battle Material and Mixed are single shared cross-race galleries.", "Updated the gallery path notes and empty-state text to expect public/assets/race_archive_battle_material/ and public/assets/race_archive_mixed/ directly, with no Human/Trysaur/ReLu/Lithi/Zarth subfolders.", "Added shared gallery data hooks for future Battle Material and Mixed manifests without changing existing Archive Plates entries.", "No intended changes to saves, combat, diplomacy, timing, normal gameplay UI or main race archive pages." ] },
  { version: "v0.41.62", title: "Archive gallery sections structure", notes: ["Extended the illustrated archive gallery page into three reusable sections per race: Archive Plates, Battle Material and Mixed.", "Added gallery tabs, section-specific empty states and expected asset-folder notes while retaining the same thumbnail grid and full-screen left/right image viewer behaviour.", "Kept the new Battle Material and Mixed sections ready for future race-sorted image packs without changing the existing Archive Plates manifest.", "No intended changes to saves, combat, diplomacy, timing, normal gameplay UI or main race archive pages." ] },
  { version: "v0.41.61", title: "Archive plates image manifest", notes: ["Populated the reusable Archive Plates galleries with race-sorted image references from the supplied antrophai_race_images archive.", "Added titles and development-status notes derived from image filenames, including rejected explorations, superseded drafts, locked/reference plates and concept studies.", "Kept this as a code-only build: the actual archive-plate images should be extracted into public/assets/race_archive_plates/ with Human, Trysaur, ReLu, Lithi and Zarth folders.", "No intended changes to saves, combat, diplomacy, timing, normal gameplay UI or the main illustrated race archive pages." ] },
  { version: "v0.41.60", title: "Archive plates structure and subtitle-case polish", notes: ["Added a reusable Archive Plates page for each illustrated race archive, with thumbnail gallery structure and a full-screen image viewer controlled by left/right arrows plus Return to Race Archive.", "Enabled the Next: Archive Plates navigation button on race archive pages; galleries show a clear pending state until secondary/non-canon image packs are supplied.", "Adjusted archive typography so race-coded section headings and subtitle-style lines preserve sentence case instead of being forced into uppercase/small-caps.", "No intended changes to normal gameplay UI, saves, combat, diplomacy, timing or archive asset paths." ] },
  { version: "v0.41.58", title: "Zarth illustrated archive asset population", notes: ["Added the Zarth Illustrated Archive using the reusable race archive shell.", "Populated Zarth archive text, classification, hardback background and three supplied story plates: field-life coalescence, coherence without flesh and pressure-front thermal war.", "Added Zarth-specific archive styling with dark mineral, pressure-fissure, thermal-gold and phase-blue palette while preserving Human, Trysaur, Re’lu and Li’thi archive pages.", "No intended changes to saves, round slots, combat, diplomacy, timing, LHS icons or normal Field Manual behaviour." ] },
  { version: "v0.41.56", title: "Illustrated archive navigation button polish", notes: ["Changed the illustrated archive Back to Field Guide / Next: Archive Plates controls into two clearer dedicated navigation buttons at the top and footer of the archive page.", "Kept Next: Archive Plates disabled as a visible placeholder until archive plate pages are populated.", "No intended changes to archive content, assets, saves, combat, diplomacy, timing, Round Select or normal Field Manual behaviour." ] },
  { version: "v0.41.55", title: "Human illustrated archive asset population", notes: ["Added the Human Illustrated Archive using the reusable race archive shell.", "Populated Human archive text, classification, hardback background and three supplied story plates: scarred moon, systems against weakness and refusing the brood a battlefield.", "Added Human-specific archive styling with dark steel, industrial amber, blueprint-grid and civil-defence palette while preserving Re’lu and Trysaur archive pages.", "No intended changes to saves, round slots, combat, diplomacy, timing, LHS icons or normal Field Manual behaviour." ] },
  { version: "v0.41.54", title: "Trysaur illustrated archive asset population", notes: ["Added the Trysaur Illustrated Archive using the existing reusable race archive shell.", "Populated Trysaur archive text, classification, hardback background and three supplied story plates: world/origin, proving ring hierarchy arena and Pascortha spear projection.", "Added Trysaur-specific archive styling with black-stone, dark-iron and ember palette while preserving the Re’lu archive page.", "No intended changes to saves, round slots, combat, diplomacy, timing, LHS icons or normal Field Manual behaviour." ] },
  { version: "v0.41.53", title: "Re’lu illustrated archive asset population", notes: ["Populated the Re’lu Illustrated Archive with the supplied hardback/background image and three story plates.", "Updated the Re’lu archive plate mapping to use Quiet Archive of Selves, Asterion Null Low Orbit and Battle Form Ithica assets.", "Adjusted the Re’lu archive background/readability overlays so the supplied page wallpaper supports the story text without competing with it.", "No intended changes to saves, round slots, combat, diplomacy, timing, LHS icons or normal Field Manual behaviour." ] },
  { version: "v0.41.52", title: "Re’lu illustrated archive structure", notes: ["Added a reusable illustrated race archive structure using Re’lu as the first prototype page.", "Added an Open Illustrated Archive action beside the Re’lu Origin Record in the Field Manual race dossier.", "Built a dedicated archive reading shell that keeps the AntrophAI banner/race selector/back controls but suppresses the normal LHS nav, resource bars and command UI.", "Added Re’lu archive styling, classification strip, long-form section flow and placeholder image plate slots for R1/R2/R3 pending final supplied artwork.", "No intended changes to mechanics, saves, combat, diplomacy, timing, LHS icons or Round Select behaviour." ] },
  { version: "v0.41.51", title: "Approved LHS icons and AntrophAI wording sweep", notes: ["Restored the approved chopped concept-sheet LHS icon visuals after the production icon pack proved visually weaker in context.", "Kept the v0.41.50 icon registry structure while pointing current LHS page icons back to public/assets/lhs_icons_concept.", "Swept remaining in-game/source UI text to AntrophAI branding, including manifest descriptions, records text and internal prototype/admin notes.", "Preserved save keys, slot structure, timing controls, diplomacy fixes, combat calculations and Round Select behaviour." ] },
  { version: "v0.41.50", title: "Production LHS icon pack", notes: ["Replaced the cropped concept-sheet LHS navigation icons with Rowan's individual production PNG icon pack.", "Added the production icon assets under public/assets/lhs_icons_production and updated the nav icon registry source labels accordingly.", "Kept the existing 20px LHS icon sizing, nav layout, page-to-icon mapping and protected CSS hooks intact.", "No intended changes to mechanics, saves, diplomacy, round slots, timing, combat or Round Select behaviour." ] },
  { version: "v0.41.48", title: "Save/load slot identity labels", notes: ["Added clear Active Slot labels to live autosaves so Intro Game, Godlike Warfare and Admin Round are visibly distinct from saved snapshots.", "Marked the currently loaded slot in the Save / Load list and added short explanatory notes for live slots versus snapshot copies.", "Clarified that snapshots are manual single-round copies and do not overwrite the fixed live slots unless deliberately loaded into the Admin Round.", "No intended changes to save keys, slot structure, timing, diplomacy, combat or mechanics." ] },
  { version: "v0.41.47", title: "Save/load safety and round timing clarity", notes: ["Separated Save / Load into Live Round Slots and Saved Snapshots so autosaves are no longer presented like disposable backup files.", "Renamed manual save creation to Create Snapshot from Current State and changed live-slot deletion wording to Reset / Clear with clearer confirmation language.", "Updated admin time controls to distinguish Advance this round's game clock in exact ticks from Advance this round by real time.", "Round Select clock display now uses saved slot speed/profile where available, so admin/Turbo-style rounds do not fall back to the generic admin/default speed.", "Preserved existing save keys, round slots, admin round behaviour, mechanics, diplomacy fixes and LHS icons." ] },
  { version: "v0.41.46", title: "Admin round card naming and reset behaviour", notes: ["Admin Start New Round now displays the active admin profile name after registration, for example Admin Better Conflict, while the empty/admin setup state still uses the admin start wording.", "Starting/resetting a fresh admin round from Game Admin clears the fixed admin slot and returns to species/name registration without copying the previous species choice.", "Loading an existing save into the admin slot still preserves that save's registration/species and enters the saved game directly.", "Preserved normal Intro/GLW loading, save slot keys, mechanics, diplomacy fixes and Round Select tabs."] },
  { version: "v0.41.45", title: "Admin round slot and save/load cleanup", notes: ["Changed Admin Start New Round to use one fixed Admin Round slot that is cleared/overwritten when creating a new admin round instead of accumulating timestamped admin slots.", "Resetting/creating an admin round now returns to race/name registration so the admin round does not inherit the previous race/game accidentally.", "Admin-created rounds now use the selected Game Admin profile/settings as a fresh round rather than falling through to the normal late-round GLW lifecycle.", "Added Create New Save from Current State on Save / Load and renamed Switch to Load for clarity.", "Added Load into Admin Round so a saved state can be copied into the single admin slot for testing without disturbing the source save.", "Preserved normal Intro/GLW slot loading, mechanics, diplomacy fixes, LHS icons and Round Select tabs."] },
  { version: "v0.41.44", title: "Round Select tab cleanup", notes: ["Reworked the base-layer Round Select into tabs for Round Select, Game Access & Display, Current Registration, Save / Load and Game Admin.", "Changed registered round cards so Registration shows the registered species/race instead of the generic Registered label.", "Moved local game creation and round setup controls into the Game Admin tab and removed the standalone Round Setup page entry points.", "Trimmed the Prototype / Admin Tools sidebar down to the requested live playtest controls: +50m Cards, time controls, Clear All Retals and Bot Difficulty.", "Preserved save keys, round slot identity, mechanics, combat calculations, LHS icons and diplomacy fixes." ] },
  { version: "v0.41.42", title: "Individual and alliance diplomacy controls", notes: ["Added direct Declare War / Request Peace controls to player profiles and alliance profiles so diplomacy can be managed from the relevant target page.", "Separated individual and alliance diplomacy handling: individual wars persist when leaving or creating an alliance, but do not apply while serving in a joined alliance; allied status is reset on joining, leaving or creating an alliance.", "Filtered allied players out of attack target lists for both solo-player allied status and alliance allied status.", "Preserved save key names, combat calculations, LHS icons, Round Select access/display changes and battle report colour formatting."] },
  { version: "v0.41.41", title: "Diplomacy display persistence fix", notes: ["Removed hardcoded demo diplomacy statuses from the alliance list so Orange Dawn and Old Guard no longer show Ally/War in every game by default.", "Made displayed alliance diplomacy derive from saved activeWars and alliedStatuses instead of demo alliance names.", "Preserved the intended rule that individual war status continues to count after starting an alliance, while individual ally status does not carry into alliance diplomacy display.", "Preserved mechanics, save key names, LHS icons, Round Select access/display changes and report colour formatting."] },
  { version: "v0.41.40", title: "Round Select access and display panel", notes: ["Added a compact Game Access & Display panel to Round Select with Hybrid AntrophAI, Modern AntrophAI, Classic Labels and admin-gated Retro Mode wording choices.", "Added first-pass Admin Access password modal and Retro Mode confirmation copy using Rowan's reference/access wording.", "Separated Classic Labels from Retro Mode: Classic Labels remains available to normal players, while Retro Mode is only selectable after Admin Access.", "Preserved mechanics, save slot identity, combat calculations, LHS icons, battle report colour formatting and Choose Species assets."] },
  { version: "v0.41.39", title: "LHS icon lock-in polish and player highlights", notes: ["Polished Rowan concept-sheet LHS icon alignment with a steadier 20px icon column and slightly stronger left padding.", "Restored battle-report colour grouping for modern wording patterns as well as classic report text, including turret, attack, summary, revive and protection lines.", "Added a subdued darker-orange self highlight in Rankings and Online so the active player is easier to pick out without changing table behaviour.", "No intended changes to mechanics, saves, combat calculations, round slots or Choose Species assets."] },
  { version: "v0.41.38", title: "Rowan concept-sheet LHS icon comparison", notes: ["Cropped Rowan's three LHS icon concept sheets into individual transparent PNG assets for an in-context comparison pass.", "Swapped the LHS nav icon registry to use the richer concept-sheet icons at 20px and tightened the sidebar button gap slightly.", "This is a comparison build only: no intended mechanics, save, combat, report, round-slot or Choose Species changes."] },
  { version: "v0.41.37", title: "Rowan LHS icon batch comparison build", notes: ["Replaced the first seven temporary LHS nav glyphs with Rowan Batch 1 currentColor SVG forms: Status, Build, Train, Attack, Bank, Science and Spy.", "Kept the v0.41.36 icon registry and page mapping structure intact so remaining icons can be swapped in by name as later batches arrive.", "No intended mechanics, save, combat, report, round-slot or Choose Species changes."] },
  { version: "v0.41.36", title: "Persistent LHS navigation icon structure", notes: ["Added a central inline SVG nav icon registry and page-to-icon map using original AntrophAI page anchors.", "Wired the left-hand game navigation to render stable currentColor icons before race/mode display labels.", "Preserved current mechanics, saves, round slots, combat, reports, Choose Species assets and existing skin hooks."] },
  { version: "v0.41.35", title: "Choose species registration dossier pass", notes: ["Integrated Silas choose-species handover v1 images and species copy.", "Reworked Register for Game into a dropdown-driven species dossier with doctrine image, hero image, live skin accent, short story, trait effect and identity table.", "No intended mechanics, save, combat, report or round-slot changes."] },
  { version: "v0.41.34", title: "Extended story art and species bonus cards", notes: ["Added the AntrophAI extended story art pack as public story-art assets.", "Added storyArtManifest and Modern species bonus card text for the choose-species registration screen.", "Choose-species now shows doctrine art, trait title, editable mechanical effect text and story cue without changing mechanics, saves, combat or round slots."] },
  { version: "v0.41.33", title: "Science constants import guard", notes: ["Exported/imported science timing constants after gameMath split so self-tests can run without crashing.", "No intended mechanics, save, combat, round-slot, report wording or visual changes."] },
  { version: "v0.41.32", title: "App split pass 4: game math helpers", notes: ["Extracted shared formatting, build/training/science timing, population, power and basic math helpers into src/gameMath.js.", "No intended mechanics, save, combat, round-slot, report wording or visual changes."] },
  { version: "v0.41.31", title: "Species traits import guard", notes: [
    "Exported/imported speciesTraits after split pass 3 so the change-game/species screen renders correctly.",
    "No intended mechanics, save-slot, combat, Field Manual, or visual behaviour changes."
  ] },

  {
    version: "v0.41.30",
    date: "2026-06-11",
    title: "App split pass 3",
    changes: [
      "Extracted round-slot and round-clock constants/helpers into src/roundSlots.js.",
      "Extracted Modern species bonus helpers into src/speciesBonuses.js while leaving gameplay behaviour unchanged.",
      "Kept v0.41.27+ round rejoin guards, save slots, combat, Field Manual, Records and Silas UI hooks intact."
    ],
    next: [
      "Smoke-test round select, GLW/admin rejoin, Barracks species bonuses, and Return to Base before moving larger page components.",
      "Log formatting issues separately unless they block testing."
    ]
  },
  {
    version: "v0.41.29",
    date: "2026-06-11",
    title: "App split pass 2",
    changes: [
      "Extracted prototype changelog data into src/changelog.js.",
      "Extracted report wording constants and Classic/Modern report text helpers into src/reportWording.js.",
      "Kept round-slot/save logic, combat mechanics, Field Manual behaviour and Silas UI hooks unchanged from v0.41.28."
    ],
    next: [
      "Smoke-test before moving larger page components in the next split pass.",
      "Keep bug fixes separate unless a blocker appears."
    ]
  },
  {
    version: "v0.41.28",
    date: "2026-06-11",
    title: "App split pass 1",
    changes: [
      "Extracted core game data/constants into src/gameData.js while preserving internal keys and current values.",
      "Extracted shared UI primitives into src/components/shared.jsx: Panel, OldTable, TextInput and MenuButton.",
      "Preserved Silas UI skin hooks including app-shell, wording-*, species-*, antro-panel, antro-table, antro-action-btn and antro-top-nav.",
      "No intended mechanics, save-slot, combat, Field Manual or round-flow behaviour changes from v0.41.27."
    ],
    next: [
      "Pass 2 can move larger page components once v0.41.28 is smoke-tested.",
      "Keep round-slot/save logic stable unless a blocker bug is found."
    ]
  },
  {
    version: "v0.41.22",
    date: "2026-06-10",
    title: "Explore card spend cap removed",
    changes: [
      "Removed the reconstructed 1,000,000 Cards spend cap from Explore.",
      "Explore validation now only checks whole hours, available Cards, and the land-gain rule: one explore may not return more land than the empire already has.",
      "Max Spend now fills the player's available Cards rather than a capped amount."
    ],
    next: [
      "Confirm the reconstructed explore formula itself against any remaining old AntrophAI references.",
      "Replace the single localStorage save slot with explicit multi-round save slots once round switching becomes real rather than a prototype shell."
    ]
  },
  {
    version: "v0.41.21",
    date: "2026-06-10",
    title: "Explore card input and save-state notes",
    changes: [
      "Added an explicit card-spend input on the Explore page instead of silently spending the hidden default amount.",
      "Explore estimates and validation now use the chosen card spend; v0.41.22 later removed the temporary spend cap.",
      "Saved the explore card-spend draft in local browser state so page refreshes and package updates keep the setting."
    ],
    next: [
      "Replace the single localStorage save slot with explicit multi-round save slots once round switching becomes real rather than a prototype shell.",
      "Add import/export save files for testers so states can move between folders, browsers, and machines safely."
    ]
  },
  {
    version: "v0.41.20",
    date: "2026-06-10",
    title: "Base return route",
    changes: [
      "Changed the top Return to Base control so it leaves the active game shell and opens the AntrophAI round-selection base layer.",
      "Added a Current Registration panel on the round-select screen so a registered player can re-enter the current local game from the base layer.",
      "Preserved the existing local game state; returning to base does not reset the empire, round data, reports, messages, or species choice."
    ],
    next: [
      "Silas can now treat the account/round/species layer as a reachable base screen rather than a one-way setup gate.",
      "Later: add real multi-round state separation once login/round data stops being a local prototype shell."
    ]
  },
  {
    version: "v0.41.19",
    date: "2026-06-10",
    title: "Modern species bonuses pass 1",
    changes: [
      "Added modern-only species bonuses: Human construction speed, Trysaur War Drums speed-train scaling, Li'thi expanded boosted-train caps, Re'lu revive uplift, and Zarth mining output bonus.",
      "Species profile cards now describe the live modern bonus wording instead of placeholder prototype notes.",
      "Barracks and mine panels now expose the most important bonus-specific feedback, including Li'thi cap expansion and Trysaur War Drums progress."
    ],
    next: [
      "Decide whether any of these bonuses need extra combat-report wording or post-battle UI surfaces.",
      "Consider whether player-visible profile or rankings panels should expose long-term Trysaur War Drums progress outside Barracks."
    ]
  },
  {
    version: "v0.41.13",
    date: "2026-06-10",
    title: "Mineral vocabulary round 2",
    changes: [
      "Added AntrophAI-mode mineral display names without changing internal mineral keys.",
      "Scanner minerals now use the -ite family in Modern mode: Arthite, Tyrite, Ferongite, Chrophite and Phorite.",
      "Speed minerals now use the -gen family in Modern mode: Endaurgen and Armigen.",
      "LRC minerals now use the -ium family in Modern mode, including Positrium for the internal Positronium key.",
      "Applied mineral labels to mines, shops, market, alliance nexus, LRC quota tables and persistent mineral stock display."
    ],
    next: [
      "Continue moving older logs, profile text and any remaining long-form copy through the terminology helper during later public-readiness passes.",
      "Units and race names remain deferred until the terminology layer is stable."
    ]
  },
  {
    version: "v0.41.12",
    date: "2026-06-10",
    title: "Race-coded terminology stage 1",
    changes: [
      "Added a display-only terminology helper for classic vs AntrophAI wording.",
      "Added race-coded resource and building labels while keeping internal keys unchanged.",
      "Applied first-pass race wording to Build, Barracks, War, Bank, Science, resource displays and building tables."
    ],
    next: [
      "Continue moving player-facing labels through getLabel as UI pages are touched.",
      "Round 2: add the new universal AntrophAI mineral naming matrix once Silas/Daniel settle it.",
      "Round 3: consider unit/race terminology only if the public-release risk decision requires it."
    ]
  },

  {
    version: "v0.41.10",
    date: "2026-06-10",
    title: "Provenance release-hardening tasks",
    changes: [
      "Updated remaining player-facing AntrophAI prototype wording found in render-error and bonus popup text to AntrophAI.",
      "Added a report wording mode scaffold with Classic report wording as the current private-beta mode and Modern AntrophAI wording reserved for later public-release rewrite.",
      "Added provenance/release-hardening documentation for battle report wording, Cardisium, protection, and player-made kill-matrix files.",
      "Moved the Project Log/To Do page link behind admin mode so provenance/debug-heavy changelog text is no longer normal player navigation."
    ],
    next: [
      "Implement actual dual-mode report output after the classic report wording inventory is complete.",
      "Run a public-release wording audit across battle report opening, turret lines, unit-vs-unit attack lines, revive/survivor lines, protection and experience wording.",
      "Keep provenance/calibration/debug details admin-only and outside normal player pages."
    ]
  },

  {
    version: "v0.40.94",
    date: "2026-06-09",
    title: "Field Manual unit image viewers and outcome swap",
    changes: [
      "Added View buttons beside unit dossier artwork so unit images can be opened larger inside the Field Manual.",
      "Swapped the Tactical Success and Devastation battle-outcome art assignments for review.",
      "Kept battle outcome art Field Manual-only and preserved all previous turret and Field Manual fixes."
    ],
    next: [
      "Review the unit image enlarged view sizing and the corrected outcome mapping during Field Manual browsing.",
      "Continue keeping large artwork out of core battle reports until a deliberate report presentation pass."
    ]
  },

  {
    version: "v0.40.93",
    date: "2026-06-09",
    title: "Field Manual battle outcome art batch",
    changes: [
      "Bundled Silas's battle-outcome image batch under public/assets/library/battle_outcomes.",
      "Rendered compact battle-outcome thumbnails in the Battle Outcome Archive table.",
      "Rendered larger battle-outcome plates in selected outcome detail panels while keeping normal battle reports text-first.",
      "Updated reviewable archive titles to match Silas's batch notes."
    ],
    next: [
      "Review the mapping of each outcome band before using this art in live reports or achievements.",
      "Keep Total Eclipse / Absolute Dominance rare and Field Manual-contained until a deliberate presentation pass."
    ]
  },

  {
    version: "v0.40.88",
    date: "2026-06-09",
    title: "Field Manual topbar nav and AntrophAI branding",
    changes: [
      "Moved the Field Manual entry from the empire/sidebar action navigation to the global top navigation bar.",
      "Updated visible header branding from AntrophAI to AntrophAI with a restrained neon AI treatment.",
      "Updated the browser title and prototype version while leaving the tagline out for now.",
      "Kept the v0.40.87 Field Manual scaffold and Silas asset manifest structure unchanged."
    ],
    next: [
      "Populate the Field Manual with approved thumbnails and dossier art once the next Silas asset pack is ready."
    ]
  },

  {
    version: "v0.40.87",
    date: "2026-06-09",
    title: "Field Manual scaffold",
    changes: [
      "Added an AntrophAI-native Field Manual landing page with compact links to race, building and battle-outcome catalogues.",
      "Added species detail panels using Silas's library manifest summaries, unit roles and origin placeholders without revealing hidden mechanics.",
      "Added building reference entries for all live building IDs using the current prototype building order.",
      "Bundled the v1 Field Manual asset pack under public/assets/library and imported src/libraryArtManifest.js for future image/prose wiring.",
      "Kept the scaffold text-first and retro; large dossier artwork is intentionally not rendered in the main command loop yet."
    ],
    next: [
      "Wire approved thumbnails/dossier art into the Field Manual once the asset set contains web-ready images.",
      "Add Markdown origin rendering later if the prose files are approved for player-facing use."
    ]
  },

  {
    version: "v0.40.86",
    date: "2026-06-09",
    title: "Turret energy scaffold",
    changes: [
      "Added defensive turret opening volleys: turrets fire first, once per defensive battle, consuming defender energy.",
      "Turret damage behaves like a row 0 attack into the first available attacker row, spilling into later rows if it clears a row.",
      "Added the War-page Disable turrets checkbox with a live cost readout based on target turrets and attacker turret science.",
      "Turret science now reduces disable cost and turret energy use on level-60 curves with floors: 10k Cardisium and 50 energy.",
      "Turret kills enter normal killed-row pools and therefore revive in this revived prototype."
    ],
    next: [
      "Tune turret damage, power plant energy production and disable economics from playtest battle reports."
    ]
  },


  {
    version: "v0.40.85",
    date: "2026-06-08",
    title: "Inline retal block notice",
    changes: [
      "Blocked attacks caused by the recent-attack lockout no longer create News/War log entries.",
      "The War page now shows a short inline warning next to the Attack button when a retal/attack is clicked too soon.",
      "The inline warning fades out automatically over 1.5 seconds."
    ],
    next: [
      "Keep watching future debug exports for duplicate_guard entries if double-instance battles are seen again."
    ]
  },


  {
    version: "v0.40.80",
    title: "Battle Log retal display correction",
    changes: [
      "Restored Served as the status for original attack rows whose retal right has been used.",
      "Retal battle rows now show Success or Failure only for the retal attack itself, coloured from the active player's perspective.",
      "Battle Log retal pair markers are now explicit two-terminal connector glyphs rather than broad row bars.",
      "Rows where the active player is attacking use a restrained amber tint to distinguish attacks from defence rows."
    ],
    next: [
      "Confirm one successful and one failed active-player retal in live play."
    ]
  },
  {
    version: "v0.40.79",
    date: "2026-06-08",
    title: "Battle Log retal outcome polish",
    changes: [
      "Battle Log retal rows now show Success or Failure instead of the old false terminal marker, coloured from the active player perspective.",
      "Original attacks whose retal has been served now show the same Success/Failure outcome link back to the retal battle report.",
      "Battle Log rows now use subtle left-edge accents: amber for attacks made by the active player, green/red for completed retal outcomes."
    ],
    next: [
      "Continue checking retal readability during live playtest battles."
    ]
  },

  {
    version: "v0.40.78",
    date: "2026-06-08",
    title: "Land power correction",
    changes: [
      "Corrected land contribution to visible/public power from 10 power per land to 1 power per land, matching recovered old AntrophAI reference.",
      "Attack range, rankings, profiles, alliance totals, and public target lists now use the corrected land-power value.",
      "Combat and revive power-per-land remain based on battle-start army power, not public power including land."
    ],
    next: [
      "Smoke test power board/range feel after the land-power correction."
    ]
  },

  {
    version: "v0.40.77",
    date: "2026-06-07",
    title: "Playtest name setup and clean reports",
    changes: [
      "Added a one-time empire-name setup screen for Alex/Jason playtest builds.",
      "Visible battle report pages now hide combat calibration, audit, and stack-debug lines while preserving the underlying report data for debug exports.",
      "War inbox messages now use the same cleaned public report text as the report page."
    ],
    next: [
      "Ship this as the revised Alex/Jason playtest candidate unless final smoke testing finds a blocker."
    ]
  },

  {
    version: "v0.40.76",
    date: "2026-06-07",
    title: "Alex/Jason playtest candidate",
    changes: [
      "Prepared a clean handoff candidate for Alex/Jason playtesting with the current compact UI, revive/race tuning, profile records, system messages, and smarter bot market behaviour.",
      "Bundled PLAYTEST_NOTES.md and KNOWN_LIMITATIONS.md so testers know what to try, what to report, and which side systems are intentionally unfinished.",
      "No new gameplay mechanics were introduced in this pass; this is a packaging and handoff checkpoint."
    ],
    next: [
      "Collect Alex/Jason feedback with screenshots, battle reports, and debug exports for any bugs or balance moments that feel off.",
      "Use playtest feedback to prioritise the move toward hosted multiplayer beta."
    ]
  },

  {
    version: "v0.40.75",
    date: "2026-06-07",
    title: "Compact expandable messages",
    changes: [
      "Inbox messages now show compact previews by default so long war reports do not overwhelm the Messages page.",
      "Clicking an inbox message expands it, clicking it again collapses it, and opening another message collapses the previous one.",
      "Unread messages keep a Mark Read action; read messages use Expand/Collapse wording while preserving View Report links."
    ],
    next: [
      "Prepare a clean Alex/Jason playtest candidate after final smoke testing."
    ]
  },

  {
    version: "v0.40.74",
    date: "2026-06-07",
    title: "Smarter bot market listings",
    changes: [
      "Bot market listings now choose more believable quantities based on mineral type and empire scale.",
      "Speed minerals favour small 2,000-unit chunks early, with larger 2,000-multiple listings as bot empires grow.",
      "LRC minerals are now rare bot listings, appear only from mid/late empires, and list in 25,000-unit multiples.",
      "Bot market prices now match own-alliance listings and undercut listings from other alliances or solo players."
    ],
    next: [
      "Prepare a clean Alex/Jason playtest candidate after final smoke testing."
    ]
  },

  {
    version: "v0.40.73",
    date: "2026-06-07",
    title: "Incoming system messages and pop-up alerts",
    changes: [
      "Added a dismissible message-received pop-up for unread incoming messages.",
      "Incoming attacks now create War inbox messages containing the full battle report for the defender.",
      "Incoming missile impacts now create Missiles inbox messages with interception and damage details.",
      "Player market listings can now generate Market inbox messages when bots buy them during page updates."
    ],
    next: [
      "Next pass: smarter bot market listing sizes and pricing behaviour."
    ]
  },

  {
    version: "v0.40.72",
    date: "2026-06-07",
    title: "Input limits and profile records",
    changes: [
      "Added conservative text length limits for player-facing names, alliance announcements, messages, search and prototype news inputs.",
      "Player profiles now show Wins/Losses (Total) and Experience (Total) in the requested compact format.",
      "Battle resolution now records round and total wins/losses for attacker and defender without changing combat outcomes."
    ],
    next: [
      "Next planned pass: incoming system messages and message pop-up for war, missiles and market events."
    ]
  },
  {
    version: "v0.40.71",
    date: "2026-06-07",
    title: "Disband target dropdown polish",
    changes: [
      "Disband page now shows targets in range as the existing war-target dropdown rather than a tabulated list.",
      "The target dropdown is read-only for reference and sits with the Disband page controls; no attack action was added."
    ],
    next: [
      "Continue low-risk UI polish after browser testing."
    ]
  },

  {
    version: "v0.40.69",
    date: "2026-06-07",
    title: "Disband and Mines UI trim",
    changes: [
      "Disband page now includes a read-only Targets in range field using the existing war target selection logic.",
      "Mines page removes explanatory clutter and summary rows while preserving mineral allocation controls and mining behaviour."
    ],
    next: [
      "Shops quantity persistence remains the next requested UI pass."
    ]
  },

  {
    version: "v0.40.68",
    date: "2026-06-07",
    title: "Alliance announcement trim",
    changes: [
      "Default public alliance announcements now display as ellipses for a cleaner old-game placeholder feel.",
      "The own-alliance overview no longer shows a separate Your Role field; roles remain inline in the member list."
    ],
    next: [
      "Continue Alex/Jason playtest UI polish after browser testing."
    ]
  },

  {
    version: "v0.40.67",
    date: "2026-06-07",
    title: "Navigation and protection display polish",
    changes: [
      "Left sidebar now highlights the currently viewed page using the same red prototype-control treatment as Validate Identity.",
      "Zero attack protection now displays as green Open wherever the shared protection display helpers are used."
    ],
    next: [
      "Continue Alex/Jason playtest UI polish after browser testing."
    ]
  },

  {
    version: "v0.40.66",
    date: "2026-06-07",
    title: "Alliance and Bank UI trim",
    changes: [
      "Alliance page now centres the alliance name and announcement, trims duplicate leadership/status fields, and shows leader/co-leader roles inline in the member list.",
      "Alliance member services are flattened into simple buttons, member list placement is cleaner, LRC status wording is more direct, and Alliance Bank land/free land is combined.",
      "Bank page now shows Banked/Capacity as one line, removes clutter fields, adds quick withdrawals, makes Fill max deposit immediately, and removes the prototype Add Banks helper."
    ],
    next: [
      "Bank interest still appears to spill into on-hand cards and needs a future banking correctness pass."
    ]
  },

  {
    version: "v0.40.65",
    date: "2026-06-07",
    title: "Cliff revives and race caps",
    changes: [
      "Full revive system now uses a much tighter symmetric cliff curve around 1000 power/land, with a narrow 75% centre band and a 10% floor by 500/1500 power per land.",
      "Revives now apply simplified race-disadvantage caps: 67.5% maximum when attacking into a counter-race and 62.5% maximum when defending against a counter-race.",
      "Combat science is not included in revive calculations; revive audits now show base revive percent, race cap and final revive percent."
    ],
    next: [
      "Playtest active/offline war sequences to confirm the 75% and 67.5% bands create the intended cliff without making recovery impossible."
    ]
  },

  {
    version: "v0.40.64",
    date: "2026-06-07",
    title: "Symmetric revive curve",
    changes: [
      "Full revive system now uses a mirrored revive curve around 1000 power/land, using battle-start power divided by total land.",
      "Revive audit data now records power/land, distance from the 1000 power/land ideal, and the revive percentage used."
    ],
    next: [
      "Playtest high-side and low-side fights to confirm 625/1375 power per land keep 75% revives and 200/1800 power per land bottom at 10%."
    ]
  },

  {
    version: "v0.40.63",
    date: "2026-06-05",
    title: "Combat audit and debug export",
    changes: [
      "Battle reports now store before/combat/revive army snapshots, killed rows, revive percentages and bot attempt metadata for forensic playtesting.",
      "Admin mode battle reports show compact combat audit lines so row persistence can be checked immediately after each fight.",
      "Added an Admin debug export that captures player state, bot state, Battle Log, News, retals, diplomacy, missiles, market and timing settings as JSON."
    ],
    next: [
      "Use a 10-minute playtest export to inspect damaged-row persistence after revives and same-tick bot multi-hit behaviour.",
      "Fix the army-after-battle bug if audit snapshots confirm rows are being overwritten with revived counts only."
    ]
  },

  {
    version: "v0.40.62",
    date: "2026-06-05",
    title: "Retal source served fix",
    changes: [
      "Retal records now carry a stable source identity tied to the battle report row that created them.",
      "Using a retal marks that exact source retal as Served and links the original Battle Log row to the retal-use report.",
      "Retal dedupe now prefers source report identity over random record IDs so stale duplicate clocks cannot hide a served retal."
    ],
    next: [
      "Confirm SONAR-created bot retals change from Waiting/countdown to Served after the bot uses the retal.",
      "Continue checking bot check-ins, recent-hit lockout, cumulative protection, LRC construction and revive report ordering."
    ]
  },

  {
    version: "v0.40.61",
    date: "2026-06-05",
    title: "Bot check-in simulator repair",
    changes: [
      "Admin wall-clock time advance now uses a probabilistic awake-window check-in roll rather than the brittle due-time calculation that was returning zero check-ins.",
      "Short skips should create a small number of genuine bot check-ins; larger skips should create a believable spread without making everyone Now.",
      "Only bots that genuinely check in refresh Last Seen, finish due orders, start new work, attack, or activate waiting retals.",
      "Admin time-advance messages should now report non-zero simulated bot check-ins when bots actually check in."
    ],
    next: [
      "Confirm +5m/+30m/+2h real advances produce believable bot activity.",
      "Confirm waiting retals activate only when the specific bot checks in.",
      "Continue tuning cadence, not combat rules, unless retal consumption still mislinks a Served row."
    ]
  },

  {
    version: "v0.40.60",
    date: "2026-06-05",
    title: "Bot check-in cadence repair",
    changes: [
      "Admin time advance now looks for the latest simulated bot check-in inside the elapsed interval, not just the first possible one.",
      "Bot lastBotCheckInAt is shifted with wall-clock advance so long skipped periods still create realistic check-in opportunities.",
      "Large time skips should no longer leave the whole bot world dead for days unless their schedules genuinely keep them offline.",
      "Bot Last Seen should still age naturally; only genuine check-ins refresh it."
    ],
    next: [
      "Confirm 30m/1h/3h admin advances produce a believable spread of bot check-ins.",
      "Confirm waiting retals activate when the specific bot next checks in.",
      "Continue tuning cadence rather than resetting everyone to Now."
    ]
  },

  {
    version: "v0.40.59",
    date: "2026-06-05",
    title: "Retal lockout and cumulative protection fix",
    changes: [
      "Retal attacks can still bypass normal range/protection, but no longer bypass the recent-hit lockout window.",
      "Protection from multiple legal hits now accumulates by adding new protection to any remaining protection time, rather than replacing it.",
      "Bot and player attack paths now share the same stricter recent-hit gate for retal and normal attacks.",
      "Battle reports/protection lines now reflect the total current protection applied after stacking."
    ],
    next: [
      "Confirm retal pile-ons wait until the GLW 7m30s recent-hit window has expired.",
      "Confirm protection remaining grows cumulatively after sequential legal hits.",
      "Continue checking bot retal consumption and Served/false display in Battle Log."
    ]
  },

  {
    version: "v0.40.58",
    date: "2026-06-05",
    title: "LRC construction phase and target prep",
    changes: [
      "LRC quota completion now starts a 48-hour x1 construction phase instead of jumping straight to ready-to-fire.",
      "Added a Donate 25,000 helper next to LRC mineral donation for faster quota filling.",
      "LRC page now shows construction countdown, then changes to Ready to fire when construction completes.",
      "Leader/Co-Leader can select a prepared LRC target alliance/player once the cannon is ready; firing effects remain intentionally future work."
    ],
    next: [
      "Confirm LRC construction scales with round speed: 48h at x1, 12h real in GLW x4.",
      "Implement actual LRC firing effects, shot count and target restrictions after target selection is proved.",
      "Continue retal and bot-presence verification from v0.40.57."
    ]
  },

  {
    version: "v0.40.53",
    date: "2026-06-04",
    title: "Retal activation and Last Seen verification",
    changes: [
      "Bot Last Seen is now based on active bot check-ins so profile/Online time-since values can be used to verify retal activation.",
      "Waiting bot retals now activate when the bot next checks in, not merely because a dormant retal exists.",
      "War target dropdown now includes active player retal targets separately from normal targets, labelled with the retal countdown.",
      "Player retal attacks are recorded as retals in Battle Log and News, and the original retal row resolves to Win/Lose."
    ],
    next: [
      "Verify offline bot retals display Waiting until the bot Last Seen becomes Now/recent.",
      "Verify player retal target entries can bypass normal range/protection rules and mark Retal = Y."
    ]
  },

  {
    version: "v0.40.51",
    date: "2026-06-04",
    title: "Battle report revive-line correction",
    changes: [
      "Revive/survivor report lines now show the number of killed units revived, not the final row quantity after battle.",
      "Revive lines are now ordered by each side's stack order, with attacker damaged rows first and defender damaged rows second.",
      "Combat science application remains as verified: attacker rows receive combat science, defender return fire does not."
    ],
    next: [
      "Continue Pass 2 report/state verification: confirm untouched rows remain unchanged and incoming reports stay complete.",
      "Continue validating retal clock states and bot Last Seen display during Pass 1 testing."
    ]
  },

  {
    version: "v0.40.50",
    date: "2026-06-04",
    title: "Tester UI polish",
    changes: [
      "Status economy table now removes starvation debug rows and separates tax revenue from bank interest and total Cardisium increase.",
      "Right-hand Empire Values sidebar now includes an Army table between Empire Values and Buildings.",
      "News war entries now bold attacker/defender names and hide damage/return percentages from the main News listing."
    ],
    next: [
      "Continue testing Pass 1 retal/protection behaviour.",
      "Proceed to Pass 2 combat report/state verification once retal clocks are trusted."
    ]
  },

  {
    version: "v0.40.49",
    date: "2026-06-04",
    title: "Pass 1 retal/protection state cleanup",
    changes: [
      "Retal clocks now distinguish Waiting, active HH:MM:SS countdowns, used Win/Lose links, Expired and -- states.",
      "Bot defender retals created by SONAR attacks stay dormant until that bot next appears active rather than starting immediately.",
      "Incoming attacks against SONAR still create an immediately active player retal because SONAR is online.",
      "Central attack legality now lets valid retals bypass protection/recent-hit checks while non-retals remain blocked.",
      "Retal activation uses a stricter bot-activity test so old last-seen/offline bots do not burn their retal clocks early."
    ],
    next: [
      "Verify incoming attacks show an active SONAR retal clock.",
      "Verify SONAR attacks on offline bots show Waiting until the bot becomes active.",
      "Then continue Pass 2 combat report/state verification."
    ]
  },

  {
    version: "v0.40.48.2",
    date: "2026-06-04",
    title: "Admin time buttons direct-shift fix",
    changes: [
      "Reworked admin time advance so timer shifts, elapsed production and bot activity are resolved in one state pass instead of a follow-up page update.",
      "Wall-clock buttons now advance order progress by round speed while protection, retals, recent-hit windows, bot seen times, News and Battle Log timestamps use wall-clock elapsed time.",
      "Game-clock buttons convert to the correct wall-clock equivalent before applying protection, retal and bot activity timers.",
      "Admin time-advance log messages now explicitly show order progress versus wall-clock time used."
    ],
    next: [
      "Prove +1m real in GLW reduces build/barracks/science timers by 4m.",
      "Then resume Pass 1 retal/protection state cleanup."
    ]
  },

  {
    version: "v0.40.46.1",
    date: "2026-06-04",
    title: "Crash fix for protection-clear helper",
    changes: [
      "Defined the shared clearAttackProtection helper before self-tests and battle resolution use it.",
      "Preserves the v0.40.46 rule that any attack clears the attacker’s own protection, including retals."
    ],
    next: [
      "Verify bot retal attacks now clear attacker protection without render errors.",
      "Continue checking incoming retal clocks after attacks against SONAR."
    ]
  },

  {
    version: "v0.40.45",
    date: "2026-06-04",
    title: "Empire values protection row",
    changes: [
      "Added Protection to the right-hand Empire Values box directly under Power.",
      "Empire Values Protection now uses the same timestamp-based protection source as profile pages and War targeting."
    ],
    next: [
      "Continue checking incoming retal clocks after attacks against SONAR.",
      "Continue checking bot protection/attack legality after heavy pile-on scenarios."
    ]
  },

  {
    version: "v0.40.44",
    date: "2026-06-04",
    title: "Protection display cleanup",
    changes: [
      "Profile pages now use timestamp-based protection as the single source of truth.",
      "Removed the contradictory legacy Protection Time Remaining / Attack Status pair.",
      "Added a single Protection empire value directly under Total Power, matching old Antro profile style.",
      "Protection shown on profile now matches target selection and War page attackability."
    ],
    next: [
      "Continue checking incoming retal clocks after attacks against SONAR.",
      "Continue checking bot protection/attack legality after heavy pile-on scenarios."
    ]
  },

  {
    version: "v0.40.41",
    date: "2026-06-04",
    title: "Admin time-advance order-progress fix",
    changes: [
      "Fixed admin wall-clock advance so build, barracks, explore, science, missiles and alliance bank order progress advances by round speed.",
      "At GLW x4, +1m real now advances order countdowns by 4m of game progress.",
      "Game-clock buttons now advance order progress by the selected game-clock amount while only consuming the appropriate wall-clock time for protection/retals/recent-hit timers.",
      "News, Battle Log timestamps, protection, retals, grievances and bot activity remain wall-clock based.",
      "Added admin timing self-tests for GLW order-progress conversion."
    ],
    next: [
      "Continue verifying incoming report viewing and defender row loss/revive behaviour.",
      "Confirm bot attacks remain blocked by protection/recent-hit lockout after time controls are used."
    ]
  },

  {
    version: "v0.40.39",
    date: "2026-06-04",
    title: "Retal admin and bot attack rule fixes",
    changes: [
      "Added an admin Clear All Retals button for playtesting.",
      "Bot and player attack legality now checks timestamp-based protection as well as protection hours and recent-hit lockout.",
      "Successful bot attacks now set cumulative defender protection using max(existing, new protection).",
      "Bot-vs-player and bot-vs-bot Cardisium spoils now use defender pre-battle held cards scaled by damage percent, matching player attack spoils more closely.",
      "Admin time advance shifts protection-until timestamps alongside retal/grievance timers."
    ],
    next: [
      "Continue checking whether bot retals and pile-ons obey protection/recent-hit lockout rules.",
      "Confirm bot spoils match the expected held-card percentage in live reports."
    ]
  },

  {
    version: "v0.40.38",
    date: "2026-06-04",
    title: "Bot attack legality and retal timing",
    changes: [
      "Bot attacks now use central legality checks for protection, recent-hit lockout, power range and 500k threshold.",
      "Player attacks also check recent-hit lockout.",
      "Targets record lastAttackedAt when hit, and admin time advance shifts attack/retal/grievance timers.",
      "SONAR retals activate immediately when attacked while online; bot retals still wait for bot activity.",
      "Battle Log retal clocks use compact time formatting.",
      "Added self-tests for protected-target and recent-hit blocking."
    ]
  },

  {
    version: "v0.40.37",
    date: "2026-06-04",
    title: "News and Battle Log pagination",
    changes: [
      "News now keeps round history and shows 100 items per page with page-number navigation per filter.",
      "Battle Log now shows 100 reports per page, includes an opponent filter, and adds a retal-clock/status column.",
      "Disband page now shows army row percentage to aid stack shaping."
    ],
    next: [
      "Continue testing retal activation/expiry and bot willingness to use available retals.",
      "Polish Battle Log retal outcomes once more real retal reports exist.",
      "Keep tuning anti-leader bot pressure and alliance grievance behaviour."
    ]
  },

  {
    version: "v0.40.36",
    date: "2026-06-04",
    title: "Retal rights and grievance tracking",
    changes: [
      "Added clean-slate retaliation records for new battles from this version onward.",
      "Bot target selection now strongly prefers valid retals, alliance grievances, and runaway leader pressure.",
      "Battle Log Retal column is now populated for attacks that consume a valid retal right."
    ],
    next: [
      "Tune bot willingness to coordinate/pile on after a leader has opened multiple retals.",
      "Build a visible diplomacy/grievance page once the internal model feels right.",
      "Add fuller alliance diplomacy and alliance-level enemy/friendly states."
    ]
  },

  {
    version: "v0.40.35",
    date: "2026-06-04",
    title: "Battle Log start-power labels",
    changes: [
      "Changed Battle Log from a free-text report list into a tactical table.",
      "Battle Log rows now label attacker/defender power as Start Power, meaning power at battle initiation before row combat, revives, spoils or protection updates.",
      "Saved player and bot battle reports store attacker/defender starting power for Battle Log display."
    ],
    next: [
      "Add real retal tracking once retaliation rights are implemented.",
      "Continue polishing Battle Log so it feels like old AntrophAI report history."
    ]
  },

  {
    version: "v0.40.33",
    date: "2026-06-04",
    title: "Li'thi kill-rate table from lithi.txt",
    changes: [
      "Replaced remaining Li'thi attacking race-band fallback values with the lithi.txt destruction table model.",
      "Filled hierarchy-only blanks by interpolation between the visible anchor percentages in lithi.txt.",
      "Battle-report calibration now labels Li'thi rows as known/lithi.txt or interpolated/lithi.txt hierarchy instead of inferred race advantage +5."
    ],
    next: [
      "Keep checking Li'thi reports against remembered values and old battle reports.",
      "Promote interpolated Li'thi values to exact known values if a clearer source appears.",
      "Continue recovering Human/Zarth/Trysaur attacking tables."
    ]
  },

  {
    version: "v0.40.32",
    date: "2026-06-04",
    title: "Re\'lu kill-rate table implemented",
    changes: [
      "Implemented the Re\'lu attacking kill-rate table from ReluPro.xls using the workbook\'s Percentage of Power values.",
      "Battle-report combat calibration now labels Re\'lu attacking rows as known/ReluPro.xls instead of generic race-band inference.",
      "Kept Li\'thi values on their existing table/model path while Re\'lu now uses exact unit-pair rates."
    ],
    next: [
      "Continue checking Re\'lu combat reports against remembered values such as Aourthi on Silvato.",
      "Replace remaining non-Li\'thi/non-Re\'lu inferred kill rates as stronger sources are recovered.",
      "Keep validating report source labels so known, inferred and special-case rates are clearly distinguished."
    ]
  },

  {
    version: "v0.40.30",
    date: "2026-06-04",
    title: "Starvation review and population support rules",
    changes: [
      "Reviewed starvation behaviour and replaced accidental harsh population loss with explicit support/stockpile rules.",
      "Population growth now targets the supported population cap from Living Areas, Food and Water support rather than Living Areas alone.",
      "Food/water shortages now cause controlled attrition instead of an abrupt half-population cliff; Status shows the supported population cap and starvation risk."
    ],
    next: [
      "Continue testing whether the starvation attrition rate feels old-Antro correct or needs tightening.",
      "Add bot resentment/diplomacy logic so alliances coordinate against runaway unaffiliated leaders.",
      "Continue combat calibration and Battle Log/War News checks."
    ]
  },

  {
    version: "v0.40.29",
    date: "2026-06-04",
    title: "Market workflow and playtest notes pass",
    changes: [
      "Market sell fields now stay populated after listing an item, matching the repeated-listing workflow used during testing.",
      "Added Fill Owned and Shop Price helpers to the Market sell form, plus per-order Fill Buy buttons so a listing can be selected without manually copying the quantity.",
      "Added the latest pending notes to the To Do page: market workflow, battle-report/log checks, anti-leader bot pressure, diplomacy, starvation review, XP, and routing/disband follow-ups."
    ],
    next: [
      "Continue testing whether player attacks always appear in War news and Battle Log.",
      "Add bot resentment/diplomacy logic so alliances coordinate against runaway unaffiliated leaders.",
      "Review starvation behaviour and old-style direct routes such as /barracksdisband."
    ]
  },

  {
    version: "v0.40.28",
    date: "2026-06-04",
    title: "Playtest notes packaged and science curve recalibrated",
    changes: [
      "Replaced the experimental n^n science timing with a quadratic curve calibrated from the remembered IG benchmark: very active high-lab players could reach roughly combat science level 180 in a 90-day x1 round.",
      "Science Labs still use the same 0/1000/4000 curve as Barracks, but the full-lab cumulative time from level 1 to 180 is now about one 90-day IG at perfect utilisation.",
      "Packaged current playtest notes into the To Do page: population starvation needs review, bots need anti-leader/alliance-conspiracy behaviour, and alliance diplomacy remains a missing social mechanic."
    ],
    next: [
      "Check early and mid science timings in GLW; the curve should make low levels quick while level 150+ remains a serious long-round commitment.",
      "Review whether the current starvation/half-pop behaviour matches old AntrophAI or is firing too aggressively.",
      "Add bot hostility/diplomacy logic so alliances coordinate against runaway unaffiliated leaders instead of passively allowing a solo player to dominate."
    ]
  },
  {
    version: "v0.40.27",
    title: "Coloured reports and race-derived kill-rate table",
    changes: [
      "Battle reports now use code-editor-style colour bands so attack lines, calibration lines, survivor lines, summaries and stack notes are easier to scan.",
      "Replaced generic 20% placeholder combat values with deterministic unit-pair values generated from the remembered race-advantage bands, while preserving explicit known/special-case values.",
      "Combat calibration lines now label rates as known/user-supplied, inferred from race-advantage rule, inferred disadvantage, same-race inferred, or special-case anomaly."
    ],
    next: [
      "Continue replacing inferred unit-pair values with known report-derived values as they are confirmed."
    ]
  },
  {
    version: "v0.40.26",
    title: "Revive curve cliff tuning",
    changes: [
      "Full revive system now drops away more sharply below the lower fighting band.",
      "Power/land ratio 625 remains around the previously-good revive band, while 200 power/land now bottoms at roughly 10% revives.",
      "Low-power GLW fighting should now punish players who power too low instead of granting overly generous revives."
    ],
    next: [
      "Continue tuning exact revive curve from GLW fight reports and old-player memory."
    ]
  },
  {
    version: "v0.40.25",
    title: "Combat calibration debug",
    changes: [
      "Battle reports in admin mode now show the unit-pair base kill rate source for each row exchange.",
      "Combat science is now displayed as a separate bonus layered on top of the base unit-pair rate.",
      "Added source labels for known/user-known, inferred and placeholder kill-rate entries so calibration gaps are visible."
    ],
    next: [
      "Replace placeholder kill-rate rows with a proper unit-vs-unit table as old reports and player knowledge confirm values."
    ]
  },
  {
    version: "v0.40.24",
    title: "Revives, combat reports and disband access",
    changes: [
      "Applied attacker and defender revives to actual post-battle army state instead of leaving damaged rows empty.",
      "Battle reports now list survivor lines only for rows that actually took damage, with bracketed revive percentages based on killed-and-revived units.",
      "Player attacks generate War news entries and are stored in the Battle Log.",
      "Added a separate Disband page so stack reshaping can be done without triggering Barracks training completion.",
      "Science research times are now 100x faster while keeping the same n^n level curve and Science Lab speed curve.",
      "War target dropdowns now sort available targets by power."
    ],
    next: [
      "Tune the exact GLW revive curve from old evidence and further playtest combat reports."
    ]
  },
  {
    version: "v0.40.22",
    date: "2026-06-04",
    title: "Science timing curve",
    changes: [
      "Science research time now scales by next level using n^n baseline units, rather than a near-flat placeholder curve.",
      "Science Labs now speed research using the same 0/1000/4000 effective-building curve as Barracks training.",
      "Science Labs now show next-level time estimates, effective lab multiplier and the active research finish text from the same timing function used to start the order."
    ],
    next: [
      "Tune the baseline unit time if old evidence gives a better reference; currently one unit equals one game hour before lab and round-speed effects."
    ]
  },
  {
    version: "v0.40.18",
    date: "2026-06-04",
    title: "Classic cancellation refund rules",
    changes: [
      "Construction cancellation now refunds half the base construction cost, ignoring speed factor.",
      "Training cancellation now refunds half the Cardisium cost and does not return speed-training minerals.",
      "Exploration cancellation remains a full Cardisium refund."
    ],
    next: [
      "Use cancellation during testing with the old AntrophAI penalty assumptions in mind."
    ]
  },
  {
    version: "v0.40.17",
    date: "2026-06-04",
    title: "Order cancellation controls",
    changes: [
      "Added cancel buttons beside unfinished construction, training, exploration and science order messages.",
      "Added Cancel All Orders for the player and alliance bank construction queue.",
      "Construction, training and exploration cancellations refund their paid Cardisium; speed-training minerals are returned where used."
    ],
    next: [
      "Use cancellation during functional testing to recover from bad orders without needing a full save reset."
    ]
  },
  {
    version: "v0.40.16",
    date: "2026-06-04",
    title: "Destroy and disband tools",
    changes: [
      "Added a Destroy page so completed buildings can be demolished back into free land.",
      "Added unit disband controls on Barracks, including row quantities and Disband All for stack testing.",
      "Disbanding units gives no Cardisium refund and is intended to match the old tactical/reset workflow."
    ],
    next: [
      "Use Destroy and Disband during functional testing to correct mistakes, reshape stacks and recover from negative-land states."
    ]
  },
  {
    version: "v0.40.14",
    date: "2026-06-03",
    title: "Finer admin time controls",
    changes: [
      "Admin time controls now distinguish real elapsed time from game-clock time.",
      "Added finer real-time advance buttons for testing short build/train windows without overshooting.",
      "Admin time advance now shifts active player orders, bot orders, science, alliance bank construction and missile timers so testing behaves like elapsed time actually passed."
    ],
    next: [
      "Use real-time advance for order testing and game-time advance for round-speed scale checks, especially in TG."
    ]
  },
  {
    version: "v0.40.13",
    date: "2026-06-03",
    title: "Bot legality pass",
    changes: [
      "Bots now use explicit build and train orders with paid costs, finish times and one active order of each type rather than instant abstract building/training growth.",
      "Bot economy still ticks while offline, but new bot orders require an awake/check-in window; sleeping bots can no longer chain actions while AFK.",
      "Bot build and train decisions are now separated from rule execution: the bot brain chooses an action, then the same cost/time constraints are applied to the bot empire.",
      "Added bot audit/debug fields such as last bot action and last completed bot order for admin profile inspection."
    ],
    next: [
      "Retest GLW opening against a human baseline: bots should no longer outbuild or outtrain what their cards, land, barracks and elapsed time allow.",
      "After legality is stable, deepen bot stack intelligence, open-target detection and market/Nexus use."
    ]
  },
  {
    version: "v0.40.12",
    date: "2026-06-03",
    title: "Round-aware bot races, market cleanup and pending-order messages",
    changes: [
      "Market no longer starts every fresh round with the same two placeholder listings; round reset clears market orders so early markets only contain live bot/player listings.",
      "Build, Barracks, Explore and Science now show old-style static unfinished-order messages when an order is still running.",
      "Bot race selection is now round-aware: GLW favours fighting/endars races while explore rounds remain more mixed, with known player race locks preserved.",
      "Bot construction now spends Cardisium and is capped by available cash, slowing unrealistic early build progression."
    ],
    next: [
      "Run a proper GLW playtest and compare bot opening cards/buildings against human opening expectations.",
      "Continue tuning alliance composition and market/Nexus behaviour after live testing."
    ]
  },
  {
    version: "v0.40.11",
    date: "2026-06-03",
    title: "Bot opening economy and mineral logic",
    changes: [
      "Bot opening builds now follow a clearer GLW-style sequence: population economy first, factories and barracks next, then serious power-up only after a plausible base exists.",
      "Bot population is now capped by food, water and police support so full profiles should no longer show impossible population with no support infrastructure.",
      "Bot mining now changes by round: scanner minerals matter in explore rounds, while explore-disabled GLW avoids early scanner mining and favours speed/LRC/value minerals instead.",
      "Bots can now make small market listings from surplus mined minerals so the market starts to look like a living round rather than a static test table."
    ],
    next: [
      "Retest a fresh GLW opening: buildings should look like population economy, factories and barracks rather than random ratios.",
      "Tune bot market buying/selling and add clearer alliance/Nexus mineral behaviour after full playtest."
    ]
  },
  {
    version: "v0.40.10",
    date: "2026-06-03",
    title: "Barracks training-time curve",
    changes: [
      "Training time now scales with completed Barracks: 0 barracks is baseline, 1,000 barracks halves baseline time, and 4,000 barracks reaches full-speed training.",
      "Player Barracks estimates and actual orders now use the same barracks curve, with speed-training minerals still halving the result.",
      "Bot power-up logic now respects barracks throughput so round-start bots must build a plausible economy and barracks base before meaningful army growth."
    ],
    next: [
      "Retest fresh GLW/TG openings to confirm bots build economy first, then power up at plausible speeds.",
      "Tune the exact barracks curve if old reports/screenshots reveal a different breakpoint."
    ]
  },
  {
    version: "v0.40.8.4",
    date: "2026-06-03",
    title: "Alliance profile render fix",
    changes: ["Restored the missing Alliance Profile renderer so alliance links no longer crash the app.", "Added a compact alliance profile with leader, totals, diplomacy and member list."],
    next: ["Continue testing v0.40.8 reset/profile behaviour."]
  },
  {
    version: "v0.40.8.2",
    date: "2026-06-03",
    title: "Crash guard for saved-state migrations",
    changes: [
      "Added an app-level crash screen so incompatible prototype saves show a recovery/reset option instead of a blank page.",
      "No gameplay rules changed from v0.40.8."
    ],
    next: [
      "Use the crash message to identify any remaining saved-state migration issues rather than silently blanking."
    ]
  },
  {
    version: "v0.40.8",
    date: "2026-06-03",
    title: "Round reset land/profile polish",
    changes: [
      "Bot economy no longer explores/gains land in round profiles where Explore is disabled, so fresh GLW starts keep bots at the starting land until buildings/attacks change it.",
      "Player profiles now distinguish round experience from total experience across rounds.",
      "Admin/alliance full profile view now lists all resources, all minerals, all buildings including zero values, and all army rows."
    ],
    next: [
      "Tune bot first-minute behaviour after GLW/TG testing.",
      "Promote full profile permissions from prototype/admin view into proper alliance Leader/Co-Leader/shared-profile behaviour."
    ]
  },
  {
    version: "v0.40.7",
    date: "2026-06-03",
    title: "News timestamps and early-round balance fixes",
    changes: [
      "News entries now carry timestamps and page-request elapsed-production debug spam is no longer posted to the public feed.",
      "New round start clears old public news, resets bot empires more clearly, and bot land spoils now scale from power destroyed rather than a large percentage of land.",
      "Admin-enabled player profiles now expose private bot/player state for debugging; alliance profile sharing support has been added for member opt-in/full alliance visibility later."
    ],
    next: [
      "Tune early-round bot activity and generated battle reports after GLW/TG playtesting.",
      "Make alliance member profile-sharing permissions more complete once alliance play is deeper."
    ]
  },
  {
    version: "v0.40.6",
    date: "2026-06-03",
    title: "XP system planning note",
    changes: [
      "Added a To Do note that old AntrophAI awarded experience from defence as well as attack.",
      "Recorded that XP should remain fighting-only, and turret damage alone should not generate XP."
    ],
    next: [
      "Later replace placeholder XP with a quality-based formula using attack/defence combat result quality rather than only raw power killed.",
      "Add defensive XP when revisiting the battle reward system."
    ]
  },
  {
    version: "v0.40.5",
    date: "2026-06-03",
    title: "Clickable bot battle reports in News",
    changes: [
      "Renamed bot raid news to attack news; raid is reserved for rebels/mercenaries.",
      "Bot attack news now includes Cardisium, land and experience gained so shrewd players can infer the weight of the hit.",
      "Admin mode now makes bot attack news clickable, opening the generated battle report for that fight.",
      "Bot attacks now transfer a small land spoil as well as Cardisium in the prototype simulation."
    ],
    next: [
      "Improve generated bot battle reports from summary-style to row-by-row stack reports.",
      "Balance bot attack frequency and open-player detection after GLW/TG testing."
    ]
  },
  {
    version: "v0.40.4",
    date: "2026-06-03",
    title: "Round reset, science WIP and page-noise trim",
    changes: [
      "Fixed Apply Starting Values so a new round properly resets the player state and bot empires instead of only changing SONAR's free land/cards.",
      "Changed the player row on Online to show time since previous page click/request for a more authentic old-page-request feel.",
      "Trimmed redundant guidance notes from Build, Online and Rankings while adding a Science Labs WIP note and provisional science effects.",
      "Added provisional economy/science modifiers using the known-style 0.05% per level scaling for the non-combat economy sciences."
    ],
    next: [
      "Tune combat science/turret science curves from old evidence.",
      "Continue active bot balancing after TG/GLW reset testing."
    ]
  },
  {
    version: "v0.40.3",
    date: "2026-06-03",
    title: "Snapshot saves and real-time bot rhythm",
    changes: [
      "Added admin snapshot save/load slots A/B/C plus a rewind-to-before-time-advance save state for safer playtesting.",
      "Styled Validate Identity and prototype/admin controls in red so test features are clearly separated from classic gameplay.",
      "Adjusted bot activity so human presence/sleep uses real time while economy still uses game-speed time; fast rounds should show more awake players after round start.",
      "Added a new-round bot surge: applying a round profile or starting values marks bots as recently active, as if old players were waiting for the round to open."
    ],
    next: [
      "Test TG/GLW bot presence after starting a new round and advancing time.",
      "Tune bot attack frequency and snapshot coverage after local playtesting."
    ]
  },
  {
    version: "v0.40.2",
    date: "2026-06-03",
    title: "Bot presence and round profile corrections",
    changes: [
      "Made bot Last Seen values timestamp-based so they age naturally on the Online page instead of staying fixed.",
      "Active/awake bots now appear recently seen, while sleeping/AFK bots drift older; bot raid attackers refresh to Now.",
      "Corrected round presets: GLW is x4, 50k land, 10m cards, full revives and explore disabled; BC mirrors IG starts but with full revives and speed; TG is x60 with 1m starting cards."
    ],
    next: [
      "Continue tuning bot attack frequency, stack doctrine and page layout after playtesting."
    ]
  },
  {
    version: "v0.40.1",
    date: "2026-06-03",
    title: "Online sort and admin sidebar",
    changes: [
      "Made the Online page sortable, defaulting to Last Seen with most recent players first.",
      "Moved core playtest/admin buttons into a small bordered left-hand admin sidebar beneath the classic navigation.",
      "Trimmed duplicate playtest buttons from the main Admin Control page so prototype controls are easier to find."
    ],
    next: [
      "Continue tuning active bots and add clearer bot activity/readiness cues."
    ]
  },
  {
    version: "v0.40.0",
    date: "2026-06-03",
    title: "Admin tools and active bot engine",
    changes: [
      "Added admin playtest controls to add 50m Cardisium and advance game time by 2, 4, 6 or 8 hours.",
      "Added a first-pass active bot engine: bots grow, train, bank, sleep/AFK by rough timezone rhythm, rotate stacks and occasionally raid each other.",
      "Added bot difficulty as an admin setting by changing how much effective offline time bots receive.",
      "Added early bot doctrines including six-bleeder, grinder, Re'lu balanced, p-roller/retal farmer, kill-stack opportunist, and a few deliberately naive/random bots."
    ],
    next: [
      "Tune bot growth and attack frequency after playtesting with Alex/Jason.",
      "Make bot combat deeper: stack fatigue, open-target detection, retal memory and better row-by-row expected value.",
      "Add clearer bot news filters and possibly a Bot Activity page."
    ]
  },
  {
    version: "v0.39.3",
    date: "2026-06-03",
    title: "Status polish",
    changes: [
      "Moved Cards Increase Next 30 min. below Bank Interest Next 30 min. on the Status page.",
      "Corrected the Status typo from IRC Shots Fired to LRC Shots Fired."
    ],
    next: [
      "Continue classic-feel status/page polishing while preparing the active bot playtest package."
    ]
  },
  {
    version: "v0.39.2",
    date: "2026-06-03",
    title: "Status and page flash polish",
    changes: [
      "Changed the page-request flash from orange/brighten to a brief black flash to better match the old AntrophAI page reload feel.",
      "Moved Cards Increase Next 30 min. into the Economy section on Status.",
      "Removed the standalone Cards row from the Status Resources section so the sidebar remains the place for current resources."
    ],
    next: [
      "Continue small classic-feel corrections before the behaviour-preserving code split/refactor.",
      "Review Status against more old screenshots if any become available."
    ]
  },
  {
    version: "v0.39.1",
    date: "2026-06-03",
    title: "Alliance member cap corrected",
    changes: [
      "Restored a real alliance member cap while keeping larger classic-style alliances available.",
      "Set the prototype alliance member limit to 25 instead of the accidental near-unlimited cap.",
      "Blocked joining or prototype member-adding when the alliance is already full, with clear log feedback."
    ],
    next: [
      "Decide whether the real cap should vary by round/settings or stay fixed for Intro Game.",
      "Continue testing alliance admin, Nexus balances, and LRC quotas before the structural refactor."
    ]
  },
  {
    version: "v0.39.0",
    date: "2026-06-03",
    title: "Classic behaviour trim pass",
    changes: [
      "Adjusted alliance limits toward old-style large alliances, later corrected in v0.39.1 to enforce a 25-member cap.",
      "Changed LRC from an open stockpile into a capped quota: 1b Cardisium and 25k of each required mineral, with no energy donation.",
      "Limited Nexus to scanner and barracks-speed minerals, and added visible per-member net balance tracking.",
      "Tidied Barracks into a single combined train/current army table with Fill Max and Max Train controls.",
      "Reworked Status, Build, Explore, Mines, Market, Online, Rankings, News, Shops, Bonus and War notes toward the older AntrophAI feel."
    ],
    next: [
      "Sanity-check the guessed explore formula against remembered behaviour and old screenshots.",
      "Add real science values and effects once suggested values are available.",
      "Then start the behaviour-preserving code split/refactor."
    ]
  },
  {
    version: "v0.38.1",
    date: "2026-06-03",
    title: "To Do notes extended",
    changes: [
      "Added a project note for future multi-tab / page-request state sync work.",
      "Recorded that local browser development currently works best as one active state-changing tab, with extra tabs safe mainly for viewing.",
      "Marked prototype function tidy-up as a pending engineering cleanup rather than a completed item."
    ],
    next: [
      "Add a lightweight cross-tab save guard later: detect newer localStorage state and warn or refresh before applying page actions.",
      "Tidy prototype functions by separating data/constants, pure game rules, page components, and storage/update helpers into smaller files."
    ]
  },
  {
    version: "v0.38.0",
    date: "2026-06-03",
    title: "In-app changelog added",
    changes: [
      "Added To Do / Changelog tabs so the project now carries its own version memory inside the prototype.",
      "Added a version selector for older notes, starting with the current v0.38.0 and prior v0.37.1 context.",
      "Kept self-tests available under the same To Do page instead of hiding them in admin-only tooling."
    ],
    next: [
      "Use this page as the running handover note between ChatGPT sessions and local browser development.",
      "Backfill older versions when we can reconstruct reliable notes from previous zips/chats."
    ]
  },
  {
    version: "v0.37.1",
    date: "2026-06-03",
    title: "Runtime render fix baseline",
    changes: [
      "Packaged as a local React/Vite app so it can run in Chrome using npm run dev.",
      "Included current AntrophAI reconstruction state with alliances, rankings, LRC/Nexus work, factories, mining, market, messages, missiles, and self-tests.",
      "Removed Energy from the LRC mineral list logic by excluding speed-train and scanner minerals from LRC minerals."
    ],
    next: [
      "Improve project memory and version tracking.",
      "Continue alliance, ranking, tutorial, and classic 2005 gameplay reconstruction work."
    ]
  },
  {
    version: "v0.35.1",
    date: "2026-06-02",
    title: "Runtime fix baseline",
    changes: [
      "Earlier stable JSX runtime version used as a restoration point after the canvas/editor problems.",
      "Preserved classic AntrophAI layout direction: black/orange interface, sidebar navigation, and prototype game pages."
    ],
    next: [
      "Carry forward into later v0.37.x versions with alliance and ranking improvements."
    ]
  }
];