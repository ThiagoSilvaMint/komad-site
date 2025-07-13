const buttons = document.querySelectorAll(".galeria-item > button");
buttons.forEach(button => {
    button.addEventListener("click", toggleActivedButton);
});
const imagesContainer = document.getElementById("galeria-images");

const imagesSrc = {
    "banheiros": [
        "img/banheiros/banheiro1.webp",
        "img/banheiros/banheiro2.webp",
        "img/banheiros/banheiro3.webp",
        "img/banheiros/banheiro4.webp",
        "img/banheiros/banheiro5.webp",
        "img/banheiros/banheiro6.webp"
    ],
    "cozinhas": [
        "img/cozinhas/cozinha1.webp",
        "img/cozinhas/cozinha2.webp",
        "img/cozinhas/cozinha3.webp",
        "img/cozinhas/cozinha4.webp",
        "img/cozinhas/cozinha5.webp",
        "img/cozinhas/cozinha5.webp",
    ],
    "escritorios": [
        "img/escritorios/escritorio1.webp",
        "img/escritorios/escritorio2.webp",
        "img/escritorios/escritorio3.webp",
        "img/escritorios/escritorio4.webp",
        "img/escritorios/escritorio5.webp",
        "img/escritorios/escritorio6.webp",
    ],
    "paineis": [
        "img/paineis/painel1.webp",
        "img/paineis/painel2.webp",
        "img/paineis/painel3.webp",
        "img/paineis/painel4.webp",
        "img/paineis/painel5.webp",
        "img/paineis/painel6.webp",
    ],
    "quartos": [
        "img/quartos/quarto1.webp",
        "img/quartos/quarto2.webp",
        "img/quartos/quarto3.webp",
        "img/quartos/quarto4.webp",
        "img/quartos/quarto5.webp",
        "img/quartos/quarto6.webp",
    ]
}

function addImages() {
    deleteChildren(imagesContainer);

    let activedButton;
    buttons.forEach(button => {
        if (button.classList.contains('active')) {
            activedButton = button.id;
        }
    });

    let images = imagesSrc[activedButton];
    
    images.forEach(image => {
        let newImage = document.createElement('img');
        newImage.src = image;
        imagesContainer.appendChild(newImage);
    });
}

function toggleActivedButton(e) {
    const target = e.target;
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    target.classList.add("active");
    addImages();
}

function deleteChildren(e) {
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

addImages();