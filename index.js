document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fruitForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        const numberInput = document.getElementById('numberInput').value;
        const number = parseInt(numberInput, 10);

        let fruit;

        switch (number) {
            case 1:
                fruit = 'Apple';
                break;
            case 2:
                fruit = 'Banana';
                break;
            case 3:
                fruit = 'Cherry';
                break;
            case 4:
                fruit = 'Date';
                break;
            case 5:
                fruit = 'Elderberry';
                break;
            default:
                fruit = 'Invalid number. Please enter a number between 1 and 5.';
        }

        result.textContent = fruit;
    });
});