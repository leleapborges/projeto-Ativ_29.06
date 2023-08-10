
//esta parte mostra as variaveis que são soma, maior e menor
c = 0
soma = 0
maior = 0
menor = 100

var numerosarray = []
//Esta função é chamada quando seleciona uum némero no elemento do HTML com o id"número".
function selecionar(){
    let num = document.getElementById('numeros')
    num = Number(numeros.value);

    if(numerosarray.includes(num)){
        return alert('Esse número já esta inserido');
    }else{
        numerosarray.push(num)
    }

    add(num);
}
//essa função adiciona número na lista de itens 
function add(num1){

    if(num1 == ''){
        returnalert('Insira um número')
    }else if(num1 > 100 || num1 < 0){
        return alert('Insira  números entre 0 e 100')
    }else{
        let item = document.createElement('option');
        item.text = `${num1}`
        item.value = num1;

        var selectitens = document.getElementById('itens');
        selectitens.appendChild(item);

        if(num1 > maior){
            maior = num1
        }if(num1 < menor){
            menor = num1
        }

        c++
        soma = soma + num1
    }
}
//Calcula a media e os numeros inseridos e dividindo a soma pela quantidade de números.
function finalizar(){
    media = soma / c
    resposta =  document.getElementById('resposta');

    resposta.innerHTML += `<br>Você inseriu ${c} números</br>`;
    resposta.innerHTML += `<br>A soma deles é ${soma}</br>`;
    resposta.innerHTML += `<br>O maior número é ${maior}</br>`;
    resposta.innerHTML += `<br>O menor número é ${menor}</br>`;
    resposta.innerHTML += `<br>A média é ${media}</br>`;
    console.log(numerosarray)
}