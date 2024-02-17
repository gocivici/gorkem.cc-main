//Project tag filter
function toggleTag(tag){
const allProjects = document.getElementsByClassName("window main-left");

for (var i = 1; i < allProjects.length; i++) {

	allProjects[i].style.display = "none";
}

const selectedProjects = document.getElementsByClassName(tag);
var buttons = document.querySelectorAll('button[type="tag"]');

for (var j = 0; j < buttons.length; j++){
	console.log(buttons[j]);
	buttons[j].childNodes[0].style.border = "none";
}


selectedProjects[0].style.border = "3px dashed white";
for (var i = 1; i < selectedProjects.length; i++) {
	// console.log(selectedProjects[i].parentElement.parentElement.parentElement.parentElement.parentElement);
	selectedProjects[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
}
// console.log(selectedProjects);
// console.log(allProjects);
}