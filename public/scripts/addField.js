//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //dupplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. que campos??
    const fields=newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ""
    })
    fields[0].value = ""
    fields[1].value = ""

    //colocar na pagina.Onde ??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
   