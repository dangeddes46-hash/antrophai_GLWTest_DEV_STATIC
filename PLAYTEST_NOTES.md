v0.41.08 - README and Windows install notes

- Added root README.md for Windows/local tester setup.
- Includes npm registry reset/check steps for machines where npm install fails because of stale registry config.
- Recommends WinRAR for extraction because WinZip can be slow on this package.
- No gameplay or UI changes from v0.41.07.

v0.41.07 - Build page speed/cost polish

- Build Speed is admin-only.
- Speed Factor appears before Final Cost in the build controls.
- Removed Start Day 1 Construction; Fill Day 1 Values remains.

v0.41.06 - Featured Records Archive

- Added Featured Records Archive to Records.
- Added Broken Spear - Turned Away and The Fall - Overrun assets and view buttons.

v0.41.05 - Build UI trim and admin cancel pass

- Build page now keeps the construction table visible while construction is running.
- Removed normal-page Cancel All Orders buttons; left one admin-only Cancel All Orders control next to Clear All Retals.
- Removed the Build explanatory land/negative-land text and summary fields table.
- Reworked Build timing/cost controls into centered boxes matching the Barracks style.
- Renamed Start Custom Construction to Start Construction.
v0.41.04 - Barracks UI trim and admin-only prototype controls

- Removed Disband controls from Barracks; Disband remains on the dedicated Disband page.
- Removed the Barracks summary table under the heading.
- Moved Speed minerals down above the custom training timer.
- Replaced Custom train time row with centered HH:MM:SS boxes.
- Renamed Start Custom Training to Start Training.
- Moved common Trigger/Prototype controls on normal pages behind admin mode where practical.

v0.41.03 - Records v1 art pack populated

v0.41.02 - Field Manual Records scaffold

- Added Records section scaffold and records manifest.
- Added placeholder Defender Holds Archive and Alliance Records sections.
- Unlock triggers are not wired yet.

v0.41.01 - Field Manual text readability pass

v0.41.00 - Field Manual origin prose, Trysaur text swap, Zarth identity and layout tuning

v0.40.98 - Unit dossier table now uses full sheet images for previews, scaled down without cropped thumbnail files.

v0.40.97 - Library dossier/admin asset fix

v0.40.96 - Library text/image patch, dossier thumbnail contain fix, field manual note.

# Antrophia v0.40.85 - Alex/Jason Playtest Notes

This is a playtest candidate for the revived Antrophia prototype. It is still a single-player/bot-sandbox build, not hosted multiplayer yet.

## What to test

Please play freely rather than following a strict checklist. The aim is to find what feels right, wrong, confusing, exploitable, too fast, too slow, or unlike old Antro in the wrong way.

Useful scenarios:

- Start a normal round and play through economy, build, train, war range, attacks, retals, and protection.
- Try different races and see whether race identity and matchups feel meaningful.
- Try lower-power attacks into bigger players and check whether revives/protection feel fair.
- Try being near the top of the board and see whether pressure can pull you down if you are offline or badly shaped.
- Try alliance pages, alliance bank, Nexus/minerals, LRC scaffolding, market, shops, disband, mines, and messages.
- Try bot-heavy situations and market activity to see whether the world feels alive or silly.

## What to send back

If something feels off, please send:

- A short description of what happened.
- Screenshot if useful.
- Battle report text if combat/revive/protection related.
- Debug export immediately after the issue if possible.
- Any old-Antro instinct notes: "this feels right", "this feels wrong", or "this was confusing".

The debug export is especially useful because it lets us inspect exact state rather than guessing.

## Current focus

The core loop is the focus: economy, training, war, retals, protection, revive feel, race interactions, bot world pressure, UI clarity, and obvious bugs.

## v0.40.77 note

This revised playtest candidate asks for an empire name on first launch and hides the coloured combat-audit/calibration lines from visible battle reports. Debug exports still retain the underlying report/audit data for diagnosis.


## v0.40.78 note

Land now contributes 1 public power per land rather than 10, matching recovered old Antrophia reference. Combat/revive power-per-land remains based on battle-start army power.


## v0.40.80 note

Battle Log retal outcomes now show Success/Failure instead of false, colour-coded from your perspective. Your own attack rows and completed retal links also have subtle row accents for readability.


## v0.40.80 note
- Battle Log retal display corrected: original rows show Served, retal battle rows show Success/Failure from the active player perspective, and attack rows are visually distinguished.

## v0.40.81 note
- Battle Log retal connector graphics now live in a dedicated column between Retal and Retal Clock.
- Completed retal pairs route as continuous green/red connector lines from the active player's perspective.
- Live unresolved retals show a short blue pending stub until resolved, served, or expired.

## v0.40.82 note
- Live unresolved retal stubs now point upward, indicating the future retal battle will appear above the source row once taken. Completed connector routing and status wording are unchanged.


