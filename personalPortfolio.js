let currentFontSize = 16;

function changeFontSize(step) {
    currentFontSize += step;
    document.body.style.fontSize = currentFontSize + "px";
}


function toggleDescription(imageNumber) {
    const description = document.getElementById(`desc-${imageNumber}`);
    
    
    if (description.style.display === "block") {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }
}
    