function scrollFunction() {
    btn = document.getElementById("scrollButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function main(){
    btn = document.getElementById("scrollButton");
    btn = (event) => {
        console.log("clicked");
        topFunction()
        };
    window.onscroll = function() {scrollFunction()};
}

main();