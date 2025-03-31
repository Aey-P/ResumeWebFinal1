// Get the filter buttons
const filterItems = document.querySelectorAll(".filter-item");

// Function to handle filtering
function filterGallery(filterValue) {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
        if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Hide all gallery items when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => item.style.display = "none");
});

// Add event listener to filter buttons
filterItems.forEach(item => {
    item.addEventListener("click", function () {
        // Remove the active class from all buttons
        filterItems.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        this.classList.add("active");
        // Get filter category
        const filterValue = this.getAttribute("data-filter");
        // Call the filter function
        filterGallery(filterValue);
    });
});

// Function to open lightbox
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

// Function to close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Add event listener to all images in the gallery
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery-item img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this);
        });
    });
});
