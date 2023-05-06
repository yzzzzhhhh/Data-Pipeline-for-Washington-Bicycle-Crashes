import io
import json
import requests
from google.cloud import storage
from functions_framework import http

@http
def extract_crashes(request):
    client = storage.Client()
    bucket = client.bucket('bikecrashes_raw_data')
    url = 'https://opendata.dc.gov/datasets/DCGIS::traffic-signal/explore?location=38.918489%2C-77.036255%2C13.72'
    
    # Fetch GeoJSON data from the URL
    resp = requests.get(url)
    geojson_data = resp.json()

    # Convert the GeoJSON data to a string
    geojson_str = json.dumps(geojson_data)

    # Upload the GeoJSON data to the Cloud Storage bucket
    blob = bucket.blob('traffic_signals.geojson')
    blob.upload_from_string(geojson_str, content_type='application/geo+json')

    return 'OK'