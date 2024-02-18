const foods = [
    { image: "images/image1.png", name: "Burger", description: "A beef patty with cheese and two buns.", gluten: true, seafood: false, dairy: false, spice: false },
    { image: "images/image2.png", name: "Pasta", description: "Pasta alfredo made with cheese and garnish.", gluten: true, seafood: false, dairy: true, spice: false },
    { image: "images/image3.png", name: "Salad", description: "A healthy salad with greens and veggies.", gluten: false, seafood: false, dairy: false, spice: false },
    { image: "images/image4.png", name: "Chicken Nuggets", description: "Chicken nuggets prepared with sauce.", gluten: true, seafood: false, dairy: false, spice: false },
    { image: "images/image5.png", name: "Lobster", description: "Lobster seasoned with garlic.", gluten: false, seafood: true, dairy: false, spice: false },
    { image: "images/image6.png", name: "Spicy Wings", description: "Wings, celery and sauce.", gluten: false, seafood: false, dairy: true, spice: true },
];

var allowGluten, allowSeafood, allowDairy, allowSpice;
allowGluten = allowSeafood = allowDairy = allowSpice = true;

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
    console.log(checkbox.value);
    checkbox.addEventListener('change', function () {
        handleAllergy(this);
    });
});

function handleAllergy(checkbox) {
    if (checkbox.checked) {
        console.log("Allergy selected: " + checkbox.value);
        // Call function based on the allergy value if needed
    } else {
        console.log("Allergy deselected: " + checkbox.value);
        // Call function based on the allergy value if needed
    }

    switch (checkbox.value) {
        case "gluten":
            allowGluten = checkbox.checked;
            break;
        case "seafood":
            allowSeafood = checkbox.checked;
            break;
        case "dairy":
            allowDairy = checkbox.checked;
            break;
        case "spice":
            allowSpice = checkbox.checked;
            break;
    }

    var label;
    //var elements = document.getElementById("checkboxHolder");
    var elements = document.querySelectorAll('#checkboxHolder');
    elements.forEach(function (element) {
        if (element.innerHTML.includes(checkbox.value)) {
            label = element;
        }
    });
    // label.innerHTML="beep";
    // console.log(label.childNodes);
    // console.log(label.childNodes[3]);
    var labText = label.childNodes[3].innerHTML;
    // console.log(labText.substring(0,labText.search("</i>") + 4))
    var newText = "";
    newText += labText.substring(0, labText.search("</i>") + 4);
    if (!checkbox.checked) {
        newText += '<span style="color:#F18C60;">';
    }
    newText += " - " + checkbox.value.toUpperCase()
    if (!checkbox.checked) {
        newText += "</span>";
    }
    label.childNodes[3].innerHTML = newText;
}

// someCheckbox.addEventListener('change', e => {
//   if(e.target.checked === true) {
//     console.log("Checkbox is checked - boolean value: ", e.target.checked)
//   }
// if(e.target.checked === false) {
//     console.log("Checkbox is not checked - boolean value: ", e.target.checked)
//   }
// });

function generateList() {
    var list = [];
    var sum = 0;
    while (sum != 100) {
        if (sum > 100) {
            sum -= list.shift();
        }
        var randomNum = 1 + Math.floor(Math.random() * 8)
        list.push(randomNum);
        sum += randomNum;
    }

    return list;
}


var resultList = generateList();
// console.log(resultList);

var fill = 0;
function progress() {
    fill += resultList.shift();
    // var fill = resultList[swipeCounter];
    // swipeCounter += 1;

    var elem = document.getElementById("myBar");
    // let fill = swipeCounter / 20.0;
    elem.style.width = fill + "%";
    document.getElementById("percentText").innerHTML = ("<b>" + fill + "%</b> to Match")
}

let currentIndex = 0;
let likedFoods = [], dislikedFoods = [];

function swipe(direction) {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');

    if (direction === 'left') {
        dislikedFoods.push(foods[currentIndex]);
        // currentIndex = (currentIndex - 1 + foods.length) % foods.length;
        updateDislikedFoods();
    } else if (direction === 'right') {
        likedFoods.push(foods[currentIndex]);
        // currentIndex = (currentIndex + 1) % foods.length;
        updateLikedFoods();
    }
    currentIndex++;
    if (currentIndex > foods.length - 1) {
        currentIndex = 0;
    }

    // console.log(foods[currentIndex].dairy);
    var keepGenerating = false;
    do{
        var newFood = foods[currentIndex];
        keepGenerating = (!allowGluten && newFood.gluten) || (!allowSeafood && newFood.seafood) || (!allowDairy && newFood.dairy) || (!allowSpice && newFood.spice);
        if(keepGenerating){
            currentIndex++;
        }
        if (currentIndex > foods.length - 1) {
            currentIndex = 0;
        }
    }while(keepGenerating);

    updateFoodDisplay(direction);
    progress();
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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
