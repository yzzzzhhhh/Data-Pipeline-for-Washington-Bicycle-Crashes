let galleryInput = document.querySelector('#researchbox');
window.galleryInput = galleryInput;
let galleryButton=document.querySelector('#researchbutton');
window.galleryButton = galleryButton;
const galleryEl = document.getElementById('info');
export let galleries;
export let gallerydata;
import{ updateselectedgalleryPositionOn }from'./main.js';

async function fetchGalleryData() {
  let response = await fetch('data/fishnet_full.geojson');
  gallerydata = await response.json();
}

fetchGalleryData();

function makegalleryFeatureCollection() {

    galleries = {
      type: "FeatureCollection",
      features: [],
    };

    for(let i = 0; i < 6813; i++) {

            galleries.features.push( {
            "type": "Feature",
           "geometry":gallerydata.features[i].geometry['coordinates'],

            "properties": {
                "Travel_Time": gallerydata.features[i].properties['Travel_Time'],
                "Prediction_Group": gallerydata.features[i].properties['Prediction_Group'],
            },
          });
    }
    return galleries;
  }
  makegalleryFeatureCollection();



  //select the right gallery in the file by name
  function getFilteredgallerys(){
    //Filter through school name
    const text = galleryInput.value;
    let filteredgalleries;
for(let i = 0; i < 917; i++){
    if(galleries.features[i].properties['name']==text){
    filteredgalleries = galleries.features[i];
    }
}
return filteredgalleries;
}
function showinputtedgalleryinfo(){
    const filteredgalleries=getFilteredgallerys();

    if(filteredgalleries){
        const Name = filteredgalleries.properties['Travel_Time'];
        galleryEl.innerHTML = 'NAME:'+Name;
        updateselectedgalleryPositionOn(filteredgalleries);
    }
    else{
        galleryEl.innerHTML ='Opps, you inputted a wrong name!';
    }
}

galleryButton.addEventListener("click", ()=>{
    showinputtedgalleryinfo();
});



