# Six Months, One Little Universe

This page is ready to open at `sixmonths2026/index.html`. It will work without media, but the video and audio areas will be empty until their matching files are added.

## 1. Edit the words

Open `data.js`. It contains every piece of editable text:

- top message and final note;
- city names and time zones;
- timeline milestones;
- five audio episode titles/descriptions;
- twelve Open When letters.

Do not rename `GIFT_CONFIG`, `TIMELINE`, `EPISODES`, or `LETTERS`.

## 2. Add the media

Put these files in these exact locations:

```text
assets/video/six-months-two-time-zones.mp4
assets/video/six-months-poster.jpg
assets/map-constellation.png
assets/audio/01-how-you-became-my-person.mp3
assets/audio/02-things-i-love-about-you.mp3
assets/audio/03-our-favourite-memories.mp3
assets/audio/04-for-when-you-miss-me.mp3
assets/audio/05-for-your-future-self.mp3
```

If you add a voice note to an individual letter, save it in `assets/audio/` and set that filename in the letter's `audio` field in `data.js`.

## 3. Make the documentary

Keep it around 6–8 minutes. Suggested order: how you met → first impressions → becoming official → favourite small memories → long distance → what the next chapter means. Export as MP4 (H.264 video + AAC audio), 1080p maximum, and keep the final file under about 100 MB if possible.

## 4. Make the map artwork

Create a 1600×1000 PNG with both city names, their time zones, a line connecting them, the important date, and one short sentence. Do not include home addresses. Save it as `assets/map-constellation.png`.

## 5. Final check

Open `hub.html` in a browser. The new hub card is locked until **August 21, 2026, 12:00 AM Philippine Time** and then points to this page. Test on a phone before sending it.
