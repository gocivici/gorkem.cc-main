
// var div = $('<p>Hello <strong>World</strong></p>')
// term.echo(div);
// $("p").hide();
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts(['Standard', 'Slant','Crawford2','Larry 3D','mini']);

var scanlines = $('.scanlines');
var e = "guest";
var audio = new Audio('portal-still-alive.mp3');





    // render ASCII font
    function render(term, text, font) {
        const cols = term.cols();
        return figlet.textSync(text, {
            font: font || 'Standard',
            width: cols,
            whitespaceBreak: true
        });
    }

    function delay(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }


var App = {
    echo: function(text) {
        this.echo(text);

    },
    help: function() {
      this.echo(() => "[[b;#FFA500;]" + render(this, 'Command Directory', 'Slant') + "]");
      showHelp(this);

    },
    starwars: function() {
    var frames = [];
    var LINES_PER_FRAME = 14;
    var DELAY = 67;
    //star_wars is array of lines from 'js/star_wars.js'
    var lines = star_wars.length;
    for (var i=0; i<lines; i+=LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i+LINES_PER_FRAME));
    }
    var stop = false;
    //to show greetings after clearing the terminal
    function play(term, delay) {
        var i = 0;
        var next_delay;
        if (delay == undefined) {
            delay = DELAY;
        }
        function display() {
            if (i == frames.length) {
                i = 0;
            }
            term.clear();
            if (frames[i][0].match(/[0-9]+/)) {
                next_delay = frames[i][0] * delay;
            } else {
                next_delay = delay;
            }
            term.echo(frames[i++].slice(1).join('\n')+'\n');
            if (!stop) {
                setTimeout(display, next_delay);
            } else {
                term.clear();
                greetings(term);
                i = 0;
            }
        }
        display();
    }
      this.pause();
      stop = false;
      play(this);
    },

        ls: function() {
            this.error('<ls> is not available. I guess you want to list available commands with <help>:');
             showHelp(this);
    },
    about: function() {
        this.echo("");
        this.echo("Hi! I'm Görkem,");
        this.echo("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed risus ac dolor maximus accumsan ac sit amet lacus.");
        this.echo("Nulla hendrerit est ac commodo varius. Donec facilisis faucibus posuere.\n");
        //this.echo("My skills:");
        // this.echo("\t[[b;#44D544;]Matlab]:           [################################       ]")
        // this.echo("\t[[b;#44D544;]HTML/CSS/JS]:      [#############################          ]")
        // this.echo("\t[[b;#44D544;]C]:                [##############################         ]")
        // this.echo("\t[[b;#44D544;]Python]:           [###################################    ]")
        // this.echo("Other skills:");
        // this.echo("\t[[b;#44D544;]Adobe Permier]:    [##########################             ]")
        // this.echo("\t[[b;#44D544;]Cinema 4D]:        [#####################                  ]")
        // this.echo("\t[[b;#44D544;]Fusion 360]:       [########################               ]")




    },
    contact: function() {
        this.echo("Contact info:")
        this.echo("Email: gorkem.bozkrt@gmail.com");
        //this.echo("Twitter: @gocivici");

    },

       blog: function() {
        this.echo("Loading the blog... \n")
        setTimeout(function(){ document.location.href = 'https://gocivici.com/blog'; }, 2500);
    },

        thecakeisalie: function() {

document.getElementById('texteru').style.display="block"

          $( function() {
    			$( '.type-text' ).each( function() {
    				var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
    				var thing = $( this ).empty().attr( 'title', '' ).teletype( {
    					text: items.split( ';' ),
    					typeDelay: 70,
    					backDelay: 0,
    					delay: 3000,
    					preserve: false,
    					loop: 1,
              humanise:false,
    					callbackType: function( letter, current, teletype ) {
    						if ( current.index == 2 && current.position == 13 ) {
    							teletype.setCursor( '_' );
    						}
    					},
    					callbackNext: function( current, teletype ) {
    						if ( current.index == 3 ) {
    							teletype.setCursor( '▋' );
    						}
    					}
    				} );
    			} );
    		} );

          audio.play();
          setTimeout(func1,16000);
          setTimeout(func2,29000);
          setTimeout(func3,39000);
          setTimeout(func4,62000);
          setTimeout(func5,67000);
          setTimeout(func6,73000);
          setTimeout(func7,80000);
          setTimeout(func9,90000);
          setTimeout(func8,120000);
          setTimeout(func10,129000);
          setTimeout(func11,179000);
          function func1()
{
	document.getElementById('apertur').style.display="block";
}
function func2()
{
document.getElementById('dead').style.display="block";
document.getElementById('apertur').style.display="none";
}


function func3()
{
document.getElementById('dead').style.display="none";
document.getElementById('atom').style.display="block";
}
function func4()
{
document.getElementById('atom').style.display="none";
document.getElementById('heart').style.display="block";
}
function func5()
{
document.getElementById('heart').style.display="none";
document.getElementById('pieces').style.display="block";
}
function func6()
{
document.getElementById('pieces').style.display="none";
document.getElementById('fire').style.display="block";
}
function func7()
{
document.getElementById('fire').style.display="none";
document.getElementById('happy').style.display="block";
}
function func8()
{
document.getElementById('apertur').style.display="none";
document.getElementById('mesa').style.display="block";
}
function func9()
{
document.getElementById('happy').style.display="none";
document.getElementById('apertur').style.display="block";
}
function func10()
{
document.getElementById('mesa').style.display="none";
document.getElementById('cake').style.display="block";
}
function func11()
{
location.reload();
}

    },
          projects: async function() {

        await this.echo("Loading project page.");
        await delay(200);
        this.update(-1, "Loading project page..");
        await delay(200);
        this.update(-1,"Loading project page...\n")
        await delay(200);
        this.update(-1,"Loading project page....\n")
        await delay(200);
        this.update(-1,"Loading project page.....\n")
        await delay(200);
        this.update(-1,"Loading project page......[[;#44D544;](OK)]")
        await delay(200);

        await this.echo("Rendering.");
        await delay(200);
        this.update(-1, "Rendering...");
        await delay(200);
        this.update(-1,"Rendering.....")
        await delay(200);
        this.update(-1,"Rendering........")
        await delay(200);
        this.update(-1,"Rendering...........")
        await delay(200);
        this.update(-1,"Rendering..................")
        await delay(200);
        this.echo(() => "[[b;#FFA500;]" + render(this, 'SELECTED WORK', 'Slant') + "]");


        await this.echo("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n");
              //await delay(1000);

     this.echo('<div class="row"> <div class="column">  <a href="https://gorkem.cc"><img src="dither.jpg" class="projects"></a>Lorem Ipsum</div> <div class="column">  <img src="dither.jpg" class="projects">Lorem Ipsum</div> <div class="column"> <img src="dither.jpg" class="projects">Lorem Ipsum</div> \n </div>',{raw: true });
       this.pause();
       await this.echo("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n");
       await this.update(-5, "Rendering.................[[;#44D544;](OK)]")

       //setTimeout(function(){ document.location.href = 'https://gorkem.cc/projects.html'; }, 1200);
        //if(ga != undefined) ga('send', 'event', 'projects');
    },
        publicPGPkey: function() {
        showPGP(this);
 
    },

         pics: function() {
         this.echo("Loading flickr photostream...\n")
        setTimeout(function(){ document.location.href = 'https://www.flickr.com/photos/gocivici'; }, 1200);

    },
        share: function() {
        this.echo("share: //TODO")

    },
         cv: function() {
        this.echo("Seriously, you came this far asking for a CV?")
        this.error("Try again, please.");

    },
        su: function(user) {
        this.echo("Seriously, [[b;#44D544;]"+user+"]!? I like you. Who are you?")

    },
    sudo: function() {
        this.echo("no :)")
   
    },
    id: function(){
        this.echo("uid=1000(tui) gid=1000(tui)");
  
    },
    startx: async function() {
      this.echo("Starting graphical interface.\n")
      await delay(500);
      this.update(-1,"Starting graphical interface..\n")
      await delay(500);
      this.update(-1,"Starting graphical interface...\n")
      await delay(500);
      this.update(-1,"Starting graphical interface....\n")
      await delay(500);
      this.update(-1,"Starting graphical interface.....\n")
      await delay(500);
      this.update(-1,"Starting graphical interface......[[;#44D544;](OK)]\n")
      this.echo(() => '[[b;#FFFFFF;]' + render(this, 'WEB 1.0', 'Larry 3D') + ']');
     setTimeout(function(){ document.location.href = 'https://gorkem.cc'; }, 1200);

   
    }
}



