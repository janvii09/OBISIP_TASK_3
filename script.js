function computeTemp(event) {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) return;

    const id = event.target.id;

    let celsius, fahrenheit, kelvin;

    if (id === "Celsius") {
        celsius = value;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (id === "Fahrenheit") {
        fahrenheit = value;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (id === "Kelvin") {
        kelvin = value;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('Celsius').value = celsius.toFixed(2);
    document.getElementById('Fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('Kelvin').value = kelvin.toFixed(2);
}
