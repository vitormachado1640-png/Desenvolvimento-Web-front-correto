function soma(){
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    // nao pode deixar console log nos codigos
    // console.log(typeof num1 + typeof num2)
    resp.textContent = num1 + num2
}

function dividir(){
    var num3 = parseFloat(document.getElementById("n3").value)
    var num4 = parseFloat(document.getElementById("n4").value)
    var resp2 = document.getElementById("resposta2")
    // nao pode deixar console log nos codigos
    // console.log(typeof num3 + typeof num4)
    resp2.textContent = num3 / num4
}

function multiplicar(){
    var num5 = parseFloat(document.getElementById("n5").value)
    var num6 = parseFloat(document.getElementById("n6").value)
    var resp3 = document.getElementById("resposta3")
    // nao pode deixar console log nos codigos
    // console.log(typeof num5 + typeof num6)
    resp3.textContent = num5 * num6
}

function subtrair(){
    var num7 = parseFloat(document.getElementById("n7").value)
    var num8 = parseFloat(document.getElementById("n8").value)
    var resp4 = document.getElementById("resposta4")
    // nao pode deixar console log nos codigos
    // console.log(typeof num7 + typeof num8)
    resp4.textContent = num7 - num8
}