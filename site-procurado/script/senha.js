var tSenha, senha
senha = "gabriel100sapato"
if (!localStorage.getItem("logado")){
while(tSenha !== senha){
    tSenha = window.prompt(`DIGITE A SENHA:`)
    tSenha !== senha ? window.alert(`SENHA INCORRETA!`) : localStorage.setItem("logado",true) 
}}