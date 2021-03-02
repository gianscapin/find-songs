import * as UI from './interfaz.js';
import API from './api.js';


console.log(UI);

UI.formFind.addEventListener('submit', findSong)



function findSong(e){
    e.preventDefault();

    clearHTML();

    // Obtener datos del form

    const artist = document.getElementById('artista').value;
    const song = document.getElementById('cancion').value;

    if(artist == '' || song == ''){
        UI.divMessages.textContent = 'ERROR, todos los campos son obligatorios.';
        UI.divMessages.classList.add('error');


        setTimeout(()=>{
            UI.divMessages.textContent = '';
            UI.divMessages.remove('error');
        },3000);

        return;
    }

    const search = new API(artist,song);
    console.log(artist);
    console.log(song);

    search.consultAPI();
}

function clearHTML(){
    UI.headingResult.textContent = '';
    UI.divResult.textContent = '';
}