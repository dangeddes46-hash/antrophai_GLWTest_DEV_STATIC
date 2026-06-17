# AntrophAI Archive Gallery Assets v1

The illustrated race archive gallery now has three sections:

- Archive Plates
- Battle Material
- Mixed

Archive Plates remain race-foldered because they are tied to each species archive page.

Battle Material and Mixed are shared cross-race folders. They are not divided by race.

## Expected folders

Archive Plates:

```text
public/assets/race_archive_plates/Human/
public/assets/race_archive_plates/Trysaur/
public/assets/race_archive_plates/ReLu/
public/assets/race_archive_plates/Lithi/
public/assets/race_archive_plates/Zarth/
```

Battle Material:

```text
public/assets/race_archive_battle_material/
```

Mixed:

```text
public/assets/race_archive_mixed/
```

## Notes

- Do not create Human/Trysaur/ReLu/Lithi/Zarth subfolders inside Battle Material or Mixed.
- The code expects image references for those shared galleries to point directly into the shared folder.
- Each gallery still uses the same thumbnail grid and full-screen left/right image viewer.
