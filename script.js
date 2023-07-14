
window.addEventListener('load', function() {
    alert('Ciao! In questa copia non ho collegato nessun link/tasto. Ho invece aggiunto la particolarità di poter scegliere come visualizzare le immagini dei film (carosello o griglia)');

  });
  

// sezione carosello in mezzo alla pag

window.addEventListener('scroll', function(){
    // definisco carosello
    let caroselli = document.getElementsByClassName('carosello')
    // definisco la metà dello schermo
    let altezza = window.innerHeight
    // definisco la posizione esatta metà schermo

    let opacity = document.getElementsByClassName('op-6')

    // regolo la metà dello schermo in base alle 3 risoluzioni per correggere il priblema che la prima riga se tengo il 50% preciso non entra ciclo sotto
    let altezza2 = 0;
    
    if (window.innerWidth > 575 && window.innerWidth < 991){
        altezza2 = ((altezza / 100) * 40)
        console.log('medio');
    } if (window.innerWidth < 576) {
        altezza2 = ((altezza / 100) * 42)
        console.log('piccolo');
    } if (window.innerWidth > 991){
        altezza2 = ((altezza / 100) * 45)
        console.log('grande');
    }

    let posizione = window.scrollY + altezza2

    for (let index = 0; index < caroselli.length; index++) {
        // seleziono il carosello iterato in questo momento
        let carosello = caroselli[index]
        // posizione cima del carosello 
        let cPosizione = carosello.offsetTop
        // altezza del carosello
        let cAltezza = carosello.offsetHeight

 
        if (posizione >= cPosizione && posizione <= cAltezza + cPosizione){

            carosello.classList.add('scaleCarosello');
            carosello.classList.remove('op-6')

        } else {

        carosello.classList.remove('scaleCarosello');
        carosello.classList.add('op-6')


        }
        
    }

  }
)


// sezione barra di ricerca

function search() {
    let searchWidth = document.querySelector('#searchBar')
    let buttonSearch = document.querySelector('#searchButton')


    searchWidth.classList.toggle('customSearch')
    searchWidth.classList.toggle('border-none')
    buttonSearch.classList.toggle('end-0')
    buttonSearch.classList.toggle('searchActive')
}

function body(){

    console.log('body');
    let searchWidth = document.querySelector('#searchBar')
    let buttonSearch = document.querySelector('#searchButton')


    searchWidth.classList.add('customSearch')
    buttonSearch.classList.add('end-0')
    buttonSearch.classList.remove('searchActive')

}



// sezione visione versioni caroselli

let caroselli = document.querySelector('#caroselli')
let grid = document.querySelector('#grid')

let tastoCaroselli = document.querySelector('#vistaCaroselli')
let tastoGrid = document.querySelector('#vistaGrid')

tastoCaroselli.classList.add('scaleCaroselli')

function vistaCaroselli(){

    if (caroselli.classList.contains('d-none')){

        caroselli.classList.remove('d-none')
        grid.classList.add('d-none')

        tastoCaroselli.classList.add('scaleCaroselli')
        tastoGrid.classList.remove('scaleCaroselli')

    } else {

        caroselli.classList.add('d-none')
        grid.classList.remove('d-none')

        tastoCaroselli.classList.remove('scaleCaroselli')
        tastoGrid.classList.add('scaleCaroselli')

    }
}
function vistaGrid(){

    if (grid.classList.contains('d-none')){

        grid.classList.remove('d-none')
        caroselli.classList.add('d-none')

        tastoGrid.classList.add('scaleCaroselli')
        tastoCaroselli.classList.remove('scaleCaroselli')

    } else {

        grid.classList.add('d-none')
        caroselli.classList.remove('d-none')

        tastoGrid.classList.remove('scaleCaroselli')
        tastoCaroselli.classList.add('scaleCaroselli')

    }
}