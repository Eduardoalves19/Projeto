function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

     
    const img = document.querrySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light-mode.png')
    } else  {
        img.setAttribute('src', './assets/avatar-dark-mode.png')
     }









}