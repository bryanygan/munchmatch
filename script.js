const foods = [
    { image: "images/image1.png", name: "Burger", description: "Description for Dish 1" },
    { image: "images/image2.png", name: "Pasta", description: "Description for Dish 2" },
    { image: "images/image3.png", name: "Salad", description: "Description for Dish 3" },
    { image: "images/image4.png", name: "Chicken Nuggets", description: "Description for Dish 4" },
];

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
});

let currentIndex = 0;
let likedFoods = [], dislikedFoods = [];

function swipe(direction) {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');

    if (direction === 'left') {
        dislikedFoods.push(foods[currentIndex]);
        currentIndex = (currentIndex - 1 + foods.length) % foods.length;
        updateDislikedFoods();
    } else if (direction === 'right') {
        likedFoods.push(foods[currentIndex]);
        currentIndex = (currentIndex + 1) % foods.length;
        updateLikedFoods();
    }

    updateFoodDisplay(direction);
}

function updateFoodDisplay(direction) {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');

    translation = ''
    if (direction === 'left') {
        translation = 'translateX(-100%)'
    }
    else {
        translation = 'translateX(100%)'
    }

    foodImage.style.transform = translation;
    setTimeout(() => {
        foodImage.src = foods[currentIndex].image;
        dishName.innerText = foods[currentIndex].name;
        description.innerText = foods[currentIndex].description;
        foodImage.style.transform = 'translateX(0)';
    }, 300);
}

function updateLikedFoods() {
    updateFoodPref("likedFood")
}

function updateDislikedFoods() {
    updateFoodPref("dislikedFood")
}

function updateFoodPref(name) {
    const likedFoodsContainer = document.getElementById("likedFoods");

    const dislikedFoodsContainer = document.getElementById("dislikedFoods");

    if (name === "likedFood") {
        likedFoodsContainer.innerHTML = '';
        likedFoods.forEach(food => {
            const foodElement = document.createElement('img');
            foodElement.src = food.image;
            // likedFoodElement.alt = 'Liked Food';
            foodElement.className = name;
            likedFoodsContainer.appendChild(foodElement);
        });
    }
    //dislikedFood

    //THIS CAN BE SIMPLIFIED LATER
    else {
        dislikedFoodsContainer.innerHTML = '';
        dislikedFoods.forEach(food => {
            const foodElement = document.createElement('img');
            foodElement.src = food.image;
            // likedFoodElement.alt = 'Liked Food';
            foodElement.className = name;
            dislikedFoodsContainer.appendChild(foodElement);
        });
    }
}

// function updateLikedFoods() {
//     const likedFoodsContainer = document.getElementById('likedFoods');
//     likedFoodsContainer.innerHTML = '';

//     likedFoods.forEach(food => {
//         const likedFoodElement = document.createElement('img');
//         likedFoodElement.src = food.image;
//         likedFoodElement.alt = 'Liked Food';
//         likedFoodElement.className = 'likedFood';
//         likedFoodsContainer.appendChild(likedFoodElement);
//     });
// }
