const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [angel, angelgiovanna] = profileDataArgs;




fs.writeFile('index.html', generatePage(angel, angelgiovanna), err => {
  if (err) throw err;

  console.log('Portfolio complete! Checkout index.html to see the output!')
});