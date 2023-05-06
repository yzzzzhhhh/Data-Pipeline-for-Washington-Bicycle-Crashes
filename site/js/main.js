
  import { showgalleryDataInForm } from './galleryinfo.js';
  import { initMap} from './map.js';
  import { downloadgalleries } from './position.js';

const loadOverlayEl = document.getElementById('load-overlay');
const toggleGridColorButton = document.getElementById('savebutton');
let baseMap = initMap();
window.baseMap=baseMap;

function updateselectedgalleryPositionOn(gallery) {
  baseMap.selectedLayer.clearLayers();
  baseMap.selectedLayer.addData(gallery);
  baseMap.fitBounds(baseMap.selectedLayer.getBounds());
}

function ongalleriesLoadSuccess(data) {
    baseMap.galleryLayer.addData(data);
    baseMap.riskScoreLayer.addData(data);
    loadOverlayEl.classList.add('hidden');
  }

// `ongallerySelected` will be called if and when the user clicks on a gallery on the
// map.
function ongallerySelected(evt) {
    const gallery = evt.layer.feature;
    showgalleryDataInForm(gallery);
  }

  function toggleGridColorVisibility() {
    if (baseMap.hasLayer(baseMap.riskScoreLayer)) {
      baseMap.removeLayer(baseMap.riskScoreLayer);
      baseMap.addLayer(baseMap.galleryLayer);
    } else {
      baseMap.removeLayer(baseMap.galleryLayer);
      baseMap.addLayer(baseMap.riskScoreLayer);
    }
  }


  function setupInteractionEvents() {
    baseMap.galleryLayer.addEventListener('click', ongallerySelected);
    toggleGridColorButton.addEventListener('click', toggleGridColorVisibility);

  }

  downloadgalleries(ongalleriesLoadSuccess);
  setupInteractionEvents();

  export{
    updateselectedgalleryPositionOn,
  };