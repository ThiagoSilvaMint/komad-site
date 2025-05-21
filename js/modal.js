const modal = document.querySelector("#modal")
const pictures = document.querySelectorAll("#galeria img")
const body = document.querySelector("#body")

pictures.forEach(picture => {
    picture.addEventListener("click", openModal);
});

function openModal(e) {
    const imgSrc = e.target.src

    modal.replaceChildren()

    const closeBtn = document.createElement('i');
    closeBtn.classList.add('ri-close-large-line');
    closeBtn.addEventListener("click", closeModal); 
    modal.appendChild(closeBtn);

    const modalImg = document.createElement('img');
    modalImg.setAttribute('src', imgSrc);
    modal.appendChild(modalImg);

    modal.classList.add('active');
    body.classList.add('hidden');
}

function closeModal() {
    modal.classList.remove('active');
    body.classList.remove('hidden');
}