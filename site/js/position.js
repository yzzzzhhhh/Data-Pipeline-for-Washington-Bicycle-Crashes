async function downloadgalleries(onSuccess, onFailure) {
    const resp = await fetch('data/fishnet_full.geojson');
    if (resp.status === 200) {
      const data = await resp.json();
      if (onSuccess) { onSuccess(data) }
    } else {
      alert('Oh no, I failed to download the data.');
      if (onFailure) { onFailure() }
    }
  }

  export {
    downloadgalleries,
  };