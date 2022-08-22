  import {
  bgPage,
  } from './elements.js'

  function clean(a, b) {
    bgPage.classList.remove(a)
    bgPage.classList.remove(b)
  }
  
  export function Mode() {
    function bgHome() {
      bgPage.classList.add('bg-1')
      clean('bg-2', 'bg-3')
    }
  
  
    function bgUniverse() {
      bgPage.classList.add('bg-2')
      clean('bg-1', 'bg-3')
    }
  
    function bgExploration() {
      bgPage.classList.add('bg-3')
      clean('bg-1', 'bg-2')
    }
  
    return {
      bgHome,
      bgUniverse,
      bgExploration,
    }
  }
  



