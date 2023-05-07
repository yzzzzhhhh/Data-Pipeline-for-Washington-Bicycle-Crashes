from google.cloud import storage

def copy_results_to_bucket(request):
    results_file_path = "map.geojson"
    bucket_name = "web"
    destination_blob_name = "java/site/data/map.geojson"

    storage_client = storage.Client()

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(results_file_path)

    return "Results file copied to the bucket successfully"