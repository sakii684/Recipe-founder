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
    },

    // extra recipies added
    {
        name: "Butter Chicken",
        ingredients: [
            { name: "Chicken", category: "Meat" },
            { name: "Butter", category: "Dairy" },
            { name: "Tomato puree", category: "Vegetables" },
            { name: "Cream", category: "Dairy" },
            { name: "Garam masala", category: "Spices" },
            { name: "Onions", category: "Vegetables" },
            { name: "Garlic", category: "Vegetables" },
            { name: "Ginger", category: "Vegetables" }
        ],
        instructions: "Marinate chicken in yogurt and spices. Cook onions, garlic, and ginger in butter, add tomato puree, and simmer. Add marinated chicken, cook until tender, and finish with cream.",
        image: "butterchicken.jpg",
        cuisine: 'Indian',
        prepTime: "1 hr"
    },
    {
        name: "Palak Paneer",
        cuisine: "Indian",
        prepTime: "30 mins",
        ingredients: [
            { name: "Spinach", category: "Vegetables" },
            { name: "Paneer", category: "Dairy" },
            { name: "Onions", category: "Vegetables" },
            { name: "Garlic", category: "Vegetables" },
            { name: "Ginger", category: "Vegetables" },
            { name: "Cream", category: "Dairy" },
            { name: "Spices", category: "Spices" }
        ],
        instructions: "Blanch spinach and blend into a puree. Cook onions, garlic, and ginger, add spices, and stir in spinach and paneer. Finish with cream.",
        image: "PalakPaneer.jpg"
    },
    {
        name: "Chicken Biryani",
        cuisine: "Indian",
        prepTime: "1.5 hrs",
        ingredients: [
            { name: "Basmati rice", category: "Grains" },
            { name: "Chicken ", category: "Meats" },
            { name: "Onions", category: "Vegetables" },
            { name: "Tomatoes", category: "Vegetables" },
            { name: "Yogurt", category: "Dairy" },
            { name: "Spices", category: "Spices" },
            { name: "Mint", category: "Herbs" }
        ],
        instructions: "Marinate meat with yogurt and spices. Fry onions, add meat, tomatoes, and cook. Layer with partially cooked rice, add water, and cook on low heat until rice is done.",
        image: "ChickenBiryani.jpg"
    },
    {
        name: "Chole Bhature",
        cuisine: "Indian",
        prepTime: "1 hr",
        ingredients: [
            { name: "Chickpeas", category: "Legumes" },
            { name: "Onions", category: "Vegetables" },
            { name: "Tomatoes", category: "Vegetables" },
            { name: "Spices", category: "Spices" },
            { name: "Flour", category: "Grains" },
            { name: "Yogurt", category: "Dairy" },
            { name: "Sugar", category: "Condiments" }
        ],
        instructions: "Soak chickpeas overnight, cook with spices and tomatoes. For bhature, knead dough with flour and yogurt, roll out and deep fry until golden.",
        image: "CholeBhature.jpg"
    },
    {
        name: "Samosa",
        cuisine: "Indian",
        prepTime: "1 hr",
        ingredients: [
            { name: "Potatoes", category: "Vegetables" },
            { name: "Peas", category: "Vegetables" },
            { name: "Spices", category: "Spices" },
            { name: "Flour", category: "Grains" },
            { name: "Oil", category: "Fats" }
        ],
        instructions: "Boil and mash potatoes, mix with peas and spices. Make dough with flour, roll out, fill with potato mixture, and deep fry until golden.",
        image: "Samosa.jpg"
    },
    {
        name: "Aloo Gobi",
        cuisine: "Indian",
        prepTime: "30 mins",
        ingredients: [
            { name: "Potatoes", category: "Vegetables" },
            { name: "Cauliflower", category: "Vegetables" },
            { name: "Onions", category: "Vegetables" },
            { name: "Spices", category: "Spices" },
            { name: "Cilantro", category: "Herbs" }
        ],
        instructions: "Fry onions and spices, add potatoes and cauliflower. Cook until tender and garnish with cilantro.",
        image: "AlooGobi.jpg"
    },
    {
        name: "Tandoori Chicken",
        cuisine: "Indian",
        prepTime: "2 hrs (including marination)",
        ingredients: [
            { name: "Chicken", category: "Meats" },
            { name: "Yogurt", category: "Dairy" },
            { name: "Tandoori masala", category: "Spices" },
            { name: "Lemon juice", category: "Fruits" },
            { name: "Garlic", category: "Vegetables" },
            { name: "Ginger", category: "Vegetables" }
        ],
        instructions: "Marinate chicken in yogurt, tandoori masala, and spices for a few hours. Grill until cooked through.",
        image: "TandooriChicken.jpg"
    },
    {
        name: "Pav Bhaji",
        cuisine: "Indian",
        prepTime: "30 mins",
        ingredients: [
            { name: "Mixed vegetables", category: "Vegetables" },
            { name: "Onions", category: "Vegetables" },
            { name: "Tomatoes", category: "Vegetables" },
            { name: "Butter", category: "Dairy" },
            { name: "Pav bhaji masala", category: "Spices" },
            { name: "Bread rolls", category: "Grains" }
        ],
        instructions: "Boil and mash vegetables. Cook onions and tomatoes, add spices and butter. Serve with buttered bread rolls.",
        image: "PavBhaji.jpg"
    },
    {
        name: "Daal Makhani",
        cuisine: "Indian",
        prepTime: "1 hr",
        ingredients: [
            { name: "Black lentils", category: "Legumes" },
            { name: "Butter", category: "Dairy" },
            { name: "Cream", category: "Dairy" },
            { name: "Tomatoes", category: "Vegetables" },
            { name: "Spices", category: "Spices" }
        ],
        instructions: "Soak lentils overnight. Cook lentils with tomatoes and spices, finish with butter and cream.",
        image: "DaalMakhani.jpg"
    },
    {
        name: "Pani Puri",
        cuisine: "Indian",
        prepTime: "45 mins",
        ingredients: [
            { name: "Semolina", category: "Grains" },
            { name: "Potatoes", category: "Vegetables" },
            { name: "Chickpeas", category: "Legumes" },
            { name: "Pani Puri masala", category: "Spices" },
            { name: "Tamarind", category: "Fruits" },
            { name: "Spices", category: "Spices" }
        ],
        instructions: "Make puris from semolina, deep fry until puffed. Prepare filling with mashed potatoes and chickpeas, serve with spicy tamarind water.",
        image: "PaniPuri.jpg"
    }
       
    
];


