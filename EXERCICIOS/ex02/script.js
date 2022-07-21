function verificar(){
    var date = new Date();
    var ano = data.GetFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
    }
}