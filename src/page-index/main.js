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
require('../css/burger.scss')
require('../js/burger')
require('../js/accordeon')
require('../css/headphones.scss')
require('../css/beats-pill.scss')
require('../css/powerbeats.scss')
require('../css/beatsx.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)
