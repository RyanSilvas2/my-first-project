function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    const cat = document.querySelector(".cat");

    if(html.classList.contains("light")) {
       img.setAttribute("src", "https://i.redd.it/knmvl41tgn991.jpg");
       
      cat.setAttribute("src", "https://img.icons8.com/windows/32/000000/cat-head.png");
    }
    else {
       img.setAttribute("src", "assets/ryan.jpg")
       cat.setAttribute("src", "assets/icons8-cat-head-32.png")
    }



}