var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();
var saudacao = "";

if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}

if (minutos < 10) {
    minutos = "0" + minutos;
}

console.log("Olá! " + saudacao + ".");
console.log("Agora são " + hora + ":" + minutos);
