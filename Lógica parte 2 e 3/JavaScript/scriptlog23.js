function exercicio1(){
    //Tres variaveis com valores quaisquer
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    //Variavel que calcula a media (media)
    let media = (nota1 + nota2 + nota3)/3
    //Se a media for >= a 6 imprimi aprovado
    if(media >= 6)
    document.getElementById("res1").innerHTML = "Média: " + media + "<br><br> Aprovado"
    //Se não for >= a 6 imprimi reprovado
    else
    document.getElementById("res1").innerHTML = "Média: " + media + "<br><br> Reprovado"
}


function exercicio2(){
    let idade = document.getElementById("idade").value
    //if -> se a condição for true vai executar
    //else if -> se a condição 1 for false, vai executar a condição 2 se for true
    //else -> se as condições forem false, else é executado
    if((idade >= 0) && (idade <= 4)){
        document.getElementById("res2").innerHTML = "Criança"
    }
    if((idade >= 5) && (idade <= 7)){
        document.getElementById("res2").innerHTML = "Infantil A"
    }
    if((idade >= 8) && (idade <= 10)){
        document.getElementById("res2").innerHTML = "Infantil B"
    }
    if((idade >= 11) && (idade <= 13)){
        document.getElementById("res2").innerHTML = "Juvenil A"
    }
    if((idade >= 14) && (idade <= 17)){
        document.getElementById("res2").innerHTML = "Juvenil A"
    }
    if(idade >= 18){
        document.getElementById("res2").innerHTML = "Adulto"
    }
    if(idade < 0){
        document.getElementById("res2").innerHTML = "Inválido"
    }
}


function exercicio3(){
    let valor1 = parseInt(document.getElementById("valor1").value)
    let valor2 = parseInt(document.getElementById("valor2").value)
    let valor3 = parseInt(document.getElementById("valor3").value)

    document.getElementById("res3a").innerHTML = "Valor 1 = " + valor1 + "<br><br> Valor 2 = " + valor2 + "<br><br> Valor 3 = " + valor3

    //if -> se a condição for true vai executar
    //else if -> se a condição 1 for false, vai executar a condição 2 se for true
    //else -> se as condições forem false, else é executado
    if(valor2 > valor1){
        if(valor2 > valor3){
    document.getElementById("res3b").innerHTML = "Maior: " + valor2
        }
    }
    if(valor1 > valor2){
        if(valor1 > valor3){
    document.getElementById("res3b").innerHTML = "Maior: " + valor1
        }
    }
    if(valor3 > valor1){
        if(valor3 > valor2){
    document.getElementById("res3b").innerHTML = "Maior: " + valor3
        }
    }
}


function exercicio4(){
    let numero = parseInt(document.getElementById("numero").value)
    //Se é divisivel por 2 e tem resto 0 é ambiguo (par)!!!
    if(numero % 2 == 0){
        if(numero >= 0){
            document.getElementById("res4").innerHTML = "Número é par e positivo"
        } else{
            document.getElementById("res4").innerHTML = "Número é par e negativo"
        }
    } else if(numero >= 0){
        document.getElementById("res4").innerHTML = "Número é ímpar e positivo"
    } else{
        document.getElementById("res4").innerHTML = "Número é ímpar e negativo"
    }
}


function exercicio5(){
    //Uma variavel de resposta (x) e o ponteiro (i)
    let x = 0
    let i = 0
    //Enquanto (while) i <= 100, se i é divisivel por 2 e tem resto 0 vai somar com x e incrementar 1 no i
    while(i <= 100){
        if(i % 2 == 0){
            //Soma no valor de x o i e incrementa
            x = x + i
            i++
        //Se não for par, somar 1
        }else{
            i++
        }
    } document.getElementById("res5").innerHTML = x
}


