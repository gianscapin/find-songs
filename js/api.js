import * as UI from './interfaz.js';

class API{
    constructor(artist,song){
        this.artist = artist;
        this.song = song;
    }

    consultAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        fetch(url)
            .then(answer => answer.json())
            .then(result => {

                if(result){
                    UI.headingResult.textContent = `${this.artist} - ${this.song}`;
                    const p = document.createElement('p');
                    p.textContent = result.lyrics;
                    UI.divResult.appendChild(p);
                }else{
                    console.log('no se encontró')
                    UI.divMessages.textContent = 'La canción que buscás no se encontró, probá con otra.';
                    UI.divMessages.classList.add('error');

                    
                }
                
            })
    }


}

export default API;