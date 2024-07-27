class Smoothie {
    constructor(name, base, fruits, sweetener, note, totalPrice) {
        this.name = name; // Smoothie name
        this.base = base; // Smoothie base
        this.fruits = fruits; // List of fruits
        this.sweetener = sweetener; // Sweetener
        this.note = note; // Additional notes
        this.totalPrice = totalPrice; // Total price of the smoothie
    }

    // Method to describe the smoothie details in HTML format
    describe() {
        return `Name: ${this.name}<br>
                Base: ${this.base}<br>
                Fruits: ${this.fruits.join(', ')}<br>
                Sweetener: ${this.sweetener}<br>
                Additional Notes: ${this.note ? this.note : 'None'}<br>
                Total Price: $${this.totalPrice.toFixed(2)}`;
    }
}

// Function to process the smoothie order
function orderSmoothie() {
    // Get the name value
    const name = document.getElementById('name').value;

    // Get the base value and its price
    const baseElement = document.getElementById('base');
    const base = baseElement.value;
    const basePrice = parseFloat(baseElement.options[baseElement.selectedIndex].dataset.price);

    // Get the selected fruits and their total price
    const fruitsElement = document.getElementById('fruits');
    const fruits = Array.from(fruitsElement.selectedOptions).map(el => el.value);
    const fruitsPrice = Array.from(fruitsElement.selectedOptions).reduce((sum, el) => sum + parseFloat(el.dataset.price), 0);

    // Get the sweetener value and its price
    const sweetenerElement = document.getElementById('sweetener');
    const sweetener = sweetenerElement.value;
    const sweetenerPrice = parseFloat(sweetenerElement.options[sweetenerElement.selectedIndex].dataset.price);

    // Get additional notes
    const note = document.getElementById('note').value;

    // Calculate the total price
    const totalPrice = basePrice + fruitsPrice + sweetenerPrice;

    // Create a Smoothie object
    const smoothie = new Smoothie(name, base, fruits, sweetener, note, totalPrice);

    // Display the smoothie details and total price
    document.getElementById('smoothieOutput').innerHTML = smoothie.describe();
    document.getElementById('totalPrice').innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;

    // Make the output section visible
    document.getElementById('output').classList.remove('hidden');
}

// Function to reset the form and clear the output
function resetForm() {
    // Reset the form fields
    document.getElementById('smoothieForm').reset();

    // Clear the output section
    document.getElementById('smoothieOutput').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = '';

    // Hide the output section
    document.getElementById('output').classList.add('hidden');
}
