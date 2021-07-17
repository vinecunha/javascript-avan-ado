//pegar input para ver se a pessoa deseja escolher por categoria
// se sim, mostra as categorias disponíveis e pergunta qual categoria escolhe
//se nao, mostra todos os livros em ordem crescente pela qtd de pag

const livros = require('./database') //busca o BD

const readline = require('readline-sync') // método para ler a entrada do usuario

const entradaInicial = readline.question('Deseja buscar um livro? S/N') //pergunta ao usuario e grava na variavel

if (entradaInicial.toLocaleUpperCase() === "S"){ // if positivo
    console.log('Essas são as categorias disponíveis: ') //mensagem
    console.log('Categoria 1, Categoria 2') //mostrando as categorias

    const entradaCategoria = readline.question('Qual categoria voce escolhe?') // pergunta ao usuario e grava na variavel

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) //ordena o livro pela categoria exatamente que o usuário escolheu
    
    console.table(retorno) //retorna o resultado ordenado e mostra em formato de tabela

}else{ //if negativo
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas) //ordena verificando os tres números da qtd de pagina, para n ter erro
    console.log('Essas são todos os livros disponíveis: ') // mensagem
    console.table(livrosOrdenados) // retorna o resultado ordendado e mostra em formato de tabela
}