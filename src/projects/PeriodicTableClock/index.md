---
title: "Periodic Table Clock"
summary: "A clock that displays the time using atomic numbers by illuminating different elements on a periodic table."
image: PeriodicTableClock/img/periodic.gif
thumbnailImg: img/periodic.gif
imageAlt: "Project Image"
date: Last Modified
created: 2023-02-27
type: "Project Showcase"
tech:
  - "Arduino"
  - "Clock"
siteUrl: "#"
repoUrl: "https://code.gorkyver.com/Gorkem/PeriodicTableClock"
---



## Introduction {.invisible}

https://youtu.be/1rN0i4n2dEY

**Featured on**
<img class="featured" src="/css/arduino.png"> [Arduino Blog | The Periodic Table Clock oozes nerdy charm](https://blog.arduino.cc/2023/03/03/the-periodic-table-clock-oozes-nerdy-charm/){target="_blank"}
<img class="featured" src="/css/hackaday.png"> [Hackaday.com | Displaying The Time Is Elemental With This Periodic Table Clock](https://hackaday.com/2023/03/07/displaying-the-time-is-elemental-with-this-periodic-table-clock/){target="_blank"}
<img class="featured" src="/css/hackster.png"> [Hackster.io | Know Your Atomic Numbers? This Periodic Table Clock Is for You](https://www.hackster.io/news/know-your-atomic-numbers-this-periodic-table-clock-is-for-you-b44d1222a272){target="_blank"} {.press}

📝**NOTE**
This Guide was originally published on instructables, you can view the comments to the original article on this archived link: https://archive.ph/5B1hY 
{.note}



In this guide, you'll learn how to create a unique clock that displays the time with the atomic numbers of elements on the periodic table. By illuminating specific elements on the table, time is represented in hours, minutes, and seconds. If you are familiar with the periodic table or the atomic numbers of the elements, you can tell the time from far away just by seeing the elements!

### How Is the Time Displayed?

The time is displayed using 3 colors Blue, Green, and Red representing hours, minutes, and seconds. If Oxygen is illuminated Blue, and Neon is illuminated Green it means the time is 8h:10m or in other words Neon past Oxygen! 

## Supplies

![supplies](img/supp.webp)

#### Tools
- 3D Printer
- Pliers
- Soldering Iron, solder and flux
#### Parts
- Arduino Nano
- RTC DS1307 realtime clock module
- WS2812B LED Strip: 60 LEDs per meter
- 330.8 x 173 x 3mm semitransparent plexiglass
- 12 x 3mm threaded inserts
- 12 x 8mm hex screws
- 5v 2A power supply
#### 3D Printed Parts
- Base Plate 1 & 2
- Frame Corner x 3
- Frame Corner with Buttons x 1
- Frame Long x 2
- Frame Short x 2
- Light guide 1 & 2 & 3

## 3D Print

![3D printer](img/3D.jpg)

I recommend you to print all pieces before assembly. It will be much easier to assemble with every piece on your reach.

I've used two different filaments for the frame and the base.

**Red Filament** - All frame parts

**White Filament** - Base and Light guides

The printer I used is the Voxelab Aquila with the following settings:
- Nozzle: 0.4mm
- Infill: %20
- Filament: ZIRO Translucent PLA

## The Periodic Table

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/table1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/table2.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/table1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/table2.webp" alt="">
  </li>
</ul>


I created the Periodic table from scratch in Adobe Illustrator to match the exact dimensions, the design was later UV printed onto the 3mm plexiglass. I contacted a local advertising agency that produces engraved keychains etc. but also offers UV prints on plexiglass.

My second option was to print the periodic table onto transparent sticker paper with an inkjet printer and attach the paper to the plexiglass. This would also keep the transparency for light to shine through however the first option was more accessible for me that's why I went with that one instead.

## Assembly - Part I

### Electronics

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/electronics1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/electronics2.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/electronics3.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/electronics4.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/electronics1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/electronics2.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/electronics3.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/electronics4.webp" alt="">
  </li>
</ul>

For the first protoype you don't have to use a soldering Iron. I strongly recommend you to use jumper cables, so you can change any component if it isn't working properly.
Soldering on the Protoboard

First, make the connections as shown on a breadboard and make sure that it works probably before soldering the Arduino and RTC to the board.

### Base Plate


<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/base1.jpg" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/base2.jpg" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/base3.jpg" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/base4.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/base5.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/base6.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/base1.jpg" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/base2.jpg" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/base3.jpg" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/base4.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/base5.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/base6.webp" alt="">
  </li>
</ul>

Parts used in this step:
- [3d printed] BasePlate 1 & 2, LightGuide 1 & 2 & 3
- LED Strip

## The Code

We'll be using the FastLED Library for the addressable LEDs along with Wire.h and RTClib.h to control the RealTimeClock.

The FastLED Library for Arduino can be downloaded here: https://fastled.io/

And the RTClib can be found here: https://www.arduinolibraries.info/libraries/rt-clib

### Customization

To customize your date and time setting, go to void setup and edit this line:

```arduino
RTC.adjust(DateTime(Year, Month, Day, Hour, Minute, Second));
```

After you upload the code, the RTC will start from the defined date and time.

You can also customize the color of the LED's by editing this line:
```arduino
#define hourColor CRGB::Blue;
#define minuteColor CRGB::Green;
#define secondColor CRGB::Red;
```

These values can also be edited with custom RGB values such as:

```arduino
#define secondColor CRGB(255,0,0);
```
Where each number represents the RGB value, in this case Red=255, Green=0, Blue=0

There's also the option to customize the overlapping colors, these colors are displayed if there's an overlap between hours, minutes and seconds. eg. the time is 08:08:08
```arduino
#define HMoverlap CRGB::Cyan;
#define MSoverlap CRGB::Yellow;
#define SHoverlap CRGB::Purple;
```
Note: If you don't have experience with Arduino or don't know how to install libraries you can check this site.

### Upload The Code

Now you can upload the code to your Arduino and test the LED lights for the first time!

## First Test

You are done with the basics now it's time to test this clock! Now while doing that you should check a few things to be sure that this clock can run for 7/24 straight.

Things to look for:

- Is every LED properly displaying all the colors?
- Is the clock on time after several hours?
- Are the LEDs in order?
- If your answer is no for at least one of those questions, you can check the Troubleshooting step!

If your answer is yes, then congratulations you've built a precise clock!

## Assembly - Part II

### The Frame

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/supp.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/frame2.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/frame3.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/frame4.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/frame5.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/supp.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/frame2.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/frame3.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/frame4.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/frame5.webp" alt="">
  </li>
</ul>

Parts used in this step:
- [3D printed] Frame Corner x 3 , Frame Corner with Buttons x 1 , Frame Long x 2 , Frame Short x 2
- 10 x 3mm threaded inserts
- 10 x 8mm hex screws

## Setting the Time

![buttons at the back](img/timeSet.webp)

You are done! Now there is one thing left to do, setting the time manually.

The functions for the buttons on the back are:

**Menu button:**

Cycles between settings

- Set minutes
- Set hours
- 
While in the Menu options you can use the up & down to increase/decrease values and set the time

**Toggle Seconds & Set Brightness:**

While the clock is in time display mode, you can use the up & down buttons to toggle between h:m:s or h:m and set the brightness to your liking.

## Troubleshooting

**The Order of the LEDs are wrong**

- No need to panic, you can easily fix this in the code by editing this line according to your LED setup.
```Arduino
int periodic[NUM_LEDS] {0,58,59,57,56,55,54,53,52,51,50,42,43,..}
```
**The Clock is not on time**

- One issue I faced was the battery of the RTC. If the timing is lagging you might need to change your battery on the RTC.

**LEDs are too bright**

- You can change the brightness of the LEDs in the code from 0 to 255:
 ```Arduino
 #define BRIGHTNESS 255
 ```
