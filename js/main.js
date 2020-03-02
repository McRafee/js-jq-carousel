/*
    SCOPO DEL GIOCO:
    Sulla base di quanto visto a lezione, replicare la logica dello slideshow
    per animare il click sinistro. Logica identica a quella che abbiamo visto
    insieme ma senso invertito.
    Timing Functions:
    Usiamo una delle due o entrambe per gestire l’autoplay
    ----> 1 riga di codice.
    Poi però da qui cercate di immaginare voi qualche scenario possibile nel
    quale il vostro slideshow vi piacerebbe si comportasse in un certo modo.
    Vi faccio qualche esempio:
    bloccare la ripetizione dopo qualche decina di secondi
    blocco al mouseenter ---- sblocco al mouseleave
    Tasto Pausa ---- Tasto Play
    Insomma divertitevi un po’ a giocarci e a indagare.
    BONUS: Gestire il click su un pallino che mi sposta alla slide
    corrispondente.

*/


$(document).ready(function() {

    // Invoco le funzioni per cambiare slide

    $('.next').click(nextSlide);

    $('.prev').click(prevSlide);

    $('.player-nav .fa-play').click(goNext);

    $('.player-nav .fa-stop').click(stopNext);

    $('.images').mouseenter(stopNext);

    $('.images').mouseleave(goNext);

    function goNext() {
        var next = setInterval(nextSlide, 2000);
        return next;
    }
    var goNext = goNext();
    setTimeout(stopNext, 20000);

    function stopNext() {
    clearInterval(goNext);
    }


    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // function myStopFunction(myVar, time) {
    //     setTimeout(clearInterval(myVar), time);
    // }

});
