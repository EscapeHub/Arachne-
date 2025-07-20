const adventures = [
  { title: 'ARACHNE – Protocollo Abisso', genre: 'horror', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Un viaggio digitale in un mondo oscuro.', rating: '4.8/5' },
  { title: 'Red Nursery', genre: 'horror', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'La nursery che non dorme mai.', rating: '4.3/5' },
  { title: 'Sussurri nel Corridoio', genre: 'horror', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Ascolta le voci dietro le pareti.', rating: '4.0/5' },
  { title: 'Il Metodo Marlowe', genre: 'fantasy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Scopri la magia dell\'investigazione.', rating: '4.5/5' },
  { title: 'Replica', genre: 'sci-fi', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Quanto vale un doppio digitale?', rating: '4.7/5' },
  { title: 'CTRL_Anima.exe', genre: 'sci-fi', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'L\'AI può imprigionare un\'anima?', rating: '4.2/5' },
  { title: 'Black Signal', genre: 'sci-fi', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Un segnale oscuro dallo spazio.', rating: '4.1/5' },
  { title: 'ExoCore – Progetto 36', genre: 'sci-fi', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Segreti interstellari da scoprire.', rating: '4.4/5' },
  { title: 'Città Frattale', genre: 'fantasy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Una città in continua metamorfosi.', rating: '4.1/5' },
  { title: 'Labyrinthia', genre: 'fantasy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Sopravvivi al labirinto infinito.', rating: '4.0/5' },
  { title: 'La Torre di Kairo', genre: 'fantasy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Scala la torre e svela il mistero.', rating: '4.3/5' },
  { title: 'Codice Orfeo', genre: 'comedy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Un viaggio ironico nel codice.', rating: '3.9/5' },
  { title: 'Eloria – La Chiave Perduta', genre: 'fantasy', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Recupera la chiave nel regno di Eloria.', rating: '4.6/5' },
  { title: 'Luce del Vero', genre: 'sci-fi', trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', desc: 'Illumina i segreti nascosti.', rating: '4.2/5' }
];

const listElem = document.getElementById('adventure-list');
const modal = document.getElementById('adventure-modal');
const chatModal = document.getElementById('chat-modal');
let selectedAdventure = null;

function renderAdventures() {
  adventures.forEach((adv) => {
    const card = document.createElement('div');
    card.className = 'adventure-card';
    card.innerHTML = `<img src="https://via.placeholder.com/300x170?text=${encodeURIComponent(adv.title)}" alt="${adv.title}"><div class="title">${adv.title}</div>`;
    card.addEventListener('click', () => openAdventure(adv));
    listElem.appendChild(card);
  });
}

function openAdventure(adv) {
  selectedAdventure = adv;
  document.getElementById('adventure-title').textContent = adv.title;
  document.getElementById('trailer-video').src = adv.trailer;
  document.getElementById('adventure-desc').textContent = adv.desc;
  document.getElementById('adventure-rating').textContent = 'Valutazione: ' + adv.rating;
  modal.classList.remove('hidden');
}

function closeAdventure() {
  modal.classList.add('hidden');
  document.getElementById('trailer-video').src = '';
}

function openChat() {
  chatModal.classList.remove('hidden');
  document.getElementById('chat-log').innerHTML = `<div>AI: Benvenuto in ${selectedAdventure.title}! Come posso aiutarti?</div>`;
}

function closeChat() {
  chatModal.classList.add('hidden');
}

function sendMessage() {
  const input = document.getElementById('chat-message');
  const log = document.getElementById('chat-log');
  const text = input.value.trim();
  if (!text) return;
  const userDiv = document.createElement('div');
  userDiv.textContent = 'Tu: ' + text;
  log.appendChild(userDiv);
  input.value = '';
  setTimeout(() => {
    const aiDiv = document.createElement('div');
    aiDiv.textContent = 'AI: Questo è un indizio generato dall\'AI.';
    log.appendChild(aiDiv);
    log.scrollTop = log.scrollHeight;
  }, 500);
}

const loginModal = document.getElementById('login-modal');
document.getElementById('login-btn').addEventListener('click', () => loginModal.classList.remove('hidden'));
document.getElementById('close-login').addEventListener('click', () => loginModal.classList.add('hidden'));
document.getElementById('login-submit').addEventListener('click', () => loginModal.classList.add('hidden'));

document.getElementById('close-adventure').addEventListener('click', closeAdventure);
document.getElementById('start-btn').addEventListener('click', () => { closeAdventure(); openChat(); });

document.getElementById('close-chat').addEventListener('click', closeChat);
document.getElementById('send-chat').addEventListener('click', sendMessage);

renderAdventures();
