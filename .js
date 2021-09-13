 let pessoa = {
    nome: "vinicius",
    idade: 21,
    altura:1.80
}
let listaCompras= [
    "pao", "presunto","queijo"
]

//let json = JSON.stringify(pessoa);
//let outrojson = JSON.parse(json);
let meuArray = JSON.stringify(listaCompras);
let outroArrey = JSON.parse(meuArray);

console.log(outroArrey) 
/* let livro = {
    texto: 'meu livro',
    numero: 16,
    booleano:true,
  
}
let json = JSON.stringify(livro); */
