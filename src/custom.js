const anchors = document.querySelectorAll('h2');
const links = document.querySelectorAll('ul > ul > li');
// console.log(anchors);
// console.log(links);
window.addEventListener('scroll', (event) => {
  if (typeof(anchors) != 'undefined' && anchors != null && typeof(links) != 'undefined' && links != null) {
    let scrollTop = window.scrollY;
    
    // highlight the last scrolled-to: set everything inactive first
    links.forEach((link, index) => {
      link.classList.remove("activate");
    });
    
    // then iterate backwards, on the first match highlight it and break
    for (var i = anchors.length-1; i >= 0; i--) {
      if (scrollTop > anchors[i].offsetTop - 75) {
        links[i].classList.add('activate');
        break;
      }
    }
  }
});


//Background switcher
if(localStorage.getItem('currentTheme')){
	changeBackground(localStorage.getItem('currentTheme'));
}

function changeBackground(value)
{
    switch(value)
    {
        case '1':
            document.body.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), var(--theme-1)";
			document.getElementById("theme-switch1").checked = true;
        break;
        case '2':
            document.body.style.backgroundImage = "var(--theme-2)";
			document.getElementById("theme-switch2").checked = true;
        break;
        case '3':
            document.body.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), var(--theme-3)";
			document.getElementById("theme-switch3").checked = true;
        break;
		case '4':
            document.body.style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), var(--theme-4)";
			document.getElementById("theme-switch4").checked = true;
        break;
    }
	localStorage.setItem('currentTheme', value);
    
}

//info bubble toggle

function toggleBubble(x){
	// console.log(x.parentElement.parentElement.children[0]);
	x.parentElement.children[0].style.visibility = x.parentElement.children[0].style.visibility == "visible" ? "hidden" : "visible";
}
