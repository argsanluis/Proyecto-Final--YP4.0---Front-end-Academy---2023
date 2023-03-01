@@ -15,8 +15,7 @@ function colorAleatorio(){ /* La idea es poder entregar un color diferente en ca*/
function charlemos(){
    let fondo = document.getElementById("bodyID");
    let foot = document.getElementById("footerID")
    fondo.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+')';
    foot.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+')';
    fondo.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+', '+colorAleatorio()+')';
}

const observer = new IntersectionObserver((entries) => {
@@ -33,10 +32,9 @@ const observer = new IntersectionObserver((entries) => {
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const contactame_form = document.getElementById("contactame_form");


contactame_form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const contactame_nombre = contactame_form['contactame_nombre'].value;
@@ -59,6 +57,13 @@ contactame_form.addEventListener('submit', async (e) => {
    .catch((error) => {
        console.error("Error al agregar el documento: ", error);
    });
    alert("Mensaje enviado")
    document.getElementById("contactame_sombra").classList.add('contactame_aparecer-sombra');
    document.getElementById("contactame_alert").classList.add('contactame_aparecer-cartel');
    document.getElementById('bodyID').classList.add('stop')
})

function contactame_cerrar(){
    document.getElementById("contactame_sombra").classList.remove('contactame_aparecer-sombra');
    document.getElementById("contactame_alert").classList.remove('contactame_aparecer-cartel');
    document.getElementById("bodyID").classList.remove("stop");
}
