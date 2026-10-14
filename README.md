# yj-apps.github.io

yjapps homepage, served by GitHub Pages at https://yj-apps.github.io/ (no build step).
yjapps.com redirects here (see the yjapps.com repo).

## Structure

- `index.html` — homepage
- `privacy.html` — links to each app's privacy policy (from `privacy` in `apps.js`)
- `app-ads.txt` — AdMob publisher record; Play Console developer website points here, so keep it at the root
- `assets/apps.js` — **app list: edit this to add apps or set store links**
- `assets/i18n.js` — UI text (ko / en / ja / zh-Hant)
- `assets/icons/` — 256px app icons, resized from each app repo's `store/icon-512.png`
- `assets/style.css`, `assets/main.js`, `favicon.svg`

Language: browser language by default, toggle in the header, or force with `?lang=ko|en|ja|zh`.

## Adding an app

Add an entry to `assets/apps.js`. Set `url` to the Play Store link
(`https://play.google.com/store/apps/details?id=<package>`) or a PC download link; leave it `""` to show "coming soon".
For a real icon, put the file in `assets/icons/` and set `icon: "assets/icons/name.png"`.

## Local preview

```
npx serve .
```

Push to `main` and GitHub Pages redeploys automatically.
