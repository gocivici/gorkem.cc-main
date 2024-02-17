var allsplides = [];
var splides = document.querySelectorAll(".splide");
var allthumbnails = document.querySelectorAll(".thumbnails");
// console.log(allthumbnails)

if (splides.length) {
  // 2. process all instances
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    //3.1 if no options are defined by 'data-splide' attribute: take these default options
    var splideDefaultOptions = {
      type: "slide",
      rewind: true,
      perPage: 1,
      autoplay: false,
      arrows: true,
      pagination: false,
      drag: true,
      keyboard: true,
      // heightRatio: 1,
      cover: false,
    };
    /**
     * 3.2 if options are defined by 'data-splide' attribute: default options will we overridden
     * see documentation: https://splidejs.com/guides/options/#by-data-attribute
     **/

    allsplides[i] = new Splide(splideElement, splideDefaultOptions);
    // 3. mount/initialize this slider
    console.log(i);

    allsplides[i].thumbnails = allthumbnails[i].getElementsByClassName("thumbnail");
    console.log(allsplides[i].thumbnails[0]);

    allsplides[i].current;

    for (var j = 0; j < allsplides[i].thumbnails.length; j++) {
      initThumbnail(i, allsplides[i].thumbnails[j], j);
    }

    initActive(i);

    allsplides[i].mount();
  }
  function initThumbnail(splideNo, thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      allsplides[splideNo].go(index);
    });
  }
  function initActive(splideNo) {
    allsplides[splideNo].on("mounted move", function () {
      var thumbnail =
        allsplides[splideNo].thumbnails[allsplides[splideNo].index];

      if (thumbnail) {
        if (allsplides[splideNo].current) {
          allsplides[splideNo].current.classList.remove("is-active");
        }

        thumbnail.classList.add("is-active");
        allsplides[splideNo].current = thumbnail;
      }
    });
  }
}
