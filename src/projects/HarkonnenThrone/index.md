---
title: "LEGO Dune - Baron Harkonnen Throne Automata"
summary: "Custom built LEGO Dune Harkonnen throne with display and sound"
image: HarkonnenThrone/img/throne.webp
custombg: img/dunebg.png
imageAlt: "Project Image"
date: Last Modified
created: 2024-07-15
type: "Project Showcase"
tech:
  - "Lego"
  - "Arduino"
  - "Kinetic"
siteUrl: "#"
repoUrl: "#"
---

## Introduction {.invisible}

<script
  defer
  src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
/>

<style>
  .before,
  .after {
    margin: 0;
  }

  .before figcaption,
  .after figcaption {
    background: #fff;
    border: 1px solid #c0c0c0;
    border-radius: 12px;
    color: #2e3452;
    opacity: 0.8;
    padding: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 100%;
  }

  .before figcaption {
    left: 12px;
  }

  .after figcaption {
    right: 12px;
  }
</style>



![harkobaby](img/DSC00663.webp)


The LEGO Harkonnen Throne is a custom-built LEGO automata set based on the Harkonnen throne room from Denis Villeneuve's DUNE adaptation. When the button is pressed, it triggers a kinetic recreation of the iconic throne room scene from the movie, complete with audio and movement. 

<img-comparison-slider>
  <img slot="first" src="img/original.webp" />
  <img slot="second" src="img/Lego.webp" />
</img-comparison-slider>
<small style="text-align:center;display:block;"><em>Dune: Part One (2021)</em> vs <em>my LEGO Recreation</em></small>


