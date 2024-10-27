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
        const matchingIngredients = recipe.ingredients.map(ing => ing.name).filter(ing => enteredIngredients.includes(ing));
        const missingIngredients = recipe.ingredients.map(ing => ing.name).filter(ing => !enteredIngredients.includes(ing));

        if (matchingIngredients.length > 0 && (selectedCuisine === '' || recipe.cuisine === selectedCuisine)) {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe-item';

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeImage.className = 'recipe-image';

            const recipeInfo = document.createElement('div');
            recipeInfo.className = 'recipe-info';
            recipeInfo.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <p><strong>Missing Ingredients:</strong> ${missingIngredients.length > 0 ? missingIngredients.join(', ') : 'None'}</p>
            `;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add Missing to Cart';
            addButton.className = 'add-to-cart-button';
            addButton.onclick = () => addToCart(missingIngredients);

            recipeDiv.appendChild(recipeImage);
            recipeDiv.appendChild(recipeInfo);
            recipeDiv.appendChild(addButton);
            recipeResults.appendChild(recipeDiv);
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

document.getElementById('ingredient-input').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const ingredient = event.target.value.trim();
        if (ingredient && !enteredIngredients.includes(ingredient)) {
            enteredIngredients.push(ingredient);
            displayIngredients();
            displayRecipes();
            event.target.value = '';
        }
    }
});

document.getElementById('cuisine-filter').addEventListener('change', displayRecipes);
document.getElementById('clear-cart').addEventListener('click', clearCart);

displayIngredients();
displayCart();
