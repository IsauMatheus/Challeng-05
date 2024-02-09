//Elementos selecionados para devidas funções e eventos

//Primeiro input selecionado
let input = document.querySelector("input")
//Segundo elemento
let inputI = document.getElementById("numero2")
//Terceiro elemento
let inputII = document.getElementById("numero3")
//Quarto elemento
let inputIII = document.getElementById("numero4")
//Quinto elemento
let inputIV = document.getElementById("numero5")

//Funcao do primeiro elemento
function clicouEnter (e){
    if(e.key == "Enter"){
        alert("Salvo!")
        input.disabled = true
    }
}
function clicou (e){
    input.disabled = false
}
input.addEventListener('keyup', clicouEnter )

//Funcao do Segundo elemento
function clicouEnterII (r){
    if(r.key == "Enter"){
        alert("Salvou")
        inputI.disabled = true
    }
}
function clicou2 (){
    inputI.disabled = false
}
inputI.addEventListener('keyup', clicouEnterII)

//Funcao do terceiro elemento
function clicouEnterIII (r){
    if(r.key == "Enter"){
        alert("Salvou")
        inputII.disabled = true
    }
}
function clicou3 (){
    inputII.disabled = false
}
inputII.addEventListener('keyup', clicouEnterIII)

//Funcao do quarto elemento
function clicouEnterIV (r){
    if(r.key == "Enter"){
        alert("Salvou")
        inputIII.disabled = true
    }
}
function clicou4 (){
    inputIII.disabled = false
}
inputIII.addEventListener('keyup', clicouEnterIV)


function clicouEnterVI (r){
    if(r.key == "Enter"){
        alert("Salvou")
        inputIV.disabled = true
    }
}
function clicou5 (){
    inputIV.disabled = false
}
inputIV.addEventListener('keyup', clicouEnterVI)