## Background
### Inspiration
Prior to the premiere of Dune: Part Two last March, LEGO unveiled the 10327 Dune Atreides Royal Ornithopter [in a presentation led by Mike Psiaki.](https://www.youtube.com/watch?v=Rdy2XRyggG4){target="_blank"} It featured functional blades that flap and retract like a dragonfly, and included 8 minifigures: Paul Atreides, Lady Jessica, Gurney Halleck, Chani, Leto Atreides, Liet Kynes, Duncan Idaho, and Baron Harkonnen.

I purchased the set as soon as it became available in my country. It was super fun to build, and despite being an Icons set, it included creative mechanics like a Technics set, which I appreciated. I also liked the included minifigures, though I felt that one of them, *Baron Harkonnen*, did not quite fit with the rest. So, I decided to build a LEGO throne based on the movie for the Baron and design a display case to showcase it like an actual set!

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/official.webp" alt="">
        <small>source: <a target="_blank" href="https://www.lego.com/en-us/categories/adults-welcome/article/making-the-lego-dune-ornithopter">Official LEGO Dune Set</a></small>
      </li>
      <li class="splide__slide">
        <img src="img/dunelego.webp" alt="">
         <small>source: <a target="_blank" href="https://www.lego.com/en-us/categories/adults-welcome/article/making-the-lego-dune-ornithopter">Official LEGO Dune Set</a></small>
      </li>
      <li class="splide__slide">
        <img src="img/strwrs.webp" alt="">
         <small>LEGO Star Wars interactive store display, one of the inspirations for this project</small>
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/official.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/dunelego.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/strwrs.webp" alt="">
  </li>
</ul>


## Supplies

### Parts List
- [Arduino Nano](https://en.wikipedia.org/wiki/Arduino_Nano){target="_blank"}
- [28byj-48 stepper and ULN Driver](https://en.wikipedia.org/wiki/ULN2003A){target="_blank"}
- 16mm LED Momentary Push Button
- 220 x 500 x 1mm Clear PETG Sheet
- 75mm Speaker - 4Ω 3W
- [DFPlayer mini MP3 module](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299){target="_blank"}
- white LED Strip
- Glossy A4 Photo Paper
  
### Tools
- 3D printer
- Soldering Iron, Solder & Flux
- 16mm Drill bit
- Multitool

### Lego Parts

[Full Instruction Guide PDF <img align="left" style="width:30px; height:30px; padding:5px;" src="img/download.gif">  ](./Duneinstruction.pdf)

<!-- <div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/11_1x.png" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/12_1x.png" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/13_1x.png" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/11_1x.png" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/12_1x.png" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/13_1x.png" alt="">
  </li>
</ul> -->


### 3D parts
I printed the parts on a FDM 3D printer with a .4 nozzle and 40% infill.

| Complete Render | Part Name | Download |
|-----------|--------|------|
|   <iframe id="vs_iframe" src="https://www.viewstl.com/?embedded&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgocivici%2FLegoHarkonnen%2F1d5eae7f858123f1e8fdb88a23c56d40ce6c3760%2FCAD%2Fstl%2Fassembled%2FbaseComplete.stl&orientation=bottom&clean=no&bgcolor=transparent&noborder=yes&color=white" style="border:0;margin:0;width:100%;"></iframe>   | `Base.stl`, `BaseBack.stl`, `BaseRail.stl`, `BaseRoof.stl`, `SpeakerMount.stl`  | ![download](img/download.gif) |
|<iframe id="vs_iframe" src="https://www.viewstl.com/?embedded&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgocivici%2FLegoHarkonnen%2F5a7d04a37a9ffdd9585129f125cd81a9c898169f%2FCAD%2Fstl%2Fassembled%2FLiftAssembled.stl&orientation=front&clean=no&bgcolor=transparent&noborder=yes&color=white&shading=flat&edges=no" style="border:0;margin:0;width:100%;"></iframe>      |  `LiftMotorMount.stl`, `LiftGuide.stl`, `LiftLeftLego.stl`, `LiftRightLego.stl`, `LiftRack.stl`, `LiftSpurGear.stl`      |  ![download](img/download.gif)    |


<!-- <iframe id="vs_iframe" src="https://www.viewstl.com/?embedded&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgocivici%2Ftrinteract%2F52988a95eed437b606ec555fda16bd22da3d8532%2FCAD%2Fstl%2Fbase.stl&color=red" style="border:0;margin:0;width:100%;height:100%;"></iframe> -->

## Design and build
### The Throne
I couldn’t find any reference materials of the throne. There are no behind-the-scenes footage or pictures of the throne room set available online. So, my only source was to take screenshots from the movie and zoom in to get the details I needed.
<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/throne0.webp" alt="">
        <small>Throne Room Scene 300% Zoomed in</small>
      </li>
      <li class="splide__slide">
        <img src="img/throne1.webp" alt="">
         <small>First prototype</small>
      </li>
      <li class="splide__slide">
        <img src="img/throne2.webp" alt="">
         <small>First prototype using Technic bricks</small>
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/throne0.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/throne1.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/throne2.webp" alt="">
  </li>
</ul>

<!-- ### LEGO Studio -->
After having a clear picture of what I wanted in my mind, I began creating the build using BrickLink Studio. Studio allows you to render your build, which was extremely helpful for me as I wanted to compare it with references from the movie.

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/studio.webp" alt="">
        <small><a target="_blank" href="https://www.bricklink.com/v3/studio/download.page">BrickLink Studio 2.0</a></small>
      </li>
      <li class="splide__slide">
        <img src="img/render1.webp" alt="">
         <small>Initial render</small>
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/studio.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/render1.webp" alt="">
  </li>
</ul>


### LEGO Instructions
I created step-by-step LEGO style instructions with a full list of parts needed for the build, you can download the PDF here: 
[Link to PDF <img align="left" style="width:30px; height:30px; padding:5px;" src="img/download.gif">  ](./Duneinstruction.pdf)

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/instructions.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/11_1x.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/instructions.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/11_1x.webp" alt="">
  </li>
</ul>


<!-- ![Dune instructions](img/instructions.jpg) -->
<!-- <embed src="./Duneinstruction.pdf" width="100%" height="600" 
 type="application/pdf"> -->
### Enclosure: Inspiration

My main inspiration for the display came from official LEGO Store displays, which are often built for third-party stores like Target and Walmart. These displays typically feature a combination of light and sound effects triggered by a button. Although they're designed to be destroyed after their set shelf life, you can find them in flea markets or on auction sites like eBay.

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/ebayDisplay.webp" alt="">
        <small><a target="_blank" href="https://archive.is/5mOSC">Official LEGO store display sold on eBay</a></small>
      </li>
      <li class="splide__slide">
        <img src="img/reddit.webp" alt="">
         <small><a target="_blank" href="https://www.reddit.com/r/lego/comments/p5ihzk/i_found_the_lego_store_display_valhalla_this_is/">A set of store displays found on Reddit</a></small>
      </li>
            <li class="splide__slide">
        <img src="img/ebayDisplay2.webp" alt="">
         <small>Instructions to destroy the display</small>
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/ebayDisplay.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/reddit.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/ebayDisplay2.webp" alt="">
  </li>  
</ul>

### Enclosure: My Build
Rather than building a high-end plexiglass collector's case I wanted to create a display case similar to the official display cases, as if it were an actual moviee tie-in lego set you would see in a third party store. 

I designed the case in Fusion 360 and printed it on my 3D Printer, I used a hairdryer to bend a PET-G sheet around the enclosure, marked the holes and drilled them.


<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/Enclosure.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/case1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/case2.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/Enclosure.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/case1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/case2.webp" alt="">
  </li>
</ul>

<!-- ![Enclosure Drawing](img/Enclosure.png) -->

### Wiring

__28BYJ-48 Stepper__: The stepper motor pins `IN1`, `IN2`, `IN3`, `IN4` are connected to pins `9`, `10`, `11`, `12` on the Arduino.
__DFplayer mini__: `RX` is connected to `D4` with a 10K resistor, and `TX` is connected to `D3`. `SPK1` and `SPK2` are connected to a speaker less than 3W.
__Push Button__: The LED on the push button is connected to `D5` and `NO` is connected to `D6` with a 10K resistor in parallel.

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/wiring1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/wiring2.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/wiring1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/wiring2.webp" alt="">
  </li>
</ul>

### Firmware
I simply programmed the arduino to closely match the speed of the motor to the movement of the Baron in the movie. The motor and sound are triggered by the button press, the program is reset after the animation is complete.

Complete source code for this project is available on the [project’s GitHub page.](https://github.com/gocivici/LegoHarkonnen)

<script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fgocivici%2FLegoHarkonnen%2Fblob%2Fmain%2FLegoHarkonnen%2FLegoHarkonnen.ino&style=a11y-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script>

## Assembly and Demo

I forgot to get detailed still images of the project while I was working on it. However I have a video in the works, will share it here once it's done!

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/assembly1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/assembly2.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/assembly3.webp" alt="">
      </li>      
      <li class="splide__slide">
        <img src="img/assembly4.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/assembly5.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/assembly1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/assembly2.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/assembly3.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/assembly4.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/assembly5.webp" alt="">
  </li>
</ul>

If you like what I do and want to stay updated you can follow me on [social media](/about). If you'd like to support my projects consider getting me a cup of coffee! 

<small>
<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#e02828', 'S6S0ETKTV');kofiwidget2.draw();</script> 
</small>




<!-- <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@gorkyver/video/293628450995908608" data-video-id="293628450995908608" style="width: 325px;" > <section> <a target="_blank" title="@gorkyver" href="https://www.tiktok.com/@gorkyver?refer=embed">@gorkyver</a> <p></p> <a target="_blank" title="♬ It&#39;s Your Birthday - R.Kelly" href="https://www.tiktok.com/music/It's-Your-Birthday-222584464017645568?refer=embed">♬ It&#39;s Your Birthday - R.Kelly</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> -->

<!-- ![under construction](/images/construction.gif) -->