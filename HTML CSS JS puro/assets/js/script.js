/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName
por Seletor: querySelector()
*/


let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let nomeOk = false
let emailOk = false 
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let imagem1 = document.querySelector('#imagem1')
let imagem2 = document.querySelector('#imagem2')
let imagem3 = document.querySelector('#imagem3')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome (){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color= 'red'

    }else{
        txtNome.innerHTML='Nome valido'
        txtNome.style.color= 'green'
        nomeOk = true
    }
}

function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML= "E-mail inválido"
    txtEmail.style.color = 'red'
} else{
    txtEmail.innerHTML= "E-mail valido"
    txtEmail.style.color = 'green'
    emailOk = true
    }
}

function validaAssunto(){
let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 100){
        txtAssunto.innerHTML='Texto muito grande, Digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){

    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }

}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '300px'

}

function imagemZoom1(){
    imagem1.style.width = '70px'
    imagem1.style.height = '70px'
}

function imagemNormal1(){
    imagem1.style.width = '50px'
    imagem1.style.height = '50px'
}

function imagemZoom2(){
    imagem2.style.width = '70px'
    imagem2.style.height = '70px'
}

function imagemNormal2(){
    imagem2.style.width = '50px'
    imagem2.style.height = '50px'
}

function imagemZoom3(){
    imagem3.style.width = '70px'
    imagem3.style.height = '70px'
}

function imagemNormal3(){
    imagem3.style.width = '50px'
    imagem3.style.height = '50px'
}