let enteredIngredients = [];
let shoppingCart = [];

// List of possible ingredients for suggestions
const allIngredients = [
    'spaghetti', 'ground beef', 'onion', 'garlic', 'tomato sauce',
    'bell pepper', 'broccoli', 'carrot', 'soy sauce',
    'chicken', 'curry powder', 'coconut milk', 'tomato',
    'tortillas', 'lettuce', 'cheese', 'salsa',
    'romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing',
    'rice noodles', 'shrimp', 'peanuts', 'bean sprouts',
    'pie crust', 'eggs', 'cream', 'bacon',
    'milk', 'pepper',
    'butter', 'tomato puree', 'garam masala', 'ginger',
    'spinach', 'paneer', 'spices',
    'basmati rice', 'mint',
    'chickpeas', 'flour', 'sugar',
    'potatoes', 'peas', 'oil',
    'cauliflower', 'cilantro',
    'tandoori masala', 'lemon juice',
    'mixed vegetables', 'pav bhaji masala', 'bread rolls',
    'black lentils',
    'semolina', 'pani puri masala', 'tamarind',"Yogurt"
    
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
// ingredients display

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
// remove ingredient

function removeIngredient(ingredient) {
    enteredIngredients = enteredIngredients.filter(item => item !== ingredient);
    displayIngredients();
    displayRecipes();
}

// function recipies display

function displayRecipes() {
    const recipeResults = document.getElementById('recipe-results');
    const selectedCuisine = document.getElementById('cuisine-filter').value;
    recipeResults.innerHTML = '';

    recipes.forEach(recipe => {
        const matchingIngredients = recipe.ingredients
            .map(ing => ing.name.toLowerCase()) // Ensure ingredient names are compared in lower case
            .filter(ing => enteredIngredients.includes(ing));
        
        const missingIngredients = recipe.ingredients
            .map(ing => ing.name.toLowerCase())
            .filter(ing => !enteredIngredients.includes(ing));
        
        const matchPercentage = Math.floor((matchingIngredients.length / recipe.ingredients.length) * 100);

        // Debugging information
        console.log(`Recipe: ${recipe.name}, Matching: ${matchingIngredients.length}, Missing: ${missingIngredients.length}`);

        // Check if any matching ingredients are found and if cuisine matches
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
            recipeCuisine.textContent = "Cuisine: " + recipe.cuisine;
            const recipePrep = document.createElement('strong');
            recipePrep.textContent = "Prep Time: " + recipe.prepTime;

            // Progress Indicator
            const progressBarContainer = document.createElement('div');
            progressBarContainer.className = 'progress-bar-container';
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = `${matchPercentage}%`;
            progressBar.textContent = `${matchPercentage}% Match...`;
            progressBarContainer.appendChild(progressBar);

            cardFront.appendChild(recipeImage);
            cardFront.appendChild(recipeName);
            cardFront.appendChild(recipeCuisine);
            cardFront.appendChild(recipePrep);
            cardFront.appendChild(progressBarContainer);

            // Back side of card
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardBack.innerHTML = `
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
            cardBack.appendChild(addButton);

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


// added
// function displayRecipes() {
//     const recipeResults = document.getElementById('recipe-results');
//     const selectedCuisine = document.getElementById('cuisine-filter').value;
//     recipeResults.innerHTML = '';

//     recipes.forEach(recipe => {
//         const matchingIngredients = recipe.ingredients
//             .map(ing => ing.name)
//             .filter(ing => enteredIngredients.includes(ing));
//         const missingIngredients = recipe.ingredients
//             .map(ing => ing.name)
//             .filter(ing => !enteredIngredients.includes(ing));
//         const matchPercentage = Math.floor((matchingIngredients.length / recipe.ingredients.length) * 100);

//         if (matchingIngredients.length > 0 && (selectedCuisine === '' || recipe.cuisine === selectedCuisine)) {
//             const recipeDiv = document.createElement('div');
//             recipeDiv.className = 'recipe-item';

//             // Create flip card structure
//             const recipeCard = document.createElement('div');
//             recipeCard.className = 'recipe-card';

//             // Front side of card
//             const cardFront = document.createElement('div');
//             cardFront.className = 'card-front';

//             const recipeImage = document.createElement('img');
//             recipeImage.src = recipe.image;
//             recipeImage.alt = recipe.name;
//             recipeImage.className = 'recipe-image';
//             const recipeName = document.createElement('h3');
//             recipeName.className = 'recipe-name';
//             recipeName.textContent = recipe.name;
//             const recipeCuisine = document.createElement('strong');
//             recipeCuisine.textContent = "Cuisine: " + recipe.cuisine;
//             const recipePrep = document.createElement('strong');
//             recipePrep.textContent = "Prep Time: " + recipe.prepTime;

//             // Progress Indicator
//             const progressBarContainer = document.createElement('div');
//             progressBarContainer.className = 'progress-bar-container';
//             const progressBar = document.createElement('div');
//             progressBar.className = 'progress-bar';
//             progressBar.style.width = `${matchPercentage}%`;
            

//             progressBar.textContent = `${matchPercentage}% Match...`;
//             progressBarContainer.appendChild(progressBar);

//             cardFront.appendChild(recipeImage);
//             cardFront.appendChild(recipeName);
//             cardFront.appendChild(recipeCuisine);
//             cardFront.appendChild(recipePrep);
//             cardFront.appendChild(progressBarContainer);

//             // Back side of card
//             const cardBack = document.createElement('div');
//             cardBack.className = 'card-back';
//             cardBack.innerHTML = `
//                 <p><strong>Instructions:</strong> ${recipe.instructions}</p>
//                 <p><strong>Missing Ingredients:</strong> ${missingIngredients.length > 0 ? missingIngredients.join(', ') : 'None'}</p>
//             `;

//             const addButton = document.createElement('button');
//            addButton.textContent = 'Add Missing to Cart';
//             addButton.className = 'add-to-cart';
//             addButton.onclick = (e) => {
//                 e.stopPropagation();
//                 addToCart(missingIngredients);
//             };
//             cardBack.appendChild(addButton);

//             recipeCard.appendChild(cardFront);
//             recipeCard.appendChild(cardBack);
//             recipeDiv.appendChild(recipeCard);
//             recipeResults.appendChild(recipeDiv);
            

//             // Flip card event listener
//             recipeDiv.addEventListener('click', () => {
//                 recipeCard.classList.toggle('flipped');
//             });
//         }
//     });
// }

// cart function


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
            amazonLink.href = `https://www.amazon.in/s?k=${encodeURIComponent(item)}`;
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
displayRecipes();
displayIngredients();
displayCart();



