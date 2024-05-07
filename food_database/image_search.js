const imageSearch = require('image-search-google');

const client = new imageSearch('871c638868f774743', 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI');
const options = { page: 1, size: 'large' };

const fs = require('fs');
let promises = [];
let links = [];

let foods = ["Stuffed Grape Leaves", "Curry", "Falafel", "Loco Moco", "Malu Paan", "Moqueca", "Goiabada", "Burritos", "Sweet Dumplings", "Smörgåstårta", "Khanom Mo Kaeng", "Koshari", "Clootie Dumpling", "Masala Dosa", "Stroopwafel", "Cheesecake", "Som Tum", "Arbroath Smokie", "Dutch Apple Pie", "Moo Ping"]

let imagesLines = fs.readFileSync('images.txt', 'utf8');

foods.forEach(element => {
    if (!imagesLines.includes(element)) {
        let promise = client.search(element, options)
            .then(images => {
                links.push(element.toLowerCase().replace(" ", "_") + "|" + images[2].url);
            })
            .catch(error => console.log(error));
        promises.push(promise);
    }
});

Promise.all(promises)
    .then(() => {
        console.log(links);
        console.log("Done");

        fs.writeFile("images.txt", links.join("\n"), (err) => {
            if (err) throw err;
        })
    });