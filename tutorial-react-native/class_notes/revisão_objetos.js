var idade = 10

let escolha = "email"

const user = {
    nome: "Gabriel",
    email: "gabriel@gmail.com",
    idade: 19,
    "sobre nome": "Melo" // Propriedade com espaço, deve ser acessada com colchetes
}

console.log(user.nome) // Gabriel
console.log(user["nome"])  // Gabriel // Acessando propriedade usando colchetes, útil para propriedades com caracteres especiais ou espaços

console.log(user["sobre nome"]) // Melo  // Acessando propriedade com espaço usando colchetes
 
console.log(user[escolha]) // Acessando propriedade usando variável, resultado: "gabriel@gmail.com"

const props = { // Criação de um objeto props
    avatar:"https://github.com/GabrielMeloIF.png",
    name: "Gabriel Melo",
    email: "gabriel@gmail.com"
}

//const avatar = props.avatar
//const name = props.name
//const email = props.email

const {avatar, email} = props // Desestruturação de objetos

console.log(avatar) // "https://github.com/GabrielMeloIF.png"
console.log(email) // "gabriel@gmail.com"