function exercicio6(){
    //Uma variavel array (num) e o ponteiro (i)
    let num = []
    let i = 2
    //A sequencia de Fibonacci começa com 0 e depois 1
    num[0] = 0
    num[1] = 1
    //Enquanto i <= 100, calculo da equação de Fibonacci com um incrementador (i++)
    while(i <= 100){
        num[i] = num[i - 2] + num[i - 1]
        i++
    } document.getElementById("res6").innerHTML = num
}


function exercicio7(){
    let calculo = parseInt(document.getElementById("calculo").value)
    //Uma variavel (resultado) que vai armazenar calculo
    let resultado = calculo
    //Formula de fatorial
    //i é um ponteiro, indica a posição, indices, valores que serão usados na conta
    //for é um inicialiazador (i), condição e um incrementador e depois {script}
    for (let i = 1; i < calculo; i++){
        resultado *= i
    }
    document.getElementById("res7").innerHTML = "O fatorial é: " + resultado
}


function exercicio8a(){
    //Uma variavel de resposta (x) e o ponteiro (i)
    let x = 0
    let i = 0
    //do executará o código
    do{
        if(i % 2 == 0){
            x = x + i
            i++
        }else{
            i++
        }
    }
    //Enquanto i <= 100
    while(i <= 100)
    document.getElementById("res8a").innerHTML = x
}

function exercicio8b(){
    //Uma variavel array (num) e o ponteiro (i)
    let num = []
    let i = 2
    //A sequencia de Fibonacci começa com 0 e depois 1
    num[0] = 0
    num[1] = 1
    //do executará o código
    do{
        num[i] = num[i - 2] + num[i - 1]
        i++
    }
    //Enquanto i <= 100
    while(i <= 100)
    document.getElementById("res8b").innerHTML = num
}


function exercicio9(){
    //Uma variavel x de valor 1 e uma variavel booleana primo
    let x = 1
    let primo
    //for é um inicialiazador (i), condição e um incrementador e depois {script}
    //i com valor inciando em 2, condição de i <= 150 e o incrementador
    for(let i = 2; i <= 150; i++){
        //primo sendo true executa o for
        primo = true
        for(x = 2; x < i; x++){
            //Se o resto de x for = a 0 primo false (nao executa)
            if(i % x == 0){
                primo = false
            }
        }
        //Se primo for true imprimi o valor em x
        if(primo){
            document.getElementById("res9").innerHTML += x + " "
        }
    }
}


function exercicio10(){
    //Uma variavel pedindo o valor (calculo), variavel (x) com valor 2 e uma variavel (soma) valor de 0
    let calculo = parseInt(document.getElementById("seriecal").value)
    let x = 2
    let soma = 0
    //for com o ponteiro no 0, condição i < calculo e o incrementador
    for(let i = 0; i < calculo; i++){
        //verifica o valor de x, soma 1/x e depois atribui novamente a x
        soma += 1/x
        //Imprimi a conta
        //(+=) para incementar valor na variavel
        document.getElementById("res10a").innerHTML += "1/" + x + " + "
        //verifica o valor de x, soma 2 e depois atribui novamente a x
        x += 2
    }
    //Imprimi o valor da conta
    document.getElementById("res10b").innerHTML = "O valor da soma é: " + soma
}


function exercicio11(){
    let valor1 = parseInt(document.getElementById("numero1").value)
    let valor2 = parseInt(document.getElementById("numero2").value)
    let valor3 = parseInt(document.getElementById("numero3").value)

    //if -> se a condição for true vai executar
    //else if -> se a condição 1 for false, vai executar a condição 2 se for true
    //else -> se as condições forem false, else é executado
    if(valor2 > valor1){
        if(valor2 > valor3){
    document.getElementById("res11").innerHTML = "Maior: " + valor2
        }
    }
    if(valor1 > valor2){
        if(valor1 > valor3){
    document.getElementById("res11").innerHTML = "Maior: " + valor1
        }
    }
    if(valor3 > valor1){
        if(valor3 > valor2){
    document.getElementById("res11").innerHTML = "Maior: " + valor3
        }
    }
}


