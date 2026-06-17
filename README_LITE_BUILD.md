# AntrophAI v0.41.65 Lite Build

This package intentionally keeps only the approved navigation icon assets inside `public/assets/`:

```text
public/assets/lhs_icons_concept/
```

All heavier artwork folders are excluded from this lite/code-only package, including archive images, choose-species artwork, Field Manual/library art, story-art, gallery images and unused production icons.

To restore the full visual build locally, copy the external asset folders back into `public/assets/` using the same paths as before, for example:

```text
public/assets/race_archive/
public/assets/race_archive_plates/
public/assets/race_archive_battle_material/
public/assets/race_archive_mixed/
public/assets/choose_species/
public/assets/library/
```

The app will still run without these folders, but pages that reference missing external artwork will show broken/missing image placeholders until the asset pack is copied in.

`public/assets/story_art/` was removed from this lite package. It is referenced only by the legacy story-art manifest/choose-species fallback path and has been superseded by the current choose-species/archive asset workflow.

`public/assets/lhs_icons_production/` was removed because the live navigation uses the approved chopped concept icons.
