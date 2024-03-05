
/**/

const imageSearch = require('image-search-google');
 
const client = new imageSearch('871c638868f774743', 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI');
const options = {page:1, size: 'large'};

const fs = require('fs')
let promises = [];
let links = [];
let foods = ['hamburger','pasta alfredo','salad','chicken nuggets','lobster','spicy wings'];

foods.forEach(element => {
    let promise = client.search(element, options)
    .then(images => {
        /*
        [{
            'url': item.link,
            'thumbnail':item.image.thumbnailLink,
            'snippet':item.title,
            'context': item.image.contextLink
        }]
         */

        links.push(element.replace(" ","_")+"|"+images[2].url);

        // images.forEach(image => {
        //     // console.log(image.url);
        //     links.push(image.url);
        //     // console.log(data);
        // });


        // links.push(images[1].url);
        // console.log(images)
    })
    .catch(error => console.log(error));
    promises.push(promise);
    
});

Promise.all(promises)
    .then(() => {
        console.log(links); 
        console.log("Done");

        fs.writeFile("images.txt",links.join("\n"),(err)=>{
            if(err) throw err;
        })
    });

    // console.log(links);

// links.forEach(element=>{

// });
 
// console.log(foods.join("\n"));
// console.log(links.join("\n"));

// search for certain size
// client.search('Mahatma Gandhi', {size: 'large'});
 
// search for certain type
// client.search('Indira Gandhi', {type: 'face'});

/**/