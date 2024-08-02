function changePic(clickedImage) {
    const imageSources = ["images/capitu.jpeg", "images/capitu2.jpeg", "images/capitu3.jpeg"];
    let currentIndex = parseInt(clickedImage.dataset.index);
    currentIndex = (currentIndex + 1) % imageSources.length;
    clickedImage.src = imageSources[currentIndex];
    clickedImage.dataset.index = currentIndex;
  }