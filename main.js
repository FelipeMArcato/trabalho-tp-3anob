function checkPythagorean() {
    const a = parseInt(document.getElementById('a').value, 10);
    const b = parseInt(document.getElementById('b').value, 10);
    const c = parseInt(document.getElementById('c').value, 10);

  
    if (a > 0 && b > 0 && c > 0) {
        if (a * a + b * b === c * c) {
            document.getElementById('result').innerText = `${a}, ${b}, ${c} é uma terna pitagórica.`;
        } else {
            document.getElementById('result').innerText = `${a}, ${b}, ${c} não é uma terna pitagórica.`;
        }
    } else {
        document.getElementById('result').innerText = 'Todos os valores devem ser positivos.';
    }
}
