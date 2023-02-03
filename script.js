let ps = document.querySelectorAll('p')
let button = document.querySelector('button')
let input = document.querySelector('input')

const search = async ()=>{
    try{
        const data = await fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        const endereco = await data.json()
        if(endereco.erro == true){
            throw 'CEP não encontrado.'
        }
        ps[0].innerText = `Logradouro: ${endereco.logradouro}`
        ps[1].innerText = `Bairro: ${endereco.bairro}`
        ps[2].innerText = `Cidade: ${endereco.localidade}`
    }catch(erro){
        alert(erro)
        console.log(erro)
    }
}

button.addEventListener('click', ()=>{
    if(input.value == false || input.value.length != 8 ){
        alert('Digite um CEP válido.')
    }else{
        search()
    }
})


