const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle.addEventListener("click", () => {
document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
navItem.addEventListener("click", () => {
document.querySelector(".nav-items").classList.toggle("active");
});
});

document.addEventListener('DOMContentLoaded', function () {
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
    const images = feature.querySelectorAll('.feature-images img');
    let currentIndex = 0;

    if (images.length > 0) {
        images[0].classList.add('active'); 
    }

    function changeImage() {
        images[currentIndex].classList.remove('active'); 
        currentIndex = (currentIndex + 1) % images.length; //   
        images[currentIndex].classList.add('active'); //   
    }

    setInterval(changeImage, 3000);  
});
});


document.addEventListener("DOMContentLoaded", function () {
const aboutSection = document.querySelector("#about-us");

function checkScroll() {
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
      aboutSection.classList.add("show");
  }
}

window.addEventListener("scroll", checkScroll);
});


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.classList.replace("fa-moon", "fa-sun"); 
} else {
    body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeToggle.classList.replace("fa-sun", "fa-moon");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
        themeToggle.classList.replace("fa-moon", "fa-sun"); 
    }
});



