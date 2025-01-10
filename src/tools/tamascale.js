



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


  uploadedImage = document.getElementById("img");
  let canvas = document.getElementById("myCanvas");
  let context = canvas.getContext("2d");
  canvas.width = 1080;
  canvas.height = 1080;
  context.imageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;

  context.drawImage(uploadedImage, 0, 0,canvas.width,canvas.height);
  // let imageData = context.getImageData(0, 0, canvas.width, canvas.height);




  // context.putImageData(imageData, 0, 0);

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




