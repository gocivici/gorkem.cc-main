brightnessSlider = document.getElementById('BrightnessSlider');
  brightnessValue = document.getElementById('BrightnessValue');
  contrastSlider = document.getElementById('ContrastSlider');
  contrastValue = document.getElementById('ContrastValue');

  brightnessSlider.oninput = function(){
    brightnessValue.innerHTML = this.value;
  }

    contrastSlider.oninput = function(){
    contrastValue.innerHTML = this.value;
  }

  console.log(contrastSlider.value);

          document.getElementById("submitButton").disabled = true;

        submitButton = document.getElementById('submitButton');

            let loadFile = function(event) {
            
          let image = document.getElementById("img");
          image.crossOrigin = "anonymous";
          image.src = URL.createObjectURL(event.target.files[0]);  
          document.getElementById("submitButton").disabled = false;
        };

submitButton.addEventListener('click', function () {

  var brightness = parseInt(brightnessSlider.value, 10);
  var contrast = parseInt(contrastSlider.value,10);

        uploadedImage = document.getElementById("img");
        //   let canvas = document.createElement("canvas");
          let canvas = document.getElementById('myCanvas');
          let context = canvas.getContext("2d");
          canvas.width = uploadedImage.width;
          canvas.height = uploadedImage.height;
        //   document.getElementById("output").appendChild(canvas);
          context.drawImage(uploadedImage, 0, 0);
          let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          let data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg; // red
            data[i + 1] = avg; // green
            data[i + 2] = avg; // blue
          }
          for (var i = 0; i < data.length; i += 4) {
              data[i]     = 255 - data[i]; // red
              data[i + 1] = 255 - data[i + 1]; // green
              data[i + 2] = 255 - data[i + 2]; // blue
            }

              applyBrightness(imageData.data, brightness);
              contrastImage(imageData.data, contrast);

            context.putImageData(imageData, 0, 0);
            function dlCanvas() {
                var dt = canvas.toDataURL('image/png');
                /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
                dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

                /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
                dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Sketch.png');

                this.href = dt;
              };
              document.getElementById("dl").addEventListener('click', dlCanvas, false);
              document.getElementById("outputWindow").style.display = "block";
              document.getElementById("result").style.display = "block";
              document.getElementById("dl").style.display = "block";
              window.scrollTo(0, document.body.scrollHeight);
            //let downloadimage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            //console.log(downloadimage);
        
    });
    function applyBrightness(data, brightness) {
  for (var i = 0; i < data.length; i+= 4) {
    data[i] += 255 * (brightness / 100);
    data[i+1] += 255 * (brightness / 100);
    data[i+2] += 255 * (brightness / 100);
  }
}


function contrastImage(d, contrast){  //input range [-100..100]
    
    contrast = (contrast/100) + 1;  //convert to decimal & shift range: [0..2]
    var intercept = 128 * (1 - contrast);
    for(var i=0;i<d.length;i+=4){   //r,g,b,a
        d[i] = d[i]*contrast + intercept;
        d[i+1] = d[i+1]*contrast + intercept;
        d[i+2] = d[i+2]*contrast + intercept;
    }
}


// {# function applyContrast(data, contrast) {
//   var factor = (259.0 * (contrast + 255.0)) / (255.0 * (259.0 - contrast));

//   for (var i = 0; i < data.length; i+= 4) {
//     data[i] = truncateColor(factor * (data[i] - 128.0) + 128.0);
//     data[i+1] = truncateColor(factor * (data[i+1] - 128.0) + 128.0);
//     data[i+2] = truncateColor(factor * (data[i+2] - 128.0) + 128.0);
//   }
// }

// function truncateColor(value) {
//   if (value < 0) {
//     value = 0;
//   } else if (value > 255) {
//     value = 255;
//   }

//   return value;
// } #}

          // here is the most important part because if you dont replace you will get a DOM 18 exception.

        
        // {# window.location.href=downloadimage; // it will save locally #}

