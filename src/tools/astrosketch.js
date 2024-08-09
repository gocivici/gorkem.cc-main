brightnessSlider = document.getElementById("BrightnessSlider");
brightnessValue = document.getElementById("BrightnessValue");
contrastSlider = document.getElementById("ContrastSlider");
contrastValue = document.getElementById("ContrastValue");

brightnessSlider.oninput = function () {
  brightnessValue.innerHTML = this.value;
};

contrastSlider.oninput = function () {
  contrastValue.innerHTML = this.value;
};

//console.log(contrastSlider.value);

document.getElementById("submitButton").disabled = true;

submitButton = document.getElementById("submitButton");

let loadFile = function (event) {
  let image = document.getElementById("img");
  image.crossOrigin = "anonymous";
  image.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById("submitButton").disabled = false;
};

submitButton.addEventListener("click", function () {
  var brightness = parseInt(brightnessSlider.value, 10);
  var contrast = parseInt(contrastSlider.value, 10);

  uploadedImage = document.getElementById("img");
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  canvas.width = uploadedImage.width;
  canvas.height = uploadedImage.height;
  context.drawImage(uploadedImage, 0, 0);
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

//Grayscale image
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }

//Invert image
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }

  applyBrightness(imageData.data, brightness);
  contrastImage(imageData.data, contrast);

  context.putImageData(imageData, 0, 0);

  //Thanks Nippey from: https://stackoverflow.com/questions/12796513/html5-canvas-to-png-file
  function dlCanvas() {
    var dt = canvas.toDataURL("image/png");
    /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
    dt = dt.replace(/^data:image\/[^;]*/, "data:application/octet-stream");

    /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
    dt = dt.replace(
      /^data:application\/octet-stream/,
      "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Sketch.png"
    );

    this.href = dt;
  }

  document.getElementById("dl").addEventListener("click", dlCanvas, false);
  document.getElementById("outputWindow").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("dl").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);

});

function applyBrightness(data, brightness) {
  for (var i = 0; i < data.length; i += 4) {
    data[i] += 255 * (brightness / 100);
    data[i + 1] += 255 * (brightness / 100);
    data[i + 2] += 255 * (brightness / 100);
  }
}

function contrastImage(d, contrast) {
  contrast = contrast / 100 + 1; 
  var intercept = 128 * (1 - contrast);
  for (var i = 0; i < d.length; i += 4) {
    //r,g,b,a
    d[i] = d[i] * contrast + intercept;
    d[i + 1] = d[i + 1] * contrast + intercept;
    d[i + 2] = d[i + 2] * contrast + intercept;
  }
}


