const express = require('express');
const fetch = require('node-fetch')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'build')))


console.log(path.resolve(__dirname, '../uploads'))

setInterval(async () => {
  await fetch('https://copy-pages-from-pdf.herokuapp.com/');
}, 1000 * 60 * 20)


async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`server working on ${PORT} and current DIR =>> ${process.execPath}\n\n`);
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()
