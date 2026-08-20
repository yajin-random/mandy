/*
  THE ONLY FILE YOU NEED TO EDIT FOR WRITTEN CONTENT.
  Keep the quotation marks and commas. Replace all [bracketed text].
*/
const GIFT_CONFIG = {
  anniversaryDate: 'August 21, 2026',
  heroCopy: 'Six months ago, you became my favourite part of every day. This is a place for all the moments in the past 6 months and for all the precious memories we are gonna make.',
  cityOne: { name: 'Kollam', timezone: '[GMT+5:30]' },
  cityTwo: { name: 'Cagayan De Oro', timezone: '[GMT+8]' },
  finalTitle: 'And this is only chapter six, of an infinite amount to come.',
  finalMessage: `I know the distance can feel big sometimes, We might have misunderstandings, But every call, every goofy thing, every “I miss you” and "I love you" has made this feel so much more easier than it is. Thank you for being my universe. Thank you for making love so easy. I love you.`
};

// Add 6–10 meaningful milestones. `image` is optional; it is not displayed yet.
const TIMELINE = [
  { date: '[06.02.2026]', title: 'The beginning', memory: 'I remember being worried about getting blocked for being a random indian dude hitting up online HAHAHAHAHHAHA but I AM SO GLAD I MESSAGED' },
  { date: '[21.02.2026]', title: 'When we became us', memory: 'I remember the day very clearly, the flowers, the candle, the decoration, your smile. Everything.' },
  { date: '[1 Random Night]', title: 'A core memory that stayed with me', memory: 'Randomly crying on a random night out of nowhere when watching a reel was the day I realised how lucky I am to have someone I can feel that way towards, How much I want our relationship to workout and How much I want to marry you.' },
  { date: '[21.08.2026]', title: 'Six months', memory: 'Genuinely from the bottom of my heart, This was the best 6 months of my life. You gave me hope, hope in love from someone who thought I would never have a special someone, An extra special person came into my life to flip it around in a good way' }
];

/*
  Each envelope can be one kind of message:
  - type: 'text'  → write its letter in `body`.
  - type: 'audio' → add an MP3 under assets/audio/ and use its filename in `audio`.
  Do not use both for one envelope. You can change the type later whenever you want.
*/
const LETTERS = [
  { title: 'Open when you miss me', type: 'text', body: '[Awww my sweeeet babyyy, I will be back soon wherever I am probably ASAP cause I will feel the same cutieee]', audio: '' },
  { title: 'Open when you can’t sleep', type: 'text', body: '[CALL ME IDC WHERE I AM, CALL ME I WILL PICK UP, if not, I will be there soon, Not going anywhere]', audio: '' },
  { title: 'Open when you need a laugh', type: 'audio', body: '[Write this letter here.]', audio: 'saminamina.mp3' },
  { title: 'Open when you feel insecure', type: 'audio', body: '[Write this letter here.]', audio: 'insecure.mp3' },
  { title: 'Open when you feel stressed', type: 'audio', body: '[Write this letter here.]', audio: 'chillaxxx.mp3' },
  { title: 'Open when you feel lonely', type: 'audio', body: '[Write this letter here.]', audio: 'lonely.mp3' },
  { title: 'Open when we have had a disagreement', type: 'audio', body: '[Write this letter here.]', audio: 'disagreement.mp3' },
  { title: 'Open when you need motivation', type: 'audio', body: '[Write this letter here.]', audio: 'peak_motivation.mp3' },
  { title: 'Open when you want to feel close to me', type: 'audio', body: '[Write this letter here.]', audio: 'close.mp3' },
  { title: 'Open when you are having a bad day', type: 'audio', body: '[Write this letter here.]', audio: 'Bad_day.mp3' },
  { title: 'Open when you forget how loved you are', type: 'audio', body: '[Write this letter here.]', audio: 'I_love_you.mp3' },
  { title: 'Open on our six-month anniversary', type: 'audio', body: '[Write your anniversary letter here.]', audio: '6months.mp3' }
];

// Paste the URL of your finished external photo-booth website here.
const PHOTO_BOOTH = {
  url: 'https://getangie.com/photobooth',
  returnPath: 'sixmonths2026/index.html#final-note'
};
