# Archive Plates asset install

This code build references the secondary race image archive at:

```text
public/assets/race_archive_plates/Human/
public/assets/race_archive_plates/Trysaur/
public/assets/race_archive_plates/ReLu/
public/assets/race_archive_plates/Lithi/
public/assets/race_archive_plates/Zarth/
```

The uploaded source archive was `antrophai_race_images.rar`. In this environment I could read its file list, but could not extract RAR5 compressed image data because no RAR extraction tool is available.

To install locally:

1. Extract `antrophai_race_images.rar` with 7-Zip/WinRAR.
2. Locate the inner race folders: `Human`, `Trysaur`, `ReLu`, `Lithi`, `Zarth`.
3. Copy those five folders into `public/assets/race_archive_plates/`.
4. Keep filenames unchanged.

The main archive art under `public/assets/race_archive/` is still required separately, as before.
