const recipes = [
    {
        name: 'Spaghetti Bolognese',
        ingredients: [
            { name: 'spaghetti', category: 'Grains' },
            { name: 'ground beef', category: 'Meats' },
            { name: 'onion', category: 'Vegetables' },
            { name: 'garlic', category: 'Spices' },
            { name: 'tomato sauce', category: 'Condiments' }
        ],
        instructions: 'Cook spaghetti. Fry beef with onions and garlic. Add tomato sauce and simmer.',
        image: 'Spaghetti.jpg',
        cuisine: 'Italian',
        prepTime: '30 mins'
    },
    // Add more recipes here as needed
    {
        name: 'Vegetable Stir-fry',
        ingredients: [
            { name: 'bell pepper', category: 'Vegetables' },
            { name: 'broccoli', category: 'Vegetables' },
            { name: 'carrot', category: 'Vegetables' },
            { name: 'soy sauce', category: 'Condiments' },
            { name: 'garlic', category: 'Spices' }
        ],
        instructions: 'Stir-fry vegetables in a pan. Add garlic and soy sauce for flavor.',
        image: 'stirefry.jpg',
        cuisine: 'Asian',
        prepTime: '15 mins'
    },
    {
        name: 'Chicken Curry',
        ingredients: [
            { name: 'chicken', category: 'Meats' },
            { name: 'curry powder', category: 'Spices' },
            { name: 'coconut milk', category: 'Condiments' },
            { name: 'onion', category: 'Vegetables' },
            { name: 'tomato', category: 'Vegetables' }
        ],
        instructions: 'Cook chicken with onions, add curry powder and coconut milk, then simmer with tomatoes.',
        image: 'chicken.jpg',
        cuisine: 'Indian',
        prepTime: '45 mins'
    },
    {
        name: 'Tacos',
        ingredients: [
            { name: 'ground beef', category: 'Meats' },
            { name: 'tortillas', category: 'Grains' },
            { name: 'lettuce', category: 'Vegetables' },
            { name: 'cheese', category: 'Dairy' },
            { name: 'salsa', category: 'Condiments' }
        ],
        instructions: 'Cook beef and season. Place on tortillas with lettuce, cheese, and salsa.',
        image: 'Tacos.jpg',
        cuisine: 'Mexican',
        prepTime: '20 mins'
    },
    {
        name: 'Caesar Salad',
        ingredients: [
            { name: 'romaine lettuce', category: 'Vegetables' },
            { name: 'croutons', category: 'Grains' },
            { name: 'parmesan cheese', category: 'Dairy' },
            { name: 'Caesar dressing', category: 'Condiments' }
        ],
        instructions: 'Toss lettuce with dressing, top with croutons and parmesan.',
        image: 'CaesarSalad.jpg',
        cuisine: 'American',
        prepTime: '10 mins'
    },
    {
        name: 'Pad Thai',
        ingredients: [
            { name: 'rice noodles', category: 'Grains' },
            { name: 'shrimp', category: 'Seafood' },
            { name: 'peanuts', category: 'Nuts' },
            { name: 'soy sauce', category: 'Condiments' },
            { name: 'bean sprouts', category: 'Vegetables' }
        ],
        instructions: 'Stir-fry noodles with shrimp, soy sauce, peanuts, and bean sprouts.',
        image: 'PadThai.jpg',
        cuisine: 'Asian',
        prepTime: '20 mins'
    },
    {
        name: 'Quiche Lorraine',
        ingredients: [
            { name: 'pie crust', category: 'Grains' },
            { name: 'eggs', category: 'Dairy' },
            { name: 'cream', category: 'Dairy' },
            { name: 'bacon', category: 'Meats' },
            { name: 'cheese', category: 'Dairy' }
        ],
        instructions: 'Mix eggs and cream. Pour into pie crust with cooked bacon and cheese, then bake.',
        image: 'Quich Lorraine.jpg',
        cuisine: 'French',
        prepTime: '60 mins'
    },
    {
        name: 'Omelette',
        ingredients: [
            { name: 'eggs', category: 'Dairy' },
            { name: 'milk', category: 'Dairy' },
            { name: 'cheese', category: 'Dairy' },
            { name: 'onion', category: 'Vegetables' },
            { name: 'pepper', category: 'Spices' }
        ],
        instructions: 'Beat eggs and milk, cook in a pan with cheese and onions.',
        image: 'Omellet.jpg',
        cuisine: 'Asian',
        prepTime: '15 mins'
    }
];


let enteredIngredients = [];
let shoppingCart = [];

// List of possible ingredients for suggestions
const allIngredients = [
    'spaghetti', 'ground beef', 'onion', 'garlic', 'tomato sauce', 'bell pepper', 'broccoli', 'carrot', 'soy sauce',
    'chicken', 'curry powder', 'coconut milk', 'tomato', 'tortillas', 'lettuce', 'cheese', 'salsa', 'romaine lettuce',
    'croutons', 'parmesan cheese', 'Caesar dressing', 'rice noodles', 'shrimp', 'peanuts', 'bean sprouts', 'pie crust',
    'eggs', 'cream', 'bacon', 'milk', 'pepper'
];

// Event listener for the ingredient input
document.getElementById('ingredient-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        let ingredient = event.target.value.trim().toLowerCase(); // Convert input to lowercase
        if (ingredient && !enteredIngredients.includes(ingredient)) {
            enteredIngredients.push(ingredient);
            displayIngredients();
            displayRecipes();
            event.target.value = ''; // Clear input field
        }
    }
});

