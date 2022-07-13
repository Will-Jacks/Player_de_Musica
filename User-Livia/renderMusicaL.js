function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        imagemMusica.src = musicas[index].img;
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        document.querySelector('.fim-da-musica').textContent = segundosParaMinutos(musica.duration);
    });
}