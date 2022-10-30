function inserir(num){
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;

}

function limpar(){
    document.getElementById('res').innerHTML = ""  

}

function voltar(){  
    let resultado = document.getElementById('res').innerHTML
    document.getElementById('res') = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('res').innerHTML
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        document.getElementById('res').innerHTML = 'Nada...'
    }
}