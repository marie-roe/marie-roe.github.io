//get all images with data-src attribute
const imageLoad = document.querySelectorAll("img[data-src]");

//IntersectionaObserver

const imgOptions = {
  threshold: 1.0,
  rootMargin: "0px 0px 50px 0px"
};

const loadingImages = image => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//check to see if the IO is supported

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadingImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);
  imageLoad.forEach(img => {
    imgObserver.observe(img);
  });
} else {
  //not supported
  imageLoad.forEach(img => {
    loadingImages(img);
  });
}
