const $ = (selector) => document.querySelector(selector);

const backgroundMusic = $('#background-music');
const musicToggle = $('#music-toggle');
let musicWasStarted = false;
backgroundMusic.volume = 0.15;

function updateMusicToggle() {
  const isPlaying = !backgroundMusic.paused;
  musicToggle.textContent = isPlaying ? 'Ⅱ' : '♫';
  musicToggle.setAttribute('aria-label', isPlaying ? 'Pause background music' : 'Play background music');
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
}
function startBackgroundMusic() {
  if (musicWasStarted) return;
  backgroundMusic.play().then(() => { musicWasStarted = true; updateMusicToggle(); }).catch(() => {});
}
function pauseBackgroundMusic() {
  backgroundMusic.pause();
  updateMusicToggle();
}
function resumeBackgroundMusic() {
  backgroundMusic.play().then(() => { musicWasStarted = true; updateMusicToggle(); }).catch(() => {});
}

// Mobile browsers require a tap before audio can play, so the first tap starts it at 30%.
document.addEventListener('pointerdown', startBackgroundMusic, { once: true });
musicToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  if (backgroundMusic.paused) {
    backgroundMusic.play().then(() => { musicWasStarted = true; updateMusicToggle(); }).catch(() => {});
  } else {
    pauseBackgroundMusic();
  }
});
backgroundMusic.addEventListener('play', updateMusicToggle);
backgroundMusic.addEventListener('pause', updateMusicToggle);

$('#anniversary-date').textContent = `Made for us · ${GIFT_CONFIG.anniversaryDate}`;
$('#hero-copy').textContent = GIFT_CONFIG.heroCopy;
$('#final-note').innerHTML = `<h2>${GIFT_CONFIG.finalTitle}</h2><p>${GIFT_CONFIG.finalMessage}</p>`;

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo).scrollIntoView({ behavior: 'smooth' }));
});

$('#timeline').innerHTML = TIMELINE.map((item) => `
  <article class="timeline-item"><p class="timeline-date">${item.date}</p><h3>${item.title}</h3><p>${item.memory}</p></article>
`).join('');

const dialog = $('#letter-dialog');
const letterAudioButton = $('#letter-audio-button');
let currentLetterAudio = null;
$('#envelopes').innerHTML = LETTERS.map((letter, index) => `<button class="envelope" type="button" data-letter="${index}"><span class="number">${String(index + 1).padStart(2, '0')}</span><h3>${letter.title}</h3></button>`).join('');
document.querySelectorAll('[data-letter]').forEach((button) => {
  button.addEventListener('click', () => {
    const letter = LETTERS[Number(button.dataset.letter)];
    $('#letter-label').textContent = `Letter ${String(Number(button.dataset.letter) + 1).padStart(2, '0')}`;
    $('#letter-title').textContent = letter.title;
    const isAudioMessage = letter.type === 'audio';
    $('#letter-body').textContent = isAudioMessage ? 'I left you a little voice message.' : letter.body;
    if (currentLetterAudio) { currentLetterAudio.pause(); currentLetterAudio = null; }
    letterAudioButton.hidden = !isAudioMessage;
    letterAudioButton.textContent = 'Play my audio message ♫';
    if (isAudioMessage && letter.audio) {
      currentLetterAudio = new Audio(`assets/audio/${letter.audio}`);
      letterAudioButton.onclick = () => currentLetterAudio.paused ? currentLetterAudio.play() : currentLetterAudio.pause();
      currentLetterAudio.onplay = () => { pauseBackgroundMusic(); letterAudioButton.textContent = 'Pause my audio message Ⅱ'; };
      currentLetterAudio.onpause = () => letterAudioButton.textContent = 'Play my audio message ♫';
      currentLetterAudio.onended = () => { resumeBackgroundMusic(); letterAudioButton.textContent = 'Play my audio message ♫'; };
    }
    dialog.showModal();
  });
});
function closeLetter() { if (currentLetterAudio) currentLetterAudio.pause(); dialog.close(); }
$('#close-letter').addEventListener('click', closeLetter);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeLetter(); });

$('#location-details').innerHTML = [GIFT_CONFIG.cityOne, GIFT_CONFIG.cityTwo].map((city) => `<div class="location-card"><strong>${city.name}</strong><span>${city.timezone}</span></div>`).join('');
const mapImage = $('#map-image');
const mapPlaceholder = $('#map-placeholder');
mapImage.addEventListener('error', () => { mapImage.style.display = 'none'; if (mapPlaceholder) mapPlaceholder.style.display = 'block'; $('#map-download').hidden = true; });
mapImage.addEventListener('load', () => { if (mapPlaceholder) mapPlaceholder.style.display = 'none'; });

$('#photo-booth-link').href = PHOTO_BOOTH.url;

const documentary = $('#documentary');
documentary.addEventListener('play', pauseBackgroundMusic);
documentary.addEventListener('ended', resumeBackgroundMusic);
