/*** Criando variavel o que o usuário digitar ***/
const heroName = document.querySelector('#hero_name')

/***Selecionando o botão */
const botao = document.querySelector('#searchButton')

/**Selecionando o campo da imagem */
let foto = document.querySelector('#foto')

/**Selecionando o campo onde vai ser descrito as informações do heroi */
let texto = document.querySelector('#texto')

/**Criando padrão para validar a entrada */
var regExp = /^([a-zA-Z]+\s[a-zA-Z]+)+$|^[a-zA-Z]+-[a-zA-Z]+$|^[a-zA-Z]+$/gi;
/*Funçao que recebe o valor que o usuário digita, percorre o json com nome e id dos
herois, verificando se o valor corresponde a algum nome na lista. Em caso positivo,
retorna o id dos herois chamando a função algumacoisa*/

const outracoisa = (a) => {
    fetch('js/herois.json')
    .then(res => res.json())
    .then(herois => {
    const h1 = Object.entries(herois)
    let number = 0
    h1.map( e => {if(e[0]== a){
        number = e[1]
        algumacoisa(number)
    }
    })
    })
}

/**Chama a função outracoisa ao botão ser clicado */
botao.addEventListener('click', function() {
    var valor1 = heroName.value.split('')
    let novovalor = ""
    valor1.map((element, index, valor1) =>{
        if(index === 0){
            novovalor += element.toUpperCase()
        }else if(valor1[index-1] === ' '){
            novovalor += element.toUpperCase()
        }else{
            novovalor += element
        }

        })
    if(regExp.test(novovalor) === true){
        outracoisa(novovalor)
    }
    else{
        alert('Valor inválido, tenta de novo? Você pode digitar algo como "Super man" ou "A-Bomb" ou ainda "Batman". Valores como "Homem Aranha 2" não funcionam, beleza?')
    }
})

/**Passa o id recebido para a url da api, e a retorna */
const algumacoisa = (number) => { 
    
    fetch(`http://www.superheroapi.com/api.php/2700278850112813/${number}/`)
    .then(res => res.json())
    .then(heroi => {
        
        texto.innerHTML = 
        `<div class="heroInfo">
            <ul class="infoList">
            <h5>${heroi.name}</h5>
            <li>Powerstats:</li>
            <li>Intelligence: ${heroi.powerstats.intelligence}</li>
            <li>Strength: ${heroi.powerstats.strength} </li>
            <li>Speed: ${heroi.powerstats.speed}</li>
            <li>Durability: ${heroi.powerstats.durability}</li>
            <li>Power: ${heroi.powerstats.power}</li>
            <li>Combat: ${heroi.powerstats.combat}</li>
            <li>Biography:	</li>
            <li>Full-name: ${heroi.biography["full-name"]}</li>
            <li>Alter-egos: ${heroi.biography["alter-egos"]}</li>
            <li>Place-of-birth: ${heroi.biography["place-of-birth"]}</li>
            <li>First-appearance:	${heroi.biography["first-appearance"]}</li>
            <li>Alignment: ${heroi.biography.alignment}</li>
            <li>Appearance:</li>
            <li>Gender: ${heroi.appearance.gender}</li>
            <li>Race: ${heroi.appearance.race}</li>
            <li>Height: ${heroi.appearance.height[1]}</li>
            <li>Weight: ${heroi.appearance.weight[1]}</li>
            <li>Work:	        </li>
            <li>Occupation: ${heroi.work.occupation}</li>
            <li>Base:	${heroi.work.base}</li>
            <li>Connections:	</li>
            <li>Group-affiliation: ${heroi.connections["group-affiliation"]}</li>
            <li>Relatives: ${heroi.connections.relatives}</li>
            </ul>
        </div>`

                            
                           
        foto.innerHTML = `<div class="heroImage" id="foto">
                            <img src="${heroi.image.url}" alt="">
                          </div>`
        
        
    }) 
}
