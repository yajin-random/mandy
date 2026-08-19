const $ = (selector) => document.querySelector(selector);

$('#anniversary-date').textContent = `Made for us · ${GIFT_CONFIG.anniversaryDate}`;
$('#hero-copy').textContent = GIFT_CONFIG.heroCopy;
$('#final-note').innerHTML = `<h2>${GIFT_CONFIG.finalTitle}</h2><p>${GIFT_CONFIG.finalMessage}</p>`;

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo).scrollIntoView({ behavior: 'smooth' }));
});

$('#timeline').innerHTML = TIMELINE.map((item) => `
  <article class="timeline-item"><p class="timeline-date">${item.date}</p><h3>${item.title}</h3><p>${item.memory}</p></article>
`).join('');

const episodeContainer = $('#episodes');
EPISODES.forEach((episode, index) => {
  const card = document.createElement('article');
  card.className = 'episode';
  card.innerHTML = `<div class="episode-header"><button class="episode-play" type="button" aria-label="Play ${episode.title}">▶</button><div><h3>${String(index + 1).padStart(2, '0')}. ${episode.title}</h3><p>${episode.description}</p></div></div><audio preload="metadata" src="assets/audio/${episode.file}"></audio>`;
  const audio = card.querySelector('audio');
  const playButton = card.querySelector('button');
  playButton.addEventListener('click', () => {
    document.querySelectorAll('.episode audio').forEach((otherAudio) => { if (otherAudio !== audio) otherAudio.pause(); });
    if (audio.paused) audio.play(); else audio.pause();
  });
  audio.addEventListener('play', () => playButton.textContent = 'Ⅱ');
  audio.addEventListener('pause', () => playButton.textContent = '▶');
  episodeContainer.appendChild(card);
});

const dialog = $('#letter-dialog');
const letterAudioButton = $('#letter-audio-button');
let currentLetterAudio = null;
$('#envelopes').innerHTML = LETTERS.map((letter, index) => `<button class="envelope" type="button" data-letter="${index}"><span class="number">${String(index + 1).padStart(2, '0')}</span><h3>${letter.title}</h3></button>`).join('');
document.querySelectorAll('[data-letter]').forEach((button) => {
  button.addEventListener('click', () => {
    const letter = LETTERS[Number(button.dataset.letter)];
    $('#letter-label').textContent = `Letter ${String(Number(button.dataset.letter) + 1).padStart(2, '0')}`;
    $('#letter-title').textContent = letter.title;
    $('#letter-body').textContent = letter.body;
    if (currentLetterAudio) { currentLetterAudio.pause(); currentLetterAudio = null; }
    letterAudioButton.hidden = !letter.audio;
    letterAudioButton.textContent = 'Play my voice note ♫';
    if (letter.audio) {
      currentLetterAudio = new Audio(`assets/audio/${letter.audio}`);
      letterAudioButton.onclick = () => currentLetterAudio.paused ? currentLetterAudio.play() : currentLetterAudio.pause();
      currentLetterAudio.onplay = () => letterAudioButton.textContent = 'Pause my voice note Ⅱ';
      currentLetterAudio.onpause = () => letterAudioButton.textContent = 'Play my voice note ♫';
    }
    dialog.showModal();
  });
});
function closeLetter() { if (currentLetterAudio) currentLetterAudio.pause(); dialog.close(); }
$('#close-letter').addEventListener('click', closeLetter);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeLetter(); });

$('#location-details').innerHTML = [GIFT_CONFIG.cityOne, GIFT_CONFIG.cityTwo].map((city) => `<div class="location-card"><strong>${city.name}</strong><span>${city.timezone}</span></div>`).join('');
const mapImage = $('#map-image');
mapImage.addEventListener('error', () => { mapImage.style.display = 'none'; $('#map-placeholder').style.display = 'block'; $('#map-download').hidden = true; });
mapImage.addEventListener('load', () => { $('#map-placeholder').style.display = 'none'; });
