//carrossel de filmes
const gap = 25;
const carrossel = document.getElementById("carrossel"),
    direita = document.getElementById("botao_direito"),
    esquerda = document.getElementById("botao_esquerdo");

direita.addEventListener
    ("click", e => {
        carrossel.scrollBy(width + gap, 0);
        if (carrossel.scrollLeft - gap <= 0) {
            esquerda.style.display = "flex";
        }
        else {
            direita.style.display = "flex";
        }
    }
    );
esquerda.addEventListener
    ("click", e => {
        carrossel.scrollBy(-(width + gap), 0);
        if (carrossel.scrollLeft - width - gap <= 0) {
            esquerda.style.display = "none";
        }
        else {
            direita.style.display = "flex";
        }
    }
    );
//carrossel de series
const carrossel2 = document.getElementById("carrossel2"),
    direita2 = document.getElementById("botao_direito2"),
    esquerda2 = document.getElementById("botao_esquerdo2");

direita2.addEventListener
    ("click", e => {
        carrossel2.scrollBy(width + gap, 0);
        if (carrossel2.scrollLeft - gap <= 0) {
            esquerda2.style.display = "flex";
        }
        else {
            direita2.style.display = "flex";
        }
    }
    );
esquerda2.addEventListener
    ("click", e => {
        carrossel2.scrollBy(-(width + gap), 0);
        if (carrossel2.scrollLeft - width - gap <= 0) {
            esquerda2.style.display = "none";
        }
        else {
            direita2.style.display = "flex";
        }
    }
    );

let width = (carrossel.offsetWidth); (carrossel.offsetWidth);