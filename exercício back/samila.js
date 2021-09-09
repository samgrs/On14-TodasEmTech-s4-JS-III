var nota1 = 10;
var nota2 = 9;
var nota3 = 10;

function calculoMedia(x, y, z){
var media = ((x + y + z) / 3).toFixed(1);
console.log(media);
if (media >= 7){
    console.log("O aluno está aprovado!");
}else{
    console.log("O aluno está de recuperação!");
}
}

calculoMedia(nota1, nota2, nota3);