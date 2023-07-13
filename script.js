window.addEventListener('scroll', function(){
    // definisco carosello
    let caroselli = document.getElementsByClassName('carosello')
    // definisco la metà dello schermo
    let altezza = window.innerHeight
    // definisco la posizione esatta metà schermo


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

        } else {

        carosello.classList.remove('scaleCarosello');

        }
        
    }

  }
)

function search() {
    let searchWidth = document.querySelector('#searchBar')
    let buttonSearch = document.querySelector('#searchButton')


    searchWidth.classList.toggle('customSearch')
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