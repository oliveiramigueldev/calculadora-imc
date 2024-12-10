document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
            return;
        }

        const imc = weight / (height * height);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc < 25) {
            classification = 'Peso normal';
        } else if (imc < 30) {
            classification = 'Sobrepeso';
        } else if (imc < 35) {
            classification = 'Obesidade Grau I';
        } else if (imc < 40) {
            classification = 'Obesidade Grau II';
        } else {
            classification = 'Obesidade Grau III';
        }

        resultDiv.textContent = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classification}`;
    });
});

