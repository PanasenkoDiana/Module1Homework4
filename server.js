const express = require('express')

const app = express()
const PORT = 8000
const HOST = 'localhost'

function getCurrentDateTime() {
    const now = new Date();
    return now.toString();
}

app.get('/', () => {
    console.log("Успышный вход");
})

app.get('/date', () => {
    let currentDate = getCurrentDateTime();
    console.log("Текущая дата и время:", currentDate);
});

app.listen(PORT, HOST, () =>{
    console.log("server is running")
})