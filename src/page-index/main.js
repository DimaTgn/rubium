import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../css/main.scss')
require('../partials/footer/footer.scss')
require('./page.css')
require('../partials/navbar/nav.scss')
require('../partials/signup/signup.scss')
require('../partials/products/product.scss')
require('../css/_mix.scss')
require('../partials/navbar/burger.scss')
require('../js/burger')
require('../js/accordeon')
require('../partials/headphones/headphones.scss')
require('../partials/beats-pill/beats-pill.scss')
require('../partials/powerbeats/powerbeats.scss')
require('../partials/beatsx/beatsx.scss')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)
