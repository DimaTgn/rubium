require('normalize.css/normalize.css')
require('../css/main.scss')
require('./page.scss')
require('../js/slider-price')
const img = require('../img/unicorn.jpg')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about')
  console.log('Image through require()', img)
})
