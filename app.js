function calcularIMC() {
    var peso = document.getElementById('divPeso').querySelector('input').value;
    var altura = document.getElementById('divAltura').querySelector('input').value;
    var resultado = document.getElementById('resultado');

    if (peso === '' || altura === '') {
        alert('Por favor, preencha os campos de peso e altura.');
    } else {
        var imc = peso / (altura * altura);

        if (imc < 18.5) {
            resultado.style.backgroundColor = '#9C27B0';
            resultado.innerText = 'Abaixo do Peso: ' + imc.toFixed(2);
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado.style.backgroundColor = '#4CAF50';
            resultado.innerText = 'Peso Normal: ' + imc.toFixed(2);
        } else if (imc >= 25 && imc < 29.9) {
            resultado.style.backgroundColor = '#FFC107';
            resultado.innerText = 'Sobrepeso: ' + imc.toFixed(2);
        } else if (imc >= 30 && imc < 34.9) {
            resultado.style.backgroundColor = '#FF9800';
            resultado.innerText = 'Obesidade Grau I: ' + imc.toFixed(2);
        } else if (imc >= 35 && imc < 39.9) {
            resultado.style.backgroundColor = '#FF5722';
            resultado.innerText = 'Obesidade Grau II: ' + imc.toFixed(2);
        } else {
            resultado.style.backgroundColor = '#795548';
            resultado.innerText = 'Obesidade Grau III (Obesidade Mórbida): ' + imc.toFixed(2);
        }
    }
}
