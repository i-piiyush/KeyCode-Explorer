const main = document.querySelector('main')
window.addEventListener('keydown',(e)=>{
  main.innerHTML = `
  <div class="col1">
        <h1>key</h1>
        <h3>${e.key=== ' ' ? 'space' : e.key}</h3>
      </div>
      <div class="col2">
        <h1>keyCode</h1>
        <h3>${e.keyCode}</h3>
      </div>
      <div class="col3">
        <h1>code</h1>
        <h3>${e.code}</h3>
      </div>
  `
})