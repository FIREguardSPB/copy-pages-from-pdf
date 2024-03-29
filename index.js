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
