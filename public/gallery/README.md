# Gallery images

Drop client-provided gallery photos in this folder, e.g.:

```
public/gallery/005.jpg
public/gallery/006.jpg
...
public/gallery/100.jpg
```

(`001`–`004` aren't needed here — those four already exist as
`public/assets/g1.jpg`–`g4.jpg` and are wired up in `src/data/gallery.ts`.
Continue numbering from wherever you like; the filenames don't need to be
sequential or gapless.)

For each image you add, add a matching entry to the `galleryImages` array in
`src/data/gallery.ts`:

```ts
{
  src: "/gallery/005.jpg",
  alt: "Descriptive sentence of what's actually in the photo",
  title: "Short caption shown in the lightbox",
  category: "workshops", // or "corporate" / "college" / "events" — see below
  width: 1600,   // the image's real pixel width
  height: 1067,  // the image's real pixel height
},
```

**width/height must be the image's real dimensions** (e.g. via "Get Info" /
"Properties", or `file` / `identify` on the command line) — next/image uses
these to reserve layout space and avoid content jumping while images load.
Don't guess them.

**Categories**: the /gallery page only shows a category filter once more than
one distinct `category` value exists in the data — right now everything is
`"workshops"`, so no filter renders. Once real categories are meaningful for
your photos (e.g. `"corporate"`, `"college"`, `"events"`), just start using
them on the relevant entries and the filter pills will appear automatically.
