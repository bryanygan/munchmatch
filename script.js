const foods = [
    { image: "https://heygrillhey.com/static/234cd20061f0bc398863c88cdad06afa/SmokedHamburgers-7.jpg", name: "hamburger", description: "A beef patty with cheese and two buns.", country: "us", price: 3, gluten: true, seafood: false, dairy: false, spice: false },
    { image: "https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg", name: "pasta_alfredo", description: "Pasta alfredo made with cheese and garnish.", country: "fr", price: 2, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg", name: "salad", description: "A healthy salad with greens and veggies.", country: "gr", price: 2, gluten: false, seafood: false, dairy: false, spice: false },
    { image: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-McNuggets-6-pieces-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off", name: "chicken_nuggets", country: "it", price: 1, description: "Chicken nuggets prepared with sauce.", gluten: true, seafood: false, dairy: false, spice: false },
    { image: "https://media.npr.org/assets/img/2012/05/10/lobster_custom-9e0ca5bd52353bd0dc75b03c89cab8c628b1db43-s1100-c50.jpg", name: "lobster", description: "Lobster seasoned with garlic.", price: 2, country: "gb", gluten: false, seafood: true, dairy: false, spice: false },
    { image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Baked-Buffalo-Wings_0.jpg", name: "spicy_wings", description: "Wings, celery and sauce.", country: "kr", price: 1, gluten: false, seafood: false, dairy: true, spice: true },
    { image: "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg", name: "cheeseburger", description: "Beef patty with melted cheese on a bun.", country: "us", price: 2, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "https://www.allrecipes.com/thmb/i7yLualeJp6h7nuux-Dnr7AUI6o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4559474-vegetarian-sushi-Buckwheat-Queen-4x3-1-af11cac7218240e383dbe72ef6b1ec8f.jpg", name: "sushi", description: "Raw fish and rice wrapped in seaweed.", country: "jp", price: 3, gluten: false, seafood: true, dairy: false, spice: false },
    { image: "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg", name: "pad_thai", description: "Stir-fried rice noodles with shrimp and peanuts.", country: "th", price: 2, gluten: true, seafood: true, dairy: false, spice: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/1200px-2018_01_Croissant_IMG_0685.JPG", name: "croissant", description: "Flaky pastry made with butter and yeast.", country: "fr", price: 2, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "https://hips.hearstapps.com/hmg-prod/images/taco-salad-index-643eeb39014bd.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*", name: "taco", description: "Corn tortilla filled with seasoned meat and toppings.", country: "mx", price: 1, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Peking_Duck%2C_2014_%2802%29.jpg/640px-Peking_Duck%2C_2014_%2802%29.jpg", name: "peking_duck", description: "Roasted duck with crispy skin served with pancakes.", country: "cn", price: 3, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg", name: "caprese_salad", description: "Tomatoes, mozzarella, and basil with balsamic glaze.", country: "it", price: 2, gluten: false, seafood: false, dairy: true, spice: false },
    { image: "https://hips.hearstapps.com/hmg-prod/images/goulash-index-64de8d20b97d5.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*", name: "goulash", description: "Hungarian stew with meat, vegetables, and paprika.", country: "hu", price: 2, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "https://www.allrecipes.com/thmb/SZjdgaXhmkrRNLoOvdxuAktwk3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228443-authentic-pho-DDMFS-4x3-0523f6531ccf4dbeb4b5bde52e007b1e.jpg", name: "pho", description: "Vietnamese soup with broth, rice noodles, and meat.", country: "vn", price: 2, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "https://www.mygreekdish.com/wp-content/uploads/2013/05/Moussaka-recipe-Traditional-Greek-Moussaka-with-Eggplants.jpg", name: "moussaka", description: "Greek dish with layers of eggplant, potato, and meat.", country: "gr", price: 3, gluten: true, seafood: false, dairy: true, spice: true },
    { image: "*", name: "mango_sticky_rice", description: "Sweet sticky rice topped with ripe mango.", country: "th", price: 2, sweet: 4, sour: 1, salty: 1, bitter: 0, umami: 0, gluten: false, seafood: false, dairy: false, spice: false },
    { image: "*", name: "ärtsoppa", description: "Traditional Swedish pea soup with ham.", country: "se", price: 2, sweet: 1, sour: 1, salty: 3, bitter: 2, umami: 0, gluten: true, seafood: false, dairy: false, spice: false },
    { image: "*", name: "takoyaki", description: "Japanese octopus-filled savory balls.", country: "jp", price: 2, sweet: 1, sour: 2, salty: 3, bitter: 0, umami: 3, gluten: true, seafood: true, dairy: false, spice: false },
    { image: "*", name: "taro_ball_dessert", description: "Sweet dessert made from taro balls and syrup.", country: "tw", price: 2, sweet: 5, sour: 1, salty: 1, bitter: 0, umami: 0, gluten: false, seafood: false, dairy: false, spice: false },
    { image: "*", name: "gaeng_keow_wan", description: "Thai green curry with coconut milk and meat.", country: "th", price: 3, sweet: 3, sour: 2, salty: 3, bitter: 0, umami: 3, gluten: true, seafood: false, dairy: true, spice: true },
    { image: "*", name: "coq_au_vin", description: "French chicken braised in red wine.", country: "fr", price: 3, sweet: 1, sour: 2, salty: 3, bitter: 1, umami: 3, gluten: false, seafood: false, dairy: true, spice: false },
    { image: "*", name: "kedgeree", description: "British dish of rice, fish, and hard-boiled eggs.", country: "gb", price: 2, sweet: 1, sour: 2, salty: 3, bitter: 1, umami: 2, gluten: false, seafood: true, dairy: false, spice: true },
    { image: "*", name: "pastitsio", description: "Greek baked pasta dish with meat and béchamel.", country: "gr", price: 3, sweet: 1, sour: 1, salty: 3, bitter: 1, umami: 2, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "*", name: "andijviestamppot", description: "Dutch mashed potatoes with endive.", country: "nl", price: 1, sweet: 1, sour: 1, salty: 2, bitter: 3, umami: 0, gluten: false, seafood: false, dairy: true, spice: false },
    { image: "*", name: "haemul_pajeon", description: "Korean seafood and green onion pancake.", country: "kr", price: 2, sweet: 1, sour: 2, salty: 3, bitter: 0, umami: 3, gluten: true, seafood: true, dairy: false, spice: true },
    { image: "*", name: "amala", description: "Nigerian thick paste made from yam flour.", country: "ng", price: 1, sweet: 0, sour: 0, salty: 1, bitter: 1, umami: 0, gluten: false, seafood: false, dairy: false, spice: false },
    { image: "*", name: "fattoush", description: "Levantine salad made from mixed greens and bread.", country: "lb", price: 1, sweet: 2, sour: 3, salty: 2, bitter: 2, umami: 1, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "*", name: "curry", description: "Indian spiced dish with meat or vegetables.", country: "in", price: 2, sweet: 1, sour: 2, salty: 3, bitter: 1, umami: 3, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "*", name: "japchae", description: "Korean stir-fried glass noodles with vegetables.", country: "kr", price: 2, sweet: 2, sour: 2, salty: 3, bitter: 0, umami: 2, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "*", name: "gumbo", description: "Louisiana stew with meat, vegetables, and roux.", country: "us", price: 2, sweet: 1, sour: 2, salty: 3, bitter: 1, umami: 3, gluten: true, seafood: true, dairy: false, spice: true },
    { image: "*", name: "lamingtons", description: "Australian sponge cake coated in chocolate and coconut.", country: "au", price: 2, sweet: 4, sour: 0, salty: 1, bitter: 0, umami: 0, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "*", name: "erwtensoep", description: "Dutch split pea soup with pork.", country: "nl", price: 2, sweet: 1, sour: 1, salty: 3, bitter: 1, umami: 2, gluten: false, seafood: false, dairy: false, spice: true },
    { image: "*", name: "khao_soi", description: "Northern Thai coconut curry noodle soup.", country: "th", price: 2, sweet: 2, sour: 3, salty: 4, bitter: 0, umami: 3, gluten: true, seafood: false, dairy: false, spice: true },
    { image: "*", name: "dobos_torte", description: "Hungarian layer cake with caramel and chocolate.", country: "hu", price: 3, sweet: 4, sour: 1, salty: 1, bitter: 0, umami: 0, gluten: true, seafood: false, dairy: true, spice: false },
    { image: "*", name: "manakish", description: "Levantine flatbread topped with za'atar or cheese.", country: "lb", price: 1, sweet: 0, sour: 1, salty: 3, bitter: 1, umami: 2, gluten: true, seafood: false, dairy: false, spice: true}

];

// fetch("images.txt")
//     .then(function (res) {
//         return res.text();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

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

var fill = 0;
function progress() {
    fill += resultList.shift();

    var elem = document.getElementById("myBar");
    elem.style.width = fill + "%";
    document.getElementById("percentText").innerHTML = ("<b>" + fill + "%</b> to Match")
}

let currentIndex = 0;
let likedFoods = [], dislikedFoods = [];

function swipe(direction) {
    // const foodImage = document.getElementById('foodImage');
    // const dishName = document.getElementById('dishName');
    // const description = document.getElementById('description');

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

function replaceUnderscoresWithSpacesAndCapitalize(str) {
    let stringWithSpaces = str.replace(/_/g, ' ');

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

