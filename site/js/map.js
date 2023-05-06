
let selectedLayer = null;
let map;
function initMap() {
map = L.map('map', { maxZoom: 22, preferCanvas: true  }).setView([38.91991606412848, -77.02605959158252], 11);
const mapboxAccount = 'mapbox';
const mapboxStyle = 'light-v10';
const mapboxToken = 'pk.eyJ1IjoibGktamllLWZqIiwiYSI6ImNsYWU2dWtqbzByZHYzb3F5dndrZm9vbXoifQ.RhKDjT-7I5oWlzeDbfrI9g';
    L.tileLayer(`https://api.mapbox.com/styles/v1/${mapboxAccount}/${mapboxStyle}/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`, {
        maxZoom: 19,
        attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    }).addTo(map);
    map.galleryLayer = L.geoJSON(null, {
      style: {
        color: "#FF94B1",
        stroke: true,
        opacity: 0.5,
        weight: 2,
      },
      onEachFeature: (feature, layer) => {
        layer.on({
          click: (e) => {
            if (selectedLayer) {
              resetHighlight(selectedLayer);
            }
            highlightFeature(e);
            ongallerySelected(e);
            selectedLayer = e.target;
          },
        });
      },
    })
    .addTo(map);
    map.riskScoreLayer = L.geoJSON(null, {
      style: getPolygonStyle,
      onEachFeature: (feature, layer) => {
        layer.on({
          click: (e) => {
            if (selectedLayer) {
              resetHighlight(selectedLayer);
            }
            highlightFeature(e);
            ongallerySelected(e);
            selectedLayer = e.target;
          },
        });
      },
    });
    return map;
}

function highlightFeature(e) {
  let layer = e.target;
  layer.setStyle({
    color: "#0000CD",
    stroke: true,
    opacity: 0.5,
    weight: 2,
  });
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(layer) {
  layer.setStyle({
    color: "#FF94B1",
    stroke: true,
    opacity: 0.5,
    weight: 2,
  });
}

function ongallerySelected(e) {
  let layer = e.target;
  layer.setStyle({
    color: "#023047",
    stroke: true,
    opacity: 0.5,
    weight: 2,
  });
}

function getColorByRiskScore(score) {
  if (score === 'High') {
    return '#FF0000';
  } else if (score === 'Medium') {
    return '#FFA500';
  } else if (score === 'Low') {
    return '#008000';
  } else {
    return '#FF94B1';
  }
}

function getPolygonStyle(feature) {
  return {
    fillColor: getColorByRiskScore(feature.properties['Prediction_Group']),
    color: "#FF94B1",
    weight: 2,
    opacity: 0.5,
    fillOpacity: 0.5,
  };
}

export {
        initMap,
      };