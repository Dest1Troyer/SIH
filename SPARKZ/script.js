function toggleContent() {
    // Get all extra career boxes
    const extraCareerBoxes = document.querySelectorAll('.career-box.extra');
    const showMoreBtn = document.getElementById('showmorebtn');
    
    // Toggle visibility of extra career boxes
    extraCareerBoxes.forEach(box => {
        if (box.style.display === "none") {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
    
    // Toggle button text
    if (showMoreBtn.textContent == "Show More") {
        showMoreBtn.textContent = "Show Less";
    } else {
        showMoreBtn.textContent = "Show More";
    }
}
