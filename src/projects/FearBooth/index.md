---
title: "Fear Booth"
summary: "Raspberry Pi Powered Photo Booth With a Spooky Twist"
image: FearBooth/img/fear.jpg
thumbnailImg: img/fear.jpg
imageAlt: "Project Image"
date: Last Modified
created: 2023-11-13
type: "Project Showcase"
tech:
  - "Raspberry Pi"
  - "Open CV"
  - "Halloween"
siteUrl: "#"
repoUrl: "https://code.gorkyver.com/Gorkem/FearBooth"
---
## Introduction {.invisible}

https://www.youtube.com/watch?v=24zeD8yWEug

**Featured on**
<img class="featured" src="/css/hackster.png"> [Hackster.io | This DIY Photo Booth Evaluates Your Fear Level](https://www.hackster.io/news/this-diy-photo-booth-evaluates-your-fear-level-3218704f0630){target="_blank"} {.press}




  

Happy Halloween!

Fear Booth is a Raspberry Pi powered photo booth that takes your picture like a regular photo booth but only prints it if you look scared! A Fear Level is assigned to every picture based on your facial expression (using OpenCV and DeepFace) so you can compare your scores to others.

I came up with this project because I wanted to create an interactive activity for a Halloween party. I built a photo booth for a different event before and for this event I was aiming for more than just regular pictures, I wanted to add a fun and interactive twist. The idea was to capture people's expressions to make the memories from the party truly stand out!

## Supplies
#### Electronics

- Raspberry Pi 3 or better(more processing power --> less lag)
- Logitech C270 Webcam
- Adafruit Thermal Printer & thermal paper roll
- Arcade button
- Any 5.5inch screen with composite output

#### 3D Printed parts

- CameraWindow
- CRTwindow
- backCover1
- backCover2
- screwCorners
- boxFront(optional*)
- boxBack(optional*)
- boxCombined(optional*)

*If you want to use a 3D-printed box rather than a wooden box

#### Tools

- 3D printer (optional if you can use wood, acrylic, etc. to mount the Raspberry Pi)
- Drill/Dremel
- Jigsaw
- Spray paint

## Setting Up The Raspberry Pi

📝**NOTE**
You can skip this step if you already have Raspberry Pi OS (64 bit) installed on your system. {.note}


![Raspberry Imager](img/OS.webp)

note: you'll need a keyboard, mouse, and monitor to set up your Raspberry Pi

Before we get into the program, we first need to set up our Raspberry Pi. Download the official Raspberry Pi Imager from the following link:

https://www.raspberrypi.com/software/

Attach the SD card to your computer and make sure you select "Raspberry Pi OS (64-bit)", this version will have all the software we need to run our program.

After you've installed the operating system and started your Raspberry Pi, open up the terminal and type:

```shell
sudo raspi-config
```

This will open up the configuration menu, navigate to Interfacing Options, and enable SSH.

Enabling SSH will help us get into the Raspberry Pi remotely so we won't have to use a keyboard, mouse, and monitor every time.

Now our Raspberry Pi is ready for our code!, in the next step, we'll connect the camera and electronics to our Raspberry Pi and test it with the Code.

## Assembly - Electronics

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/wiring.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/raspberryPi.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/wiring.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/raspberryPi.webp" alt="">
  </li>
</ul>

#### Webcam

The webcam is directly connected to the Raspberry Pi via USB, I'm using a Logitech webcam but any USB 2.0 webcam should work, try to avoid high-resolution webcams.

#### CRT TV 

Connect the CRT TV via the composite output which can be found on the 3.3mm jack on the Raspberry Pi.

#### Raspberry Pi GPIO Pins

I've used the physical pin numbering as shown in the diagram below

📝**NOTE**
Some arcade buttons have a build-in light that can be powered directly from the raspberry pi, if this is the case for you you can connect the positive terminal of the light to the 3.3v pin on the raspberry pi. {.note}

## The Code

We'll be using OpenCV(Open Source Computer Vision Library) for face detection, PIL(Python Image Library) for image processing, python-escpos for interfacing with the thermal printer, and DeepFace for emotion recognition. Let's install these libraries on our Pi.

### Install Libraries
📝NOTE
The latest Raspberry Pi OS has adopted PEP 668 – Marking Python base environments as “externally managed”. Thus it does not let you install system-wide packages via pip, the use of a virtual environment (venv) is recommended to install these packages. However, using venv led to a lot of issues for this project thus I implemented the `--break-system-packages` tag while installing with pip which is usually not recommended. {.note}

#### OpenCV


To install OpenCV via pip, open a terminal and type:
```shell
pip install opencv-python --break-system-packages
```
this command will install all packages necessary to run OpenCV.

#### DeepFace & PIL

Next, install Deepface & PIL by typing:
```shell 
pip install deepface --break-system-packages
pip install Pillow --break-system-packages
```

#### python-escpos

To install python-escpos type;
```shell
pip install python-escpos --break-system-packages
```
now reboot your Pi with;
```shell
sudo reboot
```

### FearBooth Code

All the required libraries are installed, now we can now download the project code from GitHub.

First, navigate to your desktop folder;
```shell
cd Desktop
```
next, install the latest FearBooth code from the repository;
```shell
git clone https://github.com/gocivici/FearBooth.git
```
After navigating into the project folder;
```shell
cd FearBooth
```
you should be able to run the program by;
```shell
python main.py
```

### Autostart

for more info and troubleshooting check: https://learn.sparkfun.com/tutorials/how-to-run-a-raspberry-pi-program-on-startup#method-2-autostart

We want to run our script automatically when the Raspberry Pi boots up. To do that we will be using a method called Autostart. With this method, the graphical interface will initialize first and then run our script.

Open the Terminal and type:
```shell
mkdir /home/pi/.config/autostart
nano /home/pi/.config/autostart/fearBooth.desktop
```
Now copy the contents below inside the file you've just created:

```shell
[Desktop Entry]
Type=Application
Name=FearBooth
Exec=/usr/bin/python /home/pi/Desktop/FearBooth/main.py
```

save, exit with ctrl + x, reboot and you are done!

## Face Detection & Emotion Recognition 

![Fear Level](img/face.webp)

There are many Python libraries for detecting facial features for emotion recognition, for this project I chose the open-source DeepFace library as it is lightweight and easy to run on a Raspberry Pi.

DeepFace comes with a strong facial attribute analysis module that can detect anger, fear, sadness, disgust, happiness, and surprise. To use this module you simply call;
```py
predictions = DeepFace.analyze(img,actions=['emotion'])
```
This variable stores the values for all emotions but in our case we want to access the Fear value, we can do this by;
```py
fearValue = predictions[0]["emotion"]["fear"]
```
This value is a floating-point number between 0 and 100. You can use this variable to assign any conditions to your liking. For this project, we want to print the picture if the value is above a certain threshold so we are going to compare the value to that number.

For more detailed information visit the [DeepFace Repository](https://github.com/serengil/deepface)

## The Box
Initially, I intended to 3D print the entire box; however, the size limitations of my 3D printer led me to opt for constructing a wooden box instead. If you have a larger printer, you can still proceed with printing the box. I've included the necessary files in the supplies step.
### Design
![Box Drawing](img/box.webp)
For the enclosure I found a wood crate which was much cheaper compared to buying plywood and making a box from scratch.

I removed the lid and drew holes based on the template attached. Detailed instructions can be found on the pictures.

### Assembly

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/wood1.jpg" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/wood2.jpg" alt="">
      </li>
            <li class="splide__slide">
        <img src="img/wood3.jpg" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/wood1.jpg" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/wood2.jpg" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/wood3.jpg" alt="">
  </li>
</ul>

For the enclosure I found a wood crate which was much cheaper compared to buying plywood and making a box from scratch.

I removed the lid and drew holes based on the template attached.

### Painting

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/paint1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/paint2.webp" alt="">
      </li>
            <li class="splide__slide">
        <img src="img/paint3.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/paint1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/paint2.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/paint3.webp" alt="">
  </li>
</ul>

I created 3D-printed stencils to paint the letters onto the box. Simply align the stencils as shown in the pictures and use spray paint to paint the letters onto the surface.

## 3D printed Enclosure

![#d printer in action](img/3d.jpg)



There are 8 3D printed parts for this build;

- **CameraWindow:** The enclosure for the webcam, you can customize it based on the webcam you use. Can be printed without any support.
- **CRTwindow:** The window frame for the CRT TV
- **backCover1:** Back cover with vents. requires support with 45 degrees.
- **backCover2:** The second part of the back cover with vents. requires support with 45 degrees.
- **screwCorners:** Can be printed without any supports
- **boxFront**(optional*)
- **boxBack**(optional*)
- **boxCombined**(optional*)

The printer I used is the Voxelab Aquila with the following settings:

- Nozzle: 0.4mm
- infill: %20
- Filament: ZIRO Translucent PLA

## Final Assembly
### Mounting the Raspberry Pi
<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/mount1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/mount2.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/mount3.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/mount4.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/mount1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/mount2.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/mount3.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/mount4.webp" alt="">
  </li>
</ul>

### Mounting the TV

<div class="imageSlides">
<section id="main-carousel" class="splide" aria-label="project images">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="img/tv1.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/tv2.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/tv3.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/tv4.webp" alt="">
      </li>
      <li class="splide__slide">
        <img src="img/tv5.webp" alt="">
      </li>
    </ul>
  </div>
</section>
</div>
<ul id="thumbnails" class="thumbnails">
  <li class="thumbnail">
    <img src="img/tv1.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/tv2.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/tv3.webp" alt="">
  </li>
    <li class="thumbnail">
    <img src="img/tv4.webp" alt="">
  </li>
  <li class="thumbnail">
    <img src="img/tv5.webp" alt="">
  </li>
</ul>

## Conclusion

![Final back](img/final.webp)

With everything mounted, power up the setup. The Raspberry Pi should boot and run the Python script at startup, after a few seconds the TV should turn on, and you should be able to see yourself on the screen.

Next, push the button and strike your pose, the code should detect your face and assign your picture a value. Test the setup by trying different faces and have fun!

If you have any questions ask away! & tell me about your build!

