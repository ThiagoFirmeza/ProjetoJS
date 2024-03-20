//Função para calcular o IMC 
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);
    return { imc, classificacao };
}

//Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

//Array com os dados dos pacientes
let arrayNomes = ['Thiago', 'Leticia', 'Fernando', 'Talizze', 'Guilherme', 'Victor', 'João', 'Luiz', 'Ryan', 'Enzo', 'Maria Eduarda', 'Ana Luiza', 'Theo', 'Maria Luiza', 'Alice'];
let arrayPesos = [52, 57, 75, 60, 62, 65, 65, 100, 78, 70, 58, 50, 48, 45, 53];
let arrayAlturas = [1.60, 1.59, 1.64, 1.52, 1.65, 1.75, 1.65, 1.80, 1.63, 1.70, 1.60, 1.58, 1.58, 1.55, 1.62];
let arrayResultados = [];

//For para calcular o IMC de cada paciente e armazenar
for (let x = 0; x < arrayNomes.length; x++) {
    const nome = arrayNomes[x];
    const peso = arrayPesos[x];
    const altura = arrayAlturas[x];
    const { imc, classificacao } = calcularIMC(peso, altura);

    arrayResultados.push({
        nome,
        peso,
        altura,
        imc: imc.toFixed(2),
        classificacao,
    });
}

//Função para exibir os dados de cada paciente
function resultados() {
    arrayResultados.forEach((paciente, indice) => {
        console.log(`
            - Nome: ${paciente.nome}
            - Altura: ${paciente.altura} m
            - IMC: ${paciente.imc}
            - Diagnóstico: ${paciente.classificacao}
        `);
    });
}

resultados();