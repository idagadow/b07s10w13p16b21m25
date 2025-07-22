window.addEventListener("load", () => {
    const header = document.getElementById("header")
    header.classList.toggle("disappear");
    const image = document.getElementById("image")
    image.classList.toggle("appeared");
    const text = document.getElementById("text")
    text.classList.toggle("appeared");
})

function moveEnvelope() {
    const envelope = document.getElementById("envelope")
    envelope.classList.toggle("moved");
    const flap = document.getElementById("flap");
    flap.classList.toggle("moved");
    const letter = document.getElementById("letter");
    letter.classList.toggle("moved");
    const star1 = document.getElementById("star1");
    star1.classList.toggle("moved");
    const star2 = document.getElementById("star2");
    star2.classList.toggle("moved");
    const star3 = document.getElementById("star3");
    star3.classList.toggle("moved");
    const star4 = document.getElementById("star4");
    star4.classList.toggle("moved");
    const star5 = document.getElementById("star5");
    star5.classList.toggle("moved");
    const star6 = document.getElementById("star6");
    star6.classList.toggle("moved");
    const star7 = document.getElementById("star7");
    star7.classList.toggle("moved");
    const star8 = document.getElementById("star8");
    star8.classList.toggle("moved");
    const seal = document.getElementById("seal");
    seal.classList.toggle("moved");
  }