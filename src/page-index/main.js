import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../css/main.scss')
require('../css/footer.scss')
require('./page.css')
require('../css/nav.scss')
require('../css/signup.scss')
require('../css/product.scss')
require('../css/mix.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)
