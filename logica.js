// Variavel que armazena o saldo inicial da conta
let saldo=0;

//função para atualizar o saldo na tela

function atualizarSaldo(){
    //selecionar o elemnte do saldo e atualizar o texto 
    document.getElementById('saldo').textContent=saldo.toFixed(2)
}
function depositar(){
    // obtem o valor digitado pelo usuario e converte para numero decimal
    valor=parseFloat(document.getElementById('valor').value)
    //verifica se o valor é valido (maior que 0 e numerico)
    if(isNaN(valor)||valor <=0){
        // Exibe alerta se o valor for invalido
        alert("Por favor Insira um valor Valido")
        return //Interrompe a execução da função 
    }
    //adiciona saldo ao valor
    saldo+=valor
    //atualiza o saldo na tela
    atualizarSaldo()

    //exibir mensagem confirmando o deposito
    console.log('Deposito de R$'+valor.toFixed(2)+' as '+formatDate(new Date,'dma-dh'))
    alert("Ta podendo né\n R$"+valor.toFixed(2)+" adicionado a conta com sucesso!!")
}
function sacar(){
    valor=parseFloat(document.getElementById('valor').value)
    if(isNaN(valor)||valor <=0){
        // Exibe alerta se o valor for invalido
        alert("Por favor Insira um valor Valido")
        return //Interrompe a execução da função 
    }
    if(valor>saldo){
        alert('Tentando roubar ein espertinho!!!\n Saldo insuficiente')
        return
    }
    saldo-=valor
    atualizarSaldo()
    console.log('Saque de R$'+valor.toFixed(2)+' as '+formatDate(new Date,'dma-dh'))
    alert('R$'+valor+' sacado com sucesso')
}



function letsGoGambling(){
    valor=parseFloat(document.getElementById('valor').value)
    if(isNaN(valor)||valor <=0){
        // Exibe alerta se o valor for invalido
        alert("Por favor Insira um valor Valido")
        return //Interrompe a execução da função 
    }
    if(valor<=saldo){
    a=((Math.random())*100).toFixed(0)
    if (a>80){
        saldo+=valor*2
        alert('Win Win Win')
        console.log('Vitoria '+'R$'+(valor*2).toFixed(2)+' as '+formatDate(new Date,"dma-dh"))
        atualizarSaldo()
        return
        } else{
            saldo-=valor
            console.log('Derrota, R$'+valor.toFixed(2)+' perdidos em uma aposta as '+formatDate(new Date,'dma-dh'))
            atualizarSaldo()
            return
        }
    }
    else{
        alert('Saldo insuficiente')
        return
    }
}
function formatDate(dDate, sMode) {
    var today = dDate;
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    const horas = today.getHours();
    const minutos = today.getMinutes();
    const segundos = today.getSeconds();

    const hhmmmss = [horas, minutos, segundos].join(':');
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (sMode + "" == "") {
        sMode = "dd/mm/yyyy";
    }
    if (sMode == "yyyy-mm-dd") {
        return yyyy + "-" + mm + "-" + dd + "";
    }
    if (sMode == "dd/mm/yyyy") {
        return dd + "/" + mm + "/" + yyyy;
    }
    if (sMode == "yyyymmdd") {
        return yyyy.toString() + mm.toString() + dd.toString()
    }
    if (sMode == "dma-dh") {
        return dd +'/'+mm+'/'+yyyy+' '+hhmmmss
    }
}
