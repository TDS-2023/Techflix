function Avaliar(estrela) {

    var url = window.location;

    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var avaliacao = 0;

    s1.src = "../Img/star0.png";
    s2.src = "../Img/star0.png";
    s3.src = "../Img/star0.png";
    s4.src = "../Img/star0.png";
    s5.src = "../Img/star0.png";


    // ESTRELA 1
    if (estrela >= 1) {
        s1.src = "../Img/star1.png";
        avaliacao = 1;
    }

    //ESTRELA 2
    if (estrela >= 2) {
        s2.src = "../Img/star1.png";
        avaliacao = 2;
    }

    //ESTRELA 3
    if (estrela >= 3) {
        s3.src = "../Img/star1.png";
        avaliacao = 3;
    }

    //ESTRELA 4
    if (estrela >= 4) {
        s4.src = "../Img/star1.png";
        avaliacao = 4;
    }

    //ESTRELA 5
    if (estrela == 5) {
        s5.src = "../Img/star1.png";
        avaliacao = 5;
    }

    document.getElementById("rating").innerHTML = avaliacao;

}
