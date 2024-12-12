// Get the button element
const goUpBtn = document.getElementById("goUpBtn");

// Show button when scrolled down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goUpBtn.style.display = "block";
    } else {
        goUpBtn.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}