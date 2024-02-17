const foods = [
    { image: "images/image1.png", name: "Burger", description: "A beef patty with cheese and two buns." },
    { image: "images/image2.png", name: "Pasta", description: "Pasta alfredo made with cheese and garnish." },
    { image: "images/image3.png", name: "Salad", description: "A healthy salad with greens and veggies." },
    { image: "images/image4.png", name: "Chicken Nuggets", description: "Chicken nuggets prepared with sauce." },
];

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
});

//
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

move();
//

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
