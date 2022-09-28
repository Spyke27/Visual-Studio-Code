function limpar (){
    document.querySelector('h1').classList.remove('azul');
    document.querySelector('h1').classList.remove('vermelho');
    document.querySelector('h1').classList.remove('verde');
}
function vermelho() {
    limpar();
    document.querySelector('h1').classList.add('vermelho');
}
function azul() {
    limpar();
    document.querySelector('h1').classList.add('azul');
}
function verde() {
    limpar();
    document.querySelector('h1').classList.add('verde');
}