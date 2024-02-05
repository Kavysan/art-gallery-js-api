
async function fetchData() {
    try {
      const response = await fetch('https://api.artic.edu/api/v1/artworks');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
}
  

async function displayGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    const artworks = await fetchData();
    
    galleryContainer.style.textAlign = 'center';
    

    artworks.forEach((artwork) => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-image col';


        galleryContainer.style.display = 'grid';
        galleryContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        galleryContainer.style.placeItems = 'center';

        
        const img = document.createElement('img');
        img.src = `images/${artwork.main_reference_number}.jpg`;
        img.alt = artwork.title;
        img.className = 'img-fluid shadow-lg col-lg-24 col-md-12';

        img.style.height = '200px';
        img.style.width = 'auto';

        img.style.width = '500px';
    
        const popup = document.createElement('div');
        popup.className = 'popup';
        const title = document.createElement('h1');
        title.className = 'popup-title';
        title.textContent = artwork.title;
        const artist = document.createElement('span');
        artist.className = 'popuptext';
        artist.textContent = artwork.artist_display;

        title.style.color = 'black';
        title.style.fontSize='20px';
        title.style.fontWeight='bolder'

    
        popup.appendChild(title);
        popup.appendChild(artist);
    
        figure.addEventListener('mouseover', () => showInfo(popup));
        figure.addEventListener('mouseout', () => hideInfo(popup));
    
        figure.appendChild(img);
        figure.appendChild(popup);
    
        galleryContainer.appendChild(figure);
    });
}

  
function togglePopup(popup) {
    popup.classList.toggle('show');
}
  

function showInfo(popup) {
    togglePopup(popup);
}
  

function hideInfo(popup) {
    togglePopup(popup);
}
  

displayGallery();
  
