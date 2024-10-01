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
            document.getElementById("halloween").style.display="none";
        break;
        case '2':
            document.body.style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), var(--theme-2)";
			document.getElementById("theme-switch2").checked = true;
            // document.querySelectorAll('[id=halloween]').style.display="block";   0.8  0.6
            document.getElementById("halloween").style.display="block";
        break;
        case '3':
            document.body.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), var(--theme-3)";
			document.getElementById("theme-switch3").checked = true;
            document.getElementById("halloween").style.display="none";
        break;
		case '4':
            document.body.style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), var(--theme-4)";
			document.getElementById("theme-switch4").checked = true;
            document.getElementById("halloween").style.display="none";
        break;
		case '5':
            document.body.style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), var(--theme-5)";
			document.getElementById("theme-switch4").checked = true;
            document.getElementById("halloween").style.display="none";
        break;
    }
	localStorage.setItem('currentTheme', value);
    
}