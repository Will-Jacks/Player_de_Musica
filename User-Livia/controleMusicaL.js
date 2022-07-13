/* ---Eventos---*/
let musica = document.querySelector('audio');
const btnPlay = document.querySelector('.botao-play');
const btnPause = document.querySelector('.botao-pause');
const btnVoltar = document.querySelector('.botao-voltar');
const btnAvancar = document.querySelector('.botao-avancar');

//Play na música
btnPlay.addEventListener('click', () => {
    musica.play();
})
//Play na música

//Pause na música
btnPause.addEventListener('click', () => {
    musica.pause();
})
//Pause na música

//Botão voltar anterior
btnVoltar.addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = musicas.length -1;
    }//Limitando o recuo da música
    renderizarMusica(indexMusica);
    musica.play(); 
})
//Botão voltar anterior

//Botão avançar música
btnAvancar.addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > musicas.length - 1) {
        indexMusica = 0;
    }//Limitando o avanço das músicas
    renderizarMusica(indexMusica);
    musica.play();
})
//Botão avançar música

//Atualiza barra de progresso
musica.addEventListener('timeupdate', atualizarBarra);
//Atualiza barra de progresso

/* ---Eventos--- */

// Duração da música
document.querySelector('.fim-da-musica').textContent = segundosParaMinutos(musica.duration);
// Duração da música

function atualizarBarra() {
    var barraProgresso = document.querySelector('.status-barra-progresso');
    barraProgresso.style.width = Math.floor( ( musica.currentTime / musica.duration) * 100 ) + '%';
    let tempoDecorrido = document.querySelector('.inicio-da-musica');
    tempoDecorrido.textContent = segundosParaMinutos(musica.currentTime);
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = Math.floor(segundos % 60);

    if(campoSegundos < 10) {
        campoSegundos = '0'+ campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}