## v0.40.85 note
- Added a defensive duplicate-battle guard. If the same battle attempt fires twice in the same short update window, the second attempt is skipped before losses, reports, messages, retals, protection, spoils, or XP are applied.
- Debug exports now include recent battle dedupe entries under `battleDedupe` so any skipped duplicate attempts can be inspected.


## v0.40.85 note
- Recent-attack lockout messages on the War page now appear inline beside the Attack button and fade away instead of being written to News/War log.
- Built from v0.40.84; duplicate-battle guard remains in place.

## v0.40.86 - Turret energy scaffold

- Added defensive turret opening volleys: turrets fire first, once per defensive battle.
- Turrets consume defender energy; if energy cannot fund all shots, only the affordable turrets fire.
- Turret damage is treated as row 0: it hits the attacker's first available row and spills into later rows if it clears a row.
- Turret kills are deliberately fed into the normal killed-row pool, so they revive in this prototype.
- Added War page checkbox to disable target turrets before attacking.
- Added live Turrets Disable Cost field next to the War attack controls.
- Turret science now reduces both disable cost and energy per shot on tuned compound curves:
  - disable cost: 50,000 -> 10,000 cards per turret by level 60
  - energy cost: 150 -> 50 energy per shot by level 60
- Added turret audit details to admin combat audit/debug exports.

## v0.40.87 - Library scaffold

- Added a retro Antrophia-native Library landing page via the sidebar.
- Added Race Library, Building Library and Battle Outcome Archive pages.
- Imported Silas's `src/libraryArtManifest.js` and bundled the supplied `public/assets/library/` content pack.
- Race pages show identity, doctrine, homeworld, origin-summary slots, origin-file references and unit dossier rows.
- Building pages use all live `buildingOrder` IDs and keep descriptions broad/player-facing rather than formula-heavy.
- Battle outcome entries are library-only placeholders for later report/achievement art presentation.
- Large artwork is intentionally not rendered in this scaffold; missing image paths are displayed as asset/status notes rather than broken images.


## v0.40.88 - Library topbar nav and AntrophAI branding

- Moved Library access from the empire/sidebar action menu to the global top navigation bar.
- Updated the visible header wordmark to AntrophAI with a restrained neon AI treatment.
- Kept the tagline out of the header for now.
- No mechanics or Library content structure changed in this pass.

## v0.40.89 - Library race plate image batch
- Bundled Silas's first race-plate image batch under `public/assets/library/races/`.
- Race Library index now renders compact 16:9 race thumbnails from `raceThumb`.
- Race dossier panels now render the 16:9 draft race plate from `racePlate`.
- Core gameplay pages remain text-first; large artwork is still confined to Library/dossier contexts.
- No mechanics changed.

Test focus:
- Check image scale and contrast in the Race Library.
- Check whether the race dossier art feels AntrophAI-native rather than modern/codex-heavy.
- Confirm missing unit/building art still degrades to manifest/status text rather than broken UI.



## v0.40.91 - Library tier-1 unit art batch

- Added Silas batch 2 tier-1 unit dossier artwork under `public/assets/library/races/*/units/`.
- Race dossiers now show a compact unit thumbnail column when a unit thumb is present.
- Included tier-1 unit images/thumbs for Human Troopers, Trysaur Arphages, Re'lu Ithica, Li'thi Laveti, and Zarth Nemesi.
- No mechanics changed from v0.40.90.

## v0.40.90 - Turret spillover correction

- Fixed turret volley damage so it only spills into the next attacker row when the current row is fully cleared.
- Prevents fractional leftover turret damage from leaking into cheap next-row units after a large front row survives.
- No balance constants changed.
- No Library/art changes.

## v0.40.92 - Library tier-2 and remaining unit art batch

- Added Silas batch 3 tier-2 unit artwork under `public/assets/library/races/*/units/`.
- Added Silas batch 4 remaining tier-3 to tier-6 unit artwork under `public/assets/library/races/*/units/`.
- Library race dossiers now have image/thumb assets available for the full current unit roster across all five races.
- No mechanics changed from v0.40.91 / v0.40.90.

Test focus:
- Open each Race Library dossier and confirm all six unit rows show thumbnails.
- Check whether the full unit set still feels contained within the Library and not too heavy for the retro shell.
- Specifically review `Pascortha`, which remains marked `needs_review` in the manifest.


## v0.40.94 - Library unit image viewers and outcome swap

- Added View buttons beside unit dossier artwork so unit images can be opened larger inside the Library.
- Swapped Tactical Success and Devastation battle-outcome art assignments for review.
- Preserved v0.40.90 turret spillover correction and all current Library asset batches.

