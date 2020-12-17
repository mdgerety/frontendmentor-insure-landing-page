function myFunction() {
    let x = document.getElementById("header-nav");
    if (x.className === "header-nav") {
      x.className += " responsive";
    } else {
      x.className = "header-nav";
    }
  }