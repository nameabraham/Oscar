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




