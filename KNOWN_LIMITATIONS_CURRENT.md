# Known limitations — current v0.41.77 handoff

## Hosted multiplayer not implemented

This is a local client prototype. The hosted version needs server-side authority for all meaningful game state.

## Spies deferred

Spies are not currently reconstructed. They are separate from scanners and should remain deferred until old-player input confirms their function.

## Asset/library manifests contain placeholders

Some archive, story, race and library art manifests refer to image paths that are not present in this lightweight package. The current gameplay UI has fallbacks. Missing archive/library images are not a GLW deployment blocker unless those sections are in scope.

## Monolithic App component

`src/App.jsx` remains large and contains gameplay logic plus UI. This is acceptable for prototype testing but should be split for hosted development.

## Admin tools are local prototype tools

Debug/admin buttons are useful for testing, but must be permission-gated and server-validated in a hosted version.

## Display modes

Hybrid AntrophAI is the normal/default mode. Modern and Classic display choices are intentionally locked in this GLW handoff build to avoid misleading UI. Retro Mode remains admin/reference only.

## Randomness

Some random choices, such as LRC random alliance member targeting, are client-side in the local prototype. Hosted play must move this authority server-side.
