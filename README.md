# lensofuday GitHub Pages gallery

This is a static, free photo gallery designed for GitHub Pages. GitHub Pages does not let browser JavaScript list the files inside a folder, so `photos.json` is the gallery's small, explicit index.

## Add photographs

1. Put each image in one of these folders: `photos/travel/`, `photos/nature/`, `photos/people/`, `photos/events/`, `photos/family/`, or `photos/other/`.
2. Use web-friendly JPG, WebP, or AVIF images. For a large collection, export a thumbnail around 1200px wide and a full version around 2400px wide.
3. Add one entry per photograph to the `photos` array in `photos.json`, then commit the photo and the manifest together.

Example:

```json
{
  "photos": [
    {
      "src": "photos/travel/hampi-sunrise.jpg",
      "category": "travel"
    },
    {
      "src": "photos/nature/monsoon-forest.jpg",
      "thumb": "photos/nature/thumbs/monsoon-forest.jpg",
      "full": "photos/nature/monsoon-forest.jpg",
      "category": "nature",
      "title": "Monsoon Forest",
      "views": 120
    }
  ]
}
```

`src` is required. `category` is recommended and must be one of `travel`, `nature`, `people`, `events`, `family`, or `other`. If `title` is omitted, the filename becomes the caption: `hampi-sunrise.jpg` displays as “Hampi Sunrise”. `thumb`, `full`, `views`, `srcset`, and `sizes` are optional. Without `thumb`, the same file is used in the gallery and viewer.

## GitHub Pages deployment

1. Create a GitHub repository and upload every file in this folder, including `index.html`, `photos.json`, and the `photos` directory.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` (or your publishing branch), choose **/(root)**, then save.
4. Wait for the Pages deployment to finish. Your site will be at `https://USERNAME.github.io/REPOSITORY-NAME/`.

All gallery paths are relative, so no URL changes are needed for a project site. Every photo addition only needs an upload plus one `photos.json` entry—never a new HTML `<img>` element.
