// Info das músicas
let musicas = [
    {
        titulo: 'Red de Maracujá',
        artista:'Felipe Amorim',
        src: 'musicas-will/red-maracuja.mp3',
        img:'imagens-will/img-teste.jpg',
        index: 0
    },
    {
        titulo: 'No ouvidinho',
        artista:'Felipe Amorim',
        src: 'musicas-will/no-ouvidinho.mp3',
        img:'imagens-will/no-ouvidinho.jpg',
        index: 1
    },
    {
        titulo: 'Do I Wanna Know',
        artista:'Artic Monkeys',
        src: 'musicas-will/do-i-wanna-know.mp3',
        img:'imagens-will/do-i-wanna-know.jpg',
        index: 2
    },
    {
        titulo: 'Sweater Weather',
        artista:'The Neighbourhood',
        src: 'musicas-will/sweater-weather.mp3',
        img:'imagens-will/sweater-weather.jpg',
        index: 3
    },
    {
        titulo: 'Até a próxima vida',
        artista:'Henrique & Juliano',
        src: 'musicas-will/ate-a-proxima-vida.mp3',
        img:'imagens-will/ate-a-proxima-vida.jpg',
        index: 4
    },
    {
        titulo: 'Até a próxima vida | Lambada',
        artista:'Henrique & Juliano',
        src: 'musicas-will/ate-a-proxima-vida-lambada.mp3',
        img:'imagens-will/ate-a-proxima-vida.jpg',
        index: 5
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