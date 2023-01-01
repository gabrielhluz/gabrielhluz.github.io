function validaNome(){
    var nome = document.querySelector("#username").value
    if(nome.length <= 3){
        window.alert("Nome inválido")
        document.location = "./index.html"
    }else{
        var dia = new Date()
        var hora = dia.getHours()
        if(hora < 23){
            document.location = "./paginas/horaerrada.html"
        }else{
            localStorage.setItem("nome", nome)
            document.location = "./paginas/felizanonovo.html"
        }
    }
}
function exibeNome(){
    var nome = localStorage.getItem("nome")
    var title = document.querySelector("#congrTitle")
    var h1 = document.querySelector("#congrName")
    var p = document.querySelector("#congrTexto")
    var txtTitle = title.textContent
    var txtH1 = h1.textContent
    var txtP = p.textContent
    title.textContent = txtTitle +", " + nome
    h1.textContent = txtH1 + " , " + nome
    p.textContent = `${txtP} Lembre-se que você, ${nome.toUpperCase()}, será sempre um(a) panaca !`
}
function exibeHora(){
    var h1 = document.querySelector("#txtHora")
    var dia = new Date()
    var hora = dia.getHours()
    var minutos = dia.getMinutes()
    if(minutos < 10){minutos = String("0"+minutos)}
    h1.textContent = hora + ":" + minutos
}