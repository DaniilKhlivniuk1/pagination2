const API_KEY = '49733554-11a6f2252188763a995943cdc';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;
let currentPage = 1;
const gallery = document.getElementById('image-gallery');
const loadMoreBtn = document.getElementById('load-more-btn');
async function fetchImages(page = 1) {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&editors_choice=true&image_type=photo&per_page=${PER_PAGE}&page=${page}`);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}
function displayImages(images) {
    images.forEach((image)=>{
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        gallery.appendChild(img);
    });
}
async function loadMoreImages() {
    const images = await fetchImages(currentPage);
    displayImages(images);
    currentPage += 1;
}
loadMoreBtn.addEventListener('click', loadMoreImages);
loadMoreImages();

//# sourceMappingURL=pagination2.de158e3a.js.map
