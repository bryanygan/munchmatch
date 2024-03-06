
/**/

const imageSearch = require('image-search-google');

const client = new imageSearch('871c638868f774743', 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI');
const options = { page: 1, size: 'large' };

const fs = require('fs');
let promises = [];
let links = [];
let foods = ['hamburger', 'pasta alfredo', 'salad', 'chicken nuggets', 'lobster', 'spicy wings',
    "cheeseburger",
    "sushi",
    "pad_thai",
    "croissant",
    "taco",
    "peking_duck",
    "caprese_salad",
    "goulash",
    "pho",
    "moussaka"];

foods.forEach(element => {
    let promise = client.search(element, options)
        .then(images => {
            links.push(element.replace(" ", "_") + "|" + images[2].url);
        })
        .catch(error => console.log(error));
    promises.push(promise);

});

Promise.all(promises)
    .then(() => {
        console.log(links);
        console.log("Done");

        fs.writeFile("images.txt", links.join("\n"), (err) => {
            if (err) throw err;
        })
    });