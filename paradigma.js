const notas = [7, 7.8, 8.3, 6.9, 10, 10]
//criando um codigo com o paradigma imperativo
function calculaMedia(notas){
    let media = 0
    for(let i = 0; i < notas.length; i++){
        media += notas[i] 
    }
    return (media/notas.length).toFixed(2)
}
console.log(`De forma declarativa a media da turma é ${calculaMedia(notas)}`)
//criando um codigo com o paradigma declarativo
    const somar = (a,b) => a+b
    const dividir = (a,b) => a/b
    const mediaTurma = dividir (
        notas.reduce(somar),
        notas.length
    )
    console.log(`De forma declarativa a media da turma é ${mediaTurma.toFixed(2)}`)

//ambos os codigos tem a mesma funcionalidade contudo o segundo codigo torna-se mais funcional e reutilizavel
//o uso do .toFixed nao interfere no exemplo, apenas limita o valor retornado a duas casas após a vírgula

/*---------------------------------------------------------------------------------------------------------------*/
const alunos = [
    {nome:'Ana', nota:9.5},
    {nome:'Bia', nota:7},
    {nome:'Leo', nota:5},
    {nome:'Gui', nota:9},
    {nome:'Rui', nota:6.5},
    {nome:'Lia', nota:8}
]
const aprovados = []
//criando um novo exemplo na versao Procedural
for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 7){
        aprovados.push(alunos[i])
    }
}
console.log(aprovados)

// recriando o algoritmo anterior de forma funcional temos: 

const estaAprovado = aluno => aluno.nota >= 7
const aprovaados = alunos.filter(estaAprovado)
console.log(aprovaados)

 
