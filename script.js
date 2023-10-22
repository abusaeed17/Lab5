
const addBtn = document.getElementById("addBtn");
const addFileBtn = document.getElementById("addFileBtn");
const fileInput = document.getElementById("fileInput");


function createImg(photoURL) {
    const imgElm = document.createElement('img');
    imgElm.src = photoURL;
    imgElm.className = 'image-container';
    

    imgElm.addEventListener('click', function() {
        if (this.classList.contains('zoom-in')) {
            this.classList.remove('zoom-in');
        } else {
            this.classList.add('zoom-in');
        }
    });

    return imgElm;
}


function addImg(imgElm) {
    const photoGallary = document.getElementById('photo-gallary');
    photoGallary.appendChild(imgElm);
}


addBtn.addEventListener('click', () => {
    const photoURL = prompt('Enter the URL of the photo:');
    if (photoURL) { 
        const imgElm = createImg(photoURL);
        addImg(imgElm);
    }
});


addFileBtn.addEventListener('click', () => {
    fileInput.click(); 
});


fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgElm = createImg(event.target.result);
            addImg(imgElm);
        };
        reader.readAsDataURL(file);
    }
});