window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {


           $('body').terminal(App, {
            greetings: "[[b;#FFA500;]                                                    \n"+
            "  _____ _   _      _                _      __          __  _                               \n"+
            " / ____(_) (_)    | |              ( )     \\ \\        / / | |                              \n"+
            "| |  __  ___  _ __| | _____ _ __ __|/ ___   \\ \\  /\\  / /__| |__  ___ _ __   __ _  ___ ___  \n"+
            "| | |_ |/ _ \\| '__| |/ / _ \\ '_ ` _ \\/ __|   \\ \\/  \\/ / _ \\ '_ \\/ __| '_ \\ / _` |/ __/ _ \\ \n"+
            "| |__| | (_) | |  |   <  __/ | | | | \\__ \\    \\  /\\  /  __/ |_) \\__ \\ |_) | (_| | (_|  __/ \n"+
            " \\_____|\\___/|_|  |_|\\_\\___|_| |_| |_|___/     \\/  \\/ \\___|_.__/|___/ .__/ \\__,_|\\___\\___| \n"+
            "                                                                    | |            v1.09.8\n\n"+
                    // "]\n\n[[;#44D544;]Welcome stranger,\ntype] [[b;#fff;]help] [[;#44D544;]to list available commands,\n][[b;#fff;]whoareyou] [[;#44D544;]to read something about me,\nor ][[b;#fff;]about][[;#44D544;] to learn about this webpage. ]\n\n",
                    "\n]\n[[;#dedede;]Hi, welcome to my little corner on the internet!][[;#FFA500;]                     \n"+
                    "][[;#dedede;]Type] [[b;#FFA500;]help] [[;#dedede;]to list available commands,][[;#FFA500;]                                ]\n"+
                    "[[b;#FFA500;]projects] [[;#dedede;]to view the projects I've been working on,][[;#FFA500;]                  \n"+
                    "][[;#dedede;]or ][[b;#FFA500;]about][[;#dedede;] to learn more about me.][[;#FFA500;]                                     ]\n[[;#FFA500;]                                                                           \n",

                prompt: function(p){
            var path = '~'
            p("[[b;#FFA500;]"+ e + ":" + path + "# ]");
        },
        tabcompletion: true
        });



});