## v0.40.93 - Library battle outcome art batch
- Added Silas's battle-outcome images and thumbnails under `public/assets/library/battle_outcomes/`.
- Battle Outcome Archive now shows compact 16:9 thumbnails in the outcome table.
- Selected outcome panels now show the larger 16:9 battle-outcome plate above the catalogue metadata.
- Updated the reviewable archive titles to match Silas's batch notes.
- This is Library-only; normal battle reports and achievement presentation are not yet changed.

v0.41.06 - Records featured archive scaffold
- Added Silas featured records artwork under public/assets/library/records/featured.
- Added recordsFeaturedManifest and Featured Records Archive section.
- Kept featured plates in Records/Field Manual only; no live battle report integration yet.

v0.41.09 - provenance docs folder
- Added docs/provenance/ with current Archie/Archivist cross-reference documents.
- Added Marlow technical provenance statement and mechanic origin table.
- Added starter dependency/licence inventory, IP tracker, rights-holder contact log and release posture notes.
- Added Silas visual/lore provenance and asset manifest placeholders.
- No gameplay/UI changes from v0.41.08.

## v0.41.10 - provenance release-hardening tasks

- Added provenance/release-hardening tasklist under `docs/provenance/release_hardening_tasklist.md`.
- Changed remaining player-facing Antrophia prototype wording found in render-error and bonus popup text to AntrophAI.
- Added a code-level report wording mode scaffold: current private-beta reports are labelled Classic report wording; Modern AntrophAI wording is reserved for later rewritten public-release reports.
- Updated provenance tracker for battle report wording, Cardisium/Cards, protection wording/formula and player-made kill-matrix file provenance.
- No intended gameplay balance changes.
- Moved the Project Log/To Do page link behind admin mode so provenance/debug-heavy changelog material is no longer normal player navigation.

## v0.41.11 - Battle report dual-mode provenance plan

- Added a first-pass Classic/Modern battle report wording mode layer.
- Classic remains the private-beta default and preserves the current old Antrophia-style wording.
- Modern mode is selectable from Admin Control for comparison and starts the safer public-release wording path.
- Added `docs/provenance/battle_report_dual_mode_plan.md` and expanded provenance notes for report wording sensitivity.
- Removed stale `src/App.jsx.bak` from the package to avoid carrying old player-facing Antrophia wording in unused source backup files.

## v0.41.12 — Race-coded terminology stage 1

Added the first display-only terminology layer for Classic vs AntrophAI wording. Classic remains default/private-beta. Switching report wording to Modern in Admin Control now also starts showing race-coded names for obvious resources, buildings and several page/action labels. Internal keys, saves and mechanics are unchanged.

## v0.41.13 - Mineral vocabulary round 2

- Added Modern / AntrophAI mineral display names using the approved `-ite`, `-gen` and `-ium` family system.
- Internal mineral keys are unchanged; mining, LRC, Nexus, shops, market and save logic should remain stable.
- Applied labels to visible mines, shops, market, Nexus, LRC and sidebar mineral displays.

## v0.41.14 — Vocabulary sweep / Modern default

- Modern/AntrophAI wording is now the default for normal players.
- Classic Antrophia-style report/identity wording remains available through Admin Control only.
- Sidebar, page labels and several buttons received a broader vocabulary sweep.
- Race-coded labels now cover disband, destroy, explore, speed-factor controls, factories/mines/spy/missile sidebar labels, and more obvious UI surfaces.
- Internal keys and mechanics are unchanged.

## v0.41.15 — Battle reports render by current wording mode
- Normal/non-admin report display now transforms stored Classic battle-report lines into Modern AntrophAI wording where recognisable classic templates are detected.
- Existing reports that were generated while Classic mode was active should no longer remain visibly retro just because their saved lines were baked at fight time.
- New player and bot reports also carry wording-mode metadata for provenance/debug review.
- Classic report wording remains admin-protected and available for private nostalgia comparison.

## v0.41.16 - Attack popup report wording mode
- Attack-result inbox popup now displays battle report text through the same Classic/Modern report wording transform as the Battle Report page.
- Stored War inbox message bodies generated under Classic wording are transformed at display time for normal Modern/AntrophAI mode.
- Messages inbox previews and expanded War messages now also use the display-time report wording transform.

## v0.41.17 - Login, round lobby and species registration scaffold
- Added a local-only AntrophAI account/register shell before the game.
- Added a round-select lobby scaffold for Intro Game, Godlike Warfare and future announced rounds.
- Added a round registration / choose species screen using existing Field Manual species art as placeholder material.
- Added prototype species-trait text without changing mechanics.
- Began moving public-facing Modern wording from race to species while keeping internal `race` keys stable.

## v0.41.18 - Entry-stage save-state crash fix
- Fixed a render crash introduced by the login/round/species scaffold: `entryStage`, `selectedRoundKey` and `selectedSpeciesKey` are now proper React state values.
- Added the new entry-stage values to the save-effect dependency list so account/round/species choices persist cleanly.
- No gameplay/mechanics changes.
