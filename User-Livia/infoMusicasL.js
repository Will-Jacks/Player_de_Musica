// Info das músicas
let musicas = [{
    titulo: 'Glimpse of Us',
    artista:'Joji',
    src:'musicasLivia/glimpse-of-us.mp3',
    img:'imagensLivia/img-msc-300x300.jpg'
    },
    {
    titulo: 'Sweater Weather',
    artista:'The Neighbourhood',
    src: 'musicasLivia/sweater-weather.mp3',
    img:'imagensLivia/sweater-weather.jpg'
    },
    {
    titulo: 'Do I Wanna Know',
    artista:'Artic Monkeys',
    src: 'musicasLivia/do-i-wanna-know.mp3',
    img:'imagensLivia/do-i-wanna-know.jpg'
    }
]

let imagemMusica = document.querySelector('.img-musica');
let nomeMusica = document.querySelector('.nome-musica');
let nomeArtista = document.querySelector('.nome-artista');
// Info das músicas


//Índice da música
let indexMusica = 0;
//Índice da música




//Renderizando todas as características da música
renderizarMusica(indexMusica);
//Renderizando todas as características da música


//Spread dos nomes das músicas
let musicasFormatadas = [];
for (let i=0; i < musicas.length; i++){
    const nomeDasMusicas = [...musicas[i].titulo];
    musicasFormatadas += [nomeDasMusicas.join("") + '\n' + '\n'];
    document.querySelector('.exibir-musicas').innerText = musicasFormatadas
}
console.log(musicasFormatadas);
//Spread dos nomes das músicas

//Menu info musicas responsivo
const iconeMenu = document.querySelector('.menu-icone');
let navMusicas = document.querySelector('.nav-musicas');
function exibeMenu(){
    if(navMusicas.style.display === 'none'){
        navMusicas.style.display = 'flex';
        iconeMenu.style.backgroundColor = '#151515';
    } else {
        navMusicas.style.display = 'none';
        iconeMenu.style.backgroundColor = '#2A2A2A';
    }
};