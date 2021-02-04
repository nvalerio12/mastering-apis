// Imports
const fetch = require('node-fetch');

// fetch('https://espn.com') // url, endpoint
// .then(response => {
//     console.log(response)
//     return response.text(); // an extra that happens to see the text
// })

// // .then(html => {
// //     console.log(html);
// // })

// Req to a third party database that returns a json object
fetch('https://api.github.com/users/nvalerio12') // endpoint
.then(response => {
    return response.json(); // changes res so we can work with it in JS 
})

.then(data => {
    console.log(data);
})

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})

.then(data => {
     // console.log(dataArray); // what datatype is this? (array)
    console.log(data);
    let c102Object = data[1]; // what datatype is this? (object)
    let capsuleSerial = c102Object['capsule_serial']; // bracket notation for keys with underscores
    let capsuleStatus = c102Object.status;
    console.log(c102Object)
    console.log(capsuleSerial)
    console.log(capsuleStatus)
})