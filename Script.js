//PASTA
let musicas = [
  {
    titulo: 'Mortal eye',
    artista: 'MSR, Adam Gubman, BONZIE, Christine Hals',
    src: 'Musicas/Mortal Eye.mp3',
    img: 'Imagens/mortal-eye.jpg'
  },

  {
    titulo: 'Monster',
    artista: 'Starset',
    src: 'Musicas/Starset - Monster (Official Music Video).mp3',
    img: 'Imagens/monster-starset.jpg'
  },

  {
    titulo: 'Radiant',
    artista: 'MSR, Erik Castro, Mary Clare',
    src: 'Musicas/Radiant.mp3',
    img: 'Imagens/Radiant-image.jpg'
  },

  {
    titulo: 'Operation Blade',
    artista: 'MSR, Obadiah Brown-Beach',
    src: 'Musicas/Operation Blade.mp3',
    img: 'Imagens/operation-blade.jpg'
  }

];

//VARIÁVEIS
let indexmusica = 0;
let musica = document.querySelector('audio');
let imagem = document.querySelector('img');
let nomemusica = document.querySelector('.musica');
let nomeartista = document.querySelector('.musico');
let tempomusica = document.querySelector('.fim');

//EVENTOS
mudarmusica(indexmusica);

document.querySelector('.continuar').addEventListener('click', continuaMusica);
document.querySelector('.pausar').addEventListener('click', pausaMusica);
musica.addEventListener('timeupdate', tempobarra);

document.querySelector('.anterior').addEventListener('click', () => {
  indexmusica--;
  if (indexmusica < 0) {
    indexmusica = musicas.length - 1; // Volta para a última música se estiver na primeira
  }
  mudarmusica(indexmusica);
});
document.querySelector('.proximo').addEventListener('click', () => {
  indexmusica++;
  if (indexmusica >= musicas.length) {
    indexmusica = 0; // Volta para a primeira música se passar da última
  }
  mudarmusica(indexmusica);
});

//FUNÇÕES
function mudarmusica(indexmusica) {
  musica.setAttribute('src', musicas[indexmusica].src);
  musica.addEventListener('loadeddata', () => { // Evento correto é 'loadeddata'
    nomemusica.textContent = musicas[indexmusica].titulo;
    nomeartista.textContent = musicas[indexmusica].artista;
    imagem.src = musicas[indexmusica].img;
    tempomusica.textContent = segundosminutos(Math.floor(musica.duration));
  });
}

function continuaMusica() {
  musica.play();
  document.querySelector('.pausar').style.display = 'block';
  document.querySelector('.continuar').style.display = 'none';
}

function pausaMusica() {
  musica.pause();
  document.querySelector('.continuar').style.display = 'block';
  document.querySelector('.pausar').style.display = 'none';
}

function tempobarra() {
  let barra = document.querySelector('progress');
  barra.style.width = (musica.currentTime / musica.duration) * 100 + '%';
  let tempopassado = document.querySelector('.inicio');
  tempopassado.textContent = segundosminutos(Math.floor(musica.currentTime));
}

function segundosminutos(segundos) {
  let osminutos = Math.floor(segundos / 60);
  let ossegundos = segundos % 60;
  if (ossegundos < 10) {
    ossegundos = '0' + ossegundos;
  }
  return osminutos + ':' + ossegundos;
}
