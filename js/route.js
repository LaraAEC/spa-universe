export class Router {
  
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event 
    //verifica se eu passei um evento, senão coloca o evento do window (objeto janela, principal objeto do browser DOM)
    
    event.preventDefault()
    //tira padrão e o do click é redirecionar para a pag passada no href
    
    window.history.pushState({}, "", event.target.href)
    /*empurrando para meu hitórico as URL que estão sim mudando,
    eu só não estou indo pra elas, pois irei trocá-las dentro de
    um único HTML através do handle com o pathname.*/
  
    this.handle()
  }
  
  handle() {
    /*const pathname = window.location.pathname
    pode ser assim, ou como abaixo desestruturando
    o objeto location, retirando dele o pathname e
    colocando do lado de fora em uma constante.*/
    const  { pathname } = window.location
    //retira a propriedade/método de um objeto
  
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}

