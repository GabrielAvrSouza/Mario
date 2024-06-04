

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNobotao() {
    form.style.left = ("50%")
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}




function cliqueiNaMascara() {

    form.style.left = ("-299px")
    form.style.top = ("30%")
    mascara.style.visibility = "hidden"
}