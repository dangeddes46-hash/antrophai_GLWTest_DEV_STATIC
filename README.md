# AntrophAI v0.41.77 GLW handoff build

This package is a clean local prototype handoff for the single-player Godlike Warfare (GLW) test build of AntrophAI.

## Scope

This is not a hosted multiplayer implementation. It is a reference/client prototype for validating the reconstructed game loop before the hosted version is built.

Current focus:

- GLW single-round launcher
- local save/load through browser localStorage
- build, train, attack, missile, LRC, scanner, ranking and report behaviour
- admin/debug tools for tester validation

Deferred:

- hosted accounts
- authoritative server-side combat/resource resolution
- real multiplayer persistence
- spies
- final public asset/library polish

## Running locally

```bash
npm install
npm run dev
```

If Vite appears to serve an old build on Windows, stop existing Node processes first:

```bat
taskkill /f /im node.exe
npm run dev
```

## Clean package notes

This handoff package intentionally excludes:

- `node_modules`
- old `src/App.jsx.*` backup files
- obsolete local build clutter

A fresh `dist/` can be produced with:

```bash
npm run build
```

## Important documents

- `README_HOSTED_HANDOFF.md` — what a hosted developer needs to know first.
- `PROTOTYPE_RULES.md` — current gameplay rules implemented or intentionally deferred.
- `KNOWN_LIMITATIONS_CURRENT.md` — current known limitations and non-bugs.
- `PLAYTEST_NOTES.md` — older playtest notes retained for project context.
