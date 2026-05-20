function calcular(){
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    
    let resultado = (gasolina/etanol) * 100;

    if (resultado > 11) {
        document.getElementById('status').src= "img/gol.jpg";
    }else{
        document.getElementById('status').src= "img/choro.jpg";
    }

    document.getElementById("mensagem").innerHTML=`Resultado: ${resultado.toFixed(2)}% DE CONVERSÃO DE FINALIZAÇÕES EM GOLS`;

}

function limpar(){
    document.getElementById('status').src='img/chute.jpg';
    document.getElementById('mensagem').innerHTML='';
    document.getElementById('etanol').value='';
    document.getElementById('gasolina').value='';

}

function margem(){
   document.getElementById('status').src='img/messi2013.jpg';
    document.getElementById('mensagem').innerHTML='em 2013, Lionel Messi manteve uma porcentagem de 27.0%, com 222 finalizações e 60 gols, as margens para avaliação são: <br> <br>5%-8% Muito Baixo. <br>9%-12% Regular.<br>  13%-18% Boa. <br>19%-25% Muito Boa.' ;
    document.getElementById('etanol').value='';
    document.getElementById('gasolina').value='';
}