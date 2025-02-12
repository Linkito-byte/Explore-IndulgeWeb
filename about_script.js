'use strict';

// document.getElementById('show-video-btn').addEventListener('click', () => {
//     const youtubeContainer = document.getElementById('youtube-container');
//     youtubeContainer.style.display = youtubeContainer.style.display === 'none' ? 'block' : 'none';
// });

document.addEventListener("DOMContentLoaded", setupAccordion);
console.log("Script loaded successfully!");


function setupAccordion() {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 1; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.opacity = 0;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.opacity = 1;
            }
        });
    }
}