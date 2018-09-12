const Notebook = require('.././api/models/notebookModel');
const mongoose = require('mongoose');
const dbConfig = require('.././config/db.config');

mongoose.connect(dbConfig.url, { 
  useNewUrlParser: true 
}).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

let notebooks = [
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/b/h/p/bhpk-5621-g670/preview.bhpk-5621-g670.0.photo.XWH7F4AS51.jpg',
    make: 'Hp',
    model: '15',
    screenSize: '15.6"',
    price: 5799,
    availability: 5
  }),
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/m/m/m/mmmj-5543-g480/preview.mmmj-5543-g480.0.photo.X3RY7HVND6.jpg',
    make: 'Asus',
    model: 'VivoBook',
    screenSize: '15.6"',
    price: 3799,
    availability: 10
  }),
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/h/c/n/hcnt-5465-ga00/preview.hcnt-5465-ga00.1.jpg',
    make: 'Asus',
    model: 'VivoBook',
    screenSize: '14"',
    price: 11499,
    availability: 8
  }),
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/b/h/p/bhpk-5621-g670/preview.bhpk-5621-g670.0.photo.XWH7F4AS51.jpg',
    make: 'Hp',
    model: '15',
    screenSize: '15.6"',
    price: 5799,
    availability: 5
  }),
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/m/m/m/mmmj-5543-g480/preview.mmmj-5543-g480.0.photo.X3RY7HVND6.jpg',
    make: 'Asus',
    model: 'VivoBook',
    screenSize: '15.6"',
    price: 3799,
    availability: 10
  }),
  new Notebook({
    image: 'https://media.loot.co.za/static/gallery/previews/h/c/n/hcnt-5465-ga00/preview.hcnt-5465-ga00.1.jpg',
    make: 'Asus',
    model: 'VivoBook',
    screenSize: '14"',
    price: 11499,
    availability: 8
  })
];

let done = 0;

for (let i = 0; i < notebooks.length; i++) {
  notebooks[i].save((err, result) => {
    done++;
    if (done === notebooks.length) {
      exit();
    } else {
      console.log(err);
    }
  });
}

function exit () {
  mongoose.disconnect;
}