
/**/

const imageSearch = require('image-search-google');

const client = new imageSearch('871c638868f774743', 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI');
const options = { page: 1, size: 'large' };

const fs = require('fs');
let promises = [];
let links = [];
let foods = ["Mango Sticky Rice", "Ärtsoppa", "Takoyaki", "Taro Ball Dessert", "Gaeng Keow Wan", "Coq au Vin", "Kedgeree", "Pastitsio", "Andijviestamppot", "Haemul Pajeon", "Amala", "Fattoush", "Curry", "Japchae", "Gumbo", "Lamingtons", "Erwtensoep", "Khao Soi", "Dobos Torte", "Manakish"];

foods.forEach(element => {
    let promise = client.search(element, options)
        .then(images => {
            // something's not working when the name is 3 words
            links.push(element.toLowerCase().replace(" ", "_") + "|" + images[2].url);
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