// Add event listener for the enter button
document.getElementById('enter-button').addEventListener('click', () => {
    let ingredient = document.getElementById('ingredient-input').value.trim().toLowerCase(); // Convert input to lowercase
    if (ingredient && !enteredIngredients.includes(ingredient)) {
        enteredIngredients.push(ingredient);
        displayIngredients();
        displayRecipes();
        document.getElementById('ingredient-input').value = ''; // Clear input field
    }
});

function displayIngredients() {
    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = '';
   
    enteredIngredients.forEach(ingredient => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        item.textContent = ingredient;
        item.onclick = () => removeIngredient(ingredient);
        ingredientList.appendChild(item);
    });
}

function removeIngredient(ingredient) {
    enteredIngredients = enteredIngredients.filter(item => item !== ingredient);
    displayIngredients();
    displayRecipes();
}

function displayRecipes() {
    const recipeResults = document.getElementById('recipe-results');
    const selectedCuisine = document.getElementById('cuisine-filter').value;
    recipeResults.innerHTML = '';

    recipes.forEach(recipe => {
        const matchingIngredients = recipe.ingredients
            .map(ing => ing.name)
            .filter(ing => enteredIngredients.includes(ing));
        const missingIngredients = recipe.ingredients
            .map(ing => ing.name)
            .filter(ing => !enteredIngredients.includes(ing));

        if (matchingIngredients.length > 0 && (selectedCuisine === '' || recipe.cuisine === selectedCuisine)) {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe-item';

            // Create flip card structure
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';

            // Front side of card
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            
            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeImage.className = 'recipe-image';
            const recipeName = document.createElement('h3');
            recipeName.className = 'recipe-name';
            recipeName.textContent = recipe.name;
            const recipeCuisine = document.createElement('strong');
            recipeCuisine.textContent ="Cuisine: " + recipe.cuisine;
            const recipePrep = document.createElement('strong');
            recipePrep.textContent = " Prep Time: " +recipe.prepTime;
            cardFront.appendChild(recipeImage);
            cardFront.appendChild(recipeName);
            cardFront.appendChild(recipeCuisine);
            cardFront.appendChild(recipePrep);


            // Back side of card
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back'; 
            const cardContent = document.createElement('div');
            cardContent.className = 'card-Content';
            cardContent.innerHTML = `
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <p><strong>Missing Ingredients:</strong> ${missingIngredients.length > 0 ? missingIngredients.join(', ') : 'None'}</p>
            `; 
            const addButton = document.createElement('button');
            addButton.textContent = 'Add Missing to Cart';
            addButton.className = 'add-to-cart';
            addButton.onclick = (e) => {
                e.stopPropagation();
                addToCart(missingIngredients);
            };
            cardBack.appendChild(cardContent)
            cardBack.appendChild(addButton);

            // Assemble card
            recipeCard.appendChild(cardFront);
            recipeCard.appendChild(cardBack);
            recipeDiv.appendChild(recipeCard);
            recipeResults.appendChild(recipeDiv);

            // Flip card event listener
            recipeDiv.addEventListener('click', () => {
                recipeCard.classList.toggle('flipped');
            });
        }
    });
}



function addToCart(missingIngredients) {
    missingIngredients.forEach(ingredient => {
        if (!shoppingCart.includes(ingredient)) {
            shoppingCart.push(ingredient);
        }
    });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (shoppingCart.length === 0) {
        cartItems.innerHTML = '<li>No items added yet.</li>';
    } else {
        shoppingCart.forEach(item => {
            const cartItem = document.createElement('li');
            const amazonLink = document.createElement('a');
            amazonLink.href = `https://www.amazon.com/s?k=${encodeURIComponent(item)}`;
            amazonLink.target = '_blank';
            amazonLink.textContent = item;
            cartItem.appendChild(amazonLink);
            cartItems.appendChild(cartItem);
        });
    }
}

function clearCart() {
    shoppingCart = [];
    displayCart();
}

// Automation suggestions start
document.getElementById('ingredient-input').addEventListener('input', (event) => {
    let input = event.target.value.toLowerCase().trim();
    showSuggestions(input);
});

function showSuggestions(input) {
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    if (input === '') return;

    const matchedIngredients = allIngredients.filter(ingredient =>
        ingredient.toLowerCase().startsWith(input)
    );

    if (matchedIngredients.length > 0) {
        suggestionsList.style.display = 'block'; // Show suggestions
    } else {
        suggestionsList.style.display = 'none'; // Hide suggestions if no matches
    }

    matchedIngredients.forEach(ingredient => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = ingredient;

        // Add click event to select the suggestion
        suggestionItem.addEventListener('click', () => {
            document.getElementById('ingredient-input').value = ingredient;
            addIngredient(ingredient);
            suggestionsList.innerHTML = ''; // Clear suggestions
            suggestionsList.style.display = 'none'; // Hide suggestions after selection
        });

        suggestionsList.appendChild(suggestionItem);
    });
}

// Hide suggestions on click outside
document.addEventListener('click', (e) => {
    const suggestionsList = document.getElementById('suggestions-list');
    if (!suggestionsList.contains(e.target) && e.target !== document.getElementById('ingredient-input')) {
        suggestionsList.style.display = 'none';
    }
});
// flliiped


document.querySelectorAll('.recipe-item').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.recipe-card').classList.toggle('flipped');
    });
});

// 1


// Event listeners for buttons and filters
document.getElementById('cuisine-filter').addEventListener('change', displayRecipes);
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Initial display
displayIngredients();
displayCart();


