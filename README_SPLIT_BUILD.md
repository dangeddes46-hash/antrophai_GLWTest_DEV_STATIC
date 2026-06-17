# AntrophAI v0.41.60 split build

This is the code/source package without the heavy illustrated race archive image assets.

To run with archive images:

1. Unzip this code package.
2. Unzip `antrophai_archive_assets_v1.zip` into the project root.
   It should create/restore `public/assets/race_archive/...`.
3. Run:

```bash
npm install
npm run dev
```

If the asset pack is not installed, the archive pages still exist but their image plates/backgrounds will be missing.
