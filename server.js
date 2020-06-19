const express = require('express');
const fetch   = require('node-fetch');

const app = express();

app.get('/countries', (req, res) => {

    fetch ('https://restcountries.eu/rest/v2/all', {'Content-type': 'application/json'})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(`Request rejected with status ${response.status}`);
        }
    })
    .then(data => res.send(data));
})

app.get('/country/:name', (req, res) => {
    let name = req.params.name;
    console.log(name)

    fetch (`https://restcountries.eu/rest/v2/name/${encodeURI(name)}?fullText=true`, {'Content-type': 'application/json'})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw Error(`Request rejected with status ${response.status}`);
        }
    })
    .then(data => res.send(data));
})

const port = 5000;

app.listen(port, () => console.log(`Server stardet on port ${port}`))