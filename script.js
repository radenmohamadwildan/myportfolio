/// Project Data
const projects = {
    "IoT Lockdoor": {
        description: "Proyek keamanan berbasis sensor RFID.",
        link: "https://example.com/iot-lockdoor"
    },
    "Desain Web": {
        description: "Merancang situs penyimpanan data leader dan artikel.",
        link: "https://example.com/web-design"
    },
    "Aplikasi Mobile": {
        description: "Pengembangan aplikasi mobile untuk pengelolaan tugas.",
        link: "https://example.com/mobile-app"
    },
    "Desain Gambar": {
        description: "Proyek desain grafis untuk berbagai keperluan.",
        link: "https://example.com/design"
    }
};

// Modal Elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close-btn");

// View Button Event
document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
        const projectName = button.getAttribute("data-project");
        if (projects[projectName]) {
            modalTitle.textContent = projectName;
            modalDescription.textContent = projects[projectName].description;
            modalLink.href = projects[projectName].link;
            modal.style.display = "flex";
        }
    });
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
 }
});

// Filter Projects
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        document.querySelectorAll(".card").forEach(card => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let autoPlay;

function updateCarousel(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
});

function startAutoplay() {
    autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel(currentIndex);
    }, 5000);
}

function stopAutoplay() {
    clearInterval(autoPlay);
}

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// Start autoplay on load
startAutoplay();