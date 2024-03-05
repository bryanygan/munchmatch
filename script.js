const foods = [
    { image: "https://heygrillhey.com/static/234cd20061f0bc398863c88cdad06afa/SmokedHamburgers-7.jpg", name: "hamburger", description: "A beef patty with cheese and two buns.", country: "us", price: 3, gluten: true, seafood: false, dairy: false, spice: false },
    { image: "https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg", name: "pasta_alfredo", description: "Pasta alfredo made with cheese and garnish.", country: "fr", price: 2, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2.jpg", name: "salad", description: "A healthy salad with greens and veggies.", country: "gr", price: 2, gluten: false, seafood: false, dairy: false, spice: false },
    { image: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-McNuggets-6-pieces-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off", name: "chicken_nuggets", country: "it", price: 1, description: "Chicken nuggets prepared with sauce.", gluten: true, seafood: false, dairy: false, spice: false },
    { image: "https://media.npr.org/assets/img/2012/05/10/lobster_custom-9e0ca5bd52353bd0dc75b03c89cab8c628b1db43-s1100-c50.jpg", name: "lobster", description: "Lobster seasoned with garlic.", price: 2, country: "gb", gluten: false, seafood: true, dairy: false, spice: false },
    { image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Baked-Buffalo-Wings_0.jpg", name: "spicy_wings", description: "Wings, celery and sauce.", country: "kr", price: 1, gluten: false, seafood: false, dairy: true, spice: true },
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

var container = document.getElementById("foodContainer");
container.style = 'display:none;';
var startButton = document.getElementById("startButton");
startButton.addEventListener('click', function () {
    startButton.style = 'display:none;';

    container.style = 'display: block;';
});

function handleAllergy(checkbox) {
    if (checkbox.checked) {
        console.log("Allergy selected: " + checkbox.value);
    } else {
        console.log("Allergy deselected: " + checkbox.value);
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
    } else if (direction === 'right') {
        likedFoods.push(foods[currentIndex]);
    }
    updateLikedFoods();
    currentIndex++;
    if (currentIndex > foods.length - 1) {
        currentIndex = 0;
    }

    // console.log(foods[currentIndex].dairy);
    var keepGenerating = false;
    do {
        var newFood = foods[currentIndex];
        keepGenerating = (!allowGluten && newFood.gluten) || (!allowSeafood && newFood.seafood) || (!allowDairy && newFood.dairy) || (!allowSpice && newFood.spice);
        if (keepGenerating) {
            currentIndex++;
        }
        if (currentIndex > foods.length - 1) {
            currentIndex = 0;
        }
    } while (keepGenerating);

    updateFoodDisplay(direction);
    progress();
}

let lastSwipeTime = 0;

document.addEventListener('keydown', function (event) {
    const currentTime = new Date().getTime();

    if (currentTime - lastSwipeTime >= 300) {
        if (event.key === 'ArrowLeft') {
            swipe('left');
        } else if (event.key === 'ArrowRight') {
            swipe('right');
        }

        lastSwipeTime = currentTime;
    }
});

function updateFoodDisplay(direction) {
    const foodImage = document.getElementById('foodImage');
    const dishName = document.getElementById('dishName');
    const description = document.getElementById('description');
    const dishflag = document.getElementById('foodcountry');
    const dollar2 = document.getElementById('dollar2');
    const dollar3 = document.getElementById('dollar3');

    const allergyGluten = document.getElementById('allergyGluten');
    const allergySeafood = document.getElementById('allergySeafood');
    const allergyDairy = document.getElementById('allergyDairy');
    const allergySpice = document.getElementById('allergySpice');

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
        dishName.innerText = replaceUnderscoresWithSpacesAndCapitalize(foods[currentIndex].name);
        dishflag.className = "fi fi-" + foods[currentIndex].country;
        dollar2.style = foods[currentIndex].price >= 2 ? "" : "display: none";
        dollar3.style = foods[currentIndex].price >= 3 ? "" : "display: none";
        allergyGluten.style = foods[currentIndex].gluten ? "" : "display:none";
        allergySeafood.style = foods[currentIndex].seafood ? "" : "display:none";
        allergyDairy.style = foods[currentIndex].dairy ? "" : "display:none";
        allergySpice.style = foods[currentIndex].spice ? "" : "display:none";
        description.innerText = foods[currentIndex].description;
        foodImage.style.transform = 'translateX(0)';
    }, 300);
}

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

function replaceUnderscoresWithSpacesAndCapitalize(str) {
    // Replace underscores with spaces
    let stringWithSpaces = str.replace(/_/g, ' ');

    // Capitalize each word
    stringWithSpaces = stringWithSpaces.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });

    return stringWithSpaces;
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
            foodElement.className = name;
            likedFoodsContainer.appendChild(foodElement);
        });
    }

    //dislikedFood

    //THIS IS BAD CODE - CAN BE SIMPLIFIED LATER
    else {
        dislikedFoodsContainer.innerHTML = '';
        dislikedFoods.forEach(food => {
            const foodElement = document.createElement('img');
            foodElement.src = food.image;
            foodElement.className = name;
            dislikedFoodsContainer.appendChild(foodElement);
        });
    }
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

