const imageSearch = require('image-search-google');
const client = new imageSearch('871c638868f774743', 'AIzaSyB6TGVlNYYLaaQbtqiTb8vth7TOCvE2shI');
const options = { page: 1, size: 'large' };
const fs = require('fs');
const csv = require('csv-parser');

let promises = [];
let links = [];

fs.createReadStream('output.csv')
  .pipe(csv())
  .on('data', (row) => {
    const foodName = row[1].trim(); // Assuming food name is in the second column
    const placeholder = row[0].trim();

    if (placeholder.includes('*')) {
      let promise = client.search(foodName, options)
        .then(images => {
          links.push(`${placeholder}|${images[2].url}`);
        })
        .catch(error => console.log(error));
      promises.push(promise);
    } else {
      links.push(row.join('|'));
    }
  })
  .on('end', () => {
    Promise.all(promises)
      .then(() => {
        console.log("Done");
        fs.writeFile("output.txt", links.join("\n"), (err) => {
          if (err) throw err;
        });
      });
  });