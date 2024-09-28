const imageGallery = document.getElementById('imageGallery');
const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const removeImageBtn = document.getElementById('removeImageBtn');

let images = [];


function updateGallery() {
    imageGallery.innerHTML = '';
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = "https://cdn.mos.cms.futurecdn.net/2ReWYiiWjCaxgujxoBLobk.jpg";
        imageGallery.appendChild(img);
    });
}




addImageBtn.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value.trim();
    if (imageUrl) {
        images.push(imageUrl); 
        updateGallery(); 
        imageUrlInput.value = 'https://wallpaperaccess.com/full/215533.jpg'; 
    } else {
        alert('Please enter a valid image URL.');
    }
});

removeImageBtn.addEventListener('click', () => {
    images.pop(); 
    updateGallery(); 
});