async function showHelp(consoleObj)
{
        consoleObj.echo("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
        //await delay(100);
        //consoleObj.echo("Available commands:");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]about]             [[;#dedede;]learn more about me]");
        await delay(100);
        // consoleObj.echo("\t[[b;white;]projects]          [[;#FFA500;]view some of the projects I've been working on");
        // await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]CV]                [[;#dedede;]open CV] ");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]contact]           [[;#dedede;]get in touch]");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]startx]            [[;#dedede;]start GUI]");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]starwars]          [[;#dedede;]watch Star Wars in ASCII]");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]clear]             [[;#dedede;]clear the console]");
        await delay(100);
        consoleObj.echo("\t[[b;#FFA500;]help]              [[;#dedede;]this menu screen.]");
        await delay(100);
        // consoleObj.echo("");
        // await delay(100);
        consoleObj.echo("[[b;#ffff00;]TIP]:  [[;#FFA500;]you can use the up and down keys to see previous commands]");
        await delay(100);
        consoleObj.echo("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
}


//var offset = $('.terminal').offset();
//var y_pos = offset.top;
//console.log(y_pos);
//function bottom() {
//    document.getElementById("texteru").scrollIntoView();
//};
//bottom();


    
    // $('#starwarsterm').terminal(function(command, term){
    //     if (command == 'play') {
    //         term.pause();
    //         stop = false;
    //         play(term);
    //     }
    // }, {
    //     width: 500,
    //     height: 230,
    //     prompt: 'starwars> ',
    //     greetings: null,
    //     onInit: function(term) {
    //         greetings(term);
    //     },
    //     keypress: function(e, term) {
    //         if (e.which == 100 && e.ctrlKey) {
    //             stop = true;
    //             term.resume();
    //             return false;
    //         }
    //     }
    // });


