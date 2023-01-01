function validaNome(){
    var nome = document.querySelector("#username").value
    if(nome.length <= 3 || nome.length == 0){
        window.alert("Nome inválido")
        document.location = "./index.html"
    }else{
        localStorage.setItem("nome", nome)
        document.location = "./paginas/felizanonovo.html"
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
    h1.textContent = txtH1 + " , " + nome + ""
    p.textContent = `${txtP} Lembre-se que você, ${nome}, será sempre um(a) panaca !`
}