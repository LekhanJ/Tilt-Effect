const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    card.style.transform = `rotateX(${offsetY}deg) rotateY(${-offsetX}deg)`
})