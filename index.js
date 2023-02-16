import './index.css'
import image from './assets/javascript.png'

const h1 = document.createElement('h1')
h1.textContent = 'WebPack'

const img = document.createElement('img')
img.src = image

document.body.append(h1, img)

console.log('Hello World!')