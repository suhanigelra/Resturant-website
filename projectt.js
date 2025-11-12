// Scroll to Food Menu
function exploreMenu() {
    const menuSection = document.getElementById('food-menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// Filter food by name
function filterFood() {
    const input = document.getElementById('searchFood').value.toLowerCase();
    const foodCards = document.getElementById('foodItems').getElementsByClassName('food-card');

    for (let i = 0; i < foodCards.length; i++) {
        const foodName = foodCards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (foodName.includes(input)) {
            foodCards[i].style.display = '';
        } else {
            foodCards[i].style.display = 'none';
        }
    }
}

// Book table form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const people = document.getElementById('people').value;
    const date = document.getElementById('date').value;

    if (!name || !people || !date) {
        alert("Please fill all fields to book a table!");
        return false;
    }

    alert(`Thank you ${name}, your table for ${people} people has been booked on ${date}.`);
    return true;
}
// Order food function
function orderFood(foodName) {
    alert(`You have ordered: ${foodName}`);
}
