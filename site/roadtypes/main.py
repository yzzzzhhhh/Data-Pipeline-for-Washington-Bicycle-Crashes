import io
import json
import requests
from google.cloud import storage
from functions_framework import http

@http
def extract_crashes(request):
    client = storage.Client()
    bucket = client.bucket('bikecrashes_raw_data')
    url = 'https://opendata.dc.gov/datasets/DCGIS::roads-2015/explore?location=38.905429%2C-77.046158%2C15.00'
    
    # Fetch GeoJSON data from the URL
    resp = requests.get(url)
    geojson_data = resp.json()

    # Convert the GeoJSON data to a string
    geojson_str = json.dumps(geojson_data)

    # Upload the GeoJSON data to the Cloud Storage bucket
    blob = bucket.blob('roads.geojson')
    blob.upload_from_string(geojson_str, content_type='application/geo+json')

    return 'OK'