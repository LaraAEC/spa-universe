import {
  buttonHome,
  buttonUniverse,
  buttonExploration
  } from './elements.js'

import { Router } from './route.js'
import { Mode } from './mode.js'

const router = new Router()
const mode = new Mode()

router.add('/index.html', 'pages/home.html')
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add('404', '/pages/404.html')

router.handle()


window.onpopstate = () => router.handle()
/*Fazendo as setinhas de voltar mudarem, não só a URL,
mas o HTML da página. O que aparece na página, que 
pela forma que escrevemos o código só está mudando com
nossa função handle().*/
//Esse algoritmo tem a mesma ideia de disparar eventos listener.
//Ao disparar o popstate ele vai executar uma função, no caso handle()

window.route = () => router.route()
/*colocando na janela a função route pois após trazer
o script pra cá ele não estava executando o
preventdefault do route() onclick.*/


buttonHome.addEventListener('click', function() {
  mode.bgHome()
})

buttonUniverse.addEventListener('click', function() {
  mode.bgUniverse()
})

buttonExploration.addEventListener('click', function() {
  mode.bgExploration()
})