function exercicio12(){
    //for para a parte esquerda da tabuada
    for(let tabu1 = 1; tabu1 <= 10; tabu1++){
        //for para a parte direita da tabuada
        for(let tabu2 = 1; tabu2 <= 10; tabu2++)
        //imprimi a tabuada do 1 ate 10
        //(+=) para incrementar valor na variavel
        document.getElementById("res12").innerHTML += tabu1 + " x " + tabu2 + " = " + (tabu1*tabu2) + "<br>"
    }
}
// Tabuada para qualquer numero
//let tabu = parseInt(document.getElementById("tabu").value)
//let x = ""
//for(let i = 1; i <= 10; i++)
//x += tabu + " x " + i + " = " + tabu * i + "<br><br>"
//document.getElementById("res12").innerHTML = x

function exercicio13(){
    //Uma variavel pedindo o valor (valor) e uma variavel para o calculo (soma) valor 0
    let valor = parseInt(document.getElementById("valorint").value)
    let soma = 0
    //for com o ponteiro iniciando no 1, condição i < valor e o incrementador
    for(let i = 1; i <= valor; i++){
        //Soma é o valor da soma mais 1 / o valor incrementado de i
        soma = soma + (1/i)
        //Imprimi a soma
        document.getElementById("res13a").innerHTML += "1/" + i + " + "
    }
    //Imprimi o valor da soma
    document.getElementById("res13b").innerHTML = "O valor da soma é: " + soma
}


function exercicio14(){
    //Uma variavel x com valor 0
    let x = 0
    //for com o ponteiro iniciando no 1, condição i < 100000 e o incrementando 4 na variavel (i)
    for(i = 1; i < 100000; i += 4){
        //formula de Gregory-Leibniz
        x += 4 / i - 4 / (i + 2)
    }
    //imprimi Pi (3.141572) no programa
    document.getElementById("res14").innerHTML = x
}


function exercicio15(){
    let nome = document.getElementById("nome").value
    nome = nome.split(" ")
    //A variavel initials é uma string
    let initials = ""
    for(let i = 0; i < nome.length; i++){
        //Verificar se a primeira letra da string será "d" e depois executará of if
        if(nome[i].charAt(0) == "d"){
            if(nome[i] == "da"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "de"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "di"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "do"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "du"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "das"){
                nome.splice(i, 1)
            }else
            if(nome[i] == "dos"){
                nome.splice(i, 1)
            }
        //Caso não seja "d", fará a execução com e
        }else if(nome[i] == "e"){
            nome.splice(i, 1)
        }
        //Verificando se não é espaço
        if(nome[i].length > 0 && nome[i] !==" "){
            initials += nome[i][0]
        }
    }
    document.getElementById("res15").innerHTML = initials.toUpperCase()
}


function exercicio16(){
    let nome = document.getElementById("nomecont").value
    //A variavel word é uma string
    let word = ""
    for(let i = nome.length - 1; i >= 0; --i){
        word += nome.charAt(i)
    }
    document.getElementById("res16").innerHTML = word.toUpperCase()
}


function exercicio17(){
    let data = new Date(document.getElementById("data").value)
    data = data.toDateString()
    document.getElementById("res17").innerHTML = "Você nasceu em " + data
}


function exercicio18(){
    let string = document.getElementById("string").value
    let vogais = ["a", "e", "i", "o", "u"]
    let tvogal = 0
    for(let vog of string){
        if(vogais.includes(vog)){
            tvogal++
        }
    }
    let espaco = [" "]
    let tespaco = 0
    for(let esp of string){
        if(espaco.includes(esp)){
            tespaco++
        }
    }
        
    document.getElementById("res18").innerHTML = "Aparecem vogais " + tvogal + " vezes <br><br>" + "Aparecem espaços " + tespaco + " vezes"
}


function exercicio19(){
    let tam = document.getElementById("palindromo").value
    let temp = tam.split("").reverse().join("");
    if(tam == temp){
        document.getElementById("res19").innerHTML = tam + ": É um palindromo"
    } else{
        document.getElementById("res19").innerHTML = tam + ": Não é um palindromo"
    }
    
}


function exercicio20(){
    let alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "y", "z", "a", "b", "c"]
    let cript = document.getElementById("criptografia").value
    cript = cript.toLowerCase()
    cript = cript.split("")
    //é o array de resposta
    let res = Array("")
    
    for(let i = 0; i <= cript.length; i++){
        for(let j = 0; j <= 25; j++){
            if(cript[i] == alfa[j]){
                res[i] = alfa[j + 3]
                break
            } else if(cript[i] == " "){
                res[i] = " "
            } else{
                continue
            }
        }
    }
    res = res.join("")

    document.getElementById("res20").innerHTML = res.toUpperCase()
}


function exercicio21(){
    let x = document.getElementById("variavel1").value
    let y = document.getElementById("variavel2").value
    if(x == y){
        document.getElementById("res21").innerHTML = "Iguais"
    }else{
        document.getElementById("res21").innerHTML = "Diferentes"
    }
}


function exercicio22(){
    let x = document.getElementById("decimal").value
    function josias(dec){
        //retorna um numero na base 2 (binario) a partir de um numero na base 10 (decimal)
        return parseInt(dec, 10). toString(2);
    }
    document.getElementById("res22").innerHTML = x + " em binário é: " + josias(x)
}


function exercicio23(){
    let x = document.getElementById("binario").value
    function jose(bin){
        //retorna um numero na base 10 a partir de um numero na base 2
        return parseInt(bin, 2). toString(10);
    }
    document.getElementById("res23").innerHTML = x + " em decimal é: " + jose(x)
}


function exercicio24(){
    let mes = document.getElementById("mes").value
    mes = parseInt(mes)
    switch(mes){
        case 1:
        document.getElementById("res24").innerHTML = "Janeiro"
        break;
        case 2:
        document.getElementById("res24").innerHTML = "Fevereiro"
        break;
        case 3:
        document.getElementById("res24").innerHTML = "Março"
        break;
        case 4:
        document.getElementById("res24").innerHTML = "Abril"
        break;
        case 5:
        document.getElementById("res24").innerHTML = "Maio"
        break;
        case 6:
        document.getElementById("res24").innerHTML = "Junho"
        break;
        case 7:
        document.getElementById("res24").innerHTML = "Julho"
        break;
        case 8:
        document.getElementById("res24").innerHTML = "Agosto"
        break;
        case 9:
        document.getElementById("res24").innerHTML = "Setembro"
        break;
        case 10:
        document.getElementById("res24").innerHTML = "Outubro"
        break;
        case 11:
        document.getElementById("res24").innerHTML = "Novembro"
        break;
        case 12:
        document.getElementById("res24").innerHTML = "Dezembro"
        break;
        default:
        document.getElementById("res24").innerHTML = "Inválido"
    }
}


function exercicio25(){
    let x = document.getElementById("iden1").value
    x = parseInt(x)
    let y = document.getElementById("iden3").value
    y = parseInt(y)
    let z = document.getElementById("iden2").value
    z = parseInt(z)
    switch(z){
        case 0:
        document.getElementById("res25").innerHTML = x + y
        break;
        case 1:
        document.getElementById("res25").innerHTML = x - y
        break;
        case 2:
        document.getElementById("res25").innerHTML = x / y
        break;
        case 3:
        document.getElementById("res25").innerHTML = x * y
        break;
        default:
        document.getElementById("res25").innerHTML = "Inválido"
    }
}


function exercicio26(){
    let genero = document.getElementById("genero").value
    genero = genero.toUpperCase()
    if(genero == "M"){
        genero = "Gênero masculino"
    }
    else if(genero == "F"){
        genero = "Gênero feminino"
    }
    else if(genero == "X"){
        genero = "Gênero nêutro"
    }else{
        genero = "Inválido"
    }
    document.getElementById("res26").innerHTML = genero
}