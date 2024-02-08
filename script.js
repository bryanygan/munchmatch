const foods = [
    { image: "image1.jpg", name: "Dish 1", description: "Description for Dish 1" },
    { image: "image2.jpg", name: "Dish 2", description: "Description for Dish 2" },
    { image: "image3.jpg", name: "Dish 3", description: "Description for Dish 3" },
];

let currentIndex = 0;
let likedFoods = [];

function swipe(direction) {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');

    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + foods.length) % foods.length;
    } else if (direction === 'right') {
        likedFoods.push(foods[currentIndex]);
        currentIndex = (currentIndex + 1) % foods.length;
    }

    updateLikedFoods();
    updateFoodDisplay();
}

function updateFoodDisplay() {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');

    foodImage.style.transform = 'translateX(100%)';
    setTimeout(() => {
        foodImage.src = foods[currentIndex].image;
        dishName.innerText = foods[currentIndex].name;
        description.innerText = foods[currentIndex].description;
        foodImage.style.transform = 'translateX(0)';
    }, 300);
}

function updateLikedFoods() {
    const likedFoodsContainer = document.getElementById('likedFoods');
    likedFoodsContainer.innerHTML = '';

    likedFoods.forEach(food => {
        const likedFoodElement = document.createElement('img');
        likedFoodElement.src = food.image;
        likedFoodElement.alt = 'Liked Food';
        likedFoodElement.className = 'likedFood';
        likedFoodsContainer.appendChild(likedFoodElement);
    });
}
