# Six Months, One Little Universe

This page is ready to open at `sixmonths2026/index.html`. It will work without media, but the video and audio areas will be empty until their matching files are added.

## 1. Edit the words

Open `data.js`. It contains every piece of editable text:

- top message and final note;
- city names and time zones;
- timeline milestones;
- twelve Open When letters and their message type;
- the external photo-booth URL.

Do not rename `GIFT_CONFIG`, `TIMELINE`, `LETTERS`, or `PHOTO_BOOTH`.

## 2. Choose text or audio for each envelope

In `data.js`, each item in `LETTERS` has a `type`:

```js
{ title: 'Open when you miss me', type: 'text', body: 'Your letter here', audio: '' }
{ title: 'Open when you need my voice', type: 'audio', body: '', audio: 'miss-me.mp3' }
```

For an audio letter, save the MP3 under `assets/audio/` and put its exact filename in `audio`. Each envelope should use either `text` or `audio`, not both.

## 3. Add the media

Put these files in these exact locations:

```text
assets/video/six-months-two-time-zones.mp4
assets/video/six-months-poster.jpg
assets/map-constellation.png
assets/audio/background-music.mp3
```

If you add an audio message to an individual letter, save it in `assets/audio/` and set that filename in the letter's `audio` field in `data.js`.

`background-music.mp3` plays at 15% after her first tap (mobile browsers do not allow audio to start before a tap). It pauses whenever she starts the documentary or an audio letter, then resumes only when that media finishes naturally. The round music button at bottom-right lets her play or pause it herself.

## 4. Make the documentary

Keep it around 6–8 minutes. Suggested order: how you met → first impressions → becoming official → favourite small memories → long distance → what the next chapter means. Export as MP4 (H.264 video + AAC audio), 1080p maximum, and keep the final file under about 100 MB if possible.

## 5. Make the map artwork

Create a 1600×1000 PNG with both city names, their time zones, a line connecting them, the important date, and one short sentence. Do not include home addresses. Save it as `assets/map-constellation.png`.

## 6. Set up the photo booth return

Paste the photo-booth URL into `PHOTO_BOOTH.url` in `data.js`. On the external photo-booth website, make its final button point back to this page's conclusion:

```text
https://YOUR-DEPLOYED-SITE/sixmonths2026/index.html#final-note
```

Replace `YOUR-DEPLOYED-SITE` with your real GitHub Pages/custom-domain URL. This opens the conclusion directly after the photo booth.

## 7. Final check

Open `hub.html` in a browser. The new hub card is locked until **August 21, 2026, 12:00 AM Philippine Time** and then points to this page. Test on a phone before sending it.
