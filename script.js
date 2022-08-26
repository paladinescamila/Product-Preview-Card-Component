const imageElement = document.getElementById('image');

const chooseImage = () => {
	if (window.innerWidth > 650) imageElement.src = 'img/image-product-desktop.jpg';
	else imageElement.src = 'img/image-product-mobile.jpg';
};

window.onload = chooseImage;
window.onresize = chooseImage;
