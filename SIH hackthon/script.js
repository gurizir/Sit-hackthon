const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
const articleId = urlParams.get('id');
console.log('Article ID:', articleId); // Check if the correct ID is being passed
fetch(`http://localhost:3000/articles/${articleId}`)
  .then(response => response.json())
  .then(article => {
    console.log('Fetched article:', article); // Check if the data is received
    // ...rest of your code
  })
  .catch(error => console.error('Error fetching article:', error));


function pageLoadAnimation() {
  gsap.from(".nav-links li", {
      y: -50, 
      opacity: 0, 
      duration: 1,
      stagger: 0.2, 
      ease: "power2.out"
  });

  gsap.from(".social-icons a", {
      y: -50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out"
  });

  gsap.from("#texty", {
      x: -200, 
      opacity: 0, 
      duration: 1.5,
      ease: "power2.out"
  });

  gsap.from(".box", {
      x: 200, 
      opacity: 0,
      duration: 1.5,
      stagger: 0.3, 
      ease: "power2.out"
  });
}


// function loaderAnimation() {
//   var loader = document.querySelector("#loader");
//   setTimeout(function () {
//       loader.style.top = "-100%";
//   }, 4200);
// }

// loaderAnimation();
pageLoadAnimation();

// Add Locomotive Scroll interaction using GSAP's ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// scroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//       return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => scroll.update());
// ScrollTrigger.refresh();
