const galleryEl = document.getElementById('info');

function showgalleryDataInForm(gallery) {

    const Name = gallery.properties['Travel_Time'];
    galleryEl.innerHTML = 'NAME:'+Name;
}
  export {
    showgalleryDataInForm,
  };

