function media(num1, num2, num3){
    var resultado = ((num1 + num2 + num3) / 3).toFixed(1);
    return resultado;
}

num1 = parseFloat(prompt("Insira o valor da primeira nota: "));
num2 = parseFloat(prompt("Insira o valor da segunda nota: "));
num3 = parseFloat(prompt("Insira o valor da terceira nota: "));

if (media(num1, num2, num3) >= 7){
    alert("O aluno foi aprovado!");
    
}else{
    alert("O aluno está de recuperação!");